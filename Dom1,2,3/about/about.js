


// let accordian = document.querySelectorAll(".accordian h3");
// accordian.forEach((element) => {
//   element.addEventListener("click", () => {
//     let para = element.nextElementSibling;
//     if (para.style.display === "block") {
//       para.style.display = "none";
//     } else {
//       para.style.display = "block";
//     }
//   });
// });

// cahnge nav 

let list = document.querySelector("#listt");
list.innerText="projects";




//create div ,heading and para

let parent=document.querySelector(".accordian-wrapper");
let element = document.createElement("div");
element.classList.add("accordian");

let head =document.createElement("h3");
let para =document.createElement("p");

para.innerText="I Posses a Very Good Command Over The Full Stack Development Technologies Like MERN Which Can Be Seen In My Work Over The Github.";
para.style.display="none";

head.innerText="Skill";
element.appendChild(head);
element.appendChild(para);
parent.appendChild(element);




//change bg-color
// Get all paragraphs
let paragraphs = document.getElementsByTagName("p");

// Loop through all paragraphs and change background color
for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.backgroundColor = "#ede4f7";
}

// Get all Headings
let heading = document.getElementsByTagName("h3");

// Loop through all heading and change background color
for (let i = 0; i < heading.length; i++) {
  heading[i].style.backgroundColor = "#e6d7f7";
}




//on click function
let accordian = document.querySelectorAll(".accordian h3");
accordian.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});











