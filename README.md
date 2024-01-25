# Web

Todo grid é composto de 2 principais grupos:
`container: o pai` e `itens: o(s) filhos`


### CONTAINER (pai)

- display: grid;
- grid-template;
  - grid-template-columns;
  - grid-template-rows;
  - grid-template-areas;
-gap:
  - gap-rows
  - gap-columns

<br />

### ITENS (filhos)

- grid-column;
  - grid-column-start;
  - grid-column-end;
- grid-row;
  - grid-row-start;
  - grid-row-end;
- grid-areas

<br />

### PROPRIEDADES DE ALINHAMENTO

Existem 9 propriedades fundamentais

**6 aplicadas em container**
`align-content`
`justify-content`
`place-content`

`align-items`
`justify-items`
`place-items`

**3 aplicadas em itens**
`align-self`
`justify-self`
`place-self`

Então podemos separar em 3 grupos
`align`, `justify`, `place`

e cada um deles irá observar ou o
- conteúdp do elemento: `content`
- itens do elemento `items`
- o proprio elemento `self`

<br />

### PROPRIEDADES AUTO
- grid-auto-flow
- grid-auto-rows
- grid-auto-columns

<br />

### Animation 01 - project05

- [ ] Faça o quadrado ir de um lado para o outro na página. fazer ele ficar parado no ponto oposto ao início.

<br />

- início e fim: 0% 100%, from to
- linha do tempo
-  `@keyframes` nomedaanimação
- 1. animation-name
- 2. animation-duration
- 2. animation-fill-mode

<br />

### Animation 02 - project05

- [ ] Reverta a animação
- [ ] Faça o quadrado ir e voltar ao ponto inicial
- [ ] Fazer o quadrado animar sem fim

<br />

### Animation 03 - project05
- [ ] Faça a animação esperar 2s para inicial
- [ ] Teste outras funcionalidades de tempo

- fazer a animação começar depois de x tempo
- cubic-bezier(x1, y1, x2, y2)
- ease / ease-in / ease-out / ease-in-out / linear / step

- 6. animation-delay
- 7. animation-timing-function

<br />

# JavaScript
### Class 01 - Algoritimos e Logica de Programação - Perguntando nome e mostrando mensagem

Como resolver problemas na linguagem de programação;

Como melhorar minha lógica de programação;

Identifique o que já sabe e faça!
Quebre o grande problema em problemas menores!
Executar funções
Variáveis
Concatenação
Tipo de dado: string
Básica de sintaxe

### Class 02 - Boas práticas na escrita de variáveis - Somar dois números

Em inglês
- Sem espaços ou acentuações especiais no nome
- Não pode iniciar com número
- Utilizar camelCase
- ponto e vírgula servem para finalizar uma expressão de código (facultativo)

<br />

- Aprendemos:
- [ ] Tipo de dado: Number 
- [ ] typeof 
- [ ] Operador matemático 
- [ ] Manipulação de dados 
- [ ] type conversion (type casting) 
- [ ] Number() (função construtora para converter um dado em número) 
- [ ] String() (função construtora para converter um dado em uma string) 
- [ ] Ordem de precedência dos operadores 
- [ ] group operator

### Class 03 - Operadores - Operações matemáticas
Nessa aula aprendemos sobre os operadores matemáticos utilizando variáveis em JavaScript e como utilizá-los capturando e exibindo os dados.

### Class 04 - Fluxos da aplicação - Calculando a média de um estudante
Caminhos lógicos baseado em algum dado ou informação
Boas práticas na programação
Não repetir código

- [ ] Tipo de dado: Boolean (true | false) 
- [ ] if/else (elseif) 
- [ ] Operadores comparativos

<br />

- '>'  (maior que)
- '<'  (menor que)
- '='  (maior ou igual a)
- '<=' (menor ou igual a)
- '==' (igual a)
- '!=' (diferente de)

### Class 05 - Estrutura de dados - Criando lista de compras
Organização e gerenciamento dos dados
Melhor eficiência do código

<br />

- Estruturas de repetição
- [ ] laço de repetição
- [ ] for 

- Vetores (Arrays) 
- [ ] Tipo de dado estruturado 
- Incremental (++): o valor + 1 
- Tipo de dado: undefined

### Class 06 - Jogo da adivinhação


- Como controlar o fluxo da aplicação 
- Estrutura de repetição while 
- [] while

- Gerar número aleatório utilizando Math()

- Tipo de dado: NaN 
- [ ] não é um número 

<br />
- Math
- [ ] Pacote com funcionalidades matemáticas
- [ ] Math.random()
- [ ] Math.round() 
- [ ] Math.ceil() 
- [ ] Math.floor() 


- Tipo de erro: SyntaxError 
- [ ] erro de sintaxe; erro de escrita de código

- console 
- [ ] Pacote com funcionalidades para o console do devtools (browser)

- template literals ou template strings 
- [ ] interpolação de dados

### Class 07 - Interagindo com um menu de opções - parte 1
Nessa aula aprenderemos sobre:

Quais os dados de entrada que terei? (inputs)
Quais as variáveis?
Qual o caminho ideal? (fluxo ideal)
Qual(is) o(s) caminho(s) alternativo(s)? (fluxo alternativo)
Quais tratamentos de dados preciso fazer? (estrutura de dados, funções)
Qual é a saída, ou quais os dados de saída, esperada? (outputs)
Ferramentas da linguagem que abordaremos
[] loop while [] arrays e funções de arrays [] condicional if/else [] template literals (strings)

# Single Page Application (SPA)