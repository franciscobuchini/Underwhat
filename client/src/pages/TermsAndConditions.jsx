//TermsAndConditions.jsx
import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react";

const TermsAndConditions = () => {
  const { t } = useTranslation("global");

  return (
    <div className="container mx-auto px-4 py-8 mt-20 flex flex-col items-center gap-10">
      <h1 className="text-3xl font-bold mb-8 text-gray-600 flex items-center gap-4">
        <Icon icon="icon-park-twotone:align-text-left-one" className="size-10 text-violet-500" />
        {t("terms.title")}
      </h1>
      <div className="text-gray-600 px-4 leading-8 max-w-3xl">
        <h2 className="text-2xl text-gray-500 font-semibold mt-6 mb-2">{t("terms.introduction_title")}</h2>
        <p className="text-gray-400">{t("terms.introduction")}</p>

        <h2 className="text-2xl text-gray-500 font-semibold mt-6 mb-2">{t("terms.product_description_title")}</h2>
        <p className="text-gray-400">{t("terms.product_description")}</p>

        <h2 className="text-2xl text-gray-500 font-semibold mt-6 mb-2">{t("terms.purchase_process_title")}</h2>
        <p className="text-gray-400">{t("terms.purchase_process")}</p>

        <h2 className="text-2xl text-gray-500 font-semibold mt-6 mb-2">{t("terms.prices_and_payments_title")}</h2>
        <p className="text-gray-400">{t("terms.prices_and_payments")}</p>

        <h2 className="text-2xl text-gray-500 font-semibold mt-6 mb-2">{t("terms.shipping_and_delivery_title")}</h2>
        <p className="text-gray-400">{t("terms.shipping_and_delivery")}</p>

        <h2 className="text-2xl text-gray-500 font-semibold mt-6 mb-2">{t("terms.returns_and_refunds_title")}</h2>
        <p className="text-gray-400">{t("terms.returns_and_refunds")}</p>

        <h2 className="text-2xl text-gray-500 font-semibold mt-6 mb-2">{t("terms.limitation_of_liability_title")}</h2>
        <p className="text-gray-400">{t("terms.limitation_of_liability")}</p>

        <h2 className="text-2xl text-gray-500 font-semibold mt-6 mb-2">{t("terms.force_majeure_title")}</h2>
        <p className="text-gray-400">{t("terms.force_majeure")}</p>

        <h2 className="text-2xl text-gray-500 font-semibold mt-6 mb-2">{t("terms.intellectual_property_title")}</h2>
        <p className="text-gray-400">{t("terms.intellectual_property")}</p>

        <h2 className="text-2xl text-gray-500 font-semibold mt-6 mb-2">{t("terms.privacy_title")}</h2>
        <p className="text-gray-400">{t("terms.privacy")}</p>

        <h2 className="text-2xl text-gray-500 font-semibold mt-6 mb-2">{t("terms.modifications_title")}</h2>
        <p className="text-gray-400">{t("terms.modifications")}</p>
      </div>
    </div>
  );
};

export default TermsAndConditions;