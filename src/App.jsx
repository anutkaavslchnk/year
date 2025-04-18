import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main/Main";
import Memories from "./pages/Memories/Memories";


const App = () => {
  return <div>




<Routes>

  <Route path='/' element={<Main></Main>}></Route>
  <Route path='/memories' element={<Memories></Memories>}></Route>
</Routes>
  </div>;
};

export default App;
