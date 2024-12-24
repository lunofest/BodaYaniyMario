document.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', function(event) {
      event.preventDefault(); // Prevenir el comportamiento por defecto del enlace

      // Obtener el ID del elemento objetivo
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
          // Obtener el tamaño del viewport y el elemento objetivo
          const viewportHeight = window.innerHeight;
          const elementRect = targetElement.getBoundingClientRect();
          const elementTop = elementRect.top + window.scrollY;
          const elementHeight = elementRect.height;
          const offset = (viewportHeight / 2) - (elementHeight / 2);

          // Calcular la posición del scroll con un margen superior adicional
          const extraOffset = 100; // Ajusta este valor según sea necesario
          const scrollToPosition = elementTop - offset - extraOffset;

          // Verificar si el scrollToPosition está dentro del rango permitido
          const maxScroll = document.documentElement.scrollHeight - viewportHeight;
          if (scrollToPosition > maxScroll) {
              scrollToPosition = maxScroll;
          } else if (scrollToPosition < 0) {
              scrollToPosition = 0;
          }

          // Realizar el desplazamiento suave
          window.scrollTo({
              top: scrollToPosition,
              behavior: 'smooth'
          });
      }
  });
});






/*-------------scroll aos -----------------*/


AOS.init();



// --------------------------- music -------------------------------

document.addEventListener('DOMContentLoaded', function() {
  const playButton = document.getElementById('play');
  const pauseButton = document.getElementById('pause');
  const audio = document.querySelector('audio');
  const musicImg = document.querySelector('.music__img');

  // Ocultar el botón de pausa al inicio
  pauseButton.style.display = 'none';

  // Función para iniciar el spinner
  function startSpinner() {
    let rotation = 0;
    musicImg.style.transformOrigin = 'center center'; // Asegurar que el punto de origen esté centrado
    musicImg.dataset.rotating = 'true'; // Marcar que está girando
    
    // Función de animación
    function rotate() {
      if (musicImg.dataset.rotating !== 'true') return; // Salir si se detiene la rotación
      rotation += 2; // Ajustar velocidad de rotación (incremento de grados)
      musicImg.style.transform = `rotate(${rotation}deg)`; // Aplicar rotación
      requestAnimationFrame(rotate); // Siguiente frame de animación
    }
    
    // Iniciar la animación
    rotate();
  }

  // Función para detener el spinner
  function stopSpinner() {
    musicImg.dataset.rotating = 'false'; // Marcar que no está girando
  }

  playButton.addEventListener('click', function() {
    audio.play();
    playButton.style.display = 'none'; // Ocultar el botón de play
    pauseButton.style.display = 'inline-block'; // Mostrar el botón de pausa
    startSpinner(); // Iniciar el spinner cuando se inicie la música
  });

  pauseButton.addEventListener('click', function() {
    audio.pause();
    pauseButton.style.display = 'none'; // Ocultar el botón de pausa
    playButton.style.display = 'inline-block'; // Mostrar el botón de play
    stopSpinner(); // Detener el spinner cuando se pause la música
  });

  // Adelantar la canción
  document.getElementById('forward').addEventListener('click', function() {
    audio.currentTime += 10; // Adelantar 10 segundos (ajustable según necesidad)
  });

  // Rebobinar la canción
  document.getElementById('rewind').addEventListener('click', function() {
    audio.currentTime -= 10; // Rebobinar 10 segundos (ajustable según necesidad)
  });

});




// ---------------------- temporizador -------------------------
function updateTimer() {
  const targetDate = new Date("february 15, 2025 19:00:00").getTime();
  const currentDate = new Date().getTime();
  const timeRemaining = targetDate - currentDate;

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

updateTimer();
setInterval(updateTimer, 1000);

// --------------------------------fotos---------------------------------




document.addEventListener("DOMContentLoaded", function() {
  var swiper = new Swiper(".mySwiper", {
      effect: "cards",
      grabCursor: true,
  });

  // Inicializar Fancybox
  $(".fancybox").fancybox({
      buttons: [
          "zoom",
          "slideShow",
          "fullScreen",
          "thumbs",
          "close"
      ],
      loop: true,
      infobar: true,
      arrows: true,
      protect: true,
      animationEffect: "fade",
      transitionEffect: "slide",
      transitionDuration: 500,
      touch: {
          vertical: false,
      },
      autoFocus: false,
  });
});




  // --------------------------- dresscode-------------------------


const showImageBtn = document.getElementById("showImage");
const lightbox = document.getElementById("lightbox");
const closeButton = document.getElementById("closeButton");

showImageBtn.addEventListener("click", function() {
  lightbox.style.display = "flex";
});

closeButton.addEventListener("click", function() {
  lightbox.style.display = "none";
});

const boton = document.getElementById('mostrarBoton');
const textoDesplegable = document.getElementById('textoDesplegable');

boton.addEventListener('click', () => {
  textoDesplegable.classList.toggle('oculto');
});


// --------------------------------gift---------------------------------

document.addEventListener('DOMContentLoaded', function () {
  const boton = document.getElementById('mostrarBoton');
  const textoDesplegable = document.getElementById('textoDesplegable');

  boton.addEventListener('click', function () {
    textoDesplegable.classList.toggle('mostrar');
  });
});


function copyText() {
  var aliasText = document.getElementById('alias').innerText; // Obtener el texto del alias
  var tempInput = document.createElement('input');
  tempInput.value = aliasText;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand('copy');
  document.body.removeChild(tempInput);

  // Mostrar el mensaje de "¡Copiado!"
  var copyMessage = document.getElementById('copyMessage');
  copyMessage.style.display = 'block';
  setTimeout(function() {
      copyMessage.style.display = 'none';
  }, 1500); // Ocultar el mensaje después de 1.5 segundos
}



function copyCbuText() {
  const aliasText = document.getElementById('cbuAlias').textContent;
  const copyMessage = document.getElementById('copyCbuMessage');

  const textarea = document.createElement('textarea');
  textarea.value = aliasText;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);

  copyMessage.style.display = 'block';
  setTimeout(() => {
      copyMessage.style.display = 'none';
  }, 2000);
}


