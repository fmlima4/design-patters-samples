Explicação simples:

Imagine que você tem um objeto, como um café simples, e você quer adicionar opções adicionais a ele, como leite, açúcar, creme, etc. Você pode criar objetos decoradores que envolvem o objeto original e adicionam essas opções. O objeto decorador possui a mesma interface que o objeto original, portanto, você pode usar ambos de forma transparente.

Exemplo:

Imagine que você tem uma classe Coffee que representa um café simples. Agora, você quer adicionar leite e açúcar ao café. Você pode criar classes decoradoras, como MilkDecorator e SugarDecorator, que envolvem o objeto Coffee e adicionam leite e açúcar, respectivamente.

Situações em que é interessante usar:

Quando você quer adicionar funcionalidades a objetos existentes de forma dinâmica: O padrão Decorator permite adicionar comportamentos adicionais a objetos existentes sem alterar sua estrutura básica. Isso é útil quando você quer adicionar funcionalidades opcionais a um objeto sem complicar sua interface.
Quando você quer evitar a criação de subclasses excessivas: Em vez de criar uma hierarquia de subclasses para cada combinação possível de opções, você pode usar o padrão Decorator para adicionar essas opções dinamicamente aos objetos existentes. Isso evita a explosão de subclasses e torna o código mais flexível e fácil de manter.
Quando você quer uma maneira flexível de estender o comportamento de objetos: O padrão Decorator permite adicionar ou remover funcionalidades de forma flexível, permitindo que você crie combinações complexas de comportamentos de forma dinâmica.
Em resumo, o padrão Decorator é útil quando você precisa adicionar funcionalidades adicionais a objetos existentes de forma dinâmica, flexível e transparente, sem alterar sua estrutura básica. Ele promove a reutilização de código, a flexibilidade e a extensibilidade do sistema, permitindo que você crie combinações complexas de comportamentos de forma simples e elegante.