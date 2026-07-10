// ===============================
// CONFIGURACIÓN
// ===============================

// true = abre inmediatamente
// false = espera la fecha indicada
const MODO_PRUEBA = true;

// Fecha para cuando desactives el modo prueba
const FECHA_APERTURA = new Date("2026-07-25T00:00:00");

// ===============================
// ELEMENTOS
// ===============================

const estrellas = document.getElementById("estrellas");
const petalos = document.getElementById("petalos");

const inicio = document.getElementById("inicio");
const carta = document.getElementById("carta");

const contenedorSobre = document.getElementById("contenedorSobre");
const sobre = document.getElementById("sobre");
const sobreAbierto = document.getElementById("sobreAbierto");

const papel = document.querySelector(".papel");
const texto = document.getElementById("texto");

// ===============================
// ESTRELLAS
// ===============================

for(let i=0;i<90;i++){

    const e=document.createElement("div");

    e.className="estrella";

    e.style.left=Math.random()*100+"vw";
    e.style.top=Math.random()*100+"vh";

    e.style.animationDelay=Math.random()*3+"s";
    e.style.animationDuration=(2+Math.random()*3)+"s";

    estrellas.appendChild(e);

}

// ===============================
// MENSAJE
// ===============================

const mensaje=`Feliz cumpleaños, reina hermosa. Que Dios te bendiga y te siga bendiciendo siempre.

Esta carta, más que para felicitarte, era para decirte de verdad que lo siento mucho. Quiero pedirte una disculpa, no solo a ti, sino también a tus padres, porque no solo te falté el respeto a ti, sino también a ellos al momento de faltarte.

No es nada para decirte que regreses, ni mucho menos. Solo espero de verdad que me disculpes.

"No nos disculpamos para ser perdonados; nos disculpamos porque estamos arrepentidos. El perdón es un obsequio que nos hace la otra persona."

También quiero decirte que, si algún día quisieras conocerme de nuevo, yo estaría dispuesto. Creo que, si me llegaras a conocer ahora, te asombrarías de todo lo bueno que he cambiado.

Pero bueno...

Feliz cumpleaños, reina hermosa.

Te quiero muchísimo.

Mi fecha favorita siempre será el 18/05/2022.

Guardé solo lo bueno de ti,
dieciocho veces en el día te recuerdo,
y aunque intente borrarte de mí,
siempre vuelvo al mismo recuerdo.

Te quiero, mi salvadora. 💜`;

// ===============================
// ABRIR
// ===============================

if(MODO_PRUEBA){

    contenedorSobre.onclick=abrirCarta;

}else{

    comprobarFecha();

    setInterval(comprobarFecha,1000);

}

function comprobarFecha(){

    if(new Date()>=FECHA_APERTURA){

        contenedorSobre.onclick=abrirCarta;

    }

}

// ===============================
// ANIMACIÓN
// ===============================

function abrirCarta(){

    contenedorSobre.onclick=null;

    sobre.classList.add("abrirSobre");

    document.getElementById("sello").style.display="none";

    setTimeout(()=>{

        sobre.style.display="none";

        sobreAbierto.style.display="block";

    },700);

    setTimeout(()=>{

        inicio.style.opacity="0";

    },1300);

    setTimeout(()=>{

        inicio.style.display="none";

        carta.style.display="flex";

        papel.classList.add("mostrarCarta");

        lluviaPetalos();

        escribir();

    },1800);

}

// ===============================
// MÁQUINA DE ESCRIBIR
// ===============================

let i=0;

function escribir(){

    if(i<mensaje.length){

        texto.innerHTML=

        mensaje.substring(0,i+1)+
        '<span class="cursor"></span>';

        i++;

        setTimeout(escribir,18);

    }else{

        texto.innerHTML=mensaje;

    }

}

// ===============================
// PÉTALOS
// ===============================

function crearPetalo(){

    const p=document.createElement("div");

    p.className="petalo";

    p.innerHTML="🌸";

    p.style.left=Math.random()*100+"vw";

    p.style.animationDuration=(6+Math.random()*5)+"s";

    p.style.fontSize=(18+Math.random()*15)+"px";

    petalos.appendChild(p);

    setTimeout(()=>{

        p.remove();

    },11000);

}

function lluviaPetalos(){

    setInterval(crearPetalo,350);

}
