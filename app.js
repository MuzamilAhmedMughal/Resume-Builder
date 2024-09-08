"use strict";
var _a, _b, _c, _d, _e;
const hide1 = document.getElementById("hide1");
const show1 =
  (_a = document.getElementById("show1")) === null || _a === void 0
    ? void 0
    : _a.addEventListener("click", () => {
        hide1 === null || hide1 === void 0
          ? void 0
          : hide1.classList.toggle("shows");
      });
const hide2 = document.getElementById("hide2");
const show2 =
  (_b = document.getElementById("show2")) === null || _b === void 0
    ? void 0
    : _b.addEventListener("click", () => {
        hide2 === null || hide2 === void 0
          ? void 0
          : hide2.classList.toggle("shows");
      });
const hide3 = document.getElementById("hide3");
const show3 =
  (_c = document.getElementById("show3")) === null || _c === void 0
    ? void 0
    : _c.addEventListener("click", () => {
        hide3 === null || hide3 === void 0
          ? void 0
          : hide3.classList.toggle("shows");
      });
const hide4 = document.getElementById("hide4");
const show4 =
  (_d = document.getElementById("show4")) === null || _d === void 0
    ? void 0
    : _d.addEventListener("click", () => {
        hide4 === null || hide4 === void 0
          ? void 0
          : hide4.classList.toggle("shows");
      });
const hide5 = document.getElementById("hide5");
const show5 =
  (_e = document.getElementById("show5")) === null || _e === void 0
    ? void 0
    : _e.addEventListener("click", () => {
        hide5 === null || hide5 === void 0
          ? void 0
          : hide5.classList.toggle("shows");
      });
