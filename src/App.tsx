//componente React
// O que é um componente React?
import './App.css'
function App() {

  let nome = "Belzebu"
  let sobrenome = "'Senhor das Moscas'"
  //Let?
  //var?
  //const?
  return (
    <>
      <h1 className="nome">Nome: {nome} </h1>
      <p className="sobrenome">{sobrenome}</p>
 </>
  ) // Retona JSX - JavaScript XML
}

export default App
