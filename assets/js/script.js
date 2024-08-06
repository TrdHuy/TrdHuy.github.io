'use strict';

const TRD_CONSTRACT = window.TRD_CONSTRACT;


window.addEventListener('load', function () {
  TRD_CONSTRACT.clearLocalStorage();
});


// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



//######################################################################

const iframeMap = new Map();
function loadForm(url, container) {
  const iframeId = container.id;
  const newUrl = url + '?iframeId=' + iframeId + '&shouldNotifyWidth=1';
  container.src = newUrl;
}
document.querySelectorAll('iframe').forEach(iframe => {
  iframeMap.set(iframe.id, iframe);
});
// form input variables
window.addEventListener('message', function (event) {
  const data = event.data;
  switch (data.event) {
    case TRD_CONSTRACT.EVENT.IFRAME_CONTENT_SIZE_CHANGED:
      if (data.frameId) {
        const iframe = iframeMap.get(data.frameId);
        if (event.data.height) {
          iframe.style.height = event.data.height + 'px';
        }
        if (event.data.width) {
          iframe.style.width = event.data.width + 'px';
        }
      }
      break;
    case TRD_CONSTRACT.EVENT.SHOW_FORM_INPUT:
      const url = data.url;
      if (url) {
        loadForm(url, formIframe);
        formInputModalFunc();
      }
      break;
    case TRD_CONSTRACT.EVENT.HIDE_FORM_INPUT:
      const frameId = data.frameId;
      if (frameId == formIframe.id) {
        formInputContainer.classList.remove("active");
        formInputOverlay.classList.remove("active");
      }
      break;
    default:
      console.log('Unknown event:', data.event);
  }
});

const formInputContainer = document.querySelector("[form-input-container]");
const formInputCloseBtn = document.querySelector("[form-input-close-btn]");
const formInputOverlay = document.querySelector("[form-input-overlay]");
const formInputModalContent = document.querySelector("[form-input-modal-content]");
const formIframe = document.getElementById("formInputFrame");
const formInputModalFunc = function () {
  formInputContainer.classList.toggle("active");
  formInputOverlay.classList.toggle("active");
}
formInputCloseBtn.addEventListener("click", formInputModalFunc);
formInputOverlay.addEventListener("click", formInputModalFunc);

//#########################SERVICE-DETAIL###############################

// service detail variables
const serviceItem = document.querySelectorAll("[data-service-item]");
const serviceModalContainer = document.querySelector("[data-service-modal-container]");
const serviceModalCloseBtn = document.querySelector("[data-service-modal-close-btn]");
const serviceOverlay = document.querySelector("[data-service-overlay]");

// modal variable
const serviceModalImg = document.querySelector("[data-service-modal-img]");
const serviceModalTitle = document.querySelector("[data-service-modal-title]");
const serviceModalText = document.querySelector("[data-service-modal-text]");

// modal toggle function
const serviceModalFunc = function () {
  serviceModalContainer.classList.toggle("active");
  serviceOverlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < serviceItem.length; i++) {

  serviceItem[i].addEventListener("click", function () {

    serviceModalImg.src = this.querySelector("[data-service-avatar]").src;
    serviceModalImg.alt = this.querySelector("[data-service-avatar]").alt;
    serviceModalTitle.innerHTML = this.querySelector("[data-service-title]").innerHTML;
    serviceModalText.innerHTML = this.querySelector("[data-service-text]").innerHTML;

    serviceModalFunc();

  });

}

// add click event to modal close button
serviceModalCloseBtn.addEventListener("click", serviceModalFunc);
serviceOverlay.addEventListener("click", serviceModalFunc);

//######################################################################


// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}


