/**
 * Topic: É um componente funcional que recebe duas propriedades (title e count) 
 * como argumentos e renderiza um título de tópico e um botão de votação. 
 * Ele também utiliza o hook de estado useState para gerenciar o estado do contador de votos.
 * 
 * App: É outro componente funcional que renderiza vários componentes 
 * Topic com títulos e contagens de votos diferentes.
 * 
 * ReactDOM.render(<App />, document.getElementById("root"));: 
 * É o ponto de entrada do React, onde o componente App é renderizado no elemento HTML com o ID "root".
 */

//FORMA CORRETA ---> import { useState } from "react"; 

const { useState } = React; //Essa forma de importação é específica do CodePen, onde o React é importado como um pacote global.

const Topic = ({ title, count }) => {
  let [votes, setVotes] = useState(count);

  const increaseCount = () => {
    setVotes(++votes);
    console.log(votes);
  };

  return (
    <div>
      {title} ({votes}) <button onClick={increaseCount}>+1</button>{" "}
    </div>
  );
};

const App = () => {
  return (
    <>
      <h1>Vota tópico</h1>
      <Topic title="PHP" count={5} />
      <Topic title="JAVA" count={1} />
      <Topic title="JavaScript" count={10} />
      <Topic title="C#" count={3} />
      <Topic title="Python" count={7} />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
