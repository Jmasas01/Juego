//RECOGIDA DE DATOS DE A QUE SE APUESTA COLOR Y NUMERO

var ingresoinicial = "0";

var posicioningresos = document.getElementById("ingre");

var posicionapuestas = document.getElementById("apuest");

var usuario = document.getElementById("nombre");

let choice = "";

document.getElementById("gener").addEventListener("change", function (e) {

    choice = e.target.value;

});


//CHEQUEO DE DATOS INTRODUCIDOS


document.getElementById("apuest").addEventListener("input", function(e) {

    valorapuesta = parseInt(this.value);

    if (valorapuesta > ingresoinicial) {
        
        this.value = "";
        
    }




    numero(e);

});

function numero(e) {
    try {
        var invalidChars = /[^0-9]/g;
        var inputValue = e.target.value;
        
        if (invalidChars.test(inputValue)) {
            e.target.value = inputValue.replace(invalidChars, "");
        }
    } catch (error) {
        console.error("An error occurred:", error);
    }

}

var textareaElement = document.getElementById("apuest");
textareaElement.addEventListener("input", numero);

// ANIMACION CON EL BOTON, GENERADO DE NUMERO DE RESULTADO Y RECOGIDA DE APUESTA


document.getElementById("boton").addEventListener("click", function (e) {

    giro();

});


    function giro(){
        var element = document.getElementById("giro1");
        element.classList.toggle("rotate-center");

        var element = document.getElementById("giro2");
        element.classList.toggle("rotate-center2");

        valorapuesta = document.getElementById("apuest").value;


        generado()
        
    }

        let condicion = "false"

        function generado(e){

            let color = "";
            
            if (condicion == "false") {
                condicion = "true";
            } else if (condicion == "true") {

                setTimeout(function() {

                    var randomNumber = Math.floor(Math.random() * 38);
                    document.getElementById('resl').value = randomNumber;
                    var textare = document.getElementById("resl")
                    
                    if (randomNumber % 2 === 0) {
                        
                        textare.classList.remove("red-background")
                        textare.classList.add("black-background")
                        color="negro"

                    } else if (randomNumber % 2 !== 0) {

                        textare.classList.remove("black-background")
                        textare.classList.add("red-background")
                        color="rojo"

                    } else if (randomNumber === 0) {

                        textare.classList.remove("black-background")
                        textare.classList.remove("red-background")
                        color="nocolor"

                    }


                    //GENERAR EL RESULTADO DE LAS APUESTAS

                    if (color === choice) {

                        valorapuesta = valorapuesta * 2
                        ingresoinicial = ingresoinicial + valorapuesta
                        valorapuesta = 0

                        posicionapuestas.value = valorapuesta;
                        posicioningresos.value = ingresoinicial;

                    } else if (randomNumber === choice) {

                        valorapuesta = valorapuesta * 38
                        ingresoinicial = ingresoinicial + valorapuesta

                        valorapuesta = 0

                        posicionapuestas.value = valorapuesta;
                        posicioningresos.value = ingresoinicial;
                    
                    } else if (color !== choice) {

                        ingresoinicial = ingresoinicial - valorapuesta
                        valorapuesta = valorapuesta * 0

                        valorapuesta = 0

                        posicionapuestas.value = valorapuesta;
                        posicioningresos.value = ingresoinicial;

                    }



                }, 5000);
                condicion = "false";
            }

        }

// CREACION DE POPUP


window.addEventListener('DOMContentLoaded', function() {
    var overlay = document.getElementById('overlay');
    overlay.style.display = 'flex';
    

});


//CIERRE DEL POPUP Y RECOGIDA DE DATOS


document.getElementById("closeup").addEventListener('click', function() {

    closePopup();

})

function closePopup() {
    
        ingresoinicial = parseInt(document.getElementById("num").value);
        document.getElementById('ingre').value = ingresoinicial;
        // ingresoinicial = parseInt(this.value);
    
    var popup = document.getElementById("overlay");
    popup.style.visibility = "hidden";

}


// CREACION DE OPCION DE COLOR O NUMERO Y ACTIVACIÖN DEL BOTOTN


function cambio() {
    var select = document.getElementById("cmb");
    var selectedValue = select.options[select.selectedIndex].value;
    var elementDiv = document.getElementById("gener");

    if (selectedValue === "color") {
        elementDiv.innerHTML = '<section class="cuadrotexto" id="cuadrocolor"><input type="radio" id="rojo" value="rojo" checked name="color"><label for="rojo">Rojo</label><input type="radio" id="negro" value="negro" name="color"><label for="negro">Negro</label></section>'
    } else if (selectedValue === "numero") {
        elementDiv.innerHTML = '<section class="cuadrotexto">¿A qué número apuestas?: <input type="number" id="val" value="1" min="1" max="38" placeholder=""></section>';
    } else if (selectedValue === "vacio") {
        elementDiv.innerHTML = '';
    }

}


var dropdown = document.getElementById("cmb");
var button = document.getElementById("boton");

dropdown.addEventListener("change", function () {

        if (dropdown.value !== "vacio") {
            button.disabled = false;
        } else {
            button.disabled = true;
        }

    }
);


// FUNCION DE REINICIO DEL MARCADOR DE INGRESOS

document.getElementById("reinici").addEventListener("click", function() {

    var popup = document.getElementById("overlay");
    popup.style.visibility = "";

})

// FINALIZACION DE LAS APUESTA Y SALIDA DEL JUEGO

document.getElementById("finali").addEventListener('click', function() {

    final();

});

function final() {
    
    var overlay = document.getElementById('cobro');
    overlay.style.display = 'flex';

    var frase = "Felicidades al Usuario: " + usuario.value + " por haber ganado " + ingresoinicial + "€.";
    document.getElementById("fin").textContent = frase;
}

// BOTON DE RECARGA

document.getElementById("popupi").addEventListener('click', function() {

    window.location.reload(true)

})

// BOTON DE CIERRE

document.getElementById("closer").addEventListener('click', function () {
    window.close();
})
