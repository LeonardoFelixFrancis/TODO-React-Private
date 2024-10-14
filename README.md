#### Como rodar o projeto
1) Clonar o projeto em um diretório qualquer
2) Rodar no diretório clonado o comando: `npm install`
3) Rodar no diretório clonado o comando: `npm run dev`

Versões utilizadas no desenvolvimento:
Versão do node utilizada: v22.9.0 | Versão do NPM utilizada: 10.9.0

### Tela de Login
![login](https://github.com/user-attachments/assets/3a811993-eea8-4097-bce2-11d72aeadb5e)

##### Região de inputs  
E-mail:  
  - Campo do tipo texto
  - Campo obrigatório
  - Validação de formato
    
Senha:  
  - Campo do tipo texto  
  - Máscara de senha
  - Campo obrigatório
  - No mínimo 8 caracteres  
    
##### Botão de cadastro  
Ao clickar no botão de cadastro, a tela de cadastro vai ser exibida ao usuário

##### Botão de Acesso  
Ao clickar no botão de acesso, uma requisição vai ser enviada ao back-end contendo os dados informados nos inputs.  
  - Se o usuário for autenticado ele será redirecionado para a página de Home
  - Se houver algum erro na autenticação do usuário, uma mensagem na parte inferior direita será mostrada.

### Tela de Registro
![registro](https://github.com/user-attachments/assets/f645a4c9-c32d-41d7-8b3b-706c9d8ae57e)

E-mail:  
  - Campo do tipo texto  
  - Validação de formato
    
Senha:  
  - Campo do tipo texto  
  - Máscara de senha  
  - No mínimo 8 caracteres  
    
##### Botão de voltar ao login  
Ao clickar no botão voltar ao login, a tela de login vai ser exibida ao usuário.

##### Botão para realizar cadastro  
Ao clickar no Botão para realizar cadastro, uma requisição vai ser enviada ao back-end contendo os dados informados nos inputs.  
  - Se os dados informados a Api estiverem corretos, o usuário vai ser cadastrado
  - Se houver algum erro na autenticação do usuário, uma mensagem na parte inferior direita será mostrada.

### Tela de Home
![home](https://github.com/user-attachments/assets/615403b1-4597-4291-8db0-bf6d5a3868a0)


##### Botão de sair
Ao clickar no botão de sair, a sessão do usuário será finalizada e ele será redirecionado á tela de login

##### Botão de navegar para a To-do list
Ao clickar no botão de navegar para a To-do list, o usuário será redirecionado para a tela que contém as funcionalidades principais do sistema, como cadastro ou leitura das tarefas.

### Tela Principal

![todo_list_1](https://github.com/user-attachments/assets/5e0cd786-4296-403b-9108-d16be14c7a3e)

##### Botão para adicionar nova tarefa
Ao Clickar no botão para adicionar nova tarefa, será aberto a direita da tela a região que possibilitará ao usuário realizar o cadasto de uma nova tarefa.

##### Listagem das tarefas já criadas
Essa região do sistema lista todas as tarefas ja criadas pelo usuário.
  - Ao clickar em qualquer tarefa da lista, será aberto uma região que permitirá a edição da tarefa.


### Tela Principal | Cadastro de tarefa

![todo_list_create_task](https://github.com/user-attachments/assets/c55a5c06-f073-4306-9a45-045f82c1dba5)

##### Região de inputs  
Título:  
  - Campo do tipo texto
  - Campo obrigatório
  - No máximo 55 caracteres
    
Descrição:  
  - Campo do tipo texto  
  - Campo obrigatório
  - No máximo 255 caracteres

##### Botões de ação
 - Cancelar: Ao clickar em cancelar, o região de cadastro será fechada
 - Salvar: Ao clickar em salvar, a tarefa com os dados informados será enviada ao back-end, se não houver nenhum erro a tarefa será cadastrada, caso contrário uma mensagem de erro será informada no canto inferior direito da tela.
   
     


