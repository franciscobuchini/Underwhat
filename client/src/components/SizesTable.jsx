import { useState } from "react";

const SizeTable = () => {
  const products = [
    { name: "Regular T-Shirt", weight: "230g | 100% long-staple cotton", sizes: [
      ["S", "96 cm", "43.5 cm", "66 cm"],
      ["M", "100 cm", "45 cm", "68 cm"],
      ["L", "104 cm", "47 cm", "70 cm"],
      ["XL", "108 cm", "49 cm", "72 cm"],
      ["2XL", "112 cm", "50 cm", "74 cm"]
    ] },
    { name: "Sleeveless Vest", weight: "230g | 100% long-staple cotton", sizes: [
      ["S", "96 cm", "40 cm", "66 cm"],
      ["M", "100 cm", "41 cm", "68 cm"],
      ["L", "104 cm", "41.5 cm", "70 cm"],
      ["XL", "108 cm", "43 cm", "72 cm"],
      ["2XL", "112 cm", "44 cm", "74 cm"]
    ] },
    { name: "Oversized T-Shirt", weight: "300g | 100% long-staple cotton", sizes: [
      ["S", "110 cm", "54 cm", "72 cm"],
      ["M", "114 cm", "56 cm", "74 cm"],
      ["L", "118 cm", "58 cm", "76 cm"],
      ["XL", "122 cm", "60 cm", "77 cm"],
      ["2XL", "126 cm", "62 cm", "79 cm"]
    ] },
    { name: "Zip Hoodie", weight: "600g | 95% cotton 5% spandex", sizes: [
      ["S", "51 cm", "48 cm", "62 cm"],
      ["M", "54 cm", "51 cm", "65 cm"],
      ["L", "57 cm", "54 cm", "68 cm"],
      ["XL", "60 cm", "57 cm", "71 cm"],
      ["2XL", "63 cm", "60 cm", "74 cm"]
    ] },
    { name: "Hoodie", weight: "320g | 59% cotton 41% polyvinyl acetate fibre", sizes: [
      ["S", "51 cm", "51 cm", "65 cm"],
      ["M", "54 cm", "54 cm", "67 cm"],
      ["L", "57 cm", "57 cm", "69 cm"],
      ["XL", "60 cm", "60 cm", "71 cm"],
      ["2XL", "63 cm", "63 cm", "73 cm"]
    ] },
    { name: "Round Neck Hoodie", weight: "320g | 59% cotton 41% polyvinyl acetate fibre", sizes: [
      ["S", "48 cm", "50 cm", "65 cm"],
      ["M", "51 cm", "53 cm", "67 cm"],
      ["L", "54 cm", "56 cm", "69 cm"],
      ["XL", "57 cm", "59 cm", "71 cm"],
      ["2XL", "60 cm", "62 cm", "73 cm"]
    ] }
  ];

  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  return (
    <div className="w-full flex flex-col gap-6 px-6 py-4">

      <div className="bg-white shadow-md rounded-lg p-4">
      <select 
        className="text-pink-800 focus:outline-none rounded-lg pr-2 max-w-xs" 
        onChange={(e) => setSelectedProduct(products[e.target.value])}
      >
        {products.map((product, index) => (
          <option key={index} value={index}>{product.name}</option>
        ))}
      </select>
        <p className="text-gray-600 text-sm mb-2">{selectedProduct.weight}</p>
        <table className="w-full border-collapse border border-gray-300 text-gray-700 text-center">
          <thead>
            <tr className="bg-gray-100 text-gray-900">
              <th className="border border-gray-300 px-4 py-2">Size</th>
              <th className="border border-gray-300 px-4 py-2">Chest Width</th>
              <th className="border border-gray-300 px-4 py-2">Shoulder Width</th>
              <th className="border border-gray-300 px-4 py-2">Length</th>
            </tr>
          </thead>
          <tbody>
            {selectedProduct.sizes.map((size, i) => (
              <tr key={i} className="border border-gray-300 hover:bg-gray-50">
                {size.map((value, j) => (
                  <td key={j} className="border border-gray-300 px-4 py-2">{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SizeTable;
