import FocusableInput from "./Ref";
import Colors, { colorData } from "./Rendering-lists/Lists";
import TodoList from "./Rendering-lists/Lists-and-state";
import Welcome from "./Styling-components/Welcome";
import Counter from "./Styling-components/Counter";
import Loginin from "./Styling-components/Login";
import Container from "./Component-compositionchildren/Container";
import { LanguageContext } from "./Context/Languagecontext";
import { useState } from "react";
import Hello from "./Context/Hello";
import GithubUsers from "./Data-Fetching-with-fetch-and-useEffect/Githubusers";
import { HookCounter } from "./Custom-Hooks/Counter";
import { FormComponent } from "./Custom-Hooks/FormComponent";
import { GithubUserComponent } from "./Custom-Hooks/GithubUserComponent";
import { LocationComponent } from "./Custom-Hooks/LocationComponent";
 



import { FilteredList } from "./Callback-Memo/FilteredList";





function App() {
 

  
  const [lista] = useState([
    { id: 1, name: "Alice", age: 22 },
    { id: 2, name: "Bob", age: 16 },
    { id: 3, name: "Charlie", age: 30 },
    { id: 4, name: "David", age: 18 },
    { id: 5, name: "Eve", age: 25 },
  ]);




  const [language, setLanguage] = useState("EN");

  function handlerSetLanguage(language) {
    setLanguage(language);
  }

  return (
    <div>
      <button onClick={() => handlerSetLanguage("IT")}>IT</button>
      <button onClick={() => handlerSetLanguage("EN")}>EN</button>
      
      
      <LanguageContext.Provider value={language}>
        <Container title="Welcome to the Container">
          <Hello />
          <Welcome />
          <Counter />
          <GithubUsers/>
          <Loginin />
          <FocusableInput />
          <Colors colors={colorData} />
          <TodoList />
        </Container>
      </LanguageContext.Provider>
      <HookCounter/>
      <FormComponent/>
      <GithubUserComponent/>
     

<FilteredList lista={lista} />
      <LocationComponent/>
    </div>
  );
}

export default App;
