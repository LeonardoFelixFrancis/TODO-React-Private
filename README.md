#### Como rodar o projeto
1) Clonar o projeto em um diretório qualquer
2) Rodar no diretório clonado o comando: `npm install`
3) Rodar no diretório clonado o comando: `npm run dev`

Versões utilizadas no desenvolvimento:
Versão do node utilizada: v22.9.0 | Versão do NPM utilizada: 10.9.0

#### Login Page
![login](https://github.com/user-attachments/assets/3a811993-eea8-4097-bce2-11d72aeadb5e)

###### --- Região de inputs  
E-mail:  
  - Campo do tipo texto  
  - Validação de formato  
Senha:  
  - Campo do tipo texto  
  - Máscara de senha  
  - No mínimo 8 caracteres  
    
###### --- Botão de cadastro  
Ao clickar no botão de cadastro, a tela de cadastro vai ser exibida ao usuário

###### --- Botão de Acesso  
Ao clickar no botão de acesso, uma requisição vai ser enviada ao back-end contendo os dados informados nos inputs.  
  - Se o usuário for autenticado ele será redirecionado para a página de Home
  - Se houver algum erro na autenticação do usuário, uma mensagem na parte inferior direita será mostrada.
