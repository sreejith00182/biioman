const index=[
 ['About Us','about.html'],['Our Businesses','businesses.html'],['Our Markets','markets.html'],['Our Reach','reach.html'],['Our Capabilities','capabilities.html'],['Projects & Operations','projects.html'],['Why Choose Us','why-us.html'],['Brands & Partners','brands-partners.html'],['Featured Products','products.html'],['Impact & Responsibility','impact.html'],['Insights','insights.html'],['Careers','careers.html'],['Contact','contact.html'],
 ['Lorem Ipsum Dolor','business/business-1.html'],['Consectetur Adipiscing','business/business-2.html'],['Minim Veniam Quis','business/business-7.html'],['Tempor Incididunt','business/business-4.html'],['Sed Do Eiusmod','business/business-3.html'],['Ut Labore Dolore','business/business-5.html'],['Magna Aliqua Enim','business/business-6.html']
];
const pathDepth=location.pathname.split('/').length-1;const root=pathDepth>0?'../':'';
document.querySelectorAll('[data-root-link]').forEach(a=>{a.href=root+a.getAttribute('data-root-link')});
const searchInput=document.querySelector('#siteSearch'),results=document.querySelector('#searchResults');
if(searchInput){searchInput.addEventListener('input',()=>{const q=searchInput.value.trim().toLowerCase();if(!q){results.classList.remove('show');results.innerHTML='';return}const found=index.filter(x=>x[0].toLowerCase().includes(q)).slice(0,7);results.innerHTML=found.length?found.map(x=>`<a href="${root+x[1]}">${x[0]}</a>`).join(''):'<span style="display:block;padding:12px;color:#b7c7bc;font-size:12px">No matching page found.</span>';results.classList.add('show')});document.addEventListener('click',e=>{if(!e.target.closest('.search'))results.classList.remove('show')})}
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in')}),{threshold:.12});document.querySelectorAll('.reveal').forEach(e=>io.observe(e));
const back=document.querySelector('.backtop');window.addEventListener('scroll',()=>{if(back)back.classList.toggle('show',scrollY>500)});if(back)back.onclick=()=>scrollTo({top:0,behavior:'smooth'});
const year=document.querySelector('[data-year]');if(year)year.textContent=new Date().getFullYear();
