$(document).ready(myHome)

/**
 * Função principal da pagina "home"
 */
function myHome() {
    /**
     * Altera o titulo da pagina quando "home" for acessado.
     */
    changeTitle()

    $.get(app.apiArticlesURL)
        .done((data) => {
            console.log(data)
        
            // data.forEach(art => {

            //     console.log(
            //         art.id,
            //         art.thumbnail,
            //         art.title,
            //         art.resume                
            //         )
            // })
    })
}