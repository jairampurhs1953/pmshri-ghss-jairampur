const defaults={
notices:[
{date:"03 Sep 2026",title:"Welcome to the new school website",text:"School notices and announcements will be published here.",tag:"General"},
{date:"05 Sep 2026",title:"Teachers' Day Celebration",text:"Programme details will be shared by the school office.",tag:"Event"},
{date:"12 Sep 2026",title:"Academic planning update",text:"Students are advised to check the school office for the latest circulars.",tag:"Academic"}],
events:[
{day:"05",month:"SEP",title:"Teachers' Day Celebration",text:"Celebrating our teachers and their contribution to student life."},
{day:"15",month:"SEP",title:"Academic & Career Guidance",text:"Guidance activities for senior secondary students."},
{day:"02",month:"OCT",title:"Gandhi Jayanti",text:"School observance and activities celebrating peace, service and civic responsibility."}],
gallery:[
["assets/photos/campus.svg","School Campus"],["assets/photos/students.svg","Student Life"],["assets/photos/classroom.svg","Learning"],["assets/photos/teachers.svg","Our Teachers"],["assets/photos/sports.svg","Sports & Activities"],["assets/photos/culture.svg","Cultural Activities"]],
downloads:[
{title:"School Prospectus",meta:"PDF · Replace with official file",file:"#"},
{title:"Admission Form",meta:"PDF/DOCX · Replace with official file",file:"#"},
{title:"Academic Calendar",meta:"PDF · Replace with current file",file:"#"},
{title:"School Notices Archive",meta:"PDF · Replace with official archive",file:"#"}]
};
function getData(){try{const x=JSON.parse(localStorage.getItem("jairampur_site_data"));return x?{...defaults,...x}:defaults}catch{return defaults}}
const d=getData();
document.addEventListener("DOMContentLoaded",()=>{
 document.querySelector(".hamb").onclick=()=>document.querySelector(".navin nav").classList.toggle("open");
 const noticeList=document.getElementById("noticeList");noticeList.innerHTML=d.notices.map(n=>`<article class="notice"><div class="date">${n.date}</div><div><h3>${n.title}</h3><p>${n.text}</p></div><span class="tag">${n.tag}</span></article>`).join("");
 document.getElementById("headline").textContent=d.notices[0]?.title||"School updates";
 document.getElementById("eventsList").innerHTML=d.events.map(e=>`<article class="event"><div class="event-top"><b>${e.day}</b> ${e.month}</div><div class="event-body"><h3>${e.title}</h3><p>${e.text}</p></div></article>`).join("");
 document.getElementById("gallery").innerHTML=d.gallery.map((g,i)=>`<div class="gallery-item" data-src="${g[0]}" data-cap="${g[1]}"><img src="${g[0]}" alt="${g[1]}"><span>${g[1]}</span></div>`).join("");
 document.querySelectorAll(".gallery-item").forEach(el=>el.onclick=()=>{document.getElementById("lightboxImg").src=el.dataset.src;document.getElementById("lightboxCaption").textContent=el.dataset.cap;document.getElementById("lightbox").classList.add("show")});
 document.getElementById("downloadsList").innerHTML=d.downloads.map(x=>`<a class="download" href="${x.file}"><div><strong>${x.title}</strong><small>${x.meta}</small></div><b>↓</b></a>`).join("");
 const lb=document.getElementById("lightbox");document.getElementById("closeLightbox").onclick=()=>lb.classList.remove("show");lb.onclick=e=>{if(e.target===lb)lb.classList.remove("show")};
 const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add("visible")),{threshold:.12});document.querySelectorAll(".reveal").forEach(x=>io.observe(x));
 window.addEventListener("scroll",()=>{const h=document.documentElement.scrollHeight-innerHeight;document.getElementById("progress").style.width=(scrollY/h*100)+"%"});
});