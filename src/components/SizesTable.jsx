// SizesTable.jsx
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Icon } from "@iconify/react";

const SizesTable = () => {
  const { t } = useTranslation("global");

  const products = [
    {
      name: t("regular_tshirt"),
      weight: t("faq.table.regular_tshirt_weight"),
      sizes: [
        ["XS", "48 cm", "43.5 cm", "66 cm"],
        ["S", "50 cm", "45 cm", "68 cm"],
        ["M", "52 cm", "47 cm", "70 cm"],
        ["L", "54 cm", "49 cm", "72 cm"],
        ["XL", "56 cm", "50 cm", "74 cm"],
        ["2XL", "58 cm", "51 cm", "76 cm"],
        ["3XL", "60 cm", "54.5 cm", "78 cm"],
      ]
    },
    {
      name: t("sleeveless_shirt"),
      weight: t("faq.table.sleeveless_shirt_weight"),
      sizes: [
        ["XS", "48 cm", "40 cm", "66 cm"],
        ["S", "50 cm", "41 cm", "68 cm"],
        ["M", "52 cm", "41.5 cm", "70 cm"],
        ["L", "54 cm", "43 cm", "72 cm"],
        ["XL", "56 cm", "44 cm", "74 cm"],
        ["2XL", "58 cm", "51 cm", "76 cm"],
        ["3XL", "60 cm", "54.5 cm", "78 cm"],
      ]
    },
    {
      name: t("oversized_tshirt"),
      weight: t("faq.table.oversized_weight"),
      sizes: [
        ["XS", "54 cm", "54 cm", "72 cm"],
        ["S", "56 cm", "56 cm", "74 cm"],
        ["M", "58 cm", "58 cm", "76 cm"],
        ["L", "60 cm", "60 cm", "77 cm"],
        ["XL", "62 cm", "62 cm", "79 cm"]
      ]
    },
    {
      name: t("zip_hoodie"),
      weight: t("faq.table.zip_hoodie_weight"),
      sizes: [
        ["XS", "51 cm", "48 cm", "62 cm"],
        ["S", "54 cm", "51 cm", "65 cm"],
        ["M", "57 cm", "54 cm", "68 cm"],
        ["L", "60 cm", "57 cm", "71 cm"],
        ["XL", "63 cm", "60 cm", "74 cm"],
        ["2XL", "66 cm", "63 cm", "77 cm"],
        ["3XL", "69 cm", "66 cm", "79 cm"],
      ]
    },
    {
      name: t("hoodie"),
      weight: t("faq.table.hoodie_weight"),
      sizes: [
        ["XS", "51 cm", "51 cm", "65 cm"],
        ["S", "54 cm", "54 cm", "67 cm"],
        ["M", "57 cm", "57 cm", "69 cm"],
        ["L", "60 cm", "60 cm", "71 cm"],
        ["XL", "63 cm", "63 cm", "73 cm"],
        ["2XL", "66 cm", "66 cm", "75 cm"],
      ]
    },
    {
      name: t("sweatshirt"),
      weight: t("faq.table.sweatshirt_weight"),
      sizes: [
        ["XS", "48 cm", "50 cm", "65 cm"],
        ["S", "51 cm", "53 cm", "67 cm"],
        ["M", "54 cm", "56 cm", "69 cm"],
        ["L", "57 cm", "59 cm", "71 cm"],
        ["XL", "60 cm", "62 cm", "73 cm"],
        ["2XL", "63 cm", "65 cm", "75 cm"],
      ]
    },
    {
      name: t("shorts"),
      weight: t("faq.table.shorts_weight"),
      sizes: [
        ["US 28", "68 cm", "100 cm", "50 cm"],
        ["US 29-30", "72 cm", "104 cm", "51 cm"],
        ["US 30-31", "75 cm", "108 cm", "52 cm"],
        ["US 32", "78 cm", "112 cm", "53 cm"],
        ["US 33-34", "80 cm", "116 cm", "54 cm"],
        ["US 34-35", "82 cm", "120 cm", "55 cm"],
        ["US 36", "84 cm", "124 cm", "56 cm"],
      ]
    }
  ];

  // Producto por defecto: regular t-shirt
  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  const handleSelectChange = (e) => {
    setSelectedProduct(products[e.target.value]);
  };

  return (
    <div className="w-full flex flex-col gap-6 py-4">
      <div className="bg-white border border-gray-300 rounded-2xl p-2 sm:p-6">
        <div className="relative max-w-xs mb-4">
  <select 
    className="appearance-none text-pink-800 outline outline-gray-300 bg-gray-50 hover:cursor-pointer rounded-xl p-2 w-full pr-8"
    onChange={handleSelectChange}
    value={products.findIndex(prod => prod.name === selectedProduct.name)}
  >
    {products.map((product, index) => (
      <option key={index} value={index}>
        {product.name}
      </option>
    ))}
  </select>
  <div className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-gray-400">
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  </div>
</div>

        {selectedProduct && (
          <>
            <p className="text-gray-600 text-sm mb-4">{selectedProduct.weight}</p>
            <div className="w-full">
              <table className="w-full table-fixed border-collapse border border-gray-200 text-center">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-200 px-2 py-1 text-xs sm:text-sm">
                      {t("faq.table.size")}
                    </th>
                    <th className="border border-gray-200 px-2 py-1 text-xs sm:text-sm">
                      {selectedProduct.name === t("shorts")
                        ? t("faq.table.waist")
                        : t("faq.table.chest")}
                    </th>
                    <th className="border border-gray-200 px-2 py-1 text-xs sm:text-sm">
                      {selectedProduct.name === t("shorts")
                        ? t("faq.table.hip")
                        : t("faq.table.shoulder")}
                    </th>
                    <th className="border border-gray-200 px-2 py-1 text-xs sm:text-sm">
                      {t("faq.table.length")}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {selectedProduct.sizes.map((size, i) => (
                    <tr key={i} className="hover:bg-gray-50">
                      {size.map((value, j) => (
                        <td
                          key={j}
                          className="border border-gray-200 px-2 py-1 whitespace-nowrap text-xs sm:text-sm"
                        >
                          {value}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-gray-400 text-xs mt-4 italic"> {t("faq.table.advice")} </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
  };
  
  export default SizesTable;
  