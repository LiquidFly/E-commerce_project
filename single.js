document.addEventListener("DOMContentLoaded", function () {
  const imgElement = document.getElementById("L_img");
  const imgsrc = localStorage.getItem("imgSrc");

  console.log(imgElement);
  console.log(imgsrc);


  if (imgElement && imgsrc) {
      console.log(imgElement);
    imgElement.src = imgsrc;
  }
  else{
    console.log("Error");
  }
});
