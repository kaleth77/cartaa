// ===============================
// ESTRELLAS
// ===============================

const estrellas = document.getElementById("estrellas");

for(let i = 0; i < 80; i++){

    const estrella = document.createElement("div");

    estrella.className = "estrella";

    estrella.style.left = Math.random()*100 + "vw";
    estrella.style.top = Math.random()*100 + "vh";

    estrella.style.animationDelay = Math.random()*3 + "s";
    estrella.style.animationDuration = (2 + Math.random()*3) + "s";

    estrellas.appendChild(estrella);

}

// ===============================
// CARTA
// ===============================

const carta = `Feliz cumpleaños, reina hermosa. Que Dios te bendiga y te siga bendiciendo siempre.

Esta carta, más que para felicitarte, era para decirte de verdad que lo siento mucho. Quiero pedirte una disculpa, no solo a ti, sino también a tus padres, porque no solo te falté el respeto a ti, sino también a ellos al momento de faltarte.

No es nada para decirte que regreses, ni mucho menos. Solo espero de verdad que me disculpes. Y no es solo por decir “me disculpo” y ya, sino porque en serio estoy arrepentido. Recordé una reflexión inspirada en las palabras de Jesús:

“No nos disculpamos para ser perdonados; nos disculpamos porque estamos arrepentidos. El perdón es un obsequio que nos hace la otra persona”.

Pues solo eso, niña. De verdad espero que lo leas todo. También quiero decirte que, si algún día quisieras conocerme de nuevo, yo estaría dispuesto. Creo que, si me llegaras a conocer ahora, te asombrarías de todo lo bueno que he cambiado.

Pero, bueno, feliz cumpleaños, reina hermosa. Te quiero muchísimo. Mi fecha favorita siempre será el 18/05/2022, así sea que no te tenga. Como te dije, no busco que vuelvas ni nada. Me siento feliz con solo saber que tú estás feliz y bien.

Guardé solo lo bueno de ti,
dieciocho veces en el día te recuerdo,
y aunque intente borrarte de mí,
siempre vuelvo al mismo recuerdo.

Te quiero, mi salvadora. 💜`;

const sobre = document.getElementById("sobre");
const sobreAbierto = document.getElementById("sobreAbierto");
const inicio = document.getElementById("inicio");
const cartaDiv = document.getElementById("carta");
const texto = document.getElementById("texto");

sobre.addEventListener("click", abrirCarta);

// ===============================
// ABRIR SOBRE
// ===============================

function abrirCarta(){

    sobre.style.pointerEvents="none";

    sobre.classList.add("abrir");

    setTimeout(()=>{

        sobre.style.display="none";

        sobreAbierto.style.display="block";

    },650);

    setTimeout(()=>{

        inicio.style.opacity="0";
        inicio.style.transition=".8s";

    },1200);

    setTimeout(()=>{

        inicio.style.display="none";

        cartaDiv.style.display="flex";

        escribir();

    },1800);

}

// ===============================
// MAQUINA DE ESCRIBIR
// ===============================

let i = 0;

function escribir(){

    if(i < carta.length){

        texto.innerHTML =
        carta.substring(0,i+1) +
        '<span style="color:#8a4ec8;">|</span>';

        i++;

        setTimeout(escribir,18);

    }else{

        texto.innerHTML = carta;

    }

}
