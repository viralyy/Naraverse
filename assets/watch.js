const id=new URLSearchParams(location.search).get('id');
fetch('data/movies/'+id+'.json').then(r=>r.json()).then(data=>{
document.getElementById('content').innerHTML=`
<h1>${data.title}</h1>
<video controls width="100%" src="${data.episodes[0].video}"></video>
<ul>${data.episodes.map(e=>`<li>${e.title}</li>`).join('')}</ul>`;
});