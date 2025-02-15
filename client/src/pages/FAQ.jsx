import { Link } from 'react-router-dom';

const FAQ = () => {
  return (
    <div className="container mx-auto px-4 py-8 mt-20">
      <h1 className="text-3xl font-bold mb-8 text-gray-600">Frequently Asked Questions</h1>
      
      <div className="space-y-6 max-w-3xl">
        <section className="border-b border-gray-200 pb-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-600">Shipping Information</h2>
          <p className="text-gray-500">
            We offer worldwide shipping. Delivery times vary between 3-7 business days depending on your location.
          </p>
        </section>

        <section className="border-b border-gray-200 pb-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-600">Returns Policy</h2>
          <p className="text-gray-500">
            You can return any item within 30 days of purchase. Please check our 
            <Link to="/returns" className="text-primary hover:underline ml-1">
              returns page
            </Link> for detailed instructions.
          </p>
        </section>

        <section className="border-b border-gray-200 pb-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-600">Size Guide</h2>
          <div className="text-gray-500 space-y-2">
            <p>Our sizes follow standard international measurements:</p>
            <ul className="list-disc pl-6">
              <li>S - 34-36" Chest</li>
              <li>M - 38-40" Chest</li>
              <li>L - 42-44" Chest</li>
              <li>XL - 46-48" Chest</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2 text-gray-600">Contact Us</h2>
          <p className="text-gray-500">
            Need more help? Email us at 
            <a href="mailto:support@underwhat.com" className="text-primary hover:underline ml-1">
              support@underwhat.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default FAQ;