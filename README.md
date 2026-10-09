# Arrays, DOM e Eventos – Semana 04

Projeto com os desafios práticos de JavaScript sobre **arrays**, **manipulação do DOM** e **eventos**. Os arquivos `index.html` e `app.js` ficam na mesma pasta e rodam direto no navegador. Abra o Console (F12) para ver os resultados.

## Como executar

1. Clone o repositório ou baixe os arquivos.
2. Abra o `index.html` no navegador.
3. Pressione **F12** e abra a aba **Console**.

## Bloco 1 – Métodos de array

| Método | O que faz | Retorno |
|--------|-----------|---------|
| `forEach` | Percorre cada elemento e executa uma função (ex.: imprimir "Olá, NOME!"). | Nada (`undefined`) |
| `map` | **Transforma** cada elemento e monta um novo array (ex.: nomes em maiúsculas, extração de nomes de produtos). | Novo array, mesmo tamanho |
| `filter` | **Seleciona** os elementos que passam em uma condição (ex.: preços acima de 20). | Novo array, tamanho igual ou menor |
| `reduce` | **Acumula** todos os elementos em um único valor (ex.: soma dos preços). | Um único valor |

`map` e `filter` não alteram o array original.

## Bloco 2 – Manipulação do DOM

- `querySelector` / `querySelectorAll` selecionam elementos por seletor CSS (`#titulo`, `.texto`, `#lista`).
- `textContent` altera apenas texto (mais seguro); `innerHTML` interpreta tags HTML e foi usado só para inserir itens prontos.
- `createElement` cria elementos novos e `append` os adiciona à página.
- `classList.add`, `contains` e `toggle` aplicam, verificam e alternam classes CSS (`destaque`, `feito`).

## Bloco 3 – Eventos e Event Delegation

- `click`, `mouseover` e `keyup` reagem às ações do usuário no botão e no campo de texto.
- No formulário, o evento `submit` usa `e.preventDefault()` para evitar o recarregamento da página. O texto é validado com `.trim()`, vira um `<li>` e o campo é limpo.

### Por que usar Event Delegation?

Em vez de colocar um listener em cada `<li>`, colocamos **um único listener na `#lista`** e verificamos `e.target.tagName === "LI"`. Isso:

- **Melhora a performance**: menos listeners na memória, mesmo com listas grandes.
- **Funciona com elementos dinâmicos**: itens criados depois via JavaScript (inclusive pelo formulário) também respondem ao clique, sem precisar registrar um novo listener.
- **Simplifica o código**: a lógica fica em um só lugar.

## Estrutura

```
├── index.html
├── app.js
└── README.md
```
