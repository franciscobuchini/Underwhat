//app.jsx
import ProductList from './components/ProductList';
import Header from './components/Header';
import image01 from './assets/01/01.webp';

function App() {

  return (
    <>
      <Header/>
      <ProductList image={image01} />
    </>
  );
}

export default App;