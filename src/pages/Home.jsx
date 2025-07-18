// Home.jsx
import PicGallery from '../components/PicGallery';
import ProductList from '../components/ProductList';
import SizesTable from '../components/SizesTable';
import Title from '../components/Title';
import StatsHeader from '../components/StatsHeader';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation("global");

  return (
  <div className="container mx-auto sm:px-6 mt-10">
    {/* Banner Image */}
    <div className="w-full mb-12 relative overflow-hidden rounded-xl shadow-md">
      <img
        src="https://res.cloudinary.com/dpleitc1d/image/upload/v1752867653/instagram_post_9_iecucr.webp"
        alt="Banner"
        className="w-full object-cover transition-all duration-300 ease-in-out
                  h-[200px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px]"
      />
    </div>
      <div className="flex flex-col gap-20">
        {/* <StatsHeader /> */}
        <Title title={t("home.featured_products")} />
        <ProductList />
        <Title title={t("home.table_sizes")} />
        <SizesTable />
        {/* <Title title={"Gallery Pics"} /> */}
        {/* <PicGallery /> */}
      </div>
    </div>
  );
};

export default Home;
