xplicação do Padrão Template Method
O padrão Template Method define o esqueleto de um algoritmo em uma operação, deixando alguns passos para subclasses implementarem. Ele permite que subclasses redefinam certos passos de um algoritmo sem alterar a estrutura do próprio algoritmo.

Neste exemplo:

PaymentProcessor: Classe abstrata que define o método template processPayment. Ela implementa os passos comuns (sendPaymentNotification) e define métodos abstratos (validatePaymentDetails, debitAmount) que devem ser implementados pelas subclasses.
CreditCardPaymentProcessor: Implementa os métodos abstratos da classe PaymentProcessor para processar pagamentos com cartão de crédito.
PayPalPaymentProcessor: Implementa os métodos abstratos da classe PaymentProcessor para processar pagamentos com PayPal.
PaymentController: Controlador que expõe um endpoint HTTP para processar pagamentos. Ele decide qual processador de pagamento usar com base no método fornecido na requisição.
Essa estrutura segue os princípios do Clean Code, organizando o código em diretórios claros e separados por responsabilidades. Cada componente (templates e controladores) tem seu próprio arquivo, facilitando a manutenção e expansão do código.