
 <h1>Save My Dinner - E-commerce de comida</h1>
 
<p><strong>Contexto</strong></p>

Simulação de um e-commerce de comidas <strong>fullstack</strong> <strong>responsivo</strong>, onde é possível filtrar pelo nome do restaurante, pela descrição e prato. 

Back-end: A api foi construída utilizando <strong>MySQL</strong> e <strong>sequelize</strong>, no modelo <strong>MSC</strong>(model, service e controller).
Sendo a model responsável pelo banco de dados, service pelas regras de negócio, e controller por lidar com as requisições e respostas.

Front-end: A aplicação foi construída com <strong>React</strong> e <strong>Context API</strong>. Foi utilizado <strong>Axios</strong>, um cliente HTTP baseado em Promises para realizar as requisições ao back.
Para a estilização foi utilizado <strong>Tailwind</strong>.

Para uma boa estruturação do código foi configurado o <strong>ESLint</strong>.

Você pode testar a aplicação através do <strong>docker</strong> seguindo a explicação em "Como rodar o projeto na sua máquina".

<h2>Imagens da aplicação</h2>

<br/>

![Captura de tela de 2022-12-13 16-00-57](https://user-images.githubusercontent.com/93014254/207421866-4a739cbe-f82e-4cca-ab7f-7806084e881b.png)

<br/>

<details>
 <summary><strong>Habilidades desenvolvidas durante o desenvolvimento do projeto</strong></summary><br />
 
 <h2>Back-End</h2>
 
- :fire: **Organizar uma aplicação completa desde o primeiro passo**; :fire:
- Criar e modelar um banco de dados utilizando Sequelize;
- Estruturar uma aplicação em camadas;
- Delegar responsabilidades específicas para cada camada;
- Entender e aplicar os padrões REST;
- Utilizar Dotenv para as variáveis de ambiente secretas.

<h2>Front-End</h2>
 
- :fire: **Organizar a estrutura de componentes e páginas de um site**; :fire:
- Estruturar o estado local utilizando react hooks;
- Criar e estruturar o estado global utilizando Provider;
- Delegar responsabilidades específicas para cada componente e camada;
- Realizar requisições HTTP através do Axios;
- Utilizar Tailwind para estilização.

 
</details>

<details>
 <summary><strong>Tecnologias utilizadas</strong></summary><br />
 
  <p><strong>Back-end</strong>: Eslint, Node.js, Nodemon, Express.js, Dotenv, Mysql, Cors, Sequelize, Bycript, JWT, Joi e Express-async-errors;</p>
  
   <p><strong>Front-End</strong>: React, Tailwind, Eslint, Axios e react-router-dom.</p>

</details>

<details>
 
   <summary><strong>Como rodar o projeto na sua máquina:</strong></summary><br />
  
   <strong>:sparkles: Rodando com Docker</strong>
  
  >Clone o projeto em uma pasta/repositório git com o comando `git clone`
  
  - Caso não tenha o git instalado em sua máquina, você pode realizar a instalação através da [documentação](https://git-scm.com/book/pt-br/v2/Come%C3%A7ando-Instalando-o-Git)
  
  - Entre na pasta do projeto clonado
 
  > Instale as dependências com `npm install`
 
 - Para a aplicação funcionar corretamente você precisa editar o arquivo .env.example: 
    - alterar as variáveis de ambiente com o seu nome de usuário e senha de conexão com o banco de dados.
    - mudar o nome do aquivo para **.env**, caso contrário a aplicação não encontrará o arquivo. 
    
   - Você consegue encontrar mais informações [aqui](https://www.freecodecamp.org/portuguese/news/como-usar-variaveis-de-ambiente-do-node-com-um-arquivo-dotenv-para-node-js-e-npm/)
  
  > Rode os containers com o comando `docker-compose up -d`
  
  - Esse serviço irá inicializar dois containers chamados postgres(port: 5432) e ng-finance(port: 3000)
  
 - :sparkles:E pronto!! O projeto está rodando na sua máquina:sparkles:
  
:eyes: **De olho nas dicas:** 
 
 - Para rodar o projeto desta forma, **obrigatóriamente** você deve ter o `Git`, o `Docker` e o `Docker-compose` instalados em seu computador.
</details>

<details>
 <summary><strong>Informações sobre o banco de dados:</strong></summary><br />
 
 ![Captura de tela de 2022-12-08 13-12-29](https://user-images.githubusercontent.com/93014254/207418714-dec1c3e5-57b6-42dc-b16d-3aa8f9845323.png)

   <p>A imagem acima exemplifica o banco de dados e as relações entre as tabelas</p>
   
   - A tabela <strong>Users</strong> possui informações sobre os usuários;
   - A tabela <strong>Shops</strong> possui informações sobre os restaurantes;
   - A tabela <strong>Plates</strong> possui informações sobre os pratos;
     Essa tabela possui um relacionamento N:1 com a tabela Plates. Sendo assim, um restaurante pode possuir vários pratos, mas um prato só pode pertencer a um restaurante.
  
</details>

