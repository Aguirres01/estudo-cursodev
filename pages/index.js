function Home (){

    return <h1> Oi delícia! Que pena que vc vai demorar. Vou ver se consigo fazer a janta antes de vc ir pro culto, Te amo!!!</h1>
    function adicionarImagem() {
        // Crie um elemento de imagem
        var imagemElement = document.createElement('img');
        
        // Defina o caminho da imagem
        imagemElement.src = 'https://unsplash.com/pt-br/t/street-photography';

        // Adicione atributos adicionais, se necessário
        imagemElement.alt = 'Descrição da Imagem';

        // Adicione a imagem ao contêiner desejado no DOM
        var imagemContainer = document.getElementById('imagemContainer');
        imagemContainer.appendChild(imagemElement);
    }

}

export default Home;