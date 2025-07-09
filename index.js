// template_kqa3d8i
// service_399egvl
// rH_cFtmEWf4FkK_Zs

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";
  emailjs
    .sendForm(
      "service_399egvl",
      "template_kqa3d8i",
      event.target,
      "rH_cFtmEWf4FkK_Zs"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable, please contact me direclty at nelsona3017@gmail.com."
      );
    });

  setTimeout(() => {
    console.log("bruh");
  }, 1000);
}

let isModalOpen = false;
function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false
    return document.body.classList.remove("modal--open");
  }
  isModalOpen = true;
  document.body.classList += " modal--open"
}
