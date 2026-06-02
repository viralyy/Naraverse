fetch('data/index.json').then(r=>r.json()).then(items=>{
const grid=document.getElementById('grid');
function render(list){
grid.innerHTML=list.map(x=>`<a class="card" href="watch.html?id=${x.id}"><img src="${x.cover}"><h3>${x.title}</h3></a>`).join('');
}
render(items);
search.oninput=e=>render(items.filter(x=>x.title.toLowerCase().includes(e.target.value.toLowerCase())));
});
