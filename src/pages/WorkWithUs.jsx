// WorkWithUs.jsx
import { useTranslation } from 'react-i18next';
import { Icon } from "@iconify/react";

const WorkWithUs = () => {
  const { t } = useTranslation("global");
  return (
    <div className="container mx-auto px-6 py-12 mt-20 flex flex-col items-center gap-12">
      <h1 className="text-3xl font-bold mb-10 text-gray-600 flex items-center gap-4">
        <Icon icon="icon-park-twotone:concept-sharing" className="w-10 h-10 flex-shrink-0 text-pink-800" />
        {t("workWhitUs.title")}
      </h1>
      <p className="text-gray-600 leading-relaxed text-center max-w-3xl">
        {t("workWhitUs.content")}
      </p>
    </div>
  );
};

export default WorkWithUs;
