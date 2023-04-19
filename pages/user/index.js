$(document).ready(myView)

// Função principal da página "user".
function myView() {

    // Obtém o id do artigo da sessão.
    const artId = sessionStorage.article

    // Inicializa a variável de saída.
    var article = ''

    // Obtém o artigo da API, pelo ID.
    $.get(app.apiArticleURL + artId)

        // Armazena o artigo em 'art'.
        .done((art) => {

            // Monta a view (HTML do artigo).
            article += `
<h2>${art.title}</h2>
<div>${art.content}</div>            
            `

            // Exibe na página.
            $('article').html(article)

            // Altera o título da página.
            changeTitle(art.title)

            // Caso a página não exista...
        }).fail((error) => {

            // Mostra a página 404.
            loadpage('e404', false)
        })

}