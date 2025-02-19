//Checkout.jsx
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Checkout = () => {
  const { t } = useTranslation("global");
  return (
    <div className="container mx-auto px-4 py-8 mt-20">
      <h1 className="text-3xl font-bold mb-8 text-gray-600 flex items-center gap-4"> <span className="icon-[tabler--shirt-sport]"></span>Checkout</h1>
    </div>
  );
};

export default Checkout;