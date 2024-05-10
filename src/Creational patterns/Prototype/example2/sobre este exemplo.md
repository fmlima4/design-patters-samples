Sistema de Geração de Relatórios
Este é um exemplo de aplicação que demonstra o uso do padrão de projeto Prototype para criar um sistema de geração de relatórios. No sistema, cada tipo de relatório é representado por um protótipo que pode ser clonado para criar novos relatórios com diferentes configurações.

Estrutura de Arquivos
A estrutura de arquivos da aplicação é a seguinte:

css
Copy code
src/
│
├── entities/
│   └── ReportPrototype.ts
│
├── controllers/
│   └── ReportController.ts
│
└── app.ts

entities/ReportPrototype.ts: Este arquivo define a interface ReportPrototype, que descreve os métodos necessários para clonar um protótipo de relatório e gerar um relatório. A classe Report implementa essa interface e representa o protótipo de um relatório, com propriedades para o título e conteúdo do relatório, além de métodos para clonar o protótipo e gerar o relatório formatado.
controllers/ReportController.ts: Este arquivo contém o controlador ReportController, responsável por receber solicitações HTTP POST para criar novos relatórios. No método createReport(), o controlador instancia o protótipo de relatório com base no título e conteúdo fornecidos na solicitação, clona o protótipo para criar um novo relatório com o mesmo título e conteúdo, e retorna o relatório gerado como resposta.
app.ts: Este arquivo é o ponto de entrada da aplicação. Ele configura o servidor Express para receber solicitações na rota /create-report e direcioná-las para o método createReport do ReportController.

Como Usar
Para criar um novo relatório, envie uma solicitação HTTP POST para http://localhost:3000/create-report com um corpo JSON contendo o título e conteúdo do relatório que deseja criar.

Exemplo de chamada à API usando cURL:

bash
Copy code
curl -X POST \
  http://localhost:3000/create-report \
  -H 'Content-Type: application/json' \
  -d '{
  "title": "Monthly Sales Report",
  "content": "Total sales: $100,000\nNumber of transactions: 500\nAverage transaction amount: $200"
}'

Este exemplo demonstra como usar o padrão Prototype para criar objetos complexos com configurações predefinidas, permitindo a fácil criação de novos objetos com base em protótipos existentes. Ele também segue os princípios do padrão Clean Code e pode ser facilmente testado via API.