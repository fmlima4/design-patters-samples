Padrão Command
O padrão Command encapsula uma solicitação como um objeto, permitindo parametrizar clientes com diferentes solicitações, enfileirar ou fazer log de solicitações e suportar operações que podem ser desfeitas.

Command Interface: Define a interface para os comandos com métodos execute e undo.
Concrete Commands: LightOnCommand e LightOffCommand implementam a interface Command e encapsulam as ações de ligar e desligar a luz.
Receiver: Light é a classe que realiza as ações reais (ligar e desligar a luz).
Invoker: LightController é responsável por receber as solicitações e invocar os comandos apropriados.
Estrutura de Arquivos
A estrutura de arquivos segue os princípios do Clean Code, organizando o código em diretórios claros e separados por responsabilidades. Cada comando, receptor e controlador tem seu próprio arquivo, facilitando a manutenção e expansão do código.

API
O controlador LightController expõe um endpoint HTTP que permite testar as funcionalidades do padrão Command via API, tornando o sistema flexível e facilmente testável.

Com esse exemplo, você pode ver como o padrão Command pode ser usado para encapsular ações como objetos, permitindo maior flexibilidade e capacidade de expansão no design do sistema.






