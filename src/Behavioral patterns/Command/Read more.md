# Padrão de Design Command em JavaScript

## O que é o padrão Command?

O padrão de design Command é um padrão comportamental que transforma uma solicitação em um objeto independente que contém todas as informações sobre a solicitação. Esse padrão permite que você parametrize métodos com diferentes solicitações, atrasar ou enfileirar a execução de uma solicitação e suportar operações que podem ser desfeitas.

## Quando usar o padrão Command?

O padrão Command é útil quando:

- **Você quer parametrizar objetos com operações**: Permite armazenar operações em objetos.
- **Você quer enfileirar operações, agendar a execução de operações ou executar operações remotamente**: Permite organizar operações em fila e executá-las conforme necessário.
- **Você quer implementar operações que podem ser desfeitas**: Permite adicionar suporte a desfazer e refazer ações no seu sistema.

## Prós e Contras do padrão Command:

### Prós:
- **Desacoplamento do remetente e do receptor**: O remetente de uma solicitação não precisa saber sobre o receptor da solicitação.
- **Facilita a implementação de desfazer/refazer**: Armazenar o histórico de comandos permite implementar facilmente a funcionalidade de desfazer e refazer.
- **Permite a composição de comandos complexos**: Você pode combinar comandos simples em comandos compostos.
- **Facilita a implementação de operações que podem ser enfileiradas e executadas posteriormente**: Comandos podem ser armazenados e executados conforme necessário.

### Contras:
- **Aumento da complexidade do código**: Adicionar novos comandos pode aumentar a complexidade do sistema, pois requer a criação de muitas classes de comando.
- **Sobrecarga de memória**: Armazenar muitos comandos pode levar a um uso maior de memória.

Para mais informações sobre o padrão Command, consulte [Refactoring Guru - Design Patterns - Command](https://refactoring.guru/design-patterns/command).
