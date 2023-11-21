var imagens = [
    "https://conteudo.imguol.com.br/c/esporte/8a/2021/08/26/patricia-pereira-daniel-dias-joana-maria-e-talisson-glock-bronze-o-1629990551810_v2_1920x1405.jpg",
    "https://blog.sporti.com.br/wp-content/uploads/2021/09/paralimpiadas-1.jpg",
    "https://www.redebrasilatual.com.br/wp-content/uploads/2021/08/goalball-paralimpiadas.jpg",
    "https://blog.amigopanda.com.br/wp-content/uploads/2021/04/paralimpiadas-capa.jpg",
    "https://opopular.com.br/image/policy%3A1.2205452%3A1676217089%2Fimage.jpg%3Ff%3D3x2",
    "https://ichef.bbci.co.uk/news/640/cpsprodpb/174E7/production/_120336459_b89e18a0-88a2-41dc-89a0-462e6c1bdcfe.jpg"
];

var index = 0;

function trocarImagem() {
    var imagem = document.getElementById("img-principal");
    imagem.style.opacity = 0; // Define a opacidade como 0 para iniciar a transição

    setTimeout(function() {
        imagem.src = imagens[index];
        index = (index + 1) % imagens.length;

        // Define a opacidade como 1 para finalizar a transição
        imagem.style.opacity = 1;
    }, 500); // Tempo correspondente à duração da transição em milissegundos
}

setInterval(trocarImagem, 3000);

document.getElementById('btnToggle').addEventListener('click', function() {
    toggleMenu();
});

function toggleMenu() {
    var menu = document.getElementById('menu');
    if (menu.style.width === '250px') {
        menu.style.width = '0';
    } else {
        menu.style.width = '250px';
    }
}
function mostrarCaixaAviso() {
    var caixaAviso = document.getElementById("caixaAviso");
    caixaAviso.style.display = "block";

    // Oculta a caixa de aviso após 3 segundos (3000 milissegundos)
    setTimeout(function() {
        fecharCaixaAviso();
    }, 3000);
}

function fecharCaixaAviso() {
    var caixaAviso = document.getElementById("caixaAviso");
    caixaAviso.style.display = "none";
}