//TODO: future Plan
/**
 * 
 * // const currentPage = window.location.pathname;
// let head = document.head;
// let header = document.querySelector("header");
// let footer = document.querySelector("footer");

// function renderHead() {
//   let path = "";
//   if (currentPage == "/home.html") {
//     path = `home`;
//   } else if (currentPage == "/pages/about.html") {
//     path = `about`;
//   } else if (currentPage == "/pages/subscribe.html") {
//     path = `subscribe`;
//   } else if (currentPage == "/pages/SubscribeCompleted.html") {
//     path = `subscribe`;
//   } else if (currentPage == "/pages/SubscribeIncomplete.html") {
//     path = `subscribe`;
//   }
//   head.innerHTML = `  <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>coffeeroasters</title>

//     <!-- fontawesome -->
//     <link
//       rel="stylesheet"
//       href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css"
//       integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw=="
//       crossorigin="anonymous"
//       referrerpolicy="no-referrer"
//     />

//     <!-- bootstrap -->
//     <link
//       href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
//       rel="stylesheet"
//       integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB"
//       crossorigin="anonymous"
//     />
//     <script
//       src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"
//       integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI"
//       crossorigin="anonymous"
//     ></script>

//     <!-- AOS -->
//     <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
//     <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

//     <!-- favicon -->
//     <link rel="icon" href="./favicon.ico" />

//     <!-- external libraries -->
//     <link rel="stylesheet" href="./css/hamburgers.min.css" />

//     <!-- my css -->

//     <link rel="stylesheet" href="./css/home.css" />
//     <link rel="stylesheet" href="./css/shared.css" />`;
// }
// function renderHeader() {
//   let homeActive,
//     aboutActive,
//     createActive,
//     defaultActive,
//     completedActive,
//     unCompletedActive = "";

//   if (currentPage == "/home.html") {
//     homeActive = `active`;
//   } else if (currentPage == "/pages/about.html") {
//     aboutActive = `active`;
//   } else if (currentPage == "/pages/subscribe.html") {
//     createActive = `active`;
//     defaultActive = `active`;
//   } else if (currentPage == "/pages/SubscribeCompleted.html") {
//     createActive = `active`;
//     completedActive = `active`;
//   } else if (currentPage == "/pages/SubscribeIncomplete.html") {
//     createActive = `active`;
//     unCompletedActive = `active`;
//   }

//   header.innerHTML = `
//           <nav class="navbar navbar-expand-md">
//           <div class="container-fluid">
//             <a class="navbar-brand" href="./home.html"
//               ><picture>
//                 <source media="(min-width: 992px)" srcset="./images/Logo.svg" />
//                 <source media="(min-width: 768px)" srcset="./images/Logo.svg" />
//                 <img
//                   src="./images/Logo-mobile.svg"
//                   alt="Our commitment"
//                 /> </picture
//             ></a>
//             <button
//               class="hamburger hamburger--squeeze navbar-toggler border-0"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarNavAltMarkup"
//               aria-controls="navbarNavAltMarkup"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//             >
//               <span class="hamburger-box">
//                 <span class="hamburger-inner"></span>
//               </span>
//             </button>
//             <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
//               <div class="navbar-nav position-relative">
//                 <a
//                   class="nav-link active"
//                   aria-current="page"
//                   href="./home.html"
//                   >Home</a
//                 >
//                 <a class="nav-link " href="./pages/about.html"> About us </a>

//                 <a
//                   class="btn border-0 "
//                   data-bs-toggle="collapse"
//                   href="#headerCollapse"
//                   role="button"
//                   aria-expanded="false"
//                   aria-controls="headerCollapse"
//                 >
//                   Create your plan <i class="fa-solid fa-caret-down"></i>
//                 </a>
//                 <div
//                   class="collapse position-absolute top-100 end-0 z-3"
//                   id="headerCollapse"
//                 >
//                   <div class="card card-body border-0 bg-light p-2">
//                     <a
//                       class="nav-link p-1 rounded "
//                       aria-current="page"
//                       href="./pages/subscribe.html"
//                       >Default</a
//                     >
//                     <a
//                       class="nav-link p-1 rounded  "
//                       href="./pages/SubscribeCompleted.html"
//                       >Completed</a
//                     >
//                     <a
//                       class="nav-link p-1 rounded  "
//                       href="./pages/SubscribeIncomplete.html"
//                       >Incomplete</a
//                     >
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </nav>`;

//   console.log(currentPage);
// }

// renderHeader();
// renderHead();

 */

const collapseEl = document.getElementById("navbarNavAltMarkup");
const burgerBtn = document.querySelector(".hamburger.navbar-toggler");

if (collapseEl && burgerBtn) {
  collapseEl.addEventListener("show.bs.collapse", (e) => {
    if (e.target.id !== "navbarNavAltMarkup") return;
    burgerBtn.classList.add("is-active");
  });

  collapseEl.addEventListener("hide.bs.collapse", (e) => {
    if (e.target.id !== "navbarNavAltMarkup") return;
    burgerBtn.classList.remove("is-active");
  });
}

AOS.init();
