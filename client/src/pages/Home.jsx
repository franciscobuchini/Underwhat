import ProductList from '../components/ProductList';
import Title from '../components/Title';

const Home = () => {
  return (
    <>
      <Title title="Our products" />
      <ProductList />
      <Title title="The brand for your team" />
    </>
  );
};

export default Home;