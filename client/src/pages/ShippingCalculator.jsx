//ShippingCalculator.jsx
import { useTranslation } from 'react-i18next';
import { Icon } from "@iconify/react";

const ShippingCalculator = () => {
  const { t } = useTranslation("global");
  return (
    <div className="ontainer mx-auto px-4 py-8 mt-20 flex flex-col items-center gap-10">
      <h1 className="text-3xl font-bold mb-8 text-gray-600 flex items-center gap-4">
        <Icon icon="icon-park-twotone:ship" className="size-10 text-pink-800" />
        {t("shippingCalculator.title")}
      </h1>
      <p className='text-gray-600 leading-8'>{t("shippingCalculator.content")}</p>
    </div>
  );
};

export default ShippingCalculator;