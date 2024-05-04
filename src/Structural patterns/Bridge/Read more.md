# Padrão de Design Bridge em JavaScript

Neste diretório, você encontrará um exemplo de implementação do padrão de design Bridge em JavaScript. Este exemplo é baseado no conteúdo do site [Refactoring Guru - Design Patterns](https://refactoring.guru/design-patterns/bridge).

## O que é o padrão Bridge?

O Bridge é um padrão de design estrutural que permite separar uma abstração de sua implementação, de modo que ambas possam variar independentemente. Ele é usado para separar uma abstração de sua implementação para que as duas possam variar independentemente.

O padrão Bridge é útil quando:

- Você deseja evitar um vínculo permanente entre uma abstração e sua implementação.
- Alterações em uma implementação não devem afetar clientes que dependem da abstração.
- Você tem várias implementações de uma abstração e deseja evitar explosões de subclasses para suportar todas as combinações possíveis.
