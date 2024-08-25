// Pegar o h2 com o JS
const h2 = document.querySelector('h2');
console.log(h2.innerText);
    // alterar a cor  e o tamanho do h2
h2.style.color = 'blue';
h2.style.fontSize = '30px';

// Atividade dos alunos
// pegar o elemento do botão e estilizar
const button = document.querySelector('button');
button.style.backgroundColor = 'blue'
button.style.color = 'white';
button.style.border = 'none';
button.style.padding = '10px 20px';
button.style.borderRadius = '5px';
button.style.cursor = 'pointer';

                           /* CENÁRIO DE ERRO NOME E SENHA */
// Pegar o input do username e add a classe error e add a mensagem de erro
const inputName = document.querySelector('#login-usuario');
console.log(inputName);
inputName.classList.add('error');

// incluir a mensagem de erro do usuário
const mensagemErro = document.querySelectorAll('p');
console.log(mensagemErro);
mensagemErro[0].classList.add('visible');

// Atividade dos alunos
// pegar o elemento do input da senha e add a classe error
const inputSenha = document.querySelector('#login-senha');
console.log(inputSenha);
inputSenha.classList.add('error');
// Incluir a mensagem de senha inválida
mensagemErro[1].classList.add('visible');

/* CENÁRIO DE ACERTO DO NOME E ERROU A SENHA */
// Incluir a classe correct ao nome e tirar a mensagem de erro
inputName.classList.add('correct');
mensagemErro[0].classList.remove('visible')
inputName.classList.remove('error')

// Atividade do aluno
//  incluir a classe correct e tirar a mensagem de error
inputSenha.classList.add('correct');
mensagemErro[1].classList.remove('visible');
inputSenha.classList.remove('error')


