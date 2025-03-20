
## Guia para o desafio:
    Execute: npm install

    Para testar os tests: `npm run test`
    Para testar um script especifico: `npx jest some.test.js`










npm install --save-dev jest

npm install --save-dev @testing-library/dom

npm install --save-dev @testing-library/user-event

npm install --save-dev @testing-library/jest-dom


1. jest
O que é: Jest é o framework de testes que executa e gerencia os testes.
Necessário: Sim, você precisa do Jest para rodar seus testes.
2. @testing-library/dom
O que é: A biblioteca principal do Testing Library que fornece funções para interagir com a DOM.
Necessário: Sim, você vai usá-la para fazer consultas e interagir com a DOM (ex: screen.getByText(), screen.getByRole(), etc.).
3. @testing-library/user-event
O que é: Essa biblioteca facilita a simulação de eventos de usuário, como clicar em botões ou preencher formulários (simula ações como o usuário faria).
Necessário: Opcional, mas recomendado se você precisar simular interações do usuário, como cliques, digitação e envio de formulários.
4. @testing-library/jest-dom
O que é: Adiciona matchers personalizados ao Jest para facilitar a verificação de elementos, como toBeInTheDocument(), toBeVisible(), etc.
Necessário: Sim, se você quer usar matchers mais legíveis e expressivos em seus testes, como verificar se o elemento está na tela ou se tem o texto correto.