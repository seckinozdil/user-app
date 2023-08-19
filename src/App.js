import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import UserList from "./components/UserList";
import UserDetail from "./components/UserDetail";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/detail/:id" element={<UserDetail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
