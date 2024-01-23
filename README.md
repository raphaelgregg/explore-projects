Todo grid é composto de 2 principais grupos:
`container: o pai` e `itens: o(s) filhos`

---
### CONTAINER (pai)

- display: grid;
- grid-template;
  - grid-template-columns;
  - grid-template-rows;
  - grid-template-areas;
-gap:
  - gap-rows
  - gap-columns

---
### ITENS (filhos)

- grid-column;
  - grid-column-start;
  - grid-column-end;
- grid-row;
  - grid-row-start;
  - grid-row-end;
- grid-areas

---
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

---
### PROPRIEDADES AUTO
- grid-auto-flow
- grid-auto-rows
- grid-auto-columns

---
### Animation 01 - project05

- [ ] Faça o quadrado ir de um lado para o outro na página. fazer ele ficar parado no ponto oposto ao início.

- início e fim: 0% 100%, from to
- linha do tempo
-  `@keyframes` nomedaanimação

- 1. animation-name
- 2. animation-duration
- 2. animation-fill-mode

### Animation 02 - project05

- [ ] Reverta a animação
- [ ] Faça o quadrado ir e voltar ao ponto inicial
- [ ] Fazer o quadrado animar sem fim

-

### Animation 03 - project05
- [ ] Faça a animação esperar 2s para inicial
- [ ] Teste outras funcionalidades de tempo

- fazer a animação começar depois de x tempo
- cubic-bezier(x1, y1, x2, y2)
- ease / ease-in / ease-out / ease-in-out / linear / step

- 6. animation-delay
- 7. animation-timing-function