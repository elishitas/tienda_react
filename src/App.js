import './App.scss';
import Header from './components/Header/index';
import Aside from './components/Aside';
import ResultBox from './components/ResultBox';

const mockData = [
  {
    imageUrl: 'https://i.pinimg.com/originals/c6/52/b1/c652b110ce9854cef9ba399eed60417b.gif',
    product: {
      title: 'this is a product',
      description: 'this is the description',
      formerPrice: 1000,
      currentPrice: 900,
      discountPercentage: 30,
      symbol: '$',
      installments: 18,
      hasFreeShipping: true,
      manufacturer: 'Apple'
    }
  },
  {
    imageUrl: 'https://media3.giphy.com/media/efZeeUTH7aRdxZVjJW/giphy-downsized-medium.gif',
    product: {
      title: 'this is a product',
      description: 'this is the description',
      formerPrice: 10000,
      currentPrice: 8500,
      discountPercentage: 35,
      symbol: '$',
      installments: 18,
      hasFreeShipping: false,
      manufacturer: 'Apple'
    }
  },
]

function App() {
  return (
    <div className="App" >
        <Header />
        <div className="main-container">
        <Aside />
        <div className="results-container">
          <ResultBox mockData={mockData[0]} />
          <ResultBox mockData={mockData[1]} />
          <ResultBox mockData={mockData[0]} />
          <ResultBox mockData={mockData[1]} />
          <ResultBox mockData={mockData[0]} />
          <ResultBox mockData={mockData[1]} />
          </div>
      </div>
    </div>
  );
}

export default App;