const defaultDoctors=[
{id:1,name:"Dr. Ananya Rao",specialization:"Cardiology",experience:"10+ years",qualification:"MBBS, MD",rating:"4.8",avatar:"👩‍⚕️",languages:"English, Telugu",mode:"In-person & Video",fee:700,availability:"Mon, Wed, Fri"},
{id:2,name:"Dr. Rahul Mehta",specialization:"Dermatology",experience:"8+ years",qualification:"MBBS, MD",rating:"4.7",avatar:"👨‍⚕️",languages:"English, Hindi",mode:"In-person & Video",fee:600,availability:"Tue, Thu, Sat"},
{id:3,name:"Dr. Priya Nair",specialization:"Pediatrics",experience:"7+ years",qualification:"MBBS, DCH",rating:"4.9",avatar:"👩‍⚕️",languages:"English, Telugu, Malayalam",mode:"In-person",fee:500,availability:"Mon–Sat"},
{id:4,name:"Dr. Vikram Shah",specialization:"General Medicine",experience:"12+ years",qualification:"MBBS, MD",rating:"4.8",avatar:"👨‍⚕️",languages:"English, Hindi, Telugu",mode:"In-person & Video",fee:450,availability:"Mon–Sat"},
{id:5,name:"Dr. Meera Iyer",specialization:"Cardiology",experience:"9+ years",qualification:"MBBS, DM",rating:"4.9",avatar:"👩‍⚕️",languages:"English, Tamil",mode:"In-person",fee:800,availability:"Mon, Thu, Sat"},
{id:6,name:"Dr. Arjun Kumar",specialization:"Orthopedics",experience:"6+ years",qualification:"MBBS, MS Orthopedics",rating:"4.6",avatar:"👨‍⚕️",languages:"English, Telugu",mode:"In-person",fee:650,availability:"Tue–Sat"},
{id:7,name:"Dr. Sneha Reddy",specialization:"Gynecology",experience:"11+ years",qualification:"MBBS, MS (OBG)",rating:"4.9",avatar:"👩‍⚕️",languages:"English, Telugu, Hindi",mode:"In-person & Video",fee:650,availability:"Mon–Fri"},
{id:8,name:"Dr. Karthik Varma",specialization:"Neurology",experience:"9+ years",qualification:"MBBS, DM Neurology",rating:"4.8",avatar:"👨‍⚕️",languages:"English, Telugu",mode:"In-person",fee:900,availability:"Wed, Fri, Sat"},
{id:9,name:"Dr. Nisha Joseph",specialization:"Ophthalmology",experience:"8+ years",qualification:"MBBS, MS Ophthalmology",rating:"4.7",avatar:"👩‍⚕️",languages:"English, Malayalam, Telugu",mode:"In-person",fee:550,availability:"Mon–Sat"},
{id:10,name:"Dr. Aditya Rao",specialization:"Dental / Oral Care",experience:"7+ years",qualification:"BDS, MDS",rating:"4.8",avatar:"🧑‍⚕️",languages:"English, Telugu",mode:"In-person",fee:400,availability:"Tue–Sat"},
{id:11,name:"Dr. Farah Khan",specialization:"ENT",experience:"10+ years",qualification:"MBBS, MS ENT",rating:"4.8",avatar:"👩‍⚕️",languages:"English, Hindi, Urdu",mode:"In-person",fee:600,availability:"Mon, Wed, Fri"},
{id:12,name:"Dr. Rohan Das",specialization:"Psychiatry",experience:"8+ years",qualification:"MBBS, MD Psychiatry",rating:"4.7",avatar:"👨‍⚕️",languages:"English, Hindi, Telugu",mode:"In-person & Video",fee:750,availability:"Mon–Fri"},
{id:13,name:"Dr. Kavya Menon",specialization:"Physiotherapy",experience:"6+ years",qualification:"BPT, MPT",rating:"4.8",avatar:"👩‍⚕️",languages:"English, Telugu, Malayalam",mode:"In-person",fee:350,availability:"Mon–Sat"},
{id:14,name:"Dr. Sandeep Rao",specialization:"Endocrinology",experience:"12+ years",qualification:"MBBS, DM Endocrinology",rating:"4.9",avatar:"👨‍⚕️",languages:"English, Telugu",mode:"In-person & Video",fee:850,availability:"Tue, Thu, Sat"},
{id:15,name:"Dr. Isha Patel",specialization:"Gastroenterology",experience:"9+ years",qualification:"MBBS, DM Gastroenterology",rating:"4.8",avatar:"👩‍⚕️",languages:"English, Hindi",mode:"In-person",fee:800,availability:"Mon, Wed, Fri"},
{id:16,name:"Dr. Naveen Kumar",specialization:"Pulmonology",experience:"7+ years",qualification:"MBBS, MD Pulmonary Medicine",rating:"4.7",avatar:"👨‍⚕️",languages:"English, Telugu",mode:"In-person & Video",fee:650,availability:"Mon–Fri"},
{id:17,name:"Dr. Leela Krishna",specialization:"Urology",experience:"10+ years",qualification:"MBBS, MS, MCh Urology",rating:"4.8",avatar:"👩‍⚕️",languages:"English, Telugu",mode:"In-person",fee:850,availability:"Tue, Thu, Sat"},
{id:18,name:"Dr. Omar Siddiqui",specialization:"Nephrology",experience:"11+ years",qualification:"MBBS, DM Nephrology",rating:"4.8",avatar:"👨‍⚕️",languages:"English, Hindi, Urdu",mode:"In-person",fee:800,availability:"Mon, Wed, Fri"}
];
const specialtyOptions=["Cardiology","Dermatology","Pediatrics","General Medicine","Orthopedics","Neurology","Ophthalmology","Dental / Oral Care","ENT","Gynecology","Psychiatry","Physiotherapy","Endocrinology","Gastroenterology","Pulmonology","Urology","Oncology","Nephrology","Rheumatology","Nutrition & Dietetics","Radiology","Hematology","Allergy & Immunology","Infectious Disease","Sleep Medicine"];
function getDoctors(){
 let doctors=JSON.parse(localStorage.getItem("cf_doctors")||"null");
 if(!doctors){doctors=defaultDoctors;localStorage.setItem("cf_doctors",JSON.stringify(doctors));localStorage.setItem("cf_doctors_expanded_v2","yes");return doctors}
 if(localStorage.getItem("cf_doctors_expanded_v2")!=="yes"){
   const existingIds=new Set(doctors.map(d=>Number(d.id)));
   defaultDoctors.forEach(d=>{if(!existingIds.has(d.id))doctors.push(d)});
   localStorage.setItem("cf_doctors",JSON.stringify(doctors));localStorage.setItem("cf_doctors_expanded_v2","yes");
 }
 return doctors;
}
function populateSpecialtyFilter(){
 const select=document.getElementById("specialtyFilter");if(!select)return;
 const current=select.value;const specialties=[...new Set(getDoctors().map(d=>d.specialization).filter(Boolean))].sort();
 select.innerHTML='<option value="">All specializations</option>'+specialties.map(x=>`<option value="${x.replace(/&/g,"&amp;").replace(/"/g,"&quot;")}">${x}</option>`).join("");
 if(specialties.includes(current))select.value=current;
}
function populateSpecialtySuggestions(){const list=document.getElementById("specializationSuggestions");if(list)list.innerHTML=specialtyOptions.map(x=>`<option value="${x}"></option>`).join("")}

