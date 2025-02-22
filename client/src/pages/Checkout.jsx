//Checkout.jsx
import { useTranslation } from 'react-i18next';
import CheckoutForm from '../components/CheckoutForm';

const Checkout = () => {
  const { t } = useTranslation("global");
  return (
    <div className="container mx-auto px-4 py-8 mt-20">
      <h1 className="text-3xl font-bold mb-8 text-gray-600 flex items-center gap-4"> <span className="icon-[tabler--shopping-cart]"></span>Checkout</h1>
      <CheckoutForm />
    </div>
  );
};

export default Checkout;