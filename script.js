// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');

document.querySelectorAll('.portfolio-thumb img').forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
  });
});

closeBtn.addEventListener('click', () => lightbox.style.display = 'none');
lightbox.addEventListener('click', e => {
  if (e.target === lightbox) lightbox.style.display = 'none';
});

// EmailJS
(function () {
  emailjs.init({ publicKey: "1r5Pz8A6DlnOnCMMw" });
})();

const form = document.getElementById('contactForm');
const status = document.getElementById('status');
const spinner = document.getElementById('spinner');
const btnText = document.getElementById('btnText');

form.addEventListener('submit', e => {
  e.preventDefault();
  spinner.style.display = "inline-block";
  btnText.textContent = "A enviar...";

  const params = {
    name: form.name.value,
    email: form.email.value,
    mensagem: form.message.value,
    tempo: new Date().toLocaleString()
  };

  emailjs.send("service_flpojxv", "template_4ve9e3u", params)
    .then(() => {
      status.textContent = "✅ Mensagem enviada com sucesso!";
      status.style.color = "lightgreen";
      spinner.style.display = "none";
      btnText.textContent = "Enviar";
      form.reset();
    })
    .catch(err => {
      status.textContent = "❌ Ocorreu um erro. Tenta novamente.";
      status.style.color = "orange";
      spinner.style.display = "none";
      btnText.textContent = "Enviar";
      console.error(err);
    });
});
