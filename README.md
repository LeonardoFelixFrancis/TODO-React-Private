#### Como rodar o projeto
1) Clonar o projeto em um diretório qualquer
2) Rodar no diretório clonado o comando: `npm install`
3) Rodar no diretório clonado o comando: `npm run dev`

Versões utilizadas no desenvolvimento:
Versão do node utilizada: v22.9.0 | Versão do NPM utilizada: 10.9.0

#### Tela de Login
![login](https://github.com/user-attachments/assets/3a811993-eea8-4097-bce2-11d72aeadb5e)

###### Região de inputs  
E-mail:  
  - Campo do tipo texto  
  - Validação de formato  
Senha:  
  - Campo do tipo texto  
  - Máscara de senha  
  - No mínimo 8 caracteres  
    
###### Botão de cadastro  
Ao clickar no botão de cadastro, a tela de cadastro vai ser exibida ao usuário

###### Botão de Acesso  
Ao clickar no botão de acesso, uma requisição vai ser enviada ao back-end contendo os dados informados nos inputs.  
  - Se o usuário for autenticado ele será redirecionado para a página de Home
  - Se houver algum erro na autenticação do usuário, uma mensagem na parte inferior direita será mostrada.

#### Tela de Registro
![registro](https://github.com/user-attachments/assets/f645a4c9-c32d-41d7-8b3b-706c9d8ae57e)

E-mail:  
  - Campo do tipo texto  
  - Validação de formato  
Senha:  
  - Campo do tipo texto  
  - Máscara de senha  
  - No mínimo 8 caracteres  
    
###### Botão de voltar ao login  
Ao clickar no botão voltar ao login, a tela de login vai ser exibida ao usuário.

###### Botão para realizar cadastro  
Ao clickar no Botão para realizar cadastro, uma requisição vai ser enviada ao back-end contendo os dados informados nos inputs.  
  - Se os dados informados a Api estiverem corretos, o usuário vai ser cadastrado
  - Se houver algum erro na autenticação do usuário, uma mensagem na parte inferior direita será mostrada.

