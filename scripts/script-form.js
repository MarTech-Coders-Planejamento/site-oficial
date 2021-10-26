var button = document.getElementById("button-form");
var contador = document.getElementById("contador");
var section = document.querySelectorAll(
  "section#form-1, section#form-2, section#form-3, section#form-4, section#form-5, section#form-6"
);
var i = 0;
button.addEventListener("click", function (event) {
  event.preventDefault();
  if (i < 5) {
    section[i].style.display = "none";
    i = i + 1;
    section[i].style.display = "block";
    console.log(i);
  }
  if (i === 5) {
    button.textContent = "Concluir";
    button.addEventListener("click", function () {
      console.log("enviado");
    });
  }
  contador.textContent = i+1 + "/6";
});
