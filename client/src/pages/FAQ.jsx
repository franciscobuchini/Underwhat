import { Link } from 'react-router-dom';

const FAQ = () => {
  return (
    <div className="container mx-auto px-4 py-8 mt-20">
      <h1 className="text-3xl font-bold mb-8 text-gray-600 flex items-center gap-4"> <span className="icon-[tabler--zoom-question]"></span>Frequently Asked Questions </h1>
      <div className="accordion divide-neutral/20 divide-y">

        <div className="accordion-item" id="faq-01">
          <button className="accordion-toggle inline-flex items-center justify-between text-start" aria-controls="faq-01-collapse" aria-expanded="false">
            <span className="inline-flex items-center gap-x-4 text-gray-600">
              <span className="icon-[tabler--ruler-measure-2] size-6"></span>
              Sizes table: How to choose the right size?
            </span>
            <span className="icon-[tabler--chevron-left] accordion-item-active:-rotate-90 text-base- size-4.5 shrink-0 transition-transform duration-300 rtl:-rotate-180" ></span>
          </button>
          <div id="faq-01-collapse" className="accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="faq-01" role="region">
            <div class="w-full overflow-x-auto flex flex-col gap-4 px-5 pb-4">

              <div>
                <h3 className='font-semibold'>Regular T-Shirt</h3>
                <p>230g | 100% long-staple cotton</p>
              </div>
              <table className="table-xs table text-gray-600 text-center">
                <thead>
                  <tr>
                    <th>Size</th>
                    <th>Chest Width</th>
                    <th>Shoulder Width</th>
                    <th>Length</th>
                  </tr>
                </thead>
                <tbody>
                <tr><td>S</td><td>96 cm</td><td>43.5 cm</td><td>66 cm</td></tr>
                  <tr><td>M</td><td>100 cm</td><td>45 cm</td><td>68 cm</td></tr>
                  <tr><td>L</td><td>104 cm</td><td>47 cm</td><td>70 cm</td></tr>
                  <tr><td>XL</td><td>108 cm</td><td>49 cm</td><td>72 cm</td></tr>
                  <tr><td>2XL</td><td>112 cm</td><td>50 cm</td><td>74 cm</td></tr>
                  <tr><td>3XL</td><td>116 cm</td><td>51 cm</td><td>76 cm</td></tr>
                  <tr><td>4XL</td><td>120 cm</td><td>54.5 cm</td><td>78 cm</td></tr>
                </tbody>
              </table>

              <div>
                <h3 className='font-semibold'>Sleeveless Vest</h3>
                <p>230g | 100% long-staple cotton</p>
              </div>
              <table className="table-xs table text-gray-600 text-center">
                <thead>
                  <tr>
                    <th>Size</th>
                    <th>Chest Width</th>
                    <th>Shoulder Width</th>
                    <th>Length</th>
                  </tr>
                </thead>
                <tbody>
                <tr><td>S</td><td>96 cm</td><td>40 cm</td><td>66 cm</td></tr>
                  <tr><td>M</td><td>100 cm</td><td>41 cm</td><td>68 cm</td></tr>
                  <tr><td>L</td><td>104 cm</td><td>41.5 cm</td><td>70 cm</td></tr>
                  <tr><td>XL</td><td>108 cm</td><td>43 cm</td><td>72 cm</td></tr>
                  <tr><td>2XL</td><td>112 cm</td><td>44 cm</td><td>74 cm</td></tr>
                  <tr><td>3XL</td><td>116 cm</td><td>45 cm</td><td>76 cm</td></tr>
                  <tr><td>4XL</td><td>120 cm</td><td>46.5 cm</td><td>78 cm</td></tr>
                </tbody>
              </table>


              <div>
                <h3 className='font-semibold'>Oversized T-Shirt</h3>
                <p>300g | 100% long-staple cotton</p>
              </div>
                <table className="table-xs table text-gray-600 text-center">
                  <thead>
                    <tr>
                      <th>Size</th>
                      <th>Chest Width</th>
                      <th>Shoulder Width</th>
                      <th>Length</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>S</td><td>110 cm</td><td>54 cm</td><td>72 cm</td></tr>
                    <tr><td>M</td><td>114 cm</td><td>56 cm</td><td>74 cm</td></tr>
                    <tr><td>L</td><td>118 cm</td><td>58 cm</td><td>76 cm</td></tr>
                    <tr><td>XL</td><td>122 cm</td><td>60 cm</td><td>77 cm</td></tr>
                    <tr><td>2XL</td><td>126 cm</td><td>62 cm</td><td>79 cm</td></tr>
                  </tbody>
                </table>

                <div>
                <h3 className='font-semibold'>Zip Hoodie</h3>
                <p>600g | 95% cotton 5% spandex</p>
                </div>
                <table className="table-xs table text-gray-600 text-center">
                  <thead>
                    <tr>
                      <th>Size</th>
                      <th>Chest Width</th>
                      <th>Shoulder Width</th>
                      <th>Length</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>S</td><td>51 cm</td><td>48 cm</td><td>62 cm</td></tr>
                    <tr><td>M</td><td>54 cm</td><td>51 cm</td><td>65 cm</td></tr>
                    <tr><td>L</td><td>57 cm</td><td>54 cm</td><td>68 cm</td></tr>
                    <tr><td>XL</td><td>60 cm</td><td>57 cm</td><td>71 cm</td></tr>
                    <tr><td>2XL</td><td>63 cm</td><td>60 cm</td><td>74 cm</td></tr>
                    <tr><td>3XL</td><td>66 cm</td><td>63 cm</td><td>77 cm</td></tr>
                    <tr><td>4XL</td><td>69 cm</td><td>66 cm</td><td>79 cm</td></tr>
                  </tbody>
                </table>

                <div>
                  <h3 className='font-semibold'>Hoodie</h3>
                  <p>320g | 59% cotton 41% polyvinyl acetate fibre</p>
                </div>
                <table className="table-xs table text-gray-600 text-center">
                  <thead>
                    <tr>
                      <th>Size</th>
                      <th>Chest Width</th>
                      <th>Shoulder Width</th>
                      <th>Length</th>
                    </tr>
                  </thead>
                  <tbody>
                  <tr><td>S</td><td>51 cm</td><td>51 cm</td><td>65 cm</td></tr>
                  <tr><td>M</td><td>54 cm</td><td>54 cm</td><td>67 cm</td></tr>
                  <tr><td>L</td><td>57 cm</td><td>57 cm</td><td>69 cm</td></tr>
                  <tr><td>XL</td><td>60 cm</td><td>60 cm</td><td>71 cm</td></tr>
                  <tr><td>2XL</td><td>63 cm</td><td>63 cm</td><td>73 cm</td></tr>
                  <tr><td>3XL</td><td>66 cm</td><td>66 cm</td><td>75 cm</td></tr>
                  </tbody>
                </table>

                <div>
                  <h3 className='font-semibold'>Round Neck Hoodie</h3>
                  <p>320g | 59% cotton 41% polyvinyl acetate fibre</p>
                </div>
                <table className="table-xs table text-gray-600 text-center">
                  <thead>
                    <tr>
                      <th>Size</th>
                      <th>Chest Width</th>
                      <th>Shoulder Width</th>
                      <th>Length</th>
                    </tr>
                  </thead>
                  <tbody>
                  <tr><td>S</td><td>48 cm</td><td>50 cm</td><td>65 cm</td></tr>
                  <tr><td>M</td><td>51 cm</td><td>53 cm</td><td>67 cm</td></tr>
                  <tr><td>L</td><td>54 cm</td><td>56 cm</td><td>69 cm</td></tr>
                  <tr><td>XL</td><td>57 cm</td><td>59 cm</td><td>71 cm</td></tr>
                  <tr><td>2XL</td><td>60 cm</td><td>62 cm</td><td>73 cm</td></tr>
                  <tr><td>3XL</td><td>63 cm</td><td>65 cm</td><td>75 cm</td></tr>
                  </tbody>
                </table>
            </div>
          </div>
        </div>

        <div className="accordion-item" id="faq-02">
          <button className="accordion-toggle inline-flex items-center justify-between text-start" aria-controls="faq-01-collapse" aria-expanded="false">
            <span className="inline-flex items-center gap-x-4 text-gray-600">
              <span className="icon-[tabler--receipt-tax] size-6"></span>
              Will I be charged taxes when receiving my order?
            </span>
            <span className="icon-[tabler--chevron-left] accordion-item-active:-rotate-90 text-base- size-4.5 shrink-0 transition-transform duration-300 rtl:-rotate-180" ></span>
          </button>
          <div id="faq-02-collapse" className="accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="faq-02" role="region">
            <div className="px-5 pb-4">
              <p className="font-normal text-gray-400">
              Customs authorities in most countries are tightening the application of import fees, VAT/local taxes and additional charges for products purchased abroad. These regulations affect all types of items, regardless of their category or sector. Therefore, it is advisable to be prepared to cover these additional costs when your package enters your country. Always check local regulations and consider these potential expenses when making international purchases.
              </p>
            </div>
          </div>
        </div>

        <div className="accordion-item" id="faq-03">
          <button className="accordion-toggle inline-flex items-center justify-between text-start" aria-controls="faq-01-collapse" aria-expanded="false">
            <span className="inline-flex items-center gap-x-4 text-gray-600">
              <span className="icon-[tabler--plane-tilt] size-6"></span>
              How long will it take to receive my order?
            </span>
            <span className="icon-[tabler--chevron-left] accordion-item-active:-rotate-90 text-base- size-4.5 shrink-0 transition-transform duration-300 rtl:-rotate-180" ></span>
          </button>
          <div id="faq-03-collapse" className="accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="faq-03" role="region">
            <div className="px-5 pb-4">
              <p className="font-normal text-gray-400">
              Delivery times can vary significantly depending on several factors. If your order includes custom or made-to-order items, these may take longer to manufacture, adding days or even weeks to the process. Additionally, shipping times are often high and depend greatly on where you are purchasing from. For example, if the product is coming from another country or continent, shipping may take longer due to customs procedures and distances. To keep you up to date with the progress of your order, we will provide you with a tracking number once your purchase has been dispatched. This will allow you to monitor the status of the shipment and receive real-time updates.
              </p>
            </div>
          </div>
        </div>

      </div>
      
    </div>
  );
};

export default FAQ;