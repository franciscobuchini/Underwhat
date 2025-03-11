//Home.jsx
import ProductList from '../components/ProductList';
import Title from '../components/Title';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation("global");
  return (
    <>
      <ProductList />
      <Title title="The brand for your team" />
    </>
  );
};

export default Home;

//TENGO QUE CAMBIAR TODA LA UI DE LA APLICACION LPMMMMMMMMMMMMMMMMMMMM