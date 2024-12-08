let show = () => {
  let name = document.getElementById("userName").value;
  document.getElementById("message").innerHTML =
    "Wishing you a very happy new year " + name + "!";
  document.getElementById("nyImg").src = "newYearImage.webp";
  document.getElementById("textMessage").innerHTML =
    "2025 is going to be an excellent year.";
};
var button = document.getElementById("btn");
button.addEventListener("click", show);
