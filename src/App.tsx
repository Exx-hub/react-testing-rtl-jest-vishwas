import "./App.css";
import { Application } from "./components/application/Application";
import { CounterMock } from "./components/counter-mock/CounterMock";
import Counter from "./components/counter/Counter";
import Greet from "./components/greet/Greet";
import { MuiMode } from "./components/mui/MuiMode";
import Skills from "./components/skills/Skills";
import { Users } from "./components/users/Users";
import { AppProviders } from "./providers/AppProviders";

function App() {
  return (
    <AppProviders>
      <div className="App">
        {/* <Greet /> */}
        {/* <Application /> */}
        {/* <Skills skills={["react", "node", "TS", "testing", "JS"]} /> */}
        {/* <Counter /> */}
        {/* <MuiMode /> */}
        {/* <CounterMock count={2} /> */}
        <Users />
      </div>
    </AppProviders>
  );
}

export default App;
