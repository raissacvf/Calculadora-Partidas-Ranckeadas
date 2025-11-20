Calculadora de Partidas Rankeadas 🎮

Desafio de projeto proposto pelo Bootcamp de Lógica de Programação. O objetivo é aplicar conhecimentos fundamentais de construção de software para criar uma lógica de classificação de nível baseada em saldo de vitórias.

O Desafio:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador, calcule o saldo (vitórias - derrotas) e retorne o nível do herói baseado na tabela abaixo:

| Saldo de Vitórias | Nível      |
|-------------------|------------|
| Menor que 10      | Ferro      |
| Entre 11 e 20     | Bronze     |
| Entre 21 e 50     | Prata      |
| Entre 51 e 80     | Ouro       |
| Entre 81 e 90     | Diamante   |
| Entre 91 e 100    | Lendário   |
| Maior ou igual a 101 | Imortal |

-> Tecnologias e Conceitos Utilizados

- **JavaScript** (Linguagem base)
- **Variáveis** (Para armazenar os dados do herói)
- **Operadores** (Para calcular o saldo `vitorias - derrotas`)
- **Laços de repetição** (Para simular múltiplas partidas/testes)
- **Estruturas de decisões** (`if/else` para definir os níveis)
- **Funções** (Para modularizar a regra de negócio)

-> Como Executar o Projeto

Pré-requisitos
Você precisa ter uma IDE instalada no seu computador, ou acessar a plataforma playcode.io na web

-> Passo a passo
1. Clone este repositório ou baixe o arquivo `index.js`.
2. Abra o terminal na pasta do arquivo.
3. Execute o comando:

```bash
node index.js
