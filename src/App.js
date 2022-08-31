import TodoList from "./TodoList";
import { RecoilRoot } from "recoil";

const App = () => {
  return (
    <RecoilRoot>
      <TodoList />
    </RecoilRoot>
  );
};

export default App;
