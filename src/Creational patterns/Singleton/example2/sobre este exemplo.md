Exemplo de chamadas à API usando cURL
Definir Configuração
curl -X POST "http://localhost:3000/set-config" -H "Content-Type: application/json" -d '{"key": "databaseURL", "value": "mongodb://localhost:27017/myapp"}'
Obter Configuração
curl -X GET "http://localhost:3000/get-config/databaseURL"


Explicação do Padrão Singleton
O padrão Singleton assegura que uma classe tenha apenas uma instância e fornece um ponto de acesso global a ela. Ele é útil quando uma única instância de uma classe deve controlar a coordenação de ações em todo o sistema.

Neste exemplo:

ConfigManager: Classe Singleton que gerencia as configurações. O método getInstance garante que apenas uma instância da classe exista. Os métodos setConfig e getConfig permitem definir e obter configurações, respectivamente.
ConfigController: Controlador que expõe endpoints HTTP para definir e obter configurações. Ele utiliza o ConfigManager para garantir que apenas uma instância do gerenciador de configurações seja utilizada.
app.ts: Arquivo principal que configura o servidor Express e define as rotas para os endpoints de configuração.
Essa estrutura segue os princípios do Clean Code, organizando o código em diretórios claros e separados por responsabilidades. Cada componente (Singleton e Controladores) tem seu próprio arquivo, facilitando a manutenção e expansão do código.