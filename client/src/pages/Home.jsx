//Home.jsx
import ProductList from '../components/ProductList';
import Title from '../components/Title';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation("global");
  return (
    <>
      <Title title="Our products" />
      <ProductList />
      <Title title="The brand for your team" />
    </>
  );
};

export default Home;