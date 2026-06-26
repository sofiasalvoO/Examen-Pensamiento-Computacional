# Examen-Pensamiento-Computacional
proceso de creación examen
# BAUHAUS GRID

## Autor

Sofía Salvo

---

# Descripción general

BAUHAUS GRID es un sistema visual interactivo desarrollado en p5.js inspirado en los principios de la Bauhaus. El proyecto utiliza formas geométricas simples, una retícula estructurada y una paleta de colores primarios para construir una experiencia interactiva basada en la precisión visual y la toma de decisiones del usuario.

El sistema se compone de tres estados: una pantalla de inicio, una experiencia principal de interacción y una pantalla final. A través del uso del mouse y el teclado, el usuario modifica el comportamiento del sistema y genera respuestas visuales y sonoras.

---

# Descripción objetiva

## ¿Qué es el proyecto?

Es un minijuego interactivo donde el usuario debe encontrar y seleccionar correctamente un objetivo dentro de una composición inspirada en la Bauhaus.

## ¿Qué se ve en pantalla?

* Retículas verticales.
* Formas geométricas simples.
* Composición basada en círculos y cuadrados.
* Objetivo interactivo.
* Pantallas de inicio y final.
* Animación de partículas.

## Inputs

* Tecla ENTER.
* Movimiento del mouse.
* Clic del mouse.

## Outputs

* Cambio de tamaño de elementos gráficos.
* Cambio de color del objetivo.
* Actualización del puntaje.
* Animación final de partículas.
* Reproducción de sonidos.

---

# Descripción conceptual

## Idea central

Explorar cómo los principios visuales de la Bauhaus pueden transformarse en un sistema computacional interactivo.

## Referente de diseño

Bauhaus.

## Referentes visuales

* Uso de formas geométricas básicas.
* Organización mediante retículas.
* Paleta de colores primarios.
* Relación entre función y forma.

## Principio de diseño explorado

La simplificación visual mediante elementos geométricos esenciales y estructuras ordenadas.

---

# Sistema computacional

## Inputs

* ENTER para iniciar.
* Movimiento del mouse.
* Clic del mouse.

## Procesos

* Cálculo de distancias entre cursor y objetivo.
* Generación aleatoria de posiciones.
* Transformación de variables mediante map().
* Cambio de estados.
* Reproducción de sonido.

## Estados

### Estado 0

Pantalla de inicio.

### Estado 1

Juego interactivo.

### Estado 2

Pantalla final y explosión visual.

## Eventos

* Presionar ENTER.
* Acertar un objetivo.
* Fallar un clic.
* Reiniciar la experiencia.

## Outputs

* Visualización de figuras geométricas.
* Cambios de color.
* Actualización de puntaje.
* Sonidos.
* Animación final.

---

# Explicación de la interacción

El usuario inicia la experiencia mediante el teclado.

Durante el juego, el movimiento vertical del mouse modifica el tamaño de los elementos visuales utilizando la función map().

El usuario debe hacer clic sobre el objetivo. Si acierta, aumenta el puntaje y el objetivo cambia de posición mediante random(). Si falla, el sistema cambia al estado final.

En el estado final se activa una animación de partículas y un efecto sonoro. Posteriormente el usuario puede reiniciar la experiencia.

---

# Recursos multimedia utilizados

## Imagen

fondo.png

Función:
Aporta contexto visual y estructura gráfica a la composición.

## Sonidos

inicio.mp3

sonido.mp3

Función:
Entregar retroalimentación auditiva durante cambios de estado e interacciones.

---

# Registro visual

## Referentes

* Afiches Bauhaus.
* Composiciones geométricas modernistas.
* Diseños basados en retículas.

## Bocetos e iteraciones

Se realizaron pruebas de composición, color, tamaño de figuras, organización espacial y retroalimentación visual.

## Capturas

(Incluir capturas del proceso de desarrollo y versiones previas del proyecto).

---

# Reflexión final

Durante el desarrollo del proyecto fue necesario organizar la lógica del sistema mediante estados diferenciados y funciones específicas para cada etapa.

Uno de los principales desafíos fue equilibrar la simplicidad visual característica de la Bauhaus con la creación de una experiencia interactiva clara y dinámica.

A través del uso de variables, condicionales, bucles, eventos, multimedia e interacción, fue posible construir un sistema computacional coherente que transforma principios de diseño histórico en una experiencia digital contemporánea.
