const hamburger = document.getElementById("ham");
const close_btn = document.getElementById("close-btn");
const header_div = document.getElementById("header-div");
const navbar = document.getElementsByClassName("navbar")[0]; // Access the first element in the collection
const cart = document.getElementById("cart");
const C1 = document.getElementById("C1");

const redirecting_F = document.getElementsByClassName("redirect_F");
const redirecting_F_Array = Array.from(redirecting_F);

console.log(redirecting_F_Array);

redirecting_F_Array.forEach((element) => {
  element.addEventListener("click", () => {
    const imgsrc =
      element.parentElement.parentElement.previousElementSibling.src;
    localStorage.setItem("imgSrc", imgsrc);
  });
});





if (hamburger) {
  hamburger.addEventListener("click", () => {
    navbar.classList.add("Showing");
    header_div.style.display = "none";
    cart.style.display = "none";
    close_btn.style.display = "block";
  });
}

if (close_btn) {
  close_btn.addEventListener("click", () => {
    navbar.classList.remove("Showing");
    header_div.style.display = "flex";
  });
}
