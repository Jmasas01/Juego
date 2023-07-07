<!-- |----------------------------------------REDACCIÓN DEL PROYECTO----------------------------------------| -->

1º Introducción y Funcionalidad

    El proyecto elegido en este caso se basará en la creación de una ruleta de casino mediante el uso de imagenes, gifs, animaciones de CSS y JavaScript, mucho JavaScript, todo con el objetivo de conseguir que la ruleta genere un resultado aleatorio con los parametros que se le dará, en este caso, esos parametros son las 38 posibilidades que se darán en la propia ruleta. 

    El resultado saldrá por un cuadro y mostrará, tanto el numero, como el color asignado a ese numero dentro de la ruleta.

    Por debajo de la ruleta se diseñará un botón que nos permita activar tanto la animación CSS asignada a la ruleta, como ha que se genere el Número de resultado, a los número Pares se les asignará el color negro y a los impares el rojo, todo lo cual será mostrado por el cuadro antes mencionado.

    Una vez se entre en la página un pop up requerirá un nombre, a que se quiere apostar (color o número), y la cantidad a ingresar:

        En caso de que se apueste por color y se acierte la cantidad apostada se multiplicará por 5.

        En caso de que se apueste por número y se acierte la cantidad apostada se multiplicará por 10.

        En caso de que el número generado sea 0 se volverá a hacer una tirada.

    Se creará un marcador en la esquina inferior derecha en el que se mostrará la cantidad total ingresada y uno al lado en el que se permitirá poner una cantidad inferior a la ingresada y esta será la cantidad a apostar.

    Por último, en el centro de la página se pondra un gran marcador en el que saldrá el numero generado y su color asignado.

2º Pasos a seguir para su ejecución.

    1º Al cargar la página, un pop-up solicitará dos datos: El nombre del Usuario y la cantidad inicial que este ingresará (mínimo 500€)

    2º Una vez hecho esto se debe elegir una cantidad de dinero que se apostará en esa tirada (dicha cantidad no podrá superar, la cantidad inicial que se ingresó)

    3º Posteriormente se deberá elegir sobre que se hace la apuesta; sobre dos colores; rojo y negro o sobre un numero del 1 al 38

    4º Una vez seleccionada la apuesta se pulsará el boton de lanzar, la ruleta comenzará a girar y tras pararse generará un número aleatorio y dependiendo de ese numero el fondo del espacio en el que aparece el numero será de un color (Negro) u otro (Rojo)

    5ª Dependiendo de la elección previa (número o color) la cantidad apostada será multiplicada por 2 (Acierta el color) o por 38 (acierta el número)

    En caso de quedarse sin dinero, se puede hacer un ingreso adicional para poder seguir apostando; pulsando un boton en la parte superior central de la pantalla.

    Cuando se quiera dejar de apostar y marcharse con las ganancias se deberá pulsar el boton de "Finalizar y Cobrar" y mostrará un pop-up enseñando las ganancias de ese usuario en concreto.

    En ese momento se podrá elegir una de dos opciones: Pulsar el botón de "¿Desea seguir jugando?" en cuyo caso recargará la página para poder hacer una nueva partida, o se podrá pulsar el botón de "¿Desea Salir?", en cuyo caso procederá al cierre inmediato de la ventana en la que se juega.