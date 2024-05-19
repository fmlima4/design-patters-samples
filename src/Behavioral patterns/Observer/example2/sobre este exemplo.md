Explicação do Padrão Observer
O padrão Observer define uma dependência um-para-muitos entre objetos para que, quando um objeto muda de estado, todos os seus dependentes sejam notificados e atualizados automaticamente. Neste exemplo:

Observer: Interface que define o método update, que será chamado para notificar o observador. Inclui um método getId para obter o identificador do observador.
ConcreteObserver (TemperatureDisplay, TemperatureLogger): Implementa a interface Observer e reage às notificações de mudança de temperatura.
ConcreteSubject (TemperatureSensor): Mantém uma lista de observadores e fornece métodos para adicionar, remover e notificar observadores. Também inclui métodos para definir a temperatura e notificar os observadores.
Notification: Representa a mensagem de notificação.
TemperatureController: Controlador que expõe endpoints HTTP para gerenciar observadores e atualizar a temperatura.
Este exemplo segue os princípios do Clean Code, organizando o código em diretórios claros e separados por responsabilidades. Cada componente (modelos, observadores, sujeitos e controladores) tem seu próprio arquivo, facilitando a manutenção e expansão do código.