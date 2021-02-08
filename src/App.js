import logo from './logo.png';
import './App.scss';
import SearchIcon from '@material-ui/icons/Search';


function App() {
  return (
    <div className="App" >

      <header className="App-header">
        <nav className="App-Navbar">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="App-search-bar">
            <input className="search-input" type="search" placeholder="Buscar productos, marcas y más..." />
            <div className="search-icon-box">
              <SearchIcon style={{ color: "rgb(167, 167, 167)" }} fontSize="small" />
            </div>
          </div>
        </nav>
      </header>

      <div className="main-container">
        <aside className="results-aside">
          <div className="aside-title">Notebook</div>
          <div className="aside-subtitle">42069 Resultados</div>
          <div className="aside-categories">
            <div className="categories-title">Categorías</div>
            <ul className="categories-list">
              <li>Categoria 1</li>
              <li>Categoria 2</li>
              <li>Categoria 3</li>
              <li>Categoria 4</li>
              <li>Categoria 5</li>
            </ul>
          </div>
        </aside>
        
        <div className="results-container">
          <div className="result-box">
            <div className="image-container">
            </div>
          </div>
          <div className="result-box">
            <div className="image-container">
            </div>
          </div>
          <div className="result-box">
            <div className="image-container">
            </div>
          </div>
          <div className="result-box">
            <div className="image-container">
            </div>
          </div>
        </div>
      </div>
      <div className="App-Container"></div>
    </div>
  );
}

export default App;