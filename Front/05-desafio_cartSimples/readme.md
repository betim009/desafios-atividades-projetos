## Desafio

### **Passo a Passo (Instruções para os Alunos)**

#### **1. Resgatar Elementos do DOM**

✅ **Botões (+/-)**

* Selecione todos os botões de **aumentar quantidade** (`.btn-plus`).
* Selecione todos os botões de **diminuir quantidade** (`.btn-minus`).

✅ **Exibição de Quantidade**

* Selecione todos os elementos que mostrarão a **quantidade atual** (`.span-qtd`).

✅ **Preços dos Tênis**

* Selecione todos os elementos `h5` que exibirão o **valor total por item**.

✅ **Botão de Calcular Total**

* Selecione o botão (`#btn-submit`) que calculará o **valor final da compra**.
* Selecione o elemento (`#span-final`) onde o **total** será exibido.

---

#### **2. Inicializar Dados**

✅ **Arrays de Controle**

* Crie um array (`dataQtds`) para armazenar as **quantidades** de cada item (inicialmente `[1, 1]`).
* Crie um array (`dataValores`) com os **preços unitários** dos tênis (`[549.99, 519.99]`).

✅ **Formatador de Moeda**

* Use `Intl.NumberFormat` para formatar valores em **Real Brasileiro (R\$)**.

---

#### **3. Lógica dos Botões (+/-)**

✅ **Botão "+" (Aumentar Quantidade)**

* Para cada botão `+`, adicione um **event listener** que:
  * Aumente a quantidade no `dataQtds` no índice correspondente.
  * Atualize o **texto da quantidade** no `span-qtd`.
  * Calcule e atualize o **valor total do item** (`quantidade * preço unitário`), formatado em R\$.

✅ **Botão "-" (Diminuir Quantidade)**

* Para cada botão `-`, adicione um **event listener** que:
  * **Só permita diminuir se a quantidade for maior que 1**.
  * Diminua a quantidade no `dataQtds` no índice correspondente.
  * Atualize o **texto da quantidade** no `span-qtd`.
  * Calcule e atualize o **valor total do item**, formatado em R\$.

---

#### **4. Cálculo do Valor Total da Compra**

✅ **Botão "Calcular Total"**

* Ao clicar no botão `#btn-submit`, o sistema deve:
  * Calcular o **valor total acumulado** (soma de todos os `quantidade * preço unitário`).
  * Exibir o **total formatado em R\$** no elemento `#span-final`.

---

#### **5. Regras e Dicas Extras (Opcionais)**

🔹 **Evite Quantidades Negativas**

* Garanta que o botão `-` não deixe a quantidade ser menor que 1.

🔹 **Use Funções para Reaproveitamento**

* Se possível, crie uma função para **calcular o valor de um item** (`quantidade * preço`).

🔹 **Validação de Arrays**

* Verifique se `dataQtds` e `dataValores` têm o mesmo tamanho antes de calcular.
