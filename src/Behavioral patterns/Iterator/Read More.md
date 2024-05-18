# Padrão de Design Iterator em JavaScript

## O que é o padrão Iterator?

O padrão de design Iterator é um padrão comportamental que permite a você percorrer os elementos de uma coleção sem expor sua representação subjacente (lista, pilha, árvore, etc.). O Iterator fornece uma maneira de acessar os elementos de um objeto agregado sequencialmente sem expor sua estrutura interna.

## Quando usar o padrão Iterator?

O padrão Iterator é útil quando:

- **Você precisa acessar os elementos de uma coleção de maneira sequencial sem expor a estrutura subjacente da coleção**.
- **Você precisa de várias maneiras de percorrer uma coleção**. Por exemplo, percorrer uma lista em ordem direta e inversa.
- **Você deseja um acesso uniforme às coleções**. Pode criar um iterador para cada coleção e usar uma interface comum para percorrer elementos, facilitando a troca de coleções sem alterar o código do cliente.

## Prós e Contras do padrão Iterator:

### Prós:
- **Princípio da Responsabilidade Única**: Você pode limpar a interface de coleções e mover os métodos de travessia de coleção para classes iteradoras dedicadas.
- **Princípio da Abstração**: Esconde a complexidade da travessia da coleção dos clientes.
- **Flexibilidade**: Permite a implementação de diferentes estratégias de travessia e pode percorrer a mesma coleção de maneiras diferentes.

### Contras:
- **Sobrecarga**: Pode ser uma sobrecarga criar um novo objeto iterador para percorrer uma coleção, especialmente em linguagens que suportam a iteração nativamente (como JavaScript com `for...of`).

Para mais informações sobre o padrão Iterator, consulte [Refactoring Guru - Design Patterns - Iterator](https://refactoring.guru/design-patterns/iterator).
