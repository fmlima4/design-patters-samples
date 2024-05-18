Padrão Iterator
O padrão Iterator permite acessar os elementos de um objeto agregado sequencialmente sem expor sua representação subjacente. Ele separa a lógica de iteração da lógica de agregação, proporcionando uma interface uniforme para acessar diferentes coleções de objetos.

Book: Representa o objeto que está sendo iterado (no caso, um livro).
BookCollection: Implementa uma coleção de livros e fornece um método para obter um iterador.
BookIterator: Implementa a lógica de iteração sobre a coleção de livros, com métodos next e hasNext.
BookController: Controlador que expõe um endpoint HTTP para iterar sobre a coleção de livros e retornar os detalhes dos livros.
Estrutura de Arquivos
A estrutura de arquivos segue os princípios do Clean Code, organizando o código em diretórios claros e separados por responsabilidades. Cada componente (modelos, coleções, iteradores e controladores) tem seu próprio arquivo, facilitando a manutenção e expansão do código.

API
O controlador BookController expõe um endpoint HTTP que permite testar as funcionalidades do padrão Iterator via API, tornando o sistema flexível e facilmente testável.

Com esse exemplo, você pode ver como o padrão Iterator pode ser usado para iterar sobre coleções de objetos, permitindo maior flexibilidade e capacidade de expansão no design do sistema.