function getUsers(){return JSON.parse(localStorage.getItem("cf_users")||"[]")}
function getAppointments(){return JSON.parse(localStorage.getItem("cf_appointments")||"[]")}
function currentUser(){return JSON.parse(localStorage.getItem("cf_currentUser")||"null")}
function saveAppointments(a){localStorage.setItem("cf_appointments",JSON.stringify(a))}
function logout(){localStorage.removeItem("cf_currentUser");location.href="index.html"}
function demoSpecialty(x){const map={"Skin-related concern":"Dermatology","Dental concern":"Dental / Oral Care","Eye-related concern":"Ophthalmology","General consultation":"General Medicine"};const el=document.getElementById("finderResult");if(el)el.innerHTML="Suggested department: <b>"+map[x]+"</b> <small>· navigation aid, not a diagnosis</small>"}
function renderDoctors(targetId="doctorGrid"){
 const target=document.getElementById(targetId);if(!target)return;
 if(targetId==="doctorGrid")populateSpecialtyFilter();
 const search=(document.getElementById("doctorSearch")?.value||"").toLowerCase(), filter=document.getElementById("specialtyFilter")?.value||"";
 const docs=getDoctors().filter(d=>(!filter||d.specialization===filter)&&(!search||d.name.toLowerCase().includes(search)||d.specialization.toLowerCase().includes(search)||String(d.languages||"").toLowerCase().includes(search)));
 target.innerHTML=docs.map(d=>`<article class="doctor-card"><div class="doctor-head"><div class="doctor-small-avatar">${d.avatar||"👨‍⚕️"}</div><div><h3>${d.name}</h3><div class="specialty">${d.specialization}</div></div></div><div class="doctor-meta"><span>★ ${d.rating||"4.8"} rating</span><span>${d.experience||"Experience not listed"}</span></div><p class="doctor-detail">${d.qualification||"Medical qualification"}</p><div class="doctor-tags"><span>◷ ${d.availability||"Schedule on request"}</span><span>◉ ${d.mode||"In-person"}</span><span>₹${Number(d.fee||500)} / visit</span></div><p class="doctor-languages">Languages: ${d.languages||"English"}</p><a class="btn btn-primary" href="book.html?doctor=${encodeURIComponent(d.id)}">Book Appointment</a></article>`).join("")||`<div class="empty">No doctors found. Try another search.</div>`;
}

