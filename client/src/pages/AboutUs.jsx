//AboutUs.jsx
import { useTranslation } from 'react-i18next';

const AboutUs = () => {
  const { t } = useTranslation("global");
  return (
    <div className="container mx-auto px-4 py-8 mt-20 flex flex-col items-center gap-10">
      <h1 className="text-3xl font-bold mb-8 text-gray-600 flex items-center gap-4"> <span className="icon-[tabler--scuba-mask]"></span>{t("about.title")}</h1>
      <p className='text-gray-600 px-25 leading-8'>{t("about.content")}</p>
    </div>
  );
};

export default AboutUs;