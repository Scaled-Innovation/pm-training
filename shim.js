/* Supabase-Adapter: stellt dem Trainingsskript dieselbe kleine API bereit (claude.use('db'|'user'|'downloads')),
   die es bisher von der Plattform bekommen hat. Tabellen: sessions(id,state), answers(pid,nick,a). */
(function(){
  const cfg=window.PM_CONFIG||{};
  const ready=!!(cfg.SUPABASE_URL&&cfg.SUPABASE_ANON_KEY&&!/DEIN-/.test(cfg.SUPABASE_URL+cfg.SUPABASE_ANON_KEY)&&window.supabase);
  const sb=ready?window.supabase.createClient(cfg.SUPABASE_URL,cfg.SUPABASE_ANON_KEY):null;
  let pid='';try{pid=localStorage.getItem('pm.pid')||'';}catch(e){}
  if(!pid){pid=Math.random().toString(36).slice(2,10);try{localStorage.setItem('pm.pid',pid);}catch(e){}}
  let authed=false,userEmail='';
  const listeners={session:new Set(),answers:new Set()};
  let cache={session:null,answers:{}};
  let lastSessionJson='',lastAnswersJson='';

  async function fetchSession(){if(!sb)return;const {data}=await sb.from('sessions').select('state').eq('id','state').maybeSingle();const st=data?data.state:null;const j=JSON.stringify(st);if(j!==lastSessionJson){lastSessionJson=j;cache.session=st;listeners.session.forEach(f=>f(snapDoc(st)));}}
  async function fetchAnswers(){if(!sb)return;const {data}=await sb.from('answers').select('pid,nick,a');const m={};(data||[]).forEach(r=>m[r.pid]={a:r.a||{},nick:r.nick||''});const j=JSON.stringify(m);if(j!==lastAnswersJson){lastAnswersJson=j;cache.answers=m;listeners.answers.forEach(f=>f(snapCol(m)));}}
  const snapDoc=st=>({exists:!!st,data:()=>st,metadata:{hasPendingWrites:false,fromCache:false}});
  const snapCol=m=>({docs:Object.keys(m).map(k=>({id:k,data:()=>m[k]})),size:Object.keys(m).length,empty:!Object.keys(m).length});

  function startLive(){if(!sb)return;
    sb.channel('pm-live').on('postgres_changes',{event:'*',schema:'public',table:'sessions'},()=>fetchSession())
      .on('postgres_changes',{event:'*',schema:'public',table:'answers'},()=>fetchAnswers()).subscribe();
    setInterval(()=>{fetchSession();fetchAnswers();},2500); /* Sicherheitsnetz, falls Realtime nicht aktiviert ist */
  }

  const db={
    doc(path){const [col,id]=path.split('/');
      if(col==='session')return {id,path,
        get:async()=>{await fetchSession();return snapDoc(cache.session);},
        set:async(d)=>{const {error}=await sb.from('sessions').upsert({id:'state',state:d,updated_at:new Date().toISOString()});if(error)throw {code:'invalid_argument',message:error.message};lastSessionJson='';await fetchSession();},
        delete:async()=>{},
        onSnapshot:(f)=>{listeners.session.add(f);if(cache.session)f(snapDoc(cache.session));else fetchSession();return()=>listeners.session.delete(f);}};
      return {id,path,
        get:async()=>{await fetchAnswers();const d=cache.answers[id];return {exists:!!d,data:()=>d,metadata:{}};},
        set:async(d)=>{const {error}=await sb.from('answers').upsert({pid:id,nick:d.nick||'',a:d.a||{},updated_at:new Date().toISOString()});if(error)throw {code:'invalid_argument',message:error.message};lastAnswersJson='';fetchAnswers();},
        delete:async()=>{if(authed){const {error}=await sb.from('answers').delete().eq('pid',id);if(error)throw {code:'invalid_argument',message:error.message};}
          else{await sb.from('answers').upsert({pid:id,a:{},updated_at:new Date().toISOString()});}lastAnswersJson='';await fetchAnswers();},
        onSnapshot:(f)=>{f({exists:false,data:()=>undefined,metadata:{}});return()=>{};}};},
    collection(path){return {path,
      get:async()=>{await fetchAnswers();return snapCol(cache.answers);},
      onSnapshot:(f)=>{listeners.answers.add(f);f(snapCol(cache.answers));fetchAnswers();return()=>listeners.answers.delete(f);},
      doc:(id)=>db.doc(path+'/'+id)};}
  };
  const user={isOwner:async()=>authed,canEdit:async()=>authed,can:async()=>true,id:async()=>pid,me:async()=>({id:pid,name:'',email:userEmail}),profiles:async(ids)=>{const o={};(Array.isArray(ids)?ids:[ids]).forEach(i=>o[i]={id:i,name:'',avatarUrl:'',color:'',email:null,isMe:i===pid,guest:false});return o;}};
  const downloads={save:async({filename,data})=>{const blob=new Blob([data],{type:'text/plain;charset=utf-8'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=filename;document.body.appendChild(a);a.click();setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove();},1000);}};

  async function init(){
    if(!sb)return;
    const {data}=await sb.auth.getSession();authed=!!(data&&data.session);userEmail=authed?data.session.user.email:'';
    await fetchSession();await fetchAnswers();startLive();
  }
  const initP=init();
  window.claude={
    use:async(name)=>{await initP;if(!sb)return null;return name==='db'?db:name==='user'?user:name==='downloads'?downloads:null;},
    ready:ready,
    login:async(email,pw)=>{const {error}=await sb.auth.signInWithPassword({email,password:pw});if(error)throw error;location.hash='';location.reload();},
    logout:async()=>{await sb.auth.signOut();location.reload();},
    isTrainer:()=>authed
  };
})();
