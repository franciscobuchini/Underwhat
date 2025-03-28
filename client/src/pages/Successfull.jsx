// Successfull.jsx
import { useTranslation } from 'react-i18next';
import { Icon } from '@iconify/react';

const Successfull = () => {
  const { t } = useTranslation("global");

  return (
    <div className="flex flex-col gap-10 px-4 py-8 mt-20 justify-center  w-full">
      {/* Confirmation Card */}
      <div className="p-8 border border-gray-300 rounded-2xl bg-white flex flex-col items-center">
        <Icon icon="mdi:check-circle-outline" className="w-16 h-16 text-green-500" />
        <h2 className="mt-4 text-2xl font-bold text-gray-700">
          {t("successfull.order_completed")}
        </h2>
        <p className="mt-2 text-gray-500 text-center">
          {t("successfull.thank_you")}
        </p>
      </div>

      {/* Continue Shopping Button */}
      <div className="flex justify-center">
        <a 
          href="/"
          className="bg-violet-500 hover:bg-violet-500 text-white font-bold py-2 px-6 rounded-full text-sm"
        >
          {t("successfull.continue_shopping")}
        </a>
      </div>
    </div>
  );
};

export default Successfull;