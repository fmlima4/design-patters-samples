Exemplo de chamadas à API usando cURL
Gerar Relatório em PDF
bash
Copiar código
curl -X POST "http://localhost:3000/generate-report" -H "Content-Type: application/json" -d '{"data": {"key": "value"}, "format": "pdf"}'
Gerar Relatório em HTML
bash
Copiar código
curl -X POST "http://localhost:3000/generate-report" -H "Content-Type: application/json" -d '{"data": {"key": "value"}, "format": "html"}'
Explicação do Padrão Template Method
O padrão Template Method define o esqueleto de um algoritmo em uma operação, diferindo alguns passos para subclasses. Ele permite que subclasses redefinam certos passos de um algoritmo sem alterar a estrutura do próprio algoritmo.

Neste exemplo:

ReportGenerator: Classe abstrata que define o método template generateReport. Ela implementa os passos comuns e define métodos abstratos (collectData, formatReport, exportReport) que devem ser implementados pelas subclasses.
PDFReportGenerator: Implementa os métodos abstratos da classe ReportGenerator para gerar relatórios em PDF.
HTMLReportGenerator: Implementa os métodos abstratos da classe ReportGenerator para gerar relatórios em HTML.
ReportController: Controlador que expõe um endpoint HTTP para gerar relatórios. Ele decide qual gerador de relatório usar com base no formato fornecido na requisição.
Essa estrutura segue os princípios do Clean Code, organizando o código em diretórios claros e separados por responsabilidades. Cada componente (templates e controladores) tem seu próprio arquivo, facilitando a manutenção e expansão do código.