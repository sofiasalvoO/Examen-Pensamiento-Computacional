//Variables
let estado = 0;        // 0 = Inicio, 1 = Juego, 2 = Fin
let tamanoFigura = 40; // Escala de los elementos decorativos
let radioExplosion = 0;// Expansión de las partículas finales
let fotoFondo;         // Imagen de fondo (fondo.png)
let sonidoExplosion;   // Efecto de audio final (sonido.mp3)
let sonidoInicio;      // Efecto de audio inicial (inicio.mp3)

// Variables del juego
let puntaje = 0;       
let objX, objY;        // Coordenadas del objetivo actual
let tamanoObjetivo = 50; 

// Carga de archivos
function preload() {
  fotoFondo = loadImage("fondo.png");      
  sonidoInicio = loadSound("inicio.mp3");    
  sonidoExplosion = loadSound("sonido.mp3"); 
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(RGB, 255, 255, 255, 100); // Modo RGB con canal alpha de 0 a 100
  textAlign(CENTER, CENTER);
  moverObjetivo(); // Define la primera posición del objetivo
}

// Pantalla principal
function draw() {
  background(240, 237, 225); // Color crema Bauhaus real

  if (estado === 0) {
    pantallaInicio();
  } else if (estado === 1) {
    pantallaJuego();
  } else if (estado === 2) {
    pantallaExplosion();
  }
}

// Estado 0: Menú principal
function pantallaInicio() {
  tint(255, 255, 255, 30); 
  image(fotoFondo, 0, 0, width, height);

  // Cuadrados concéntricos
  rectMode(CENTER);
  noFill();
  strokeWeight(3);
  for (let i = 1; i <= 10; i++) {
    // CORRECCIÓN: Cuadrados concéntricos intercalados en Azul y Negro
    if (i % 2 === 0) stroke(33, 91, 166, 50); // Azul Bauhaus
    else stroke(40, 40, 40, 50);              // Negro/Gris oscuro
    rect(width / 2, height / 2, i * 40, i * 40);
  }

  // Textos de la interfaz
  fill(40, 40, 40); 
  noStroke();
  textSize(30);
  text("GRID COLLAPSE", width / 2, height / 2 - 240);
  
  textSize(17);
  text("Presiona ENTER para iniciar", width / 2, height / 2 + 240);
}

// Estado 1: Nivel interactivo
function pantallaJuego() {
  // Uso de map() vinculado al cursor
  tamanoFigura = map(mouseY, 0, height, 25, 70);     

  // Contador simple para intercalar colores uno a uno
  let contadorColumna = 0;

  // Retícula vertical fija
  for (let x = 60; x < width; x += 120) {
    stroke(40, 40, 40, 25); 
    strokeWeight(2);
    for (let offset = -15; offset <= 15; offset += 10) {
      line(x + offset, 100, x + offset, height - 100);
    }
    
    // Círculos decorativos en Rojo y Amarillo intercalados
    noStroke();
    if (contadorColumna % 2 === 0) {
      fill(219, 48, 34, 35); // Rojo Bauhaus
    } else {
      fill(237, 175, 43, 40); // Amarillo Bauhaus
    }
    
    contadorColumna += 1; 
    
    ellipse(x, 100, tamanoFigura);
    ellipse(x, height - 100, tamanoFigura);
  }

  // Lógica visual del objetivo
  let d = dist(mouseX, mouseY, objX, objY);
  if (d < tamanoObjetivo / 2) {
    fill(219, 48, 34, 90); // Al pasar el mouse: Rojo
  } else {
    fill(33, 91, 166, 85);  // En reposo: Azul
  }
  noStroke();
  ellipse(objX, objY, tamanoObjetivo);

  // Interfaz de usuario e indicaciones del nivel
  fill(40, 40, 40);
  textSize(20);
  text("PUNTOS: " + puntaje, width / 2, 40);
  
  textSize(16);
  fill(40, 40, 40, 70); 
  text("Haz clic en el círculo azul para sumar puntos. Si presionas fuera, pierdes.", width / 2, height - 50);
}

// Estado 2: Pantalla de Game Over
function pantallaExplosion() {
  tint(255, 255, 255, 20); 
  image(fotoFondo, 0, 0, width, height);

  randomSeed(99); 

  // Sistema de partículas expansivas con la paleta limpia (Rojo, Azul, Amarillo, Negro)
  for (let i = 0; i < 65; i++) {
    let opacidadCuerpo = map(radioExplosion, 0, width, 85, 0);
    if (i % 4 === 0) fill(219, 48, 34, opacidadCuerpo);      // Rojo
    else if (i % 4 === 1) fill(33, 91, 166, opacidadCuerpo);   // Azul
    else if (i % 4 === 2) fill(237, 175, 43, opacidadCuerpo);  // Amarillo
    else fill(40, 40, 40, opacidadCuerpo);                     // Negro
    
    noStroke();
    let direccionX = random(-1.2, 1.2);
    let direccionY = random(-1.2, 1.2);
    let posX = width / 2 + (direccionX * radioExplosion);
    let posY = height / 2 + (direccionY * radioExplosion);
    
    ellipse(posX, posY, 10 + (radioExplosion * 0.20));
  }

  radioExplosion += 8; 

  // Texto estático de fin de juego
  fill(40, 40, 40, 90);
  textSize(40);
  text("GAME OVER", width / 2, height / 2 - 20);
  
  textSize(17);
  fill(40, 40, 40, 90);
  text("PUNTAJE FINAL: " + puntaje, width / 2, height / 2 + 15);

  textSize(16);
  fill(40, 40, 40, 60);
  text("Haz clic para volver a jugar", width / 2, height / 2 + 60);
}

// --- LOGICA DE CONTROL Y POSICIONAMIENTO ---

function moverObjetivo() {
  let columnas = floor((width - 60) / 120);
  let colAleatoria = floor(random(0, columnas));
  
  objX = 60 + (colAleatoria * 120); 
  objY = random(200, height - 200);
}

function keyPressed() {
  if (estado === 0 && keyCode === ENTER) {
    estado = 1;
    puntaje = 0;
    sonidoInicio.play(); 
  }
}

function mousePressed() {
  if (estado === 1) {
    let d = dist(mouseX, mouseY, objX, objY); 
    
    if (d < tamanoObjetivo / 2) {
      puntaje += 1;
      moverObjetivo(); 
    } else {
      estado = 2;
      radioExplosion = 0; 
      sonidoExplosion.play(); 
    }
  } 
  else if (estado === 2) {
    estado = 0;
    sonidoExplosion.stop(); 
    sonidoInicio.stop(); 
    moverObjetivo();
  }
}