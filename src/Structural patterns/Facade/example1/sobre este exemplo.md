O padrão Facade é projetado para fornecer uma interface simplificada para um conjunto complexo de subsistemas. Ele oculta a complexidade dos subsistemas e fornece uma única interface para interagir com eles. No nosso exemplo, estamos construindo um sistema de gerenciamento de pedidos em um restaurante.

Aqui está uma explicação simplificada do exemplo:

Entities (Entidades):
Item: Representa um item disponível no menu do restaurante, com um nome e um preço.
Order: Representa um pedido feito pelo cliente, contendo uma lista de itens.
Services (Serviços):
InventoryService: Simula o serviço de gerenciamento de inventário do restaurante, verificando a disponibilidade dos itens no estoque.
PriceCalculationService: Calcula o preço total de um pedido com base nos itens selecionados.
Controller (Controlador):
OrderController: Fornece uma interface simplificada para fazer um pedido no restaurante. Ele recebe uma lista de itens de pedido do cliente, verifica a disponibilidade dos itens no estoque usando o InventoryService, calcula o preço total do pedido usando o PriceCalculationService e confirma o pedido.
Cliente (curl):
O cliente faz uma solicitação via API para fazer um pedido, fornecendo uma lista de itens desejados no corpo da solicitação.
Resumindo, o padrão Facade simplifica a interação do cliente com o sistema, fornecendo uma única interface para lidar com processos complexos que envolvem vários subsistemas. No exemplo do restaurante, o OrderController atua como uma fachada para abstrair a complexidade dos serviços de inventário e cálculo de preços, permitindo que o cliente faça pedidos de forma fácil e intuitiva.