function initSignup(){
 const f=document.getElementById("signupForm");if(!f)return;
 f.onsubmit=e=>{e.preventDefault();const name=document.getElementById("name").value.trim(),email=document.getElementById("email").value.trim().toLowerCase(),phone=document.getElementById("phone").value.trim(),p=document.getElementById("password").value,c=document.getElementById("confirm").value,msg=document.getElementById("formMsg");if(p!==c){msg.style.color="#c94b52";msg.textContent="Passwords do not match.";return}let users=getUsers();if(users.some(u=>u.email===email)){msg.style.color="#c94b52";msg.textContent="An account with this email already exists.";return}users.push({id:Date.now(),name,email,phone,password:p});localStorage.setItem("cf_users",JSON.stringify(users));msg.style.color="#16805d";msg.textContent="Account created successfully. Redirecting to login...";setTimeout(()=>location.href="login.html",700)}
}
function initLogin(){
 const f=document.getElementById("loginForm");if(!f)return;
 f.onsubmit=e=>{e.preventDefault();const email=document.getElementById("loginEmail").value.trim().toLowerCase(),pass=document.getElementById("loginPassword").value,msg=document.getElementById("loginMsg");if(email==="admin@careflow.com"&&pass==="admin123"){localStorage.setItem("cf_currentUser",JSON.stringify({role:"admin",name:"CareFlow Admin",email}));location.href="admin.html";return}const u=getUsers().find(x=>x.email===email&&x.password===pass);if(!u){msg.style.color="#c94b52";msg.textContent="Invalid email or password.";return}localStorage.setItem("cf_currentUser",JSON.stringify({...u,role:"user"}));location.href="user.html"}
}
function requireUser(){const u=currentUser();if(!u||u.role!=="user"){location.href="login.html";return null}return u}
function initUser(){
 const u=currentUser();if(!u)return;
 const w=document.getElementById("welcomeUser");if(w)w.textContent="Good morning, "+u.name.split(" ")[0]+" 👋";
 const a=getAppointments().filter(x=>x.userEmail===u.email);const up=a.filter(x=>x.status==="Confirmed"||x.status==="Pending"),done=a.filter(x=>x.status==="Completed");
 const t=document.getElementById("totalAppts"),uc=document.getElementById("upcomingCount"),cc=document.getElementById("completedCount"),dc=document.getElementById("availableDoctorCount");if(t)t.textContent=a.length;if(uc)uc.textContent=up.length;if(cc)cc.textContent=done.length;if(dc)dc.textContent=getDoctors().length;
 const next=document.getElementById("nextAppointment");if(next){const x=up[0];next.innerHTML=x?`<h3>${x.doctorName}</h3><p>${x.specialization}</p><div class="appt-details"><span>📅 ${x.date}</span><span>🕙 ${x.time}</span><span>📍 CareFlow Clinic</span></div>`:`<div class="empty">No upcoming appointments.<br><a style="color:var(--teal);font-weight:800" href="book.html">Book your first appointment →</a></div>`}
 const r=document.getElementById("reminderText");if(r&&up[0])r.textContent="Your appointment with "+up[0].doctorName+" is scheduled for "+up[0].date+" at "+up[0].time+".";
}
function initBooking(){
 const f=document.getElementById("bookingForm");if(!f)return;
 const select=document.getElementById("bookDoctor"),docs=getDoctors(),params=new URLSearchParams(location.search),chosen=params.get("doctor");
 select.innerHTML=docs.map(d=>`<option value="${d.id}" ${String(d.id)===chosen?"selected":""}>${d.name} — ${d.specialization}</option>`).join("");
 const date=document.getElementById("bookDate"),time=document.getElementById("bookTime"),mode=document.getElementById("visitMode"),summary=document.getElementById("visitSnapshot");
 const today=new Date();date.min=today.toISOString().split("T")[0];
 function updateSnapshot(){const d=docs.find(x=>String(x.id)===select.value)||docs[0];if(!d||!summary)return;if(mode){const allowed=(d.mode||"In-person").includes("&")?["In-person","Video consultation"]:(d.mode||"In-person").toLowerCase().includes("video")?["Video consultation"]:["In-person"];const current=mode.value;mode.innerHTML=allowed.map(x=>`<option>${x}</option>`).join("");mode.value=allowed.includes(current)?current:allowed[0]}summary.innerHTML=`<div class="snapshot-head"><span>✦ VISIT SNAPSHOT</span><b>Live preview</b></div><h3>${d.name}</h3><p>${d.specialization} · ${d.experience||"Experience on request"}</p><div class="snapshot-grid"><span>📅 <b>${date.value||"Choose a date"}</b></span><span>◷ <b>${time.value||"Choose a time"}</b></span><span>◉ <b>${mode?.value||"In-person"}</b></span><span>₹ <b>${Number(d.fee||500)} estimated fee</b></span></div><small>Demo estimate only. Confirm actual fees and availability with the clinic.</small>`}
 [select,date,time,mode].filter(Boolean).forEach(el=>el.addEventListener("change",updateSnapshot));updateSnapshot();
 f.onsubmit=e=>{e.preventDefault();const u=requireUser();if(!u)return;const d=docs.find(x=>String(x.id)===select.value);if(!d){alert("Please select a doctor.");return}if(!date.value||date.value<today.toISOString().split("T")[0]){alert("Please choose today or a future date.");return}const a=getAppointments();const collision=a.find(x=>String(x.doctorId)===String(d.id)&&x.date===date.value&&x.time===time.value&&x.status!=="Cancelled");if(collision){alert("That doctor already has an appointment at this time. Please choose another slot.");return}const slots=["09:30 AM","10:30 AM","11:30 AM","02:30 PM","04:00 PM"];const slotIndex=slots.indexOf(time.value);const earlier=a.filter(x=>String(x.doctorId)===String(d.id)&&x.date===date.value&&x.status!=="Cancelled"&&slots.indexOf(x.time)>=0&&slots.indexOf(x.time)<slotIndex).length;const estimatedWait=earlier*10;const item={id:Date.now(),userEmail:u.email,userName:u.name,doctorId:d.id,doctorName:d.name,specialization:d.specialization,date:date.value,time:time.value,visitMode:mode?.value||"In-person",estimatedFee:Number(d.fee||500),reason:document.getElementById("reason").value,status:"Confirmed",estimatedWait,createdAt:new Date().toISOString()};a.push(item);saveAppointments(a);const m=document.getElementById("bookingMsg");m.style.color="#16805d";m.innerHTML="✓ Appointment saved. Estimated clinic wait: about "+estimatedWait+" minutes. <a href='appointments.html'>View My Appointments →</a>";updateSnapshot();}
}

