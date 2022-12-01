<h1 align="center">Data Lovers</h1>
<div align="center">

![modelo com banner](/src/img/gif-data-lovers.gif)

</div>
<p align="center">
<span><strong>Tecnologias e Ferramentas utilizadas:</strong></span>
<br>
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=html,css,js,jest,github,git,figma" style="height: 25px;"/>
  </a>
</p>

## Índice

* [1. Resumo do Projeto](#1-resumo-do-projeto)
* [2. Definição de produto](#2-definição-de-produto)
* [3. História do usuário](#3-história-do-usuário)
* [4. Instalações](#4-instalações)
* [5. Iniciando](#5-iniciando)
* [6. Como testar](#6-como-testar)
* [7. Tecnologias utilizadas](#7-tecnologias-utilizadas)
* [8. Desenho de interface do usuário](#8-desenho-de-interface-do-usuário)
* [9. Testes de usabilidade](#9-testes-de-usabilidade)
* [10. Desenvolvedoras](#10-desenvolvedoras)

***
## 1. Resumo do Projeto

O **Data Lovers** foi o segundo projeto desenvolvido no *bootcamp da Laboratória*. O principal objetivo era construir uma página web que permita visualizar, filtrar e ordenar dados de acordo com a necessidade do usuário.

A partir disso, desenvolvemos o [**Data LoLvers**](https://amandapolari.github.io/SAP008-data-lovers/src/index.html).

***
## 2. Definição de produto
O [**Data LoLvers**](https://amandapolari.github.io/SAP008-data-lovers/src/index.html) foi pensado e formulado, inicialmente, para usuários que querem começar a jogar [_League of Legends_](https://www.leagueoflegends.com/pt-br/)  e, para isso, precisam conhecer e escolher um personagem (campeão) para iniciar essa jornada!

Logo, a página inicial oferece aos usuários opções de três banneres clicáveis que levam diretamente ao resultado de campeões do 'tipo' assassino, atirador e suporte com nível de dificuldade 'fácil', conforme o banner escolhido. 

Adicionalmente o usuário tem a possibilidade de filtrar e ordenar os personagens de acordo com os tipos de campeões do jogo e os níveis de dificuldades existentes para cada um deles, respectivamente. Além disso, também é possível ordená-los por nome de forma ascendente (A-Z) e descendente (Z-A). 

O resultado da pesquisa é apresentado em forma de cards, com frente e verso, onde na frente há a imagem do campeão, nome e título e no verso contém seus principais atributos como: ataque, defesa, magia, nível de dificuldade e o tipo do campeão selecionado.

Para facilitar a navegação do usuário, a página contém um botão de **'Limpar'** que limpa a pesquisa e retorna a página inicial, e o botão **'Topo'**, para retorna para o topo da página.

![modelo com cards](/src/img/modelo-cards.png)

***

## 3. História do Usuário

### História central

**Como** uma jogadora iniciante de LoL, **quero** consultar os tipos de personagens (campeões), seus atributos e qual é o nível de dificuldade de cada um deles, **para** selecionar o personagem que eu mais me identifico.

### _Sub_-_histórias:_

* ### **H1**

  **Como** jogadora iniciante de LoL, **quero** buscar os tipos de campeões e ordená-los por nome **para** conhecê-los.

* ### **H2**

  **Como** jogadora iniciante de LoL **quero** consultar os tipos de campeões  por nível dificuldade ‘fácil’ **para** saber qual o mais fácil para começar a jogar.

* ### **H3**

  **Como**  jogadora intermediária de LoL, **quero** consultar os tipos de campeões  por nível dificuldade ‘médio’ **para** progredir no jogo.

* ### **H4**

  **Como** jogadora um pouco mais experiente de LoL, **quero** buscar qual é o campeão mais difícil de jogar, **para** me desenvolver e melhorar dentro do jogo. 

* ### **H5**

  **Como** jogadora de LoL, **quero** me informar qual a porcentagem que a minha pesquisa corresponde, **para** ter uma ideia da quantidade de opções de campeões disponíveis.
***
## 4. Instalações

### Ter instalado:
* node
* npm

***

## 5. Iniciando
* Para instalar as dependências no diretório do seu projeto execute:

```
npm install
```
* Para iniciar o aplicativo execute:
```
npm start
```

***

## 6. Como testar
* Para executar os testes, execute:
```
npm run test
```

***

## 7. Tecnologias utilizadas
Esse programa foi construído com:
* HTML
* CSS
* JavaScript
* Figma

***

## 8. Desenho de interface do usuário

Os [protótipos de baixa](https://www.figma.com/file/FymEgwaH0Oi9ssKVXSVENT/Prot%C3%B3tipo-Alta-Fidelidade?node-id=0%3A1) e [alta fidelidade](https://www.figma.com/file/FymEgwaH0Oi9ssKVXSVENT/Prot%C3%B3tipo-Alta-Fidelidade?node-id=0%3A1) foram feitos utilizando o Figma.

### Protótipo de baixa fidelidade:
![baixa-fidelidade](/src/img/baixa-fidelidade.png)

### Protótipo de alta fidelidade:
![alta-fidelidade](/src/img/alta-fidelidade.png)


***

## 9. Testes de usabilidade

Quando começamos a elaborar o **Data LoLvers**, a princípio, não tínhamos pensando no botão _'Limpar'_ e no botão _'Topo'_. 

Após alguns testes de usabilidade detectamos a necessidade de um botão para 'resetasse' a pesquisa feita pelo usuário. Então adicionamos o botão 'Limpar'. 

Quando printamos os cards na tela, percebemos q havia uma grande quantidade de cards e pra agilizar e facilitar a navegação optamos em colocar um botão que retornasse ao topo da página. No primeiro momento era um botão fixo no final da página, porém com mais testes de usabilidade, percebemos que seria mais confortável para o usuário um botão que _scrollasse_ junto com o conteúdo.

A ideia dos banneres na página inicial do Data LoLvers também foi pensado para o maior conforto do usuário em ter opções mais práticas e diretas, sem precisar selecionar algo.

Posteriormente, adequamos o tamanho dos botões, das letras e o espaçamento entre linhas e elementos, buscando melhorar a navegação do usuário em telas menores.


***

## 10. Desenvolvedoras
 Este projeto foi desenvolvido por:
* **Amanda Polari** : [Linkedin](https://www.linkedin.com/in/amandapolari/) | [GitHub](https://github.com/amandapolari)
* **Lizandra Miazaki** : [Linkedin](https://www.linkedin.com/in/lizandramiazaki/) | [GitHub](https://github.com/lizandrafmiazaki)

