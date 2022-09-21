# DayBroker

npm run start

## Regras de Negócio:

 - Uma negociação não pode ser modificada depois de criada;
 - Obrigatoriamente tem uma data, quantidade e valor;
 - Seu volume é calculado multiplicando-se a quantidade negociada no dia pelo valor negociado.

 > Projeto sendo executado pelo sistemas de módulos do ECMAScript 6
 
 # Tela Inicial:
 
 ![image](https://user-images.githubusercontent.com/66702430/191612519-4a2e4a46-03fb-41c5-a817-987836bd8aa0.png)


 o código TypeScript precisa ser traduzido/convertido para um código em ECMASCRIPT para que seja entendido pelo navegador. Lembre-se que apenas ECMASCRIPT é suportado pelo navegador.

#v#deletar#v#

 modelando classe negociação

 modelo de algo que existe 
 negociação possuia regras


## 01

01.02
- Download do TypeScript
- Configuração do compilador e papel do tsconfig.json
- Integração com scripts do Node.js
- Modificadores de acesso private e public
- Benefícios iniciais da linguagem TypeScript

01.04
- Modelagem da classe Negociacoes
- Utilização de Generics
- Revisão sobre encapsulamento
- Questões de mutabilidade e como solucioná-la
- O tipo ReadonlyArray
- Adição de negociações em nossa lista

01.05
- Nova maneira de declaração de array com generics
- O tipo ReadonlyArray
- O modificador readonly
- Getters vs propriedades públicas em modo de leitura
- Programação defensiva

## 02

02.01
- Inspiração no React para criação de templates declarativos e dinâmicos
- Manipulação declarativa do DOM através de template
- Template dinâmico
- Formatação de datas usando Intl

02.02
- Herança com TypeScript
- Classes com tipo genérico
- Classes abstratas
- O modificador protected

02.03

- Visibilidade de métodos
- Validando negociações em dias úteis
- Vantagens do uso de enums
- Cuidados com enums

02.04

- Revisão da lógica de conversão negociações
- Método estáticos
- Parâmetros opcionais

02.05

- Remoção de comentários do código compilado
- Ativação do strictNullChecks
- Como suprimir erros, quando fizer sentido, resultantes do strictNullChecks
- Benefícios do strictNullChecks no controle do fluxo da sua aplicação

## 03

03.01

- Introdução e estrutura do projeto
- Requisitos não funcionais
- Decorator de método
- Logar tempo de execução com decorator

03.02

- Decorator com parâmetro
- Criação de um decorator de inspeção
- Ordem de execução dos decorators
- Simplicação no design de decorators
- Portabilidade de funcionalidade antiga para decorators

03.03

- Como evitar código duplicado
- Decorator de propriedade
- Criação dinâmica de getters
- O uso de Object.defineProperty
- Cache de decorators

03.04

- API externa
- Consumindo API externa
- Definindo uma interface para a API
- Isolando o acesso à API em um serviço
