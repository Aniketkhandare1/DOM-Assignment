# **Assignment No 06**
---
Note: user need to change header from ** equlizer **  to **Ineuron image**`` and price tag from **$4** to **$10** .

# **Task 02**

# **After Update**

![output image](./assets/dom-%20assignment-06-task-01.png)

```js
const headerImg = document.querySelectorAll("header img")[0]
headerImg.setAttribute("src","./assets/ineuron-logo.png");
```

---


# **Task 02**

# **After Update**

![output image](./assets/dom-assignment-06-task-02.png)

```js

const span = document.querySelectorAll(".app_price span")[0]
span.innerText = "$10"

const footerSocial = document.querySelector(".footer_social");
const footerSocialIco = document.createElement("div")
footerSocialIco.className = "footer_social_ico";
footerSocialIco.innerHTML = `<i class="fa-brands fa-linkedin"></i>`;
footerSocial.appendChild(footerSocialIco);

```

---




