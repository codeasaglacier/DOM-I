const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
const logo = document.getElementById("logo-img")
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Nav
const nav = document.querySelectorAll('a')
nav.forEach((nav, index) => {
  nav.textContent = siteContent['nav'][`nav-item-${index+1}`]
  nav.style.color = 'green'
})

  const addNav = document.querySelector("nav")

  const newNav = document.createElement("a")
  newNav.textContent = "New Nav"
  newNav.style.color = "blue"

  const newNewNav = document.createElement("a")
  newNewNav.textContent = "NewNew Nav"
  newNewNav.style.color = "maroon"

  addNav.appendChild(newNav)
  addNav.prepend(newNewNav)

//CTA
const hOne = document.querySelector('h1')
const h1T = siteContent.cta.h1
hOne.textContent = h1T
hOne.style.width = '30rem'
hOne.style.wordSpacing = '30rem'
hOne.style.color = 'green'

const getS = document.querySelector('button')
getS.textContent = siteContent.cta.button


const ctaI = document.getElementById('cta-img')
ctaI.src = siteContent.cta["img-src"]

// Main & Bottom Content
const headings = document.querySelectorAll(".main-content h4")
const headingArr = ["features", "about", "services", "product", "vision"]
headings.forEach((heading, index)=>{
heading.textContent = siteContent["main-content"][headingArr[index]+"-h4"]
})

const midImg = document.querySelector("#middle-img")
midImg.setAttribute("src", siteContent['main-content']['middle-img-src'])

const textCont = document.querySelectorAll(".text-content p")
textCont.forEach((heading, index)=>{
  heading.textContent = siteContent["main-content"][headingArr[index]+"-content"]
})

// Contact
const cnctH4 = document.querySelector(".contact h4")
cnctH4.textContent = siteContent["contact"]["contact-h4"]

const cnct = document.querySelectorAll(".contact p")
cnct[0].innerHTML = "123 Way 456 Street<br>Somewhere, USA"
cnct[1].textContent = siteContent["contact"]["phone"]
cnct[2].textContent = siteContent["contact"]["email"]

//Footer
const foot = document.querySelector("footer p")
foot.textContent = siteContent["footer"]["copyright"]





// const callToHeading = siteContent.cta.h1.split(" ");
// callToText.querySelector("h1").textContent =
//   callToHeading[0] + "\n" + callToHeading[1] + "\n" + callToHeading[2];
// callToText.querySelector("h1").style.whiteSpace = "pre-line";



















































// //Nav
// const navLinks = document.querySelectorAll('a')
// navLinks.forEach((navLink, index) => {
//   navLink.textContent = siteContent["nav"][`nav-item-${index+1}`]
// })
// navLinks.forEach((navLink) => {
//   navLink.style.color = "green"
// })

// const addNav = document.querySelector("nav")

// const newNav = document.createElement("a")
// newNav.textContent = "New Nav"
// newNav.style.color = "blue"

// const newNewNav = document.createElement("a")
// newNewNav.textContent = "NewNew Nav"
// newNewNav.style.color = "maroon"

// addNav.appendChild(newNav)
// addNav.prepend(newNewNav)

// //CTA
// const callToText = document.querySelector("h1")
// callToText.innerHTML = "DOM <br> Is <br> Awesome"

// const callToBtn = document.querySelector("button")
// callToBtn.textContent = siteContent["cta"]["button"]

// const callToImg = document.querySelector("#cta-img")
// callToImg.setAttribute('src', siteContent["cta"]["img-src"])

// // Main & Bottom Content
// const headings = document.querySelectorAll(".main-content h4")
// const headingArr = ["features", "about", "services", "product", "vision"]
// headings.forEach((heading, index)=>{
// heading.textContent = siteContent["main-content"][headingArr[index]+"-h4"]
// })

// const midImg = document.querySelector("#middle-img")
// midImg.setAttribute("src", siteContent['main-content']['middle-img-src'])

