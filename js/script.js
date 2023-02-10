const estilosCalculadora = (calculadora) => {
  calculadora.style.width = '400px';
  calculadora.style.height = '500px';
  calculadora.style.backgroundColor = '#ddd';
  calculadora.style.margin = '0 auto';
  calculadora.style.padding = '20px';
  calculadora.style.textAlign = 'center';
};

const estilosVentana = (ventana) => {
  ventana.type = 'text';
  ventana.readOnly = true;
  ventana.style.width = '100%';
  ventana.style.height = '50px';
  ventana.style.fontSize = '36px';
  ventana.style.textAlign = 'right';
};

const estilosBoton = (boton) => {
  boton.style.width = '70px';
  boton.style.height = '70px';
  boton.style.margin = '10px';
  boton.style.fontSize = '24px';
  boton.style.backgroundColor = '#fff';
};

const crearCalculadora = () => {
  const calculadora = document.createElement('div');
  calculadora.id = 'calculadora';
  estilosCalculadora(calculadora);

  const ventana = document.createElement('input');
  ventana.id = 'display';
  estilosVentana(ventana);
  ventana.value = '0';
  calculadora.appendChild(ventana);

  const contenedorBotones = document.createElement('div');
  contenedorBotones.id = 'contenedorBotones';
  contenedorBotones.style.width = '100%';
  calculadora.appendChild(contenedorBotones);

  const buttons = ['CE', '←', '%', '+', '7', '8', '9', '-', '4', '5', '6', 'X', '1', '2', '3', '÷', '0', '±', ',', '='];
  buttons.forEach(function (value) {
    const boton = document.createElement('button');
    boton.textContent = value;
    estilosBoton(boton);

    boton.addEventListener("click", function () {
      switch (value) {
        case 'CE':
          ventana.value = '0';
          break;
        case '←':
          ventana.value = ventana.value.length <= 1 ? '0' : ventana.value.slice(0, -1);
          break;
        case '%':
          // Falta Funcionalidad
          break;
        case '+':
          // Falta Funcionalidad
          break;
        case '-':
          // Falta Funcionalidad
          break;
        case 'X':
          // Falta Funcionalidad
          break;
        case '÷':
          // Falta Funcionalidad
          break;
        case ',':
          ventana.value = ventana.value.includes(',') ? ventana.value : ventana.value + ',';
          break;
        case '=':
          // Falta Funcionalidad
          break;
        case '±':
          ventana.value = ventana.value != '0' ? (ventana.value.includes('-') ? ventana.value.slice(1) : '-' + ventana.value) : ventana.value;
          break;
        case '0':
          ventana.value = ventana.value != '0' ? ventana.value + value : ventana.value;
          break;
        default:
          ventana.value = ventana.value == '0' ? value : ventana.value + value;
          break;
      }
    });

    document.addEventListener("keydown", function (event) {
      switch (event.key) {
        case 'Delete':
          ventana.value = '0';
          break;
        case 'Backspace':
          // No funciona, al pulsar la tecla se borra el contenido de la ventana
          ventana.value = ventana.value.length <= 1 ? '0' : ventana.value.slice(0, -1);
          break;
      }
    });

    contenedorBotones.appendChild(boton);
  });

  document.body.appendChild(calculadora);
}

crearCalculadora();
