import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  const hotClass = document.querySelectorAll('.hot');
  hotClass.forEach(product => {
    product.textContent += '🔥';
  });
});


