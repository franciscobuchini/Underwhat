import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Icon } from "@iconify/react";

const TeamOutfitForm = () => {
  const { t } = useTranslation("global");

  // Estados para seleccionar la prenda
  const [selectedWear, setSelectedWear] = useState("regular_tshirt");
  const [selectedColor, setSelectedColor] = useState("white");

  // Objeto que mapea la combinación "wear-color" a una URL de imagen
  const customProductImages = {
  // Regular T-Shirt
  "regular_tshirt-white": "https://res.cloudinary.com/dpleitc1d/image/upload/v1748803298/rt_f_white_zi1an9.webp",
  "regular_tshirt-seagull_gray": "https://res.cloudinary.com/dpleitc1d/image/upload/v1748803299/rt_f_seagull_qgzthz.webp",
  "regular_tshirt-khaki": "https://res.cloudinary.com/dpleitc1d/image/upload/v1748802039/rt_f_khaki_qihdml.webp",
  "regular_tshirt-glacier_blue": "https://res.cloudinary.com/dpleitc1d/image/upload/v1748802039/rt_f_glacier_pklmtd.webp",
  "regular_tshirt-aquamarine": "https://res.cloudinary.com/dpleitc1d/image/upload/v1748802037/rt_f_aquamarine_a4kkjf.webp",
  "regular_tshirt-apricot": "https://res.cloudinary.com/dpleitc1d/image/upload/v1748802038/rt_f_apricot_n0wyoo.webp",
  "regular_tshirt-ice_soul": "https://res.cloudinary.com/dpleitc1d/image/upload/v1748802038/rt_f_icesoul_izeonq.webp",
  "regular_tshirt-light_blue": "https://res.cloudinary.com/dpleitc1d/image/upload/v1748802039/rt_f_lightblue_qa2nka.webp",
  "regular_tshirt-pastel_purple": "https://res.cloudinary.com/dpleitc1d/image/upload/v1748803298/rt_f_pastelpurple_kemczp.webp",
  "regular_tshirt-sakura_pink": "https://res.cloudinary.com/dpleitc1d/image/upload/v1748803298/rt_f_sakura_yxveon.webp",
  "regular_tshirt-pale_green": "https://res.cloudinary.com/dpleitc1d/image/upload/v1748803298/rt_f_palegreen_mcyemw.webp",
  "regular_tshirt-light_gray": "https://res.cloudinary.com/dpleitc1d/image/upload/v1748802079/rt_f_lightgray_kmsogx.webp",
  "regular_tshirt-gray_moss": "https://res.cloudinary.com/dpleitc1d/image/upload/v1748802038/rt_f_graymoss_vm5vm9.webp",
  "regular_tshirt-deep_green": "https://res.cloudinary.com/dpleitc1d/image/upload/v1748802038/rt_f_deepgreen_k04uyx.webp",
  "regular_tshirt-sparrow": "https://res.cloudinary.com/dpleitc1d/image/upload/v1748803299/rt_f_sparrow_ccvatn.webp",
  "regular_tshirt-navy_blue": "https://res.cloudinary.com/dpleitc1d/image/upload/v1748803298/rt_f_navyblue_lfjsr4.webp",
  "regular_tshirt-dark_gray": "https://res.cloudinary.com/dpleitc1d/image/upload/v1748802037/rt_f_darkgray_aqy5e5.webp",
  "regular_tshirt-coffee_dark": "https://res.cloudinary.com/dpleitc1d/image/upload/v1748802037/rt_f_darkcoffee_jms4f7.webp",
  "regular_tshirt-maple_red": "https://res.cloudinary.com/dpleitc1d/image/upload/v1748802094/rt_f_maplered_bt3pgs.webp",
  "regular_tshirt-black": "https://res.cloudinary.com/dpleitc1d/image/upload/v1748802036/rt_f_black_bm4ieb.webp",

  // Sleeveless Vest
  "sleeveless_shirt-white": "https://res.cloudinary.com/dpleitc1d/image/upload/v1748803299/sl_f_white_qeermj.webp",
  "sleeveless_shirt-black": "https://res.cloudinary.com/dpleitc1d/image/upload/v1748803298/sl_f_black_qoeas9.webp",
  "sleeveless_shirt-dark_gray": "https://res.cloudinary.com/dpleitc1d/image/upload/v1748803299/sl_f_gray_jgz7aq.webp",

  // Oversized T-Shirt
  "oversized_tshirt-white": "https://res.cloudinary.com/dpleitc1d/image/upload/v1748802032/ov_f_white_o0s5sd.webp",
  "oversized_tshirt-khaki": "https://res.cloudinary.com/dpleitc1d/image/upload/v1748802032/ov_f_khaki_ie7joj.webp",
  "oversized_tshirt-pale_green": "https://res.cloudinary.com/dpleitc1d/image/upload/v1748802034/ov_f_palegreen_j7yojf.webp",
  "oversized_tshirt-dark_gray": "https://res.cloudinary.com/dpleitc1d/image/upload/v1748802031/ov_f_darkgray_orll02.webp",
  "oversized_tshirt-deep_green": "https://res.cloudinary.com/dpleitc1d/image/upload/v1748802032/ov_f_deepgreen_jxwzaw.webp",
  "oversized_tshirt-coffee_dark": "https://res.cloudinary.com/dpleitc1d/image/upload/v1748802031/ov_f_darkcoffee_o3zscu.webp",
  "oversized_tshirt-maple_red": "https://res.cloudinary.com/dpleitc1d/image/upload/v1748802038/ov_f_maplered_zlby62.webp",
  "oversized_tshirt-black": "https://res.cloudinary.com/dpleitc1d/image/upload/v1748802031/ov_f_black_j77a2h.webp",

  // Hoodie
  "hoodie-white": "https://res.cloudinary.com/dpleitc1d/image/upload/v1748802029/ho_f_white_t0gpgh.webp",
  "hoodie-black": "https://res.cloudinary.com/dpleitc1d/image/upload/v1748802029/ho_f_black_bafir6.webp",
  "hoodie-wood_ash": "https://res.cloudinary.com/dpleitc1d/image/upload/v1748802032/ho_f_woodash_xverun.webp",
  "hoodie-khaki": "https://res.cloudinary.com/dpleitc1d/image/upload/v1748802030/ho_f_khaki_y9hyc8.webp",
  "hoodie-pastel_yellow": "https://res.cloudinary.com/dpleitc1d/image/upload/v1748802032/ho_f_pastelyellow_oinqqr.webp", 
  "hoodie-navy_blue": "https://res.cloudinary.com/dpleitc1d/image/upload/v1748802030/ho_f_navyblue_ljwakt.webp",
  "hoodie-coffee_light": "https://res.cloudinary.com/dpleitc1d/image/upload/v1748802033/ho_f_coffeelight_tjyex8.webp", 
  "hoodie-deep_green": "https://res.cloudinary.com/dpleitc1d/image/upload/v1748802030/ho_f_deepgreen_uvg7wp.webp",
  "hoodie-wine_red": "https://res.cloudinary.com/dpleitc1d/image/upload/v1748802030/ho_f_winered_dtgn0l.webp",
  "hoodie-light_gray": "https://res.cloudinary.com/dpleitc1d/image/upload/v1748802030/ho_f_lightgray_kj6ouv.webp", 

  // Zip Hoodie
  "zip_hoodie-white": "https://res.cloudinary.com/dpleitc1d/image/upload/v1748803298/zh_f_white_maucod.webp",
  "zip_hoodie-black": "https://res.cloudinary.com/dpleitc1d/image/upload/v1748803304/zh_f_black_ghcaa5.webp",
  "zip_hoodie-navy_blue": "https://res.cloudinary.com/dpleitc1d/image/upload/v1748803301/zh_f_navyblue_yyjoln.webp",
  "zip_hoodie-dark_gray": "https://res.cloudinary.com/dpleitc1d/image/upload/v1748803334/zh_f_darkgray_fyw4iy.webp",
  "zip_hoodie-light_gray": "https://res.cloudinary.com/dpleitc1d/image/upload/v1748803358/zh_f_lightgray_ryxrwb.webp",
  "zip_hoodie-khaki": "https://res.cloudinary.com/dpleitc1d/image/upload/v1748803352/zh_f_khaki_ajokwh.webp",

  // Sweatshirt
  "sweatshirt-white": "https://res.cloudinary.com/dpleitc1d/image/upload/v1748803301/sw_f_white_gmio7n.webp",
  "sweatshirt-pink": "https://res.cloudinary.com/dpleitc1d/image/upload/v1748803301/sw_f_pink_gbdw07.webp",
  "sweatshirt-navy_blue": "https://res.cloudinary.com/dpleitc1d/image/upload/v1748803301/sw_f_navyblue_ohjslz.webp",
  "sweatshirt-haze_blue": "https://res.cloudinary.com/dpleitc1d/image/upload/v1748803300/sw_f_hazeblue_msyynq.webp",
  "sweatshirt-dark_khaki": "https://res.cloudinary.com/dpleitc1d/image/upload/v1748803300/sw_f_darkkhaki_ou0fa7.webp",
  "sweatshirt-wine_red": "https://res.cloudinary.com/dpleitc1d/image/upload/v1748803358/sw_f_winered_hllhgz.webp",
  "sweatshirt-cream": "https://res.cloudinary.com/dpleitc1d/image/upload/v1748803300/sw_f_cream_awzrym.webp",
  "sweatshirt-ice_soul": "https://res.cloudinary.com/dpleitc1d/image/upload/v1748803300/sw_f_icesoul_c3bweo.webp",
  "sweatshirt-bright_red": "https://res.cloudinary.com/dpleitc1d/image/upload/v1748803357/sw_f_brightred_zydumg.webp",
  "sweatshirt-steam": "https://res.cloudinary.com/dpleitc1d/image/upload/v1748803301/sw_f_steam_tgeds2.webp",
  "sweatshirt-khaki": "https://res.cloudinary.com/dpleitc1d/image/upload/v1748803300/sw_f_khaki_tfnurg.webp",
  "sweatshirt-apricot": "https://res.cloudinary.com/dpleitc1d/image/upload/v1748803299/sw_f_apricot_b26t7c.webp",
  "sweatshirt-dark_gray": "https://res.cloudinary.com/dpleitc1d/image/upload/v1748803300/sw_f_darkgray_ekltsx.webp",
  "sweatshirt-light_gray": "https://res.cloudinary.com/dpleitc1d/image/upload/v1748803301/sw_f_lightgray_uysx4x.webp",
  "sweatshirt-black": "https://res.cloudinary.com/dpleitc1d/image/upload/v1748803299/sw_f_black_m4v4qy.webp",
  "sweatshirt-royal_blue": "https://res.cloudinary.com/dpleitc1d/image/upload/v1748803358/sw_f_royalblue_umugz0.webp"
  };

  // Mapeo de colores
  const colorMapping = {
    white: "#EEEEEE",
    black: "#1E1D23",
    seagull_gray: "#D6D0D0",
    khaki: "#E0D3CB",
    glacier_blue: "#DBE4E1",
    aquamarine: "#C5DFDB", // Same as breeze_green
    apricot: "#F1D7B4",
    ice_soul: "#BBCDE0", // Same as ice_blue
    light_blue: "#93ABD2", // Same as haze_blue
    pastel_purple: "#B7B6E2",
    sakura_pink: "#FFB9DB",
    pale_green: "#B5BEB0", // Same as soft_green
    gray_moss: "#60635E",
    deep_green: "#2C403D",
    sparrow: "#255E72",
    navy_blue: "#34365C",
    dark_gray: "#323232",
    coffee_dark: "#45342C",
    coffee_light: "#905340",
    maple_red: "#412428",
    wood_ash: "#D8C8B9",
    pastel_yellow: "#EDD9BA", // Same as milk_apricot
    wine_red: "#983541", // Same as burgundy
    light_gray: "#92909B", // Same as linen_gray
    pink: "#EBB2B9",
    haze_blue: "#4C5574",
    dark_khaki: "#A6866D",
    cream: "#E8DBCB", // Same as asami
    bright_red: "#E10133",
    steam: "#CFCFCF", // Same as floral_gray and ash
    royal_blue: "#4272D5"
  };

  const wearColorOptions = {
    regular_tshirt: [
      "white",
      "seagull_gray",
      "khaki",
      "glacier_blue",
      "aquamarine", // formerly breeze_green
      "apricot",
      "ice_soul", // formerly ice_blue
      "light_blue", // formerly haze_blue
      "pastel_purple",
      "sakura_pink",
      "pale_green", // formerly light_green
      "light_gray", // formerly fog_gray
      "gray_moss", // formerly pale_green
      "deep_green", // formerly dark_green
      "sparrow", // formerly bird_green
      "navy_blue",
      "dark_gray",
      "coffee_dark", // formerly coffee
      "maple_red", // formerly maple_leaf_red
      "black"
    ],
    sleeveless_shirt: ["white", "dark_gray", "black"],
    oversized_tshirt: [
      "white",
      "khaki",
      "pale_green", // formerly light_green
      "dark_gray",
      "deep_green", // formerly dark_green
      "coffee_dark", // formerly coffee
      "maple_red", // formerly maple_leaf_red
      "black"
    ],
    zip_hoodie: ["white", "black", "navy_blue", "dark_gray", "light_gray", "khaki"],
    hoodie: [
      "white",
      "black",
      "wood_ash",
      "khaki",
      "pastel_yellow", // formerly milk_apricot
      "navy_blue", // formerly ink_blue
      "coffee_light", // formerly light_coffee
      "deep_green", // formerly jungle_green
      "wine_red",
      "light_gray" // formerly hemp_ash
    ],
    sweatshirt: [
      "white",
      "pink",
      "navy_blue",
      "haze_blue", // formerly mist_blue
      "dark_khaki", // formerly deep_khaki
      "wine_red", // formerly burgundy
      "cream", // formerly asami
      "ice_soul", // formerly ice_blue
      "bright_red", // formerly big_red
      "steam", // formerly ash
      "khaki", // formerly milk_tea (since khaki and milk_tea share same hex)
      "apricot", // formerly yone_anzu (using apricot which matches beige_apricot)
      "dark_gray", // formerly iron_gray
      "light_gray", // formerly hemp_ash
      "black",
      "royal_blue" // formerly sapphire
    ]
  };
  
  const getFormattedColorName = (colorKey) => {
    return colorKey
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const handleWearChange = (e) => {
    const newWear = e.target.value;
    setSelectedWear(newWear);
    if (!wearColorOptions[newWear].includes(selectedColor)) {
      setSelectedColor("white");
    }
  };

  const getProductImage = () => {
    const key = `${selectedWear}-${selectedColor}`;
    return customProductImages[key];
  };

  const wearNames = {
    regular_tshirt: t("regular_tshirt"),
    sleeveless_shirt: t("sleeveless_shirt"),
    oversized_tshirt: t("oversized_tshirt"),
    zip_hoodie: t("zip_hoodie"),
    hoodie: t("hoodie"),
    sweatshirt: t("sweatshirt"),
  };

  return (
    <div className="bg-white w-full rounded-2xl border border-gray-300 p-4 md:p-8">
      {/* Contenedor en dos columnas */}
      <div className="flex flex-col md:flex-row gap-10">
        {/* Columna Izquierda: Formularios y secciones */}
        <div className="flex-1 space-y-8">
          {/* Selector de Prenda */}
          <div>
            <label
              className="block text-sm font-medium text-gray-600 mb-3"
              htmlFor="selectWear"
            >
              {t("team.select_wear")}
            </label>
            <select
              id="selectWear"
              required
              value={selectedWear}
              onChange={handleWearChange}
              className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-600 focus:border-pink-800 focus:ring focus:ring-pink-200"
            >
              <option value="regular_tshirt">{t("regular_tshirt")}</option>
              <option value="sleeveless_shirt">{t("sleeveless_shirt")}</option>
              <option value="oversized_tshirt">{t("oversized_tshirt")}</option>
              <option value="zip_hoodie">{t("zip_hoodie")}</option>
              <option value="hoodie">{t("hoodie")}</option>
              <option value="sweatshirt">{t("sweatshirt")}</option>
            </select>
          </div>
  
          {/* Selector de color */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-3">
              {t("team.select_color")}{" "}
              <span className="ml-2 text-sm font-medium text-gray-600">
                {getFormattedColorName(selectedColor)}
              </span>
            </label>
            <div className="flex items-center gap-4">
              <div className="flex flex-wrap gap-2">
                {wearColorOptions[selectedWear].map((colorKey) => {
                  const isSelected = selectedColor === colorKey;
                  return (
                    <button
                      key={colorKey}
                      type="button"
                      onClick={() => setSelectedColor(colorKey)}
                      className={`relative w-10 h-10 rounded-full border-2 transition-transform duration-200 ${
                        isSelected
                          ? "ring-2 ring-pink-800 ring-offset-2 scale-110"
                          : "border-gray-200 hover:scale-105"
                      }`}
                      style={{ backgroundColor: colorMapping[colorKey] }}
                      title={getFormattedColorName(colorKey)}
                    ></button>
                  );
                })}
              </div>
            </div>
          </div>
  
          {/* Imagen del producto en mobile: se muestra solo en pantallas pequeñas */}
          <div className="block md:hidden">
            <img
              src={getProductImage()}
              alt={selectedWear}
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
  
          {/* Información adicional */}
          <div className="mt-8 bg-gray-50 border border-gray-200 p-6 rounded-xl text-gray-700 text-sm leading-relaxed">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">
              {t("team.how_to_order")}
            </h2>
            <p className="mb-3">{t("team.order_description")}</p>
            <p className="mb-3">
              {t("team.order_instructions")}{" "}
            </p>
            <ul className="list-disc list-inside mb-3">
              <li>{t("team.order_bullet_1")}</li>
              <li>{t("team.order_bullet_2")}</li>
              <li>{t("team.order_bullet_3")}</li>
              <li>{t("team.order_bullet_4")}</li>
            </ul>
            <p>{t("team.order_summary")}</p>
            <p>{t("team.design_note")}</p>
          </div>
        </div>
  
        <div className="flex-1 hidden md:flex items-center justify-center">
          <div className="w-full">
            <img
              src={getProductImage()}
              alt={selectedWear}
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamOutfitForm;