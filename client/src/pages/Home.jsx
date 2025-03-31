//Home.jsx
import ProductList from '../components/ProductList';
import Title from '../components/Title';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation("global");
  return (
    <div className="container mx-auto px-4 mt-20">
      <Title title="Featured Products" />
      <ProductList />
      <Title title="The brand for your team" />
    </div>
  );
};

export default Home;