function filterAppointments(type,btn){document.querySelectorAll(".tab").forEach(x=>x.classList.remove("active"));btn.classList.add("active");renderAppointments(type)}
function renderAppointments(type="all"){
 const target=document.getElementById("appointmentList");if(!target)return;const u=currentUser();if(!u)return;let a=getAppointments().filter(x=>x.userEmail===u.email);if(type==="upcoming")a=a.filter(x=>x.status==="Confirmed"||x.status==="Pending");if(type==="completed")a=a.filter(x=>x.status==="Completed");if(type==="cancelled")a=a.filter(x=>x.status==="Cancelled");if(!a.length){target.innerHTML='<div class="empty">No appointments in this category.<br><a href="book.html" style="color:var(--teal);font-weight:800">Book an appointment →</a></div>';return}target.innerHTML=a.map(x=>`<div class="appointment-item"><div class="appt-icon">🩺</div><div><h3>${x.doctorName}</h3><p>${x.specialization} · ${x.date} · ${x.time}</p><p>${x.visitMode||"In-person"} · ${x.estimatedFee?"Estimated ₹"+x.estimatedFee:"Fee to confirm"} · ${x.status}</p></div><div class="appointment-actions">${(x.status==="Confirmed"||x.status==="Pending")?`<button class="btn-small" onclick="rescheduleAppointment(${x.id})">Reschedule</button><button class="btn-small btn-danger" onclick="cancelAppointment(${x.id})">Cancel</button>`:""}</div></div>`).join("")
}
function cancelAppointment(id){let a=getAppointments(),x=a.find(q=>q.id===id);if(!x)return;if(confirm("Cancel this appointment?")){x.status="Cancelled";saveAppointments(a);renderAppointments();}}
function rescheduleAppointment(id){
 const a=getAppointments(),x=a.find(q=>q.id===id);if(!x)return;
 const nd=prompt("Enter new date (YYYY-MM-DD):",x.date);if(!nd)return;
 if(!/^\d{4}-\d{2}-\d{2}$/.test(nd)||Number.isNaN(Date.parse(nd))||nd<new Date().toISOString().slice(0,10)){alert("Please enter a valid future date in YYYY-MM-DD format.");return}
 const nt=prompt("Enter new time (for example 10:30 AM):",x.time);if(!nt)return;
 x.date=nd;x.time=nt;x.status="Confirmed";saveAppointments(a);renderAppointments();alert("Appointment rescheduled successfully.");
}

