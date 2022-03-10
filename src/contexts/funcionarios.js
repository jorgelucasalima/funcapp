import { useState, createContext } from "react";

export const FuncionarioContext = createContext({})

function FuncionarioProvider({children}) {

  const [funcionarios, setFuncionarios] = useState([]);

  return(
    <FuncionarioContext.Provider value={{funcionarios}}>
      {children}
    </FuncionarioContext.Provider>
  )
}

export default FuncionarioProvider