# dt MONEY

---

## Descrição

O **dt MONEY** é um projeto desenvolvido para ajudar no controle de finanças pessoais, permitindo que você registre suas entradas e saídas de dinheiro e calcule o total gasto em determinado período. É uma ferramenta simples e eficaz para gerenciar suas finanças de forma organizada.

## Funcionalidades

- **Registro de Entradas e Saídas:** Você pode adicionar suas transações financeiras, especificando se são entradas (dinheiro recebido) ou saídas (dinheiro gasto).
  
- **Cálculo Automático:** O aplicativo calcula automaticamente o total de dinheiro gasto com base nas transações inseridas.

- **Pesquisa de Transações:** É possível pesquisar transações anteriores para revisar ou modificar detalhes quando necessário.

## Como Iniciar

Para iniciar o **dt MONEY**, siga os passos abaixo:

1. **Instale o JSON Server:** O dt MONEY utiliza o JSON Server como backend simulado para armazenar os dados das transações. Certifique-se de instalá-lo seguindo as instruções da documentação oficial: [JSON Server](https://github.com/typicode/json-server).

2. **Clone o Repositório:** Clone este repositório para sua máquina local utilizando o seguinte comando:

git clone https://github.com/seu-usuario/dt-money.git


3. **Instale as Dependências:** Navegue até o diretório do projeto e instale as dependências necessárias usando npm (Node Package Manager) ou yarn:

npm install ou yarn


4. **Inicie o JSON Server:** Execute o JSON Server para simular uma API REST com os dados das transações. Certifique-se de iniciar o servidor na porta padrão (3000):

json-server --watch db.json --port 3000


5. **Inicie o Projeto:** Com o JSON Server em execução, inicie o projeto dt MONEY:


6. **Acesse o dt MONEY:** Abra seu navegador e acesse `http://localhost:3000` para começar a usar o dt MONEY. Você verá a interface onde poderá adicionar novas transações e visualizar o total gasto.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para enviar pull requests para melhorar o projeto.

