# **Assignment 08**
>Note: user need to add borde in red color , set Aside in scroll and add **heading** and **paragraph**.

# **Task 01**

## **After Update** 

1[output image](./images/dom-assignment-08-task-01.png)

```js

const sideBar = document.getElementsByTagName("aside")[0];
sideBar.style.border = "4px solid red";
sideBar.style.overflowY = "scroll";

const horizontalLine = document.createElement("hr");
horizontalLine.className = "hr-line";
sideBar.appendChild(horizontalLine);

const heading = document.createElement("h2");
const para = document.createElement("p");
heading.textContent = "This is my custom heading";
para.textContent = "This is my custom paragraph.";
sideBar.appendChild(heading);
sideBar.appendChild(para);
heading.className = "new-head";
para.className = "new-p";
```

---

# **Task 02**

## **After Update** 
1[output image](./images/dom-assignment-08-task-02.png)

```js
document.body.style.backgroundImage = "none";
```
---

# **Task 03**

## **After Update** 
1[output image](./images/dom-assignment-08-task-03.png)

```js
const navbarToggle = document.querySelector(".navbar-toggler");
const collapseNavbar = document.getElementsByClassName('collapse')[0];

navbarToggle.addEventListener("click", ()=>{
    collapseNavbar.style.display = "flex";
    navbarToggle.addEventListener("click", () =>{
        collapseNavbar.style.display = "none";
    })
})

```
---


