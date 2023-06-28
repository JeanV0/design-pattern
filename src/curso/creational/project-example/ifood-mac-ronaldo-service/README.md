

# Serviço de pedido Mac Ronaldo

Esta pasta é um projeto implementando alguns dos design patterns estudados até agora.
1. Mono state: Utilizarei uma classe que amazena classe valor (como redis);
2. Factory: Em vez de instanciar direto, utilizarei uma interface com classe abstrata para criar minhas classes, assim respeitando uso de interfaces como referencia e não classes;
3. Builder: Tratativa de pedido do cliente/customer;
4. Prototype: Para clonagem de produtos dentro do builder sem usar factory;

## Estrutura do diretório

O repositório possui a seguinte estrutura de diretórios:

- **`src/index.ts`**: dentro da pasta de seu projeto, index.ts será um programa interativo de entrada de inputs.
- **`src/controller`**: Baseado em MVC, usarei controller para tratar as escolhas do usuario como mapeamento de ações
- **`src/service`**: Baseado em MVC, onde ficará o codigo que vai processar usando os design paterns em geral
- **`src/service`**: Baseado em MVC, onde ficará o codigo que vai enviar para o cliente a resposta
- **`src/class`**: Onde ficará classes amazenadas que serão utilizadas
- **`src/class/class.{factory, monostate, outros}.ts`**: Onde ficará classes amazenadas que serão utilizadas com design pattern
- **`src/interfaces`**: Onde ficará interfaces amazenadas que serão utilizadas
- **`src/interfaces/interface.{factory, monostate, outros}.ts`**: Onde ficará interfaces amazenadas que serão utilizadas com design pattern
