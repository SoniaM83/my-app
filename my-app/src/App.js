import logo from './logo.svg';
import './App.css';
import Content from './Components/Content';
import Footer from './Components/Footer';
import Header from './Components/Header';

function App() {
  return (
    <div>
      <img src={logo} alt="logo" width="100px" />
      <Header />
      <Content />
      <Footer />
   </div>
  );
}

export default App;