// let educationarry :any[]= [];
// let jobarry :any[]= [];
// let skillarry:any[] = [];
// let langarry:any[] = [];
// let personarry :any[]=[];
//  let person = ()=>{
//   let personObj = {
//     name: (document.getElementById("name") as HTMLInputElement).value,
//     Email: (document.getElementById("Email") as HTMLInputElement).value,
//     Phonenumber: (document.getElementById("Phonenumber") as HTMLInputElement).value
//   };
//   console.log(personObj);
//   personarry.push(personObj);
//  }
// let abd=()=> {
//   let educationobject = {
//     education: (document.getElementById("education") as HTMLInputElement).value,
//     city: (document.getElementById("city") as HTMLInputElement).value,
//     EDsDate: (document.getElementById("EDsDate") as HTMLInputElement).value,
//     EDeDate: (document.getElementById("EDeDate") as HTMLInputElement).value,
//     des: (document.getElementById("des") as HTMLInputElement).value
//   };
//   educationarry.push(educationobject)
//   console.log(educationarry);
// }
// let job=()=> {
//   let jobobject = {
//     postion: (document.getElementById("pos") as HTMLInputElement).value,
//     Company: (document.getElementById("Company") as HTMLInputElement).value,
//     ecity: (document.getElementById("ecity") as HTMLInputElement).value,
//     EsDate: (document.getElementById("EsDate") as HTMLInputElement).value,
//     EeDate: (document.getElementById("EeDate") as HTMLInputElement).value,
//     edes: (document.getElementById("edes") as HTMLInputElement).value
//   };
//   jobarry.push(jobobject);
//   console.log(jobarry);
// }
// let skills=()=>{
//   let skillobject = {
//     skill: (document.getElementById("skill") as HTMLInputElement).value,
//     level: (document.getElementById("level") as HTMLInputElement).value
//   }
//   skillarry.push(skillobject);
//   console.log(skillarry);
// }
// let abc=()=>{
//   let langobject = {
//     language: (document.getElementById("language") as HTMLInputElement).value,
//     Llevel: (document.getElementById("Llevel") as HTMLInputElement).value
//   }
//   langarry.push(langobject);
//   console.log(langarry);
// }
// let renderResume = () => {
//   let person = personarry;
//   let education = educationarry;
//   let jobs = jobarry;
//   let skills = skillarry;
//   let languages = langarry;
//   // Render the resume HTML
//   let resume = `
//     <div class="cv-container">
//       <div class='headers'>
//         <h1 id="name">${person.personObj.name}</h1>
//         <p id="contact-info">
//           <span id="email">${person.email}</span> |
//           <span id="phone">${person.phoneNumber}</span>
//         </p>
//       </div>
//       <div class="hello">
//         <section id="experience">
//           <h2>Experience</h2>
//           <ul>
//             ${jobs.map(job => `
//               <li>
//                 <p>${job.company} - ${job.city}</p>
//                 <p>${job.position} ${job.startDate} - ${job.endDate}</p>
//                 <p>${job.description}</p>
//               </li>
//             `).join('')}
//           </ul>
//         </section>
//         <section id="education">
//           <h2>Education</h2>
//           <ul>
//             ${education.map(edu => `
//               <li>
//                 <p>${edu.education}, ${edu.city}</p>
//                 <p>${edu.startDate} - ${edu.endDate}</p>
//                 <p>${edu.description}</p>
//               </li>
//             `).join('')}
//           </ul>
//         </section>
//       </div>
//       <div>
//         <h1>Skills</h1>
//         <ul>
//           ${skills.map(skill => `
//             <li>
//               ${skill.skill} - ${skill.level}
//             </li>
//           `).join('')}
//         </ul>
//       </div>
//       <div>
//         <h1>Languages</h1>
//         <ul>
//           ${languages.map(lang => `
//             <li>
//               ${lang.language} - ${lang.level}
//             </li>
//           `).join('')}
//         </ul>
//       </div>
//     </div>
//   `;
//   // Render the resume HTML to the page
//   (document.getElementById("preview")as HTMLDivElement).innerHTML = resume;
//           }
let educationArray = [];
let jobArray = [];
let skillArray = [];
let languageArray = [];
let personArray = [];
let person = () => {
  let personObj = {
    name: document.getElementById("name").value,
    Email: document.getElementById("Email").value,
    Phonenumber: document.getElementById("Phonenumber").value,
  };
  console.log(personObj);
  personArray.push(personObj);
};
let addEducation = () => {
  let educationObject = {
    education: document.getElementById("education").value,
    city: document.getElementById("city").value,
    EDsDate: document.getElementById("EDsDate").value,
    EDeDate: document.getElementById("EDeDate").value,
    des: document.getElementById("des").value,
  };
  educationArray.push(educationObject);
  console.log(educationArray);
  renderResume();
};
let addJob = () => {
  let jobObject = {
    position: document.getElementById("pos").value,
    Company: document.getElementById("Company").value,
    ecity: document.getElementById("ecity").value,
    EsDate: document.getElementById("EsDate").value,
    EeDate: document.getElementById("EeDate").value,
    edes: document.getElementById("edes").value,
  };
  jobArray.push(jobObject);
  console.log(jobArray);
  renderResume();
};
let addSkill = () => {
  let skillObject = {
    skill: document.getElementById("skill").value,
    level: document.getElementById("level").value,
  };
  skillArray.push(skillObject);
  console.log(skillArray);
  renderResume();
};
let addLanguage = () => {
  let languageObject = {
    language: document.getElementById("language").value,
    Llevel: document.getElementById("Llevel").value,
  };
  languageArray.push(languageObject);
  console.log(languageArray);
  renderResume();
};
let renderResume = () => {
  let person = personArray[0];
  let education = educationArray;
  let jobs = jobArray;
  let skills = skillArray;
  let languages = languageArray;
  // Render the resume HTML
  let resume = `
    <div class="cv-container">
      <div class='headers'>
        <h1 id="name">${person.name}</h1>
        <p id="contact-info">
          <span id="email">${person.Email}</span> |
          <span id="phone">${person.Phonenumber}</span>
        </p>
      </div>
      <div class="hello">
        <section id="experience">
          <h2>Experience</h2>
          <ul>
            ${jobs
              .map(
                (job, index) => `
              <li>
                <p>${job.Company} - ${job.ecity}</p>
                <p>${job.position} ${job.EsDate} - ${job.EeDate}</p>
                <p>${job.edes}</p>
                <button onclick="editJob(${index})">Edit</button>
                <button onclick="deleteJob(${index})">Delete</button>
              </li>
            `
              )
              .join("")}
          </ul>
        </section>
        <section id="education">
          <h2>Education</h2>
          <ul>
            ${education
              .map(
                (edu, index) => `
              <li>
                <p>${edu.education}, ${edu.city}</p>
                <p>${edu.EDsDate} - ${edu.EDeDate}</p>
                <p>${edu.des}</p>
                <button onclick="editEducation(${index})">Edit</button>
                <button onclick="deleteEducation(${index})">Delete</button>
              </li>
            `
              )
              .join("")}
          </ul>
        </section>
      </div>
      <div>
        <h1>Skills</h1>
        <ul>
          ${skills
            .map(
              (skill, index) => `
            <li>
              ${skill.skill} - ${skill.level}
              <button onclick="editSkill(${index})">Edit</button>
              <button onclick="deleteSkill(${index})">Delete</button>
            </li>
          `
            )
            .join("")}
        </ul>
      </div>
      <div>
        <h1>Languages</h1>
        <ul>
        ${languages
          .map(
            (language, index) => `
          <li>
            ${language.language} - ${language.Llevel}
            <button onclick="editLanguage(${index})">Edit</button>
            <button onclick="deleteLanguage(${index})">Delete</button>
          </li>
        `
          )
          .join("")}
        </ul>
              </div>
    </div>
  `;
  document.getElementById("preview").innerHTML = resume;
};
