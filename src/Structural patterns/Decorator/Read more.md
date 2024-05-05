# Padrão de Design Decorator em JavaScript

Neste diretório, você encontrará um exemplo de implementação do padrão de design Decorator em JavaScript. Este exemplo é baseado no conteúdo do site [Refactoring Guru - Design Patterns](https://refactoring.guru/design-patterns/decorator).

## O que é o padrão Decorator?

O Decorator é um padrão de design estrutural que permite adicionar comportamento a objetos individuais, dinamicamente, sem afetar o comportamento de outros objetos da mesma classe. Ele é útil para adicionar novas responsabilidades a objetos existentes de forma flexível e transparente.

O padrão Decorator é útil quando:

- Você deseja adicionar responsabilidades a objetos individuais, mas mantê-los independentes de outros objetos.
- Você deseja adicionar responsabilidades a uma classe, mas deseja evitar o uso de subclasses.
- A extensão através de subclasses é impraticável ou indesejável.

## Como este exemplo funciona?

O exemplo fornecido neste diretório demonstra como usar o padrão Decorator para adicionar funcionalidades adicionais a objetos de café. O código contém as seguintes classes:

- `Coffee`: A classe base que representa um café simples.
- `CoffeeDecorator`: A classe abstrata que define a interface para os decoradores de café.
- `MilkDecorator`, `SugarDecorator` e `WhipDecorator`: Subclasses de `CoffeeDecorator` que adicionam leite, açúcar e chantilly ao café, respectivamente.
