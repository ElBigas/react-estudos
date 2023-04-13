/**
 * const user = { firstName: "Emanuel", lastName: "Evangelista", age: "23" };: 
 * É um objeto user com três propriedades: firstName, lastName e age, 
 * representando um usuário fictício com seu nome, sobrenome e idade.
 * 
 * const formatName = (user) => { ... }: É uma função que recebe o objeto 
 * user como argumento e formata o nome completo concatenando firstName e 
 * lastName. Se o objeto user não for passado ou não for válido, a função retorna a string "Stranger".
 * 
 * return <h1>Hello {formatName(user)}</h1>: É uma declaração JSX que 
 * renderiza um cabeçalho <h1> com a saudação "Hello" seguida do resultado 
 * da função formatName(user) interpolada no JSX. O valor retornado pela 
 * função formatName(user) é exibido no local do {formatName(user)} no JSX.
 * 
 * ReactDOM.render(<App />, document.getElementById('root'));: É o ponto 
 * de entrada do React, onde o componente App é renderizado no elemento HTML com o ID "root".
 * 
 */

const App = () => {
  const user = { firtsName: "Emanuel", lastName: "Evangelista", age: "23" };
  
  const formatName = (user) => {
    if (user) {
      return `${user.firtsName} ${user.lastName}`
    }
    
    return 'Stranger'
  }
  
  return <h1>Hello {formatName(user)}</h1>
}

ReactDOM.render(<App />, document.getElementById('root')); 

/**
 * Este código é um exemplo básico de como usar JSX em um componente React 
 * para renderizar dinamicamente conteúdo baseado em dados de um objeto. 
 * Ele demonstra como utilizar uma função para formatar o nome de um usuário e 
 * renderizar o resultado em JSX.
 */