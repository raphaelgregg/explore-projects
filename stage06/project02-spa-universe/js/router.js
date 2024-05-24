export class Router {
  // adiciona uma nova rota ao objeto this.route, associando um nome de rota (routeName) a uma página (page).
  add(routeName, page) {
    this.route[routeName] = page
  }

  route(event) {
    // recebe o evento anchors
    event = event || window.event
    // remove event padrão
    event.preventDefault();

     /* permite adicionar entradas à pilha de histórico de sessão do navegador, o que significa que você pode alterar a URL na barra de endereço sem recarregar a página. Isso é particularmente útil para aplicações de página única (SPAs), onde o usuário navega por diferentes visualizações ou estados sem acionar recarregamentos completos da página 
     
     window.history.pushState(estado, título, url);
     
     estado: Um objeto contendo dados de estado. Pode ser qualquer coisa que você queira associar à nova entrada de histórico.
     
     título: A maioria dos navegadores atualmente ignora este parâmetro, então você pode passar uma string vazia.
     
     url: A nova URL a ser exibida na barra de endereço do navegador. Deve ser da mesma origem que a URL atual.
    */
    window.history.pushState({}, "", event.target.href)

    // CHAMA FUNÇÃO LOCAL HANDLE
    this.handle()
  }

  handle() {
    // A expressão const { pathname } = window.location utiliza a sintaxe de desestruturação de objetos do JavaScript para extrair a propriedade pathname do objeto window.location. O pathname contém a parte da URL que vem depois do domínio e antes de qualquer hash (#) ou query string (?).
    const { pathname }  = window.location

    // atribui a constat route o endereço atual do pathname na url , caso nao exita retornar a rota 404
    const route = this.route[pathname] || this.route[404]

    // O código que você forneceu usa a API Fetch para buscar conteúdo HTML de uma rota específica e atualiza o conteúdo de um elemento na página com esse HTML. Esse tipo de abordagem é útil em Single Page Applications (SPAs) onde você quer carregar conteúdo dinamicamente sem recarregar a página inteira.
    fetch(route)
    .then(data => data.text())
    .then(html => {
      // Inserir o conteúdo extraído no elemento #app
      document.querySelector('#app').innerHTML = html;
    })
  }
}