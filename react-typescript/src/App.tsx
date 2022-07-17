// 3 - import component
import { type } from "@testing-library/user-event/dist/type";
import { createContext } from "react";

// 10 -Utilizando o contexto
import Context from "./components/Context";
// 8 - Enum
import Destructuring, { Category } from "./components/Destructuring";
import FirstComponent from "./components/FirstComponent";
// 5 - desestruturando props
import SecComp from "./components/SecComp";
import State from "./components/State";

// 9 - type
type textOrNull = string | null;
type fixed = "Isso" | "Ou" | "Aquilo";

// 10 - Context
interface IAppContext {
  language: string;
  framework: string;
  projects: number;
}

export const AppContext = createContext<IAppContext | null>(null);

function App() {
  // 1 - variaveis
  const name: string = "João";
  const age: number = 28;
  const isWorking: boolean = true;

  // 2 - funções
  const userGreeting = (name: string): string => {
    return `Olá ${name}`;
  };

  const myText: textOrNull = "Isso é um texto";

  let mySecondText: textOrNull = null;

  const textFixed: fixed = "Ou";
  // 10 - context
  const contextValue: IAppContext = {
    language: "JavaScript",
    framework: "Express",
    projects: 5,
  };
  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
        <h1>TypeScript com React</h1>
        <h3>Nome: {name}</h3>
        <p>Idade: {age}</p>
        {isWorking && (
          <div>
            <p>Está trabalhando!</p>
          </div>
        )}
        <h3>{userGreeting(name)}</h3>
        <hr />
        <FirstComponent />
        <hr />
        <SecComp name={"segundo"} />
        <hr />
        <Destructuring
          title="Primeiro post"
          content="Algum conteudo"
          commentsQty={10}
          tags={["tags", "js", "ts"]}
          category={Category.TS}
        />
        <hr />
        <Destructuring
          title="Segundo post"
          content="Outro conteudo"
          commentsQty={8}
          tags={["python", "programming"]}
          category={Category.P}
        />
        <hr />
        {/* 6 - useState */}
        <State />
        <hr />
        {myText && <p>Tem texto na variavel</p>}
        {mySecondText && <p>Sou um texto</p>}
        <hr/>
        <Context/>
      </div>
    </AppContext.Provider>
  );
}

export default App;