// --------------------------- playlist --------------------------------

document.addEventListener('DOMContentLoaded', function() {
  // Definir los números de teléfono
  const phoneNumber1 = '542645578326'; // Número para el primer botón
  const phoneNumber2 = '542645121578'; // Número para el segundo botón

  // Función para enviar mensaje por WhatsApp
  function sendMessage(phoneNumber) {
      const name = document.getElementById('userName').value.trim();
      const message = document.getElementById('whatsappMessage').value.trim();

      if (name === '' || message === '') {
          alert('Por favor, completa ambos campos antes de enviar.');
          return;
      }

      const fullMessage = `*Nombre y Apellido:* ${name}\n\n*Tema recomendado:* ${message}`;
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(fullMessage)}`;

      // Abre la URL de WhatsApp en una nueva pestaña
      window.open(whatsappURL, '_blank');

      // Mostrar mensaje de confirmación
      alert('Mensaje enviado');

      // Limpiar los campos de entrada
      document.getElementById('userName').value = '';
      document.getElementById('whatsappMessage').value = '';

      // Volver al bloque de formulario
      document.getElementById('playlist').scrollIntoView({ behavior: 'smooth' });
  }

  // Asignar eventos a los botones
  document.getElementById('recomendarPlay1').addEventListener('click', function() {
      sendMessage(phoneNumber1);
  });

  document.getElementById('recomendarPlay2').addEventListener('click', function() {
      sendMessage(phoneNumber2);
  });
});


// --------------------------------Invitados---------------------------------


document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('sendButton').addEventListener('click', function() {
      const recipientNumber = '543816591298';
      const userName = document.getElementById('userFullName').value.trim();
      const userMessage = document.getElementById('customMessage').value.trim();
      const attendanceStatus = document.querySelector('input[name="attendanceOption"]:checked');

      if (!attendanceStatus) {
          alert('Por favor, selecciona si asistirás o no.');
          return;
      }

      if (userName === '') {
          alert('Por favor, completa todos los campos antes de enviar.');
          return;
      }

      const alimenticioSeleccionado = document.querySelector('.alimenticio input:checked');
      const restriccionAlimenticia = alimenticioSeleccionado ? alimenticioSeleccionado.nextElementSibling.textContent.trim() : 'N/A';

      const finalMessage = `*Presencia:* ${attendanceStatus.value}\n*Nombre y Apellido:* ${userName}\n*Restricción alimenticia:* ${restriccionAlimenticia}\n*Mensaje:* ${userMessage ? userMessage : 'N/A'}`;
      const whatsappLink = `https://wa.me/${recipientNumber}?text=${encodeURIComponent(finalMessage)}`;

      window.open(whatsappLink, '_blank');
      alert('Mensaje enviado');

      document.getElementById('userFullName').value = '';
      document.getElementById('customMessage').value = '';
      document.querySelectorAll('input[name="attendanceOption"]').forEach(radio => radio.checked = false);
      document.querySelectorAll('.alimenticio input').forEach(radio => radio.checked = false);
  });
});



// ----------------------- confirmacion ---------------------------



document.addEventListener('DOMContentLoaded', function() {
  // Definir los números de teléfono
  const recipientNumber1 = '542645578326'; // Número para el primer botón
  const recipientNumber2 = '542645121578'; // Número para el segundo botón

  // Función para enviar mensaje por WhatsApp
  function sendMessage(phoneNumber) {
      const userName = document.getElementById('userFullName').value.trim();
      const userMessage = document.getElementById('customMessage').value.trim();
      const attendanceStatus = document.querySelector('input[name="attendanceOption"]:checked');

      if (!attendanceStatus) {
          alert('Por favor, selecciona si asistirás o no.');
          return;
      }

      if (userName === '') {
          alert('Por favor, completa todos los campos antes de enviar.');
          return;
      }

      const finalMessage = `*Presencia:* ${attendanceStatus.value}\n*Nombre y Apellido:* ${userName}\n*Mensaje:* ${userMessage ? userMessage : 'N/A'}`;
      const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(finalMessage)}`;

      // Abre la URL de WhatsApp en una nueva pestaña
      window.open(whatsappLink, '_blank');

      // Mostrar mensaje de confirmación
      alert('Mensaje enviado');

      // Limpiar los campos de entrada
      document.getElementById('userFullName').value = '';
      document.getElementById('customMessage').value = '';
      document.querySelectorAll('input[name="attendanceOption"]').forEach(radio => radio.checked = false);

      // Volver al bloque de formulario
      document.getElementById('correo').scrollIntoView({ behavior: 'smooth' });
  }

  // Asignar eventos a los botones
  document.getElementById('confirmar1').addEventListener('click', function() {
      sendMessage(recipientNumber1);
  });

  document.getElementById('confirmar2').addEventListener('click', function() {
      sendMessage(recipientNumber2);
  });
});





function descargarArchivo() {
  // Mostrar la alerta "Descargado" durante 1 segundo
  setTimeout(function() {
    alert('Descargado');
  }, 1000);
}