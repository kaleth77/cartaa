// ===============================
// FECHA DE APERTURA
// ===============================

// Cambia el año si lo necesitas
const fechaApertura = new Date("2026-07-25T00:00:00");

// ===============================
// ELEMENTOS
// ===============================

const locked = document.getElementById("locked");
const letterSection = document.getElementById("letterSection");
const countdown = document.getElementById("countdown");
const letterText = document.getElementById("letterText");
const particles = document.getElementById("particles");

// ===============================
// CARTA
// ===============================

const mensaje = `

Feliz cumpleaños, reina hermosa. Que Dios te bendiga y te siga bendiciendo siempre.

Esta carta, más que para felicitarte, era para decirte de verdad que lo siento mucho. Quiero pedirte una disculpa, no solo a ti, sino también a tus padres, porque no solo te falté el respeto a ti, sino también a ellos al momento de faltarte.

No es nada para decirte que regreses, ni mucho menos. Solo espero de verdad que me disculpes. Y no es solo por decir “me disculpo” y ya, sino porque en serio estoy arrepentido. Recordé una reflexión inspirada en las palabras de Jesús:

"No nos disculpamos para ser perdonados; nos disculpamos porque estamos arrepentidos. El perdón es un obsequio que nos hace la otra persona."

Pues solo eso, niña. De verdad espero que lo leas todo. También quiero decirte que, si algún día quisieras conocerme de nuevo, yo estaría dispuesto. Creo que, si me llegaras a conocer ahora, te asombrarías de todo lo bueno que he cambiado.

Pero, bueno, feliz cumpleaños, reina hermosa. Te quiero muchísimo. Mi fecha favorita siempre será el 18/05/2022, así sea que no te tenga. Como te dije, no busco que vuelvas ni nada. Me siento feliz con solo saber que tú estás feliz y bien.

Guardé solo lo bueno de ti,
dieciocho veces en el día te recuerdo,
y aunque intente borrarte de mí,
siempre vuelvo al mismo recuerdo.

Te quiero, mi salvadora. 💜

`;

// ===============================
// CUENTA REGRESIVA
// ===============================

function actualizarContador(){

    const ahora = new Date();

    const diferencia = fechaApertura - ahora;

    if(diferencia <= 0){

        abrirCarta();

        return;

    }

    const dias = Math.floor(diferencia / 86400000);

    const horas = Math.floor((diferencia % 86400000)/3600000);

    const minutos = Math.floor((diferencia % 3600000)/60000);

    const segundos = Math.floor((diferencia % 60000)/1000);

    countdown.innerHTML =
    `${dias} días ${horas} h ${minutos} min ${segundos} s`;

}

setInterval(actualizarContador,1000);

actualizarContador();

// ===============================
// ABRIR CARTA
// ===============================

function abrirCarta(){

    locked.style.display="none";

    letterSection.style.display="flex";

    const sobre=document.getElementById("bigEnvelope");

    const carta=document.querySelector(".letter");

    sobre.classList.add("abrirSobre");

    setTimeout(()=>{

        sobre.style.display="none";

        carta.classList.add("mostrarCarta");

        escribir();

        lluviaPetalos();

    },1700);

}

// ===============================
// MAQUINA DE ESCRIBIR
// ===============================

function escribir(){

    if(i<mensaje.length){

        letterText.innerHTML=
        mensaje.substring(0,i+1)+
        '<span class="cursor"></span>';

        i++;

        setTimeout(escribir,25);

    }else{

        letterText.innerHTML=mensaje;

    }

}

// ===============================
// ESTRELLAS
// ===============================

for(let i=0;i<90;i++){

    let estrella=document.createElement("div");

    estrella.className="sparkle";

    estrella.style.left=Math.random()*100+"vw";

    estrella.style.top=Math.random()*100+"vh";

    estrella.style.animationDelay=Math.random()*5+"s";

    estrella.style.animationDuration=2+Math.random()*4+"s";

    particles.appendChild(estrella);

}
// =======================
// LLUVIA DE PÉTALOS
// =======================

function crearPetalo(){

    const p=document.createElement("div");

    p.className="petalo";

    p.innerHTML="🌸";

    p.style.left=Math.random()*100+"vw";

    p.style.animationDuration=
    (6+Math.random()*6)+"s";

    p.style.fontSize=
    (18+Math.random()*18)+"px";

    document.body.appendChild(p);

    setTimeout(()=>{

        p.remove();

    },12000);

}

function lluviaPetalos(){

    setInterval(crearPetalo,350);

}
