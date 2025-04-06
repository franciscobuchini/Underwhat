// Successfull.jsx
import { useTranslation } from 'react-i18next';
import { Icon } from '@iconify/react';

const Successfull = () => {
  const { t } = useTranslation("global");

  return (
    <div className="flex flex-col gap-12 px-6 py-12 mt-20 justify-center w-full">
      {/* Confirmation Card */}
      <div className="p-10 border border-gray-300 rounded-2xl bg-white flex flex-col items-center">
        <Icon icon="icon-park-twotone:check-one" className="w-16 h-16 text-green-600" />
        <h2 className="mt-6 text-2xl text-center font-bold text-gray-700">
          {t("successfull.order_completed")}
        </h2>
        <p className="mt-3 text-gray-500 text-center">
          {t("successfull.thank_you")}
        </p>
      </div>

      {/* Continue Shopping Button */}
      <div className="flex justify-center">
        <a 
          href="/"
          className="bg-pink-800 hover:bg-pink-700 text-white font-bold py-3 px-8 rounded-full text-sm"
        >
          {t("successfull.continue_shopping")}
        </a>
      </div>
    </div>
  );
};

export default Successfull;
