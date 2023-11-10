
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Main from './components/Main';
import Quotes from './components/quotes.json';

function App() {
  return (
    <>
    <Navbar/>
    {Quotes.quote.map((e)=>(

      <Main text={e.quote} author={e.author}/>

    ))

    
}
    <Footer/>
    </>
  );
}

export default App;
