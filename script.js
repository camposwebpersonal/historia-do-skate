const eras=[
 {number:'50',kicker:'1950–1959 • O PRIMEIRO IMPULSO',title:'Surfar o asfalto',text:'Em cidades costeiras da Califórnia, rodas de patins encontram tábuas de madeira. Nasce uma maneira de continuar surfando quando o oceano não colabora.',tags:['Sidewalk surfing','Feito à mão','Califórnia']},
 {number:'60',kicker:'1960–1969 • A PRIMEIRA ONDA',title:'Da garagem para as lojas',text:'Os primeiros modelos produzidos em massa chegam às lojas. Equipes, demonstrações e campeonatos transformam uma brincadeira costeira em fenômeno juvenil.',tags:['Produção em massa','Primeiras equipes','Competições']},
 {number:'70',kicker:'1970–1979 • A REVOLUÇÃO',title:'Uretano, piscinas e voo',text:'Rodas de uretano oferecem aderência e suavidade. Secas na Califórnia deixam piscinas vazias, as paredes viram ondas e o skate descobre transições, velocidade e movimentos aéreos.',tags:['Rodas de uretano','Pool riding','Vertical']},
 {number:'80',kicker:'1980–1989 • FAÇA VOCÊ MESMO',title:'A rua vira laboratório',text:'Rampas caseiras, revistas, vídeos e uma cena independente mantêm a cultura viva. O street cresce e manobras técnicas redefinem o que pode ser feito com shape e concreto.',tags:['Street','Vídeo','Cultura DIY']},
 {number:'90',kicker:'1990–1999 • UMA LINGUAGEM GLOBAL',title:'Precisão e atitude',text:'Shapes menores e rodas mais técnicas acompanham uma nova era do street. Competições televisionadas, música e moda levam o skate a uma audiência mundial sem apagar suas raízes.',tags:['Globalização','Street técnico','X Games']},
 {number:'00',kicker:'2000–2019 • A ERA DIGITAL',title:'A sessão fica mundial',text:'Câmeras digitais, fóruns e redes sociais aceleram a circulação de manobras. Novas pistas públicas aparecem, a cena feminina ganha espaço e comunidades se conectam além das fronteiras.',tags:['Vídeo online','Novas cenas','Inclusão']},
 {number:'20',kicker:'2020+ • NOVO PALCO',title:'O mundo assiste',text:'Street e Park estreiam em Tóquio 2020, realizado em 2021. Em Paris 2024, o skate confirma sua força olímpica sem deixar de ser cultura, expressão e território de encontro.',tags:['Jogos Olímpicos','Street + Park','Nova geração']}
];
let era=0;
const byId=id=>document.getElementById(id);
function renderEra(index){
 era=(index+eras.length)%eras.length;const data=eras[era];
 byId('era-number').textContent=data.number;byId('era-kicker').textContent=data.kicker;byId('era-title').textContent=data.title;byId('era-text').textContent=data.text;
 byId('era-tags').innerHTML=data.tags.map(tag=>`<span>${tag}</span>`).join('');byId('era-count').textContent=`${String(era+1).padStart(2,'0')} / 07`;byId('era-progress').style.width=`${(era+1)/eras.length*100}%`;
 document.querySelectorAll('.era-tabs button').forEach((button,i)=>button.setAttribute('aria-selected',i===era));
}
document.querySelectorAll('.era-tabs button').forEach(button=>button.addEventListener('click',()=>renderEra(Number(button.dataset.era))));
byId('prev-era').addEventListener('click',()=>renderEra(era-1));byId('next-era').addEventListener('click',()=>renderEra(era+1));
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(element=>observer.observe(element));
const topbar=document.querySelector('.topbar'),menu=document.querySelector('.menu-button');menu.addEventListener('click',()=>{const open=topbar.classList.toggle('open');menu.setAttribute('aria-expanded',open);menu.textContent=open?'×':'☰'});
document.querySelectorAll('.topbar nav a').forEach(link=>link.addEventListener('click',()=>{topbar.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.textContent='☰'}));
