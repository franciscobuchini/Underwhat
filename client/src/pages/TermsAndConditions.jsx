//TermsAndConditions.jsx
const TermsAndConditions = () => {
  const { t } = useTranslation("global");
  return (
    <div className="container mx-auto px-4 py-8 mt-20 flex flex-col items-center gap-10">
      <h1 className="text-3xl font-bold mb-8 text-gray-600 flex items-center gap-4"> <span className="icon-[tabler--scuba-mask]"></span>Terms & Conditions</h1>
      <p className='text-gray-600 px-25 leading-8'>
      1. Introduction
Welcome to Underwhat!?. These terms and conditions govern the use of our website and purchases made through it. By placing an order, you agree to be bound by these terms and conditions in their entirety. If you do not agree with any part of this document, please do not use our services.

2. Product Description
We offer a variety of clothing. We strive to ensure that descriptions, images, and prices are accurate, but we do not guarantee that they are error-free. Our products are shipped directly from our suppliers following a dropshipping model, which means we do not have direct contact with the products before they are shipped.

3. Purchase Process
To make a purchase, select the desired products, add them to the cart, and complete the order process on our website.
Once the order is received, we will send you a payment link via email. Payment must be made through this link to confirm your order.
After receiving the payment, we will process your order and send you a confirmation email.

4. Prices and Payments
All prices are displayed in USD and include taxes.
The total amount to be paid includes the product cost plus shipping fees.
We accept payments only via bank transfer.
Prices may change without prior notice, but the price displayed at the time of placing your order will be honored.

5. Shipping and Delivery
We ship through reliable third-party carriers. Delivery times are estimated and may vary depending on location and external circumstances.
Limitation of liability for losses: Once the order is handed over to the carrier, the responsibility for loss, damage, or delay of the package falls on the carrier. We recommend checking the condition of the package upon receipt and contacting us immediately if there are any issues.

6. Returns and Refunds
If a product arrives defective or does not match the description, the customer must notify us within 7 days of receipt.
Since we operate under a dropshipping model and shipping costs can be high, we do not offer a standard return policy. However, we evaluate each case individually to find a solution that works for both parties.
Exclusion of liability: We are not responsible for defects caused by misuse, negligence, normal wear and tear, or improper handling of the product by the customer.
Returns due to a change of mind are not accepted unless stated otherwise.
If you have any issues with your order, please feel free to contact us to review your case.

7. Limitation of Liability
To the maximum extent permitted by law, Underwhat!? will not be liable for indirect, incidental, consequential, or punitive damages, including but not limited to loss of profits, data, or use, whether in a contractual, extra-contractual, or other action, even if advised of the possibility of such damages. Our liability is limited to the amount paid for the product in question.

8. Force Majeure
We will not be liable for failures or delays in delivery caused by circumstances beyond our control, such as natural disasters, strikes, transportation issues, acts of authorities, wars, terrorism, fires, or any other force majeure events.

9. Intellectual Property
All content on the website, including logos, images, and texts, is the property of Underwhat!? or its licensors and is protected by intellectual property laws.

10. Privacy
We collect only the personal information necessary to process your orders, such as name, address, and email. We are committed to protecting your information and do not share data with unauthorized third parties, except as necessary to process your order (e.g., with the shipping carrier). For more details, we are working on our privacy policy, which will be available soon.

11. Modifications
We reserve the right to modify these terms and conditions at any time. Changes will take effect upon publication on our website. It is the customer's responsibility to review this document periodically.
      </p>
    </div>
  );
};

export default TermsAndConditions;


