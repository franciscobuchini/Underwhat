// Home.jsx
import PicGallery from '../components/PicGallery';
import ProductList from '../components/ProductList';
import SizesTable from '../components/SizesTable';
import Title from '../components/Title';
import { useTranslation } from 'react-i18next';
import StatsHeader from '../components/StatsHeader';

const Home = () => {
  const { t } = useTranslation("global");
  return (
    <div className="container mx-auto sm:px-6 mt-20">
      <div className="flex flex-col gap-20 my-12">
        <StatsHeader/>
        <Title title={t("home.featured_products")} />
        <ProductList />
        <Title title={t("home.table_sizes")} />
        <SizesTable />
        {/* <Title title={"Gallery Pics"} /> */}
        {/* <PicGallery /> */}
      </div>
      {/* <Title title="The brand for your team" /> */}
      
    </div>
  );
};

export default Home;
