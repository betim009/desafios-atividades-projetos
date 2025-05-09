
# 📦 Desafio de Projeto: Sistema de Exibição de Produtos

## 🎯 Objetivo

Construir um mini sistema de exibição de produtos promocionais e por gênero usando HTML, CSS e JavaScript. A proposta é simular a estrutura de uma loja virtual, organizando os dados de forma modular e exibindo os produtos em diferentes seções da página.

---

## 🗂️ 1. Estrutura de Pastas

Antes de começar, organize seu projeto da seguinte forma:

```
src/
├── pages/
│   ├── login.html
│   └── registro.html
├── scripts/
├── data/
│   └── produtos.js
├── index.html
├── style.css
└── script.js
```

> 📌 Essa organização é essencial para separar responsabilidades: páginas HTML, dados, scripts e estilo.

---

## 📊 2. Dados dos Produtos (`produtos.js`)

Crie no mínimo **30 produtos diferentes** no arquivo `src/data/produtos.js`.

O arquivo deve conter um array chamado `produtos`, como no exemplo abaixo:

```js
const produtos = [
    {
        id: 1, 
        titulo: "Camisa básica branca", 
        preco: 100,
        preco_promocao: 90,
        novidade: true,
        genero: "masculino",
        categoria: "camisa"
    },
    {
        id: 2,
        titulo: "Blusa feminina de lã",
        preco: 120,
        preco_promocao: 100,
        novidade: false,
        genero: "feminino",
        categoria: "blusa"
    },
    // ...adicione mais produtos
];
```

> 💡 Lembre-se de variar os produtos com base em gênero, promoção, categoria e novidade para criar diversidade no conteúdo.

---

## 🧱 3. Estrutura no HTML

No arquivo `index.html`, crie 3 `div`s com os seguintes **IDs**:

```html
<div id="div-promocao"></div>
<div id="div-masculino"></div>
<div id="div-feminino"></div>
```

> Essas seções serão preenchidas dinamicamente com os produtos, de acordo com suas características.

---

## 📥 4. Manipulação com JavaScript (`script.js`)

Dentro do `script.js`, siga os passos abaixo:

### a) Captura das Divs

Use `document.getElementById` para **resgatar e armazenar em variáveis** as divs criadas no HTML:

```js
const divPromocao = document.getElementById("div-promocao");
const divMasculino = document.getElementById("div-masculino");
const divFeminino = document.getElementById("div-feminino");
```

---

### b) Evento de Carregamento

Utilize o evento `window.addEventListener("load", ...)` para que o carregamento dos produtos ocorra **somente depois que a página estiver pronta**.

```js
window.addEventListener("load", () => {
    // Código para exibir produtos
});
```

---

### c) Exibição dos Produtos

Dentro do evento `load`, percorra o array de produtos e:

- Verifique se o produto tem preço promocional e exiba-o em `div-promocao`
- Verifique se o gênero é `"masculino"` ou `"feminino"` e exiba nas respectivas divs

> 💡 Use `forEach` para percorrer e `innerHTML` ou `appendChild` para criar os elementos.

---

## 📌 Regras Visuais (sugestões para o CSS)

- Crie uma classe `.card-produto` para estilizar os cards dos produtos.
- Inclua nome, preço, preço promocional (riscado) e categoria.
- Use `display: flex` nas divs para alinhar os produtos.

---

## ✅ Requisitos Técnicos

- [ ] Estrutura de pastas criada corretamente
- [ ] Mínimo de 30 produtos no arquivo `produtos.js`
- [ ] Três divs com os IDs exigidos no `index.html`
- [ ] Uso de `getElementById` para acessar as divs
- [ ] Evento `load` corretamente implementado
- [ ] Produtos exibidos nas divs corretas de acordo com o tipo
- [ ] Visualização limpa com cards bem organizados
