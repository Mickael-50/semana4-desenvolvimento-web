// =====================================================
// BLOCO 1 – Arrays e Métodos (map, filter, reduce, forEach)
// =====================================================
console.log("===== BLOCO 1 =====");

// 1.1 – nomes: forEach e map
const nomes = ["Ana", "Bruno", "Carla"];

nomes.forEach((nome) => console.log(`Olá, ${nome}!`));

const nomesMaiusculos = nomes.map((nome) => nome.toUpperCase());
console.log("Nomes em maiúsculas:", nomesMaiusculos);

// 1.2 – precos: filter e reduce
const precos = [10, 25, 40, 5, 60];

const precosAcima20 = precos.filter((preco) => preco > 20);
console.log("Preços acima de 20:", precosAcima20);

const somaPrecos = precos.reduce((acc, preco) => acc + preco, 0);
console.log("Soma dos preços:", somaPrecos);

// 1.3 – produtos: map, filter, reduce e forEach
const produtos = [
  { nome: "Caderno", preco: 15 },
  { nome: "Mochila", preco: 120 },
  { nome: "Caneta", preco: 4 },
  { nome: "Calculadora", preco: 45 },
];

const nomesProdutos = produtos.map((p) => p.nome);
console.log("Nomes dos produtos:", nomesProdutos);

const produtosBaratos = produtos.filter((p) => p.preco < 50);
console.log("Produtos com preço menor que 50:", produtosBaratos);

const totalProdutos = produtos.reduce((acc, p) => acc + p.preco, 0);
console.log("Soma dos preços dos produtos:", totalProdutos);

produtos.forEach((p) => console.log(`${p.nome}: R$ ${p.preco}`));

// =====================================================
// BLOCO 2 – Manipulação do DOM
// =====================================================
console.log("===== BLOCO 2 =====");

const seuNome = "Mickael"; // altere para o nome da pessoa/equipe
const lista = document.querySelector("#lista");

// 2.1 – Alterar o texto do h1
const titulo = document.querySelector("#titulo");
titulo.textContent = `Blog do ${seuNome}`;

// 2.2 – Imprimir o texto de todos os parágrafos .texto
const paragrafos = document.querySelectorAll(".texto");
paragrafos.forEach((p) => console.log("Parágrafo:", p.textContent));

// 2.3 – Inserir 2 itens com innerHTML
// Usa += para preservar os <li> estáticos do HTML (usados no Bloco 3).
lista.innerHTML += "<li>Primeiro item</li><li>Segundo item</li>";

// 2.4 – Criar <li> com createElement e adicionar com append
const terceiroItem = document.createElement("li");
terceiroItem.textContent = "Terceiro item";
lista.append(terceiroItem);

// 2.5 – classList.add e classList.contains
terceiroItem.classList.add("destaque");
console.log("Tem a classe destaque?", terceiroItem.classList.contains("destaque"));

// 2.6 – Array tarefas: criar um <li> para cada
const tarefas = ["Estudar JS", "Fazer exercícios", "Revisar DOM"];

tarefas.forEach((tarefa) => {
  const li = document.createElement("li");
  li.textContent = tarefa;
  lista.append(li);
});

// Classe "feito" no primeiro <li> da lista
lista.querySelector("li").classList.add("feito");
console.log("Total de itens na lista:", document.querySelectorAll("li").length);

// =====================================================
// BLOCO 3 – Eventos e Event Delegation
// =====================================================
console.log("===== BLOCO 3 =====");

// 3.1 – click no botão
const botao = document.querySelector("#botao");
botao.addEventListener("click", () => {
  console.log("Clicou!");
});

// 3.2 – mouseover no botão
botao.addEventListener("mouseover", () => {
  botao.textContent = "Pode clicar!";
});

// 3.3 – keyup no campo #nome
const campoNome = document.querySelector("#nome");
campoNome.addEventListener("keyup", () => {
  console.log("Valor atual:", campoNome.value);
});

// 3.4 – Event Delegation: UM único listener na lista
lista.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("feito");
    console.log("Item clicado:", e.target.textContent);
  }
});

// Novo <li> criado via JS: o clique nele também funciona (delegation)
const itemDinamico = document.createElement("li");
itemDinamico.textContent = "Item criado via JavaScript";
lista.append(itemDinamico);

// 3.5 – Formulário
const formulario = document.querySelector("#formulario");
const campoTarefa = document.querySelector("#tarefa");

formulario.addEventListener("submit", (e) => {
  e.preventDefault(); // evita recarregar a página

  const texto = campoTarefa.value.trim();
  if (texto === "") return; // campo vazio: não adiciona nada

  const li = document.createElement("li");
  li.textContent = texto;
  lista.append(li);

  campoTarefa.value = ""; // limpa o campo
});
