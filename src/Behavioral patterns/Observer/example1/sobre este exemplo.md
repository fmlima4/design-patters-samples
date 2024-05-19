Padrão Observer
O padrão Observer define uma dependência de um para muitos entre objetos, de forma que quando um objeto muda de estado, todos os seus dependentes são notificados e atualizados automaticamente.

Observer: Interface que define o método update, que será chamado para notificar o observador.
ConcreteObserver: Implementa a interface Observer e reage às notificações. Também inclui um método getId para obter o identificador do observador.
ConcreteSubject: Mantém uma lista de observadores e fornece métodos para adicionar, remover e notificar observadores. Também inclui um método getObservers para obter a lista de observadores, facilitando a busca por um observador específico.
Notification: Representa a mensagem de notificação.
NotificationController: Controlador que expõe endpoints HTTP para enviar notificações e gerenciar observadores.
Estrutura de Arquivos
A estrutura de arquivos segue os princípios do Clean Code, organizando o código em diretórios claros e separados por responsabilidades. Cada componente (modelos, observadores, sujeitos e controladores) tem seu próprio arquivo, facilitando a manutenção e expansão do código.

API
O controlador NotificationController expõe endpoints HTTP que permitem testar as funcionalidades do padrão Observer via API, tornando o sistema flexível e facilmente testável.

Com este exemplo, você pode ver como o padrão Observer pode ser usado para criar um sistema de notificações onde os observadores são atualizados automaticamente quando o sujeito muda de estado.