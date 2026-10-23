const index=[
 ['About Us','about.php'],['Our Businesses','businesses.php'],['Our Markets','markets.php'],['Our Reach','reach.php'],['Our Capabilities','capabilities.php'],['Projects & Operations','projects.php'],['Why Choose Us','why-us.php'],['Brands & Partners','brands-partners.php'],['Featured Products','products.php'],['Impact & Responsibility','impact.php'],['Insights','insights.php'],['Careers','careers.php'],['Contact','contact.php'],
 ['Lorem Ipsum Dolor','business/business-1.php'],['Consectetur Adipiscing','business/business-2.php'],['Minim Veniam Quis','business/business-7.php'],['Tempor Incididunt','business/business-4.php'],['Sed Do Eiusmod','business/business-3.php'],['Ut Labore Dolore','business/business-5.php'],['Magna Aliqua Enim','business/business-6.php']
];
const pathDepth=location.pathname.split('/').length-1;const root=pathDepth>0?'../':'';
document.querySelectorAll('[data-root-link]').forEach(a=>{a.href=root+a.getAttribute('data-root-link')});
const searchInput=document.querySelector('#siteSearch'),results=document.querySelector('#searchResults');
if(searchInput){searchInput.addEventListener('input',()=>{const q=searchInput.value.trim().toLowerCase();if(!q){results.classList.remove('show');results.innerHTML='';return}const found=index.filter(x=>x[0].toLowerCase().includes(q)).slice(0,7);results.innerHTML=found.length?found.map(x=>`<a href="${root+x[1]}">${x[0]}</a>`).join(''):'<span style="display:block;padding:12px;color:#b7c7bc;font-size:12px">No matching page found.</span>';results.classList.add('show')});document.addEventListener('click',e=>{if(!e.target.closest('.search'))results.classList.remove('show')})}
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in')}),{threshold:.12});document.querySelectorAll('.reveal').forEach(e=>io.observe(e));
const back=document.querySelector('.backtop');window.addEventListener('scroll',()=>{if(back)back.classList.toggle('show',scrollY>500)});if(back)back.onclick=()=>scrollTo({top:0,behavior:'smooth'});
const year=document.querySelector('[data-year]');if(year)year.textContent=new Date().getFullYear();
