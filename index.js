$(document).ready(myApp)


function myApp() {

    // Carrega a pagina inicial
    loadpage("user")
}

//Carrega uma pagina.
/* O caminho final da pagina é passado como parametro da funçao. */
function loadpage(page) {
    
    //Monta os caminhos para os componentes da pagina solicitada.
    const path = {
        html: `/pages/${page}/index.html`,
        css: `/pages/${page}/index.css`,
        js: `/pages/${page}/index.js`
    }

    $.get(path.html)
        .done((data)=> {
            $("main").html(data)
        })
        .fail((error) => {
            loadpage('e404')
        })
}