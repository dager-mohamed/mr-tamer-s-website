import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { Navbar, Landing, LoginPage } from './components/index'
function App() {
  return (
    <div>
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/login" element={<LoginPage/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}
function Home() {
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="about">About</Link>
      </nav>
    </div>
  );
}

export default App;