// const textCont = document.querySelectorAll(".text-content p")
// textCont.forEach((heading, index)=>{
//   heading.textContent = siteContent["main-content"][headingArr[index]+"-content"]
// })

// // Contact
// const cnctH4 = document.querySelector(".contact h4")
// cnctH4.textContent = siteContent["contact"]["contact-h4"]

// const cnct = document.querySelectorAll(".contact p")
// cnct[0].innerHTML = "123 Way 456 Street<br>Somewhere, USA"
// cnct[1].textContent = siteContent["contact"]["phone"]
// cnct[2].textContent = siteContent["contact"]["email"]

// //Footer
// const foot = document.querySelector("footer p")
// foot.textContent = siteContent["footer"]["copyright"]





// const callToHeading = siteContent.cta.h1.split(" ");
// callToText.querySelector("h1").textContent =
//   callToHeading[0] + "\n" + callToHeading[1] + "\n" + callToHeading[2];
// callToText.querySelector("h1").style.whiteSpace = "pre-line";
















// // Nav Bar
// const navBar = document.querySelectorAll("a");
// navBar[0].textContent = siteContent["nav"]["nav-item-0"];
// navBar[1].textContent = siteContent["nav"]["nav-item-1"];
// navBar[2].textContent = siteContent["nav"]["nav-item-2"];
// navBar[3].textContent = siteContent["nav"]["nav-item-3"];
// navBar[4].textContent = siteContent["nav"]["nav-item-4"];
// navBar[5].textContent = siteContent["nav"]["nav-item-5"];
// // Title Section
// const titleSectionH1 = document.querySelector("h1");
// titleSectionH1.innerHTML = "DOM <br> Is <br> Awesome";
// const titleButton =  document.querySelector("button");
// titleButton.textContent = siteContent["cta"]["button"];
// const titleImg = document.getElementById("cta-img");
// titleImg.setAttribute('src', siteContent["cta"]["img-src"]);
// // Main Content Headers
// const mainTitles = document.querySelectorAll('h4');
// mainTitles[0].textContent = siteContent["main-content"]["features-h4"];
// mainTitles[1].textContent = siteContent["main-content"]["about-h4"];
// mainTitles[2].textContent = siteContent["main-content"]["services-h4"];mainTitles[3].textContent = siteContent["main-content"]["product-h4"];
// mainTitles[4].textContent = siteContent["main-content"]["vision-h4"];
// // Main Content Paragraphs
// const mainContent = document.querySelectorAll('p');
// mainContent[0].textContent = siteContent["main-content"]["features-content"];
// mainContent[1].textContent = siteContent["main-content"]["about-content"];mainContent[2].textContent = siteContent["main-content"]["services-content"];mainContent[3].textContent = siteContent["main-content"]["product-content"];mainContent[4].textContent = siteContent["main-content"]["vision-content"];
// // Middle Img
// const middleImg = document.getElementById("middle-img");
// middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);
// // Contact
// const contactH4 = document.querySelector('.contact h4');
// contactH4.textContent = siteContent["contact"]["contact-h4"];
// const contactInfo = document.querySelectorAll('.contact p');
// contactInfo[0].textContent = siteContent['contact']["address"];
// contactInfo[1].textContent = siteContent['contact']["phone"];
// contactInfo[2].textContent = siteContent['contact']["email"];
// // Footer
// const copyright = document.querySelector('footer');
// copyright.textContent = siteContent['footer']['copyright'];
// // Adding New Content
// navBar.forEach(element => {
//   element.style.color = "green"
// });
// const newNavBar =  document.querySelector("nav");
// console.log(newNavBar)
// const purpleNavItem = document.createElement("a");
// purpleNavItem.textContent="Purple Nav";
// purpleNavItem.style.color="purple";

// const redNavItem = document.createElement("a");
// redNavItem.textContent="Red Nav";
// redNavItem.style.color="red";

// newNavBar.appendChild(purpleNavItem);
// newNavBar.prepend(redNavItem);
