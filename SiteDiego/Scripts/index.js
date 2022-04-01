
var header = document.getElementById('header');
var navegationHeader = document.getElementById('nav_header');
var conteudo = document.getElementById('conteudo');
var showSidebar = false;

function icosidebar() {

    showSidebar = !showSidebar;
    if (showSidebar) {
        navegationHeader.style.marginLeft = '-20vw';
        navegationHeader.style.animationName ='showSidebar';
        conteudo.style.filter = 'blur(2px)'

    }else {
        navegationHeader.style.marginLeft = '-50vw';
        navegationHeader.style.animationName ='';
        conteudo.style.filter = ''
    }
}

function closedSidebar() {
        if (showSidebar) {
            icosidebar();
        }
}

window.addEventListener('resize', function(event) {
    if (this.window.innerWidth > 768 && showSidebar)  {
        icosidebar();
    }
})