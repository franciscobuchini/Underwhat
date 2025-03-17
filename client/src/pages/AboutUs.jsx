//AboutUs.jsx
import { useTranslation } from 'react-i18next';
import { Icon } from "@iconify/react";

const AboutUs = () => {
  const { t } = useTranslation("global");
  return (
    <div className="container mx-auto px-4 py-8 mt-20 flex flex-col items-center gap-10">
      <h1 className="text-3xl font-bold mb-8 text-gray-600 flex items-center gap-4">
        <Icon icon="icon-park-twotone:diving" className="size-10 text-violet-400" />
        {t("about.title")}
      </h1>
      <p className='text-gray-600 leading-8'>{t("about.content")}</p>
    </div>
  );
};

export default AboutUs;