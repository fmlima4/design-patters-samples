# Padrão de Design Prototype em JavaScript

## O que é o padrão Prototype?

O padrão de design Prototype é um padrão criacional que visa criar objetos baseados em um protótipo existente. Ele envolve a criação de novos objetos por meio da cópia de um objeto existente, conhecido como protótipo. Isso é útil quando a criação de um objeto é mais custosa em termos de recursos do que copiá-lo.

## Funcionamento do padrão Prototype:

1. **Criação do Protótipo**: Primeiramente, um objeto protótipo é criado, normalmente definido como uma classe ou objeto existente no sistema.

2. **Clonagem do Protótipo**: Em seguida, novos objetos são criados copiando o protótipo. Isso pode ser feito de várias maneiras, dependendo da linguagem de programação utilizada. Em JavaScript, por exemplo, você pode usar o método `Object.create()` ou criar um método de clonagem personalizado.

3. **Personalização (Opcional)**: Depois que um objeto é clonado, ele pode ser personalizado conforme necessário. Isso pode incluir a modificação de propriedades ou métodos para atender às necessidades específicas do novo objeto.

## Quando usar o padrão Prototype:

- **Quando a criação de um objeto é cara**: O padrão Prototype é útil quando a criação de um objeto é mais custosa em termos de recursos do que a clonagem de um objeto existente.

- **Quando os objetos compartilham muitas propriedades em comum**: Se vários objetos compartilham grande parte de suas propriedades e métodos, o padrão Prototype pode ser usado para evitar a duplicação de código.

- **Quando o número de classes a serem instanciadas é desconhecido**: Se o número de classes a serem instanciadas não é conhecido antecipadamente, o padrão Prototype permite criar novas instâncias dinamicamente, com base em protótipos existentes.