/**
 * Neste código, é utilizado o utiliza o hook useState do React para gerenciar 
 * o estado de 'isLoggedIn', que controla se o usuário está logado ou não. 
 * Dependendo do valor de 'isLoggedIn', o componente <Menu> renderiza diferentes 
 * elementos, incluindo o botão de login ou logout.
 * Quando o botão de login é clicado, a função handleLogin é chamada, 
 * atualizando o estado de 'isLoggedIn' para true e exibindo o botão de logout. 
 * Quando o botão de logout é clicado, a função handleLogout é chamada, 
 * atualizando o estado de 'isLoggedIn' para false e exibindo o botão de login.
 */

const { useState } = React;

const Greeting = ({firstName, lastName}) => {
  return <h1>Hello, {firstName} {lastName}!</h1>;
}

const Menu = ({ firstName, lastName, isLoggedIn, onLogin, onLogout }) => {
  return (
    <>
      {isLoggedIn ? (
        <>
          <Greeting firstName={firstName} lastName={lastName} />
          <button onClick={onLogout}>Logout</button>
        </>
      ) : (
        <>
          <Greeting firstName={'Stranger'} />
          <h3>Faça login clicando no botão abaixo</h3>
          <button onClick={onLogin}>Login</button>
        </>
      )}
    </>
  );
}

// Dados que irão vir do backend
const App = () => {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Função de callback para efetuar o login
  const handleLogin = () => {
    setIsLoggedIn(true);
    console.log('Logado...');
  }

  // Função de callback para efetuar o logout
  const handleLogout = () => {
    
    setIsLoggedIn(false);
    console.log('Deslogado...');
  }

  return (
    <Menu
      firstName='Emanuel'
      lastName='Evangelista'
      isLoggedIn={isLoggedIn}
      onLogin={handleLogin}
      onLogout={handleLogout}
    />
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