function carePassportKey(){const u=currentUser();return "cf_carePassport_"+(u?.email||"guest").toLowerCase()}
function initCarePassport(){
 const root=document.getElementById("passportChecklist");if(!root)return;
 const key=carePassportKey();let saved=[];try{saved=JSON.parse(localStorage.getItem(key)||"[]")}catch(e){saved=[]}
 root.querySelectorAll('input[type="checkbox"]').forEach(input=>{input.checked=saved.includes(input.value);input.addEventListener("change",saveCarePassport)});
 updateCarePassportProgress();
}
function saveCarePassport(){
 const root=document.getElementById("passportChecklist");if(!root)return;
 const checked=[...root.querySelectorAll('input[type="checkbox"]:checked')].map(x=>x.value);
 localStorage.setItem(carePassportKey(),JSON.stringify(checked));
 root.querySelectorAll(".passport-item").forEach(item=>item.classList.toggle("is-ready",item.querySelector("input").checked));
 updateCarePassportProgress();
}
function updateCarePassportProgress(){
 const root=document.getElementById("passportChecklist");if(!root)return;
 const total=root.querySelectorAll('input[type="checkbox"]').length,done=root.querySelectorAll('input[type="checkbox"]:checked').length,pct=total?Math.round(done/total*100):0;
 const t=document.getElementById("passportProgressText"),p=document.getElementById("passportProgressPercent"),bar=document.getElementById("passportProgressBar");
 if(t)t.textContent=done===total?"You're visit-ready!":""+done+" of "+total+" ready";if(p)p.textContent=pct+"%";if(bar)bar.style.width=pct+"%";
}
function resetCarePassport(){if(!confirm("Reset your Care Passport checklist?"))return;localStorage.removeItem(carePassportKey());const root=document.getElementById("passportChecklist");if(root)root.querySelectorAll('input[type="checkbox"]').forEach(x=>x.checked=false);updateCarePassportProgress();root?.querySelectorAll(".passport-item").forEach(item=>item.classList.remove("is-ready"));}

