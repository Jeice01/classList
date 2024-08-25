# **classList em JS**

### **Entendendo a API**

Todo objeto Element possui um objeto classList que retorna um DOMTokenList representando seu atributo class definido no documento HTML. O objeto `classList` possui uma propriedade `length` e é somente para leitura, porém podemos modificá-lo através de seus métodos, como `add` e `remove`. É aí que as coisas ficam interessantes.

**Os métodos disponíveis em classList são:**

add

remove

toggle

contains

Vamos considerar agora cada um desses métodos.


### **Adicionando classes com classList.add**

Para adicionar uma ou mais classes em um elemento HTML, basta selecioná-lo e chamar o método `classList.add()`passando uma `string` como argumento.
É interessante notar que podemos adicionar multiplas classes de uma só vez. Para isso, informe os nomes das classes que deseja adicionar separados por vírgula. Exemplo:

```javascript
    // Selecionamos um elemento span no DOM:
    var mySpan = document.querySelector( 'span' );

    // Agora adicionamos a classe highlight para destaca-lo:
    mySpan.classList.add( 'highlight' );

    // Agora adicionamos mais 3 classes de uma so vez:
    mySpan.classList.add( 'feature', 'label', 'label-primary' );
```


### **Removendo classes com classList.remove**

Além de adicionar novas classes, vez por outra você vai precisar também remover classes já existentes. Para isso, temos o método classList.remove. Vale notar, que assim como o método add, podemos remover multiplas classes de uma só vez. Exemplo:

 ```javascript
 // Selecionamos um elemento div no DOM:
var myDiv = document.querySelector( 'div' );

// Supondo que esse div tenha a classe 'foo', 'bar' e 'baz',
// vamos remover a classe 'baz':
myDiv.classList.remove( 'baz' );

// Agora vamos remover as classes 'foo' e 'bar' ao mesmo tempo:
myDiv.classList.remove( 'foo', 'bar' );
```

### **Alternando classes com classList.toggle**
Para dar um comportamento mais dinâmico em nossa interface, pode ser interessante alternar (inserir e remover) uma classe, respondendo a um clique, toque na tela ou outro evento. Com isso, podemos fazer coisas como por exemplo exibir/ocultar um bloco de conteúdo, exibir/ocultar um menu, destacar/remover destaque de um elemento, entre várias outras coisas.

É aí que o método toggle entra em ação. Passamos o nome de uma classe para o método `toggle`, e ele fica responsável por checar se um elemento tem ou não essa classe. Se já tiver: ele remove, se não tiver: ele adiciona. Tudo "automagicamente" sem precisar escrever instruções if/else, expressões regulares ou coisa do tipo.

Para ver o método `toggle` funcionando, o ideal é registrarmos uma rotina de tratamento de eventos. A sintaxe desse método é a seguinte:

```javascript
// Alterna a classe 'is-visible' no elemento 'myDiv':
myDiv.classList.toggle( 'is-visible' );
```

### **Verificando classes com classList.contains**
Talvez você precise checar se um elemento possui determinada classe e dependendo do resultado, executar uma ou outra tarefa. Se esse for o caso, utilize o método `classList.contains`. Exemplo:

```javascript
if( myDiv.classList.contains( 'is-visible' ) ) {
    // Se o elemento 'myDiv' possui a classe 'is-visible':
    // Faca alguma coisa interessante aqui.
} else {
    // Se nao...
    // Faca alguma outra coisa aqui.
}
```

[Documentação de referência](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
