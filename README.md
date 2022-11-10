# Rastreador de tarefas

### Esta aplicação busca fazer os controle das tarefas domésticas de uma casa de forma simples e direta.

#### Trata-se de uma API construída com as libs:

    express
    dotenv
    joi
    postgres (pg)


Para fazer a alimentação, foi implementado um banco SQL, que conterá todas as informações acerca da entidade que será manipulada pela aplicação.


### Para fazer o **Setup** da aplicação:


1. Clone ou Fork o repositório e faça o download, prosseguindo com a instação da pasta **node_modules**


    Sugerimos a utilização da lib npm para tal


2. Faça o dump do banco de dados usando o arquivo **dump.sql**

3. As tasks (entidade da aplicação), somente são aceitas na tipagem: 

        {
        id: number;
        title: string;
        description: string;
        date: string | Date;
        done: boolean;
        responsible: string;
        }

    A unica exceção será na inserção de uma nova task, na qual não será necessário informa uma id, que será adicionada automaticamente pelo banco.

4. Regras da aplicação:

    *4.1. Para criar todas novas tarefas (CREATE):*

        Faça uma requisição POST na rota "/task" com body no seguinte modelo:

        {
        title: "nome da tarefa",
        description: "descrição da tarefa",
        date: "2002-04-18";
        done: true;
        responsible: "Morador";
        }

    *4.2. Para consultar todas as tarefas (READ):*

        Faça uma requisição GET na rota "/task" :

        A devolutiva será no seguinte modelo:

        [{
        id: 1,
        title: "tarefa 1",
        description: "descrição da tarefa",
        date: "2002-04-18";
        done: true;
        responsible: "Morador 1";
        },
        {
        id: 2,
        title: "tarefa 2",
        description: "descrição da tarefa",
        date: "2002-04-10";
        done: false;
        responsible: "Morador 2";
        }]

    *4.3. Para marcar uma tarefa como feita (UPDATE):*

        Faça uma requisição PUT na rota "/tasks/status/:id", informando no campo "id" qual o id da tarefa que você deseja marcar como feita.


    *4.4. Para deletar uma tarefa (DELETE):*

        Faça uma requisição DELETE na rota "/tasks/:id", informando no campo "id" qual o id da tarefa que você deseja deletar.

    *4.5. Para consultar o número de tarefas ainda não relaizadas por usuário (READ/COUNT):*

        Faça uma requisição GET na rota "/tasks/count", que irá retornar um valor com todas as tarefas que constam como não finalizadas por usuário registrado, seguindo o seguinte modelo:

        [{
            "responsible": "Morador 1",
            "taskQuantity": "0"
        },
        {
            "responsible": "Morador 2",
            "taskQuantity": "3"
        }]
        


        




