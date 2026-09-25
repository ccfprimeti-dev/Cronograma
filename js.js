let tempo;
const limite = 20000; // 20 segundos

function resetarTempo(){

    clearTimeout(tempo);

    tempo = setTimeout(() => {

        window.location.href = "index.html"; // volta para tela inicial

    }, limite);
}

document.addEventListener("click", resetarTempo);
document.addEventListener("touchstart", resetarTempo);
document.addEventListener("mousemove", resetarTempo);

resetarTempo();