function initAdmin(){
 if(!currentUser()||currentUser().role!=="admin"){location.href="login.html";return}
 const docs=getDoctors(),users=getUsers(),apps=getAppointments();const stats=document.getElementById("adminStats");if(stats)stats.innerHTML=`<div class="admin-stat"><b>${docs.length}</b><span>Total Doctors</span></div><div class="admin-stat"><b>${users.length}</b><span>Registered Patients</span></div><div class="admin-stat"><b>${apps.length}</b><span>Total Appointments</span></div><div class="admin-stat"><b>${apps.filter(a=>a.status==="Pending").length}</b><span>Pending</span></div>`;
 const dt=document.getElementById("adminDoctorTable");if(dt)dt.innerHTML=`<table class="table"><thead><tr><th>Doctor</th><th>Specialization</th><th>Experience</th><th>Visit type</th><th>Fee</th><th>Actions</th></tr></thead><tbody>${docs.map(d=>`<tr><td>${d.name}</td><td>${d.specialization}</td><td>${d.experience}</td><td>${d.mode||"In-person"}</td><td>₹${Number(d.fee||500)}</td><td><button onclick="editDoctor(${d.id})">Edit</button> <button onclick="deleteDoctor(${d.id})">Delete</button></td></tr>`).join("")}</tbody></table>`;
 const pt=document.getElementById("adminPatientTable");if(pt)pt.innerHTML=users.length?`<table class="table"><thead><tr><th>Name</th><th>Email</th><th>Phone</th></tr></thead><tbody>${users.map(u=>`<tr><td>${u.name}</td><td>${u.email}</td><td>${u.phone}</td></tr>`).join("")}</tbody></table>`:`<div class="empty">No registered patients yet.</div>`;
 const at=document.getElementById("adminAppointmentTable");if(at)at.innerHTML=apps.length?`<table class="table"><thead><tr><th>Patient</th><th>Doctor</th><th>Date</th><th>Time</th><th>Status</th></tr></thead><tbody>${apps.map(x=>`<tr><td>${x.userName}</td><td>${x.doctorName}</td><td>${x.date}</td><td>${x.time}</td><td><button onclick="toggleStatus(${x.id})">${x.status}</button></td></tr>`).join("")}</tbody></table>`:`<div class="empty">No appointments yet.</div>`;
}
function openDoctorForm(id=null){document.getElementById("doctorModal").classList.remove("hidden");populateSpecialtySuggestions();if(id){const d=getDoctors().find(x=>x.id===id);document.getElementById("doctorFormTitle").textContent="Edit Doctor";document.getElementById("editDoctorId").value=d.id;document.getElementById("doctorName").value=d.name;document.getElementById("doctorSpecialization").value=d.specialization;document.getElementById("doctorExperience").value=d.experience;document.getElementById("doctorQualification").value=d.qualification;document.getElementById("doctorLanguages").value=d.languages||"English";document.getElementById("doctorMode").value=d.mode||"In-person";document.getElementById("doctorFee").value=d.fee||500;document.getElementById("doctorAvailability").value=d.availability||"Mon–Fri"}else{document.getElementById("doctorFormTitle").textContent="Add Doctor";document.getElementById("doctorForm").reset();document.getElementById("editDoctorId").value="";document.getElementById("doctorFee").value=500}}
function closeDoctorForm(){document.getElementById("doctorModal").classList.add("hidden")}
function editDoctor(id){openDoctorForm(id)}
function deleteDoctor(id){if(!confirm("Delete this doctor?"))return;localStorage.setItem("cf_doctors",JSON.stringify(getDoctors().filter(x=>x.id!==id)));initAdmin()}
function toggleStatus(id){
 const apps=getAppointments(),item=apps.find(a=>a.id===id);if(!item)return;
 const next=item.status==="Confirmed"?"Completed":item.status==="Completed"?"Confirmed":"Confirmed";
 item.status=next;saveAppointments(apps);initAdmin();
}
function initDoctorForm(){const f=document.getElementById("doctorForm");if(!f)return;f.onsubmit=e=>{e.preventDefault();let d=getDoctors(),id=document.getElementById("editDoctorId").value;const existing=id?d.find(x=>x.id===Number(id)):null;const obj={id:id?Number(id):Date.now(),name:document.getElementById("doctorName").value.trim(),specialization:document.getElementById("doctorSpecialization").value.trim(),experience:document.getElementById("doctorExperience").value.trim(),qualification:document.getElementById("doctorQualification").value.trim(),languages:document.getElementById("doctorLanguages").value.trim()||"English",mode:document.getElementById("doctorMode").value,fee:Number(document.getElementById("doctorFee").value)||500,availability:document.getElementById("doctorAvailability").value.trim()||"Mon–Fri",rating:existing?.rating||"4.8",avatar:existing?.avatar||"👨‍⚕️"};if(!obj.specialization){alert("Enter a specialization.");return}if(id)d=d.map(x=>x.id===Number(id)?obj:x);else d.push(obj);localStorage.setItem("cf_doctors",JSON.stringify(d));closeDoctorForm();initAdmin()}}
document.addEventListener("DOMContentLoaded",()=>{initSignup();initLogin();initBooking();initDoctorForm();if(document.getElementById("doctorGrid")){requireUser();renderDoctors()}if(document.getElementById("doctorPreview"))renderDoctors("doctorPreview");if(document.getElementById("appointmentList")){requireUser();renderAppointments()}if(document.getElementById("welcomeUser")){requireUser();initUser();initCarePassport()}if(document.getElementById("adminStats"))initAdmin();});
