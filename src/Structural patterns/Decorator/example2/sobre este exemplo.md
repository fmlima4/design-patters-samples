Entidade Pizza (Pizza.ts):
Esta classe representa a entidade base, que é uma pizza simples.
Ela possui um método getName() que retorna o nome da pizza.
Decorators (PizzaDecorator.ts, CheeseDecorator.ts, PepperoniDecorator.ts):
A classe abstrata PizzaDecorator define a estrutura base para os decoradores de pizza.
Os decoradores concretos, como CheeseDecorator e PepperoniDecorator, estendem a classe PizzaDecorator.
Cada decorador envolve uma instância de pizza existente e adiciona um ingrediente específico (queijo, pepperoni, etc.) ao nome da pizza.
Controlador de Pizza (PizzaController.ts):
Este controlador lida com a preparação da pizza com base nos parâmetros da solicitação.
Ele cria uma instância de pizza simples.
Verifica os parâmetros da solicitação para decidir se deve adicionar queijo e/ou pepperoni à pizza.
Adiciona os ingredientes desejados à pizza usando os decoradores correspondentes.
Retorna uma resposta com uma mensagem indicando que a pizza foi preparada com os ingredientes especificados.
Aplicativo (app.ts):
Este arquivo configura um servidor Express.
Define uma rota /prepare-pizza que chama o método preparePizza do controlador de pizza.
O servidor ouve as solicitações na porta 3000.
Como funciona:

Quando você faz uma solicitação GET para /prepare-pizza com parâmetros, o controlador de pizza é acionado.
O controlador cria uma instância de pizza simples.
Ele verifica os parâmetros da solicitação para determinar se deve adicionar queijo e/ou pepperoni à pizza.
Se os parâmetros estiverem presentes, o controlador cria instâncias dos decoradores correspondentes e as aplica à pizza.
Cada decorador envolve a instância de pizza existente e adiciona o ingrediente desejado ao nome da pizza.
O controlador retorna uma resposta com uma mensagem indicando que a pizza foi preparada com os ingredientes especificados.
Quando usar o padrão Decorator:

O padrão Decorator é útil quando você precisa adicionar responsabilidades adicionais a objetos existentes de forma dinâmica e transparente.
Ele é útil quando você quer evitar a explosão de subclasses para cada combinação possível de opções.
É útil quando você quer uma maneira flexível de estender o comportamento de objetos existentes.
É adequado quando você precisa adicionar funcionalidades opcionais a um objeto sem complicar sua interface.