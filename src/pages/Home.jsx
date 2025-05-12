// Home.jsx
import ProductList from '../components/ProductList';
import SizesTable from '../components/SizesTable';
import Title from '../components/Title';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation("global");
  return (
    <div className="container mx-auto px-6 mt-20">
      <Title title={t("home.featured_products")} />
      <div className="flex flex-col gap-20 my-12">
        <ProductList />
        <SizesTable />
      </div>
      {/* <Title title="The brand for your team" /> */}
      
    </div>
  );
};

export default Home;
