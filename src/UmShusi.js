document.addEventListener('DOMContentLoaded', () => {

  const searchInput = document.getElementById("search");
  const suggestions = document.getElementById("suggestions");
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  const modalNome = document.getElementById('modal-nome');
  const modalDesc = document.getElementById('modal-desc');
  const modalTags = document.getElementById('modal-tags');
  const decrementBtn = document.getElementById('decrement');
  const incrementBtn = document.getElementById('increment');
  const quantitySpan = document.getElementById('quantity');
  const closeModalBtn = modal.querySelector('button');
  const filtrosNav = document.getElementById('filtros-nav');
  const produtos = [
      { nome: "Hot Roll", preco: "R$25,90", img: "src/img/Produtos/Hot Roll.jpg", desc: "Deliciosos rolos de sushi empanados e fritos, com recheio de salmão e cream cheese.", tags: ["quente", "crocante", "favorito"], categoria: "Sushis" },
      { nome: "Temaki de Salmão", preco: "R$29,90", img: "src/img/Produtos/Temaki de Salmão.jpg", desc: "Cone de alga recheado com arroz, salmão fresco e cebolinha.", tags: ["frio", "salmão"], categoria: "Sushis" },
      { nome: "Uramaki", preco: "R$24,90", img: "src/img/Produtos/Urakami.jpg", desc: "Sushi enrolado com o arroz por fora, recheado com salmão e manga.", tags: ["frio"], categoria: "Sushis" },
      { nome: "Sashimi", preco: "R$32,90", img: "src/img/Produtos/Sashimi.jpg", desc: "Fatias finas de peixe fresco, servido puro.", tags: ["frio", "clássico"], categoria: "Sashimis" },
      { nome: "Sushi de Camarão", preco: "R$27,90", img: "src/img/baixados.jpeg", desc: "Bolinho de arroz coberto com camarão cozido.", tags: ["frio", "camarão"], categoria: "Sushis" },
      { nome: "Sushi Vegano", preco: "R$23,90", img: "src/img/Produtos/Sushi Vegano.jpg", desc: "Opção vegana com pepino, manga e abacate.", tags: ["vegano", "frio"], categoria: "Sushis" },
      { nome: "Gyoza", preco: "R$18,90", img: "src/img/Produtos/Gyoza.jpg", desc: "Pastéis japoneses recheados com carne e vegetais.", tags: ["quente"], categoria: "Entradas" },
      { nome: "Sunomono", preco: "R$15,90", img: "src/img/Produtos/Sunomono.jpg", desc: "Salada de pepino agridoce com gergelim.", tags: ["salada", "vegano"], categoria: "Entradas" },
      { nome: "Yakissoba", preco: "R$28,90", img: "src/img/Produtos/Yakissoba.jpg", desc: "Macarrão frito com vegetais e carne.", tags: ["quente", "massa"], categoria: "Pratos Quentes" }, // Categoria adicionada
      { nome: "Guioza de frango", preco: "R$19,90", img: "src/img/Produtos/Guioza_de_Frango.jpg", desc: "Pastéis japoneses recheados com frango e vegetais.", tags: ["quente"], categoria: "Entradas" },
      { nome: "Refrigerante", preco: "R$6,00", img: "src/img/Produtos/Refrigerante.jpg", desc: "Lata de 350ml, diversos sabores.", tags: ["bebida"], categoria: "Bebidas" },
      { nome: "Sake", preco: "R$12,00", img: "src/img/Produtos/Sake.jpg", desc: "Dose da tradicional bebida japonesa.", tags: ["bebida", "alcoólico"], categoria: "Bebidas"}
  ];
  let currentQty = 1;

  function openModal(produto){
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    modalImg.src = produto.img || 'src/img/fundo-vermelho.jpg';
    modalNome.innerText = produto.nome || 'Sem Nome';
    modalDesc.innerText = produto.desc || 'Sem Descrição';

    modalTags.innerHTML = "";
    produto.tags?.forEach(tag => {
      const span = document.createElement('span');
      span.className = "bg-yellow-200 text-yellow-800 text-xs font-semibold px-2 py-1 rounded";
      span.textContent = tag;
      modalTags.appendChild(span);
    });

    currentQty = 1;
    quantitySpan.textContent = currentQty;
  }

  function closeModal() {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }

  function filterSuggestions() {
      const inputValue = searchInput.value.trim().toLowerCase();
      suggestions.innerHTML = "";
      if (!inputValue) {
          suggestions.classList.add('hidden');
          return;
      }
      suggestions.classList.remove('hidden');

      const filtered = produtos.filter(item =>
          item.nome.toLowerCase().includes(inputValue)
      );
      if (filtered.length === 0) {
          suggestions.innerHTML = "<li class='px-4 py-2 text-gray-500'>Nenhum resultado encontrado</li>";
          return;
      }
      filtered.forEach(item => {
          const li = document.createElement("li");
          li.className = "flex items-center justify-between px-4 py-3 hover:bg-gray-100 transition duration-200 cursor-pointer";
          li.innerHTML = `
              <div class="flex items-center space-x-4">
                  <span class="text-gray-800 font-medium">${item.nome}</span>
              </div>
              <span class="text-yellow-700 font-semibold">${item.preco}</span>
          `;
          li.onmousedown = () => {
              searchInput.value = item.nome;
              suggestions.classList.add("hidden");
              openModal(item);
          };
          suggestions.appendChild(li);
      });
  }

  function renderizarProdutos(filtroCategoria) { 
      const grid = document.getElementById('produtos-grid');
      if (!grid) {
          console.error("ERRO: O elemento #produtos-grid não foi encontrado no HTML.");
          return;
      }
      grid.innerHTML = '';

      const produtosParaRenderizar = filtroCategoria === 'Todos'
          ? produtos
          : produtos.filter(produto => produto.categoria === filtroCategoria);

      produtosParaRenderizar.forEach(produto => {
          const cardHTML = `
              <div class="produto-card bg-white rounded-xl overflow-hidden shadow-md flex flex-col items-center p-4 cursor-pointer hover:scale-105 transition-transform duration-300">
                  <img src="${produto.img || 'src/img/baixados.jpeg'}" alt="${produto.nome}" class="w-full h-48 object-cover mb-4 rounded-lg">
                  <h3 class="produto-nome text-lg font-bold text-gray-800">${produto.nome}</h3>
                  <p class="text-xl font-semibold text-yellow-600 mt-2">${produto.preco}</p>
              </div>
          `;
          grid.innerHTML += cardHTML;
      });
  }

  filtrosNav.addEventListener('click', (event) => {
      if (event.target.tagName === 'A') {
          event.preventDefault();
          filtrosNav.querySelectorAll('.filtro-link').forEach(link => {
              link.classList.remove('active');
          });
          event.target.classList.add('active');

          const categoriaSelecionada = event.target.dataset.categoria;
          renderizarProdutos(categoriaSelecionada);
      }
  });

  document.addEventListener('click', (event) => {
      const card = event.target.closest('.produto-card');
      if (!card) return;
      const nome = card.querySelector('.produto-nome')?.innerText.trim();
      const produto = produtos.find(p => p.nome === nome);
      if (produto) openModal(produto);
  });

  searchInput.addEventListener("blur", () => setTimeout(() => suggestions.classList.add("hidden"), 200));
  searchInput.addEventListener("input", filterSuggestions);

  incrementBtn.addEventListener('click', () => {
      currentQty++;
      quantitySpan.textContent = currentQty;
  });
  decrementBtn.addEventListener('click', () => {
      if (currentQty > 1) {
          currentQty--;
          quantitySpan.textContent = currentQty;
      }
  });

  closeModalBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (event) => {
      if (event.target === modal) {
          closeModal();
      }
  });

  const logoBtn = document.getElementById('logo-btn');
  if(logoBtn) {
    logoBtn.addEventListener('click', (event) =>{
      event.preventDefault();
      renderizarProdutos('Todos');

      const filtrosNav = document.getElementById('filtros-nav');
      if(filtrosNav) {
        filtrosNav.querySelectorAll('.filtros-link').forEach(link =>{
          link.classList.remove('active');
        });
        const todosLink = filtrosNav.querySelector('filtro-link[data-cartegoria="Todos"]');
        if(todosLink) {
          todosLink.classList.add('active');
        }
      }
    });
  }


  renderizarProdutos('Todos');
});