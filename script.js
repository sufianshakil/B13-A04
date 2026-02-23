

let currentTab = "all";

let jobs = [
{id:1, company:"Mobile First Corp", position:"React Native Developer", location:"Remote", type:"Full-time", salary:"$130,000 - $175,000", description:"Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.", status:"all"},

{id:2, company:"WebFlow Agency", position:"Web Designer & Developer", location:"Los Angeles, CA", type:"Part-time", salary:"$80,000 - $120,000", description:"Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.", status:"all"},

{id:3, company:"DataViz Solutions", position:"Data Visualization Specialist", location:"Boston, MA", type:"Full-time", salary:"$125,000 - $165,000", description:"Transform complex datasets into insights.", status:"all"},

{id:4, company:"CloudFirst Inc", position:"Backend Developer", location:"Seattle, WA", type:"Full-time", salary:"$140,000 - $190,000", description:"Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.", status:"all"},

{id:5, company:"Innovation Labs", position:"UI/UX Designer", location:"New York, NY", type:"Full-time", salary:"$100,000 - $150,000", description:"Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.", status:"all"},

{id:6, company:"MegaCorp Solutions", position:"JavaScript Developer", location:"Austin, TX", type:"Full-time", salary:"$150,000 - $200,000", description:"Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities.", status:"all"},

{id:7, company:"StartupXYZ", position:"Full Stack Engineer", location:"Remote", type:"Full-time", salary:"$120,000 - $170,000", description:"Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.", status:"all"},

{id:8, company:"TechCorp Industries", position:"Senior Frontend Developer", location:"San Francisco, CA", type:"Full-time", salary:"$130,000 - $175,000", description:"We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.", status:"all"}
];




function renderJobs(){

const container = document.getElementById("jobContainer");
container.innerHTML = "";



let filtered = jobs;

if (currentTab !== "all") {
  filtered = jobs.filter(job => job.status === currentTab);
}

document.getElementById("tabCount").innerText = filtered.length + " jobs";

if(filtered.length === 0){
container.innerHTML = `
<div class="text-center py-16 w-full">
  <div class="text-5xl mb-4 items-center flex justify-center">
  <img src="./Images/jobs.png" alt="">
  </div>
  <h3 class="text-lg font-semibold text-gray-700">
    No jobs Available
  </h3>
  <p class="text-sm text-gray-500 mt-2">
    Check back soon for new job opportunities.
  </p>
</div>
`;
updateCounts();
return;
}

filtered.forEach(job => {

const card = document.createElement("div");
card.className = "px-6 py-6 bg-white";

card.innerHTML = `
<div class="flex justify-between items-start">

  <div>
    <h3 class="font-semibold text-[#1E293B] text-lg">
      ${job.company}
    </h3>

    <p class="text-gray-600 mt-1">
      ${job.position}
    </p>

    <p class="text-sm text-gray-500 mt-2">
      ${job.location} • ${job.type} • ${job.salary}
    </p>

    <span class="inline-block mt-3 px-3 py-1 text-xs rounded bg-gray-100 text-gray-600">
      ${job.status === "all" ? "NOT APPLIED" : job.status.toUpperCase()}
       
    </span>

    <p class="mt-4 text-sm text-gray-700 max-w-xl">
      ${job.description}
    </p>

    <div class="flex gap-3 mt-5 ">

      <button onclick="setStatus(${job.id}, 'interview')" 
      class="px-4 py-1.5 text-sm border border-green-500 text-green-600 rounded hover:bg-green-50 transition">
        Interview
      </button>

      <button onclick="setStatus(${job.id}, 'rejected')" 
      class="px-4 py-1.5 text-sm border border-red-500 text-red-600 rounded hover:bg-red-50 transition">
        Rejected
      </button>

    </div>
  </div>

  <button onclick="deleteJob(${job.id})"
    class="text-gray-400 hover:text-red-500 transition text-lg">
    <img src="./Images/Group 1.png" alt="">
  </button>

</div>
`;

container.appendChild(card);

});

updateCounts();
}



function setStatus(id, newStatus){

let job = jobs.find(j => j.id === id);

if(job.status === newStatus){
job.status = "all";
}else{
job.status = newStatus;
}

renderJobs();
}




function deleteJob(id){
jobs = jobs.filter(job => job.id !== id);
renderJobs();
}




function updateCounts(){

document.getElementById("totalCount").innerText = jobs.length;

const inter = document.getElementById("interviewCount");
inter.innerText = jobs.filter(job => job.status === "interview").length;

const reje = document.getElementById("rejectedCount");
reje.innerText =jobs.filter(job => job.status === "rejected").length;
}




function switchTab(tab){

currentTab = tab;

document.querySelectorAll(".tabBtn").forEach(btn=>{
btn.classList.remove("bg-blue-600","text-white");
btn.classList.add("bg-gray-100","text-gray-600");
});

const active = document.getElementById(tab+"Tab");
active.classList.remove("bg-gray-100","text-gray-600");
active.classList.add("bg-blue-600","text-white");

renderJobs();
}

renderJobs();
