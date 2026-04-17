// 1. Definição do Array (Fechando as chaves e colchetes corretamente)
const meusProjetos = [
  {
    nome: "Sistema Report Fire",
    descricao: "Sistema completo de denúncias de queimadas com geolocalização, upload de imagens e acompanhamento de status em tempo real.",
    link: "#"
  }
];

// 2. Seleção do container
const container = document.getElementById('lista-projetos');

// 3. Função para renderizar os projetos
const renderizarProjetos = () => {
  // Verifica se o container existe para evitar erros no console
  if (!container) return;

  // Limpa o container antes de inserir (bom para evitar duplicatas)
  container.innerHTML = '';

  meusProjetos.forEach(projeto => {
    const card = document.createElement('div');
    card.className = 'card-projeto';

    // Usando textContent para os textos (mais seguro contra ataques XSS)
    const titulo = document.createElement('h3');
    titulo.textContent = projeto.nome;

    const desc = document.createElement('p');
    desc.textContent = projeto.descricao;

    const link = document.createElement('a');
    link.href = projeto.link;
    link.textContent = 'Saiba mais';
    link.target = '_blank';
    link.rel = 'noopener noreferrer'; // Segurança extra para links externos

    // Adiciona os elementos ao card e o card ao container
    card.append(titulo, desc, link);
    container.appendChild(card);
  });
};

// 4. Executa a função
renderizarProjetos();