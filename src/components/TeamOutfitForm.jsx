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
  "regular_tshirt-white": "https://res.cloudinary.com/dpleitc1d/image/upload/v1743459293/j69win8wv6toomncmful.png",
  "regular_tshirt-seagull_gray": "https://res.cloudinary.com/dpleitc1d/image/upload/v1743459292/iambm0gw861vynpdque2.png",
  "regular_tshirt-khaki": "https://res.cloudinary.com/dpleitc1d/image/upload/v1743459292/twkhetsy1xtbyvlrsb8t.png",
  "regular_tshirt-glacier_blue": "https://res.cloudinary.com/dpleitc1d/image/upload/v1743459294/m07689fvj2j6dlc8bjni.png",
  "regular_tshirt-aquamarine": "https://res.cloudinary.com/dpleitc1d/image/upload/v1743459294/eoiloiznw64simdupn0v.png",
  "regular_tshirt-apricot": "https://res.cloudinary.com/dpleitc1d/image/upload/v1743459293/pjqeh1kdl5xgprewkchi.png",
  "regular_tshirt-light_blue": "https://res.cloudinary.com/dpleitc1d/image/upload/v1743459294/nrto3tvwotwtkgpcula6.png",
  "regular_tshirt-pastel_blue": "https://res.cloudinary.com/dpleitc1d/image/upload/v1743459294/mwl1bpkctllcjkhtmapz.png",
  "regular_tshirt-lotus_purple": "https://res.cloudinary.com/dpleitc1d/image/upload/v1743459292/x5ufhjudy2eguwsvqquf.png",
  "regular_tshirt-sakura_pink": "https://res.cloudinary.com/dpleitc1d/image/upload/v1743459292/wo1z9bwac2wqkblaqbsi.png",
  "regular_tshirt-pale_green": "https://res.cloudinary.com/dpleitc1d/image/upload/v1743460520/lightgreen_fh37gq.png",
  "regular_tshirt-light_gray": "https://res.cloudinary.com/dpleitc1d/image/upload/v1743459294/jkiwo0fauvhnpifwe2sz.png",
  "regular_tshirt-gray_moss": "https://res.cloudinary.com/dpleitc1d/image/upload/v1743459292/flefvfcmvklsmzalybmh.png",
  "regular_tshirt-deep_green": "https://res.cloudinary.com/dpleitc1d/image/upload/v1743459293/b2ho08fcaalq9cw0re2a.png",
  "regular_tshirt-sparrow_green": "https://res.cloudinary.com/dpleitc1d/image/upload/v1743459293/tdue9o4zz7nsrhvvq03d.png",
  "regular_tshirt-navy_blue": "https://res.cloudinary.com/dpleitc1d/image/upload/v1743459292/gblrxkedwszefh1zaaax.png",
  "regular_tshirt-dark_gray": "https://res.cloudinary.com/dpleitc1d/image/upload/v1743459293/dgnvmni08t8xan4ulz1c.png",
  "regular_tshirt-coffee_dark": "https://res.cloudinary.com/dpleitc1d/image/upload/v1743459293/azuiligffpc8is96tgc5.png",
  "regular_tshirt-maple_red": "https://res.cloudinary.com/dpleitc1d/image/upload/v1743459292/zsxiwqjjgi2jijcsd96g.png",
  "regular_tshirt-black": "https://res.cloudinary.com/dpleitc1d/image/upload/v1743459293/rymdu4ckino6qya8gw5h.png",

  // Sleeveless Vest
  "sleeveless_shirt-white": "https://res.cloudinary.com/dpleitc1d/image/upload/v1743462488/whitetank_att3k8.png",
  "sleeveless_shirt-black": "https://res.cloudinary.com/dpleitc1d/image/upload/v1743462488/blacktank_gyzv49.png",
  "sleeveless_shirt-dark_gray": "https://res.cloudinary.com/dpleitc1d/image/upload/v1743462488/darkgraytank_kfhu16.png",

  // Oversized T-Shirt
  "oversized_tshirt-white": "https://res.cloudinary.com/dpleitc1d/image/upload/v1743357592/Plain-Tshirt_jvzfmx.png",
  "oversized_tshirt-khaki": "https://res.cloudinary.com/dpleitc1d/image/upload/v1743357592/Plain-Tshirt2_yv1aor.png",
  "oversized_tshirt-pale_green": "https://res.cloudinary.com/dpleitc1d/image/upload/v1743357594/Plain-Tshirt3_v2mgdp.png",
  "oversized_tshirt-dark_gray": "https://res.cloudinary.com/dpleitc1d/image/upload/v1743357592/Plain-Tshirt4_rvipgg.png",
  "oversized_tshirt-deep_green": "https://res.cloudinary.com/dpleitc1d/image/upload/v1743357593/Plain-Tshirt5_w72cuc.png",
  "oversized_tshirt-coffee_dark": "https://res.cloudinary.com/dpleitc1d/image/upload/v1743357594/Plain-Tshirt6_fari7l.png",
  "oversized_tshirt-maple_red": "https://res.cloudinary.com/dpleitc1d/image/upload/v1743357593/Plain-Tshirt7_rs4qhd.png",
  "oversized_tshirt-black": "https://res.cloudinary.com/dpleitc1d/image/upload/v1743357593/Plain-Tshirt8_x9o009.png",

  // Hoodie
  "hoodie-white": "https://res.cloudinary.com/dpleitc1d/image/upload/v1743545531/prucwi6bvhbsronvqjbt.png",
  "hoodie-black": "https://res.cloudinary.com/dpleitc1d/image/upload/v1743545531/dexsq0exclbpnhryr7xv.png",
  "hoodie-wood_ash": "https://res.cloudinary.com/dpleitc1d/image/upload/v1743545532/qctllg1cawszfrxz5aae.png",
  "hoodie-khaki": "https://res.cloudinary.com/dpleitc1d/image/upload/v1743545531/qtjkavhwr59edromrc0n.png",
  "hoodie-pastel_yellow": "https://res.cloudinary.com/dpleitc1d/image/upload/v1743545531/riba6t4dnzwjxhzkdm1r.png", 
  "hoodie-navy_blue": "https://res.cloudinary.com/dpleitc1d/image/upload/v1743545531/vnn5dlerpw49dc7fmrsg.png",
  "hoodie-coffee_light": "https://res.cloudinary.com/dpleitc1d/image/upload/v1743545532/tbv8wnzadpz6egoknern.png", 
  "hoodie-deep_green": "https://res.cloudinary.com/dpleitc1d/image/upload/v1743545533/wx7f46sioayuhcy3cewn.png",
  "hoodie-wine_red": "https://res.cloudinary.com/dpleitc1d/image/upload/v1743545532/jxcolhlz4or8ahkgpqpq.png",
  "hoodie-light_gray": "https://res.cloudinary.com/dpleitc1d/image/upload/v1743545531/qvhotitt5rcdybjsi943.png", 

  // Zip Hoodie
  "zip_hoodie-white": "https://res.cloudinary.com/dpleitc1d/image/upload/v1743816457/y36iudxhbufxvww5piun.png",
  "zip_hoodie-black": "https://res.cloudinary.com/dpleitc1d/image/upload/v1743702331/eedw3lj2dbmvdmyh9tgt.png",
  "zip_hoodie-navy_blue": "https://res.cloudinary.com/dpleitc1d/image/upload/v1743702331/diidkdexdkeltazjl0ew.png",
  "zip_hoodie-dark_gray": "https://res.cloudinary.com/dpleitc1d/image/upload/v1743702330/oiofxgpuzhq7secyur2k.png",
  "zip_hoodie-light_gray": "https://res.cloudinary.com/dpleitc1d/image/upload/v1743702331/iuuxtpytxcwc7hdgjffy.png",
  "zip_hoodie-khaki": "https://res.cloudinary.com/dpleitc1d/image/upload/v1743702331/fhqz5lvm0qbjaatcvceo.png",

  // Sweatshirt
  "sweatshirt-white": "https://res.cloudinary.com/dpleitc1d/image/upload/v1743698062/ooeweg9ngb5yhbs0zlmj.png",
  "sweatshirt-pink": "https://res.cloudinary.com/dpleitc1d/image/upload/v1743698061/gruayzzz5vv3axx9a3zt.png",
  "sweatshirt-navy_blue": "https://res.cloudinary.com/dpleitc1d/image/upload/v1743698062/ozqa30zwa7juvftaiugj.png",
  "sweatshirt-haze_blue": "https://res.cloudinary.com/dpleitc1d/image/upload/v1743698061/lliilcyx3rj1jvm7d7bu.png",
  "sweatshirt-dark_khaki": "https://res.cloudinary.com/dpleitc1d/image/upload/v1743698061/nq9hiuukrk5t0vycg3zt.png",
  "sweatshirt-wine_red": "https://res.cloudinary.com/dpleitc1d/image/upload/v1743698061/jnn0sxgidl2sspwy5nxf.png",
  "sweatshirt-cream": "https://res.cloudinary.com/dpleitc1d/image/upload/v1743698061/e03g4vb0a95ooslpoqbk.png",
  "sweatshirt-light_blue": "https://res.cloudinary.com/dpleitc1d/image/upload/v1743702895/n65vuiabjs2irx2h19mn.png",
  "sweatshirt-bright_red": "https://res.cloudinary.com/dpleitc1d/image/upload/v1743698063/xzzkzwckz14qynanekp0.png",
  "sweatshirt-steam": "https://res.cloudinary.com/dpleitc1d/image/upload/v1743698062/i1hhlqqcvte5r8y8vigo.png",
  "sweatshirt-khaki": "https://res.cloudinary.com/dpleitc1d/image/upload/v1743698063/vpnrahjp1sbet7rkokbj.png",
  "sweatshirt-apricot": "https://res.cloudinary.com/dpleitc1d/image/upload/v1743698061/xyilkga0omrnaw57kx97.png",
  "sweatshirt-dark_gray": "https://res.cloudinary.com/dpleitc1d/image/upload/v1743698063/t0pi2fxjk5djwx4cul8b.png",
  "sweatshirt-light_gray": "https://res.cloudinary.com/dpleitc1d/image/upload/v1743698062/aghp0l37mtxddonj435z.png",
  "sweatshirt-black": "https://res.cloudinary.com/dpleitc1d/image/upload/v1743698062/p6vdf1zhax3v5rsv85pj.png",
  "sweatshirt-royal_blue": "https://res.cloudinary.com/dpleitc1d/image/upload/v1743698063/md0ytlqga032wb9psiap.png"
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
    light_blue: "#BBCDE0", // Same as ice_blue
    pastel_blue: "#93ABD2", // Same as haze_blue
    lotus_purple: "#B7B6E2",
    sakura_pink: "#FFB9DB",
    pale_green: "#B5BEB0", // Same as soft_green
    gray_moss: "#60635E",
    deep_green: "#2C403D",
    sparrow_green: "#255E72",
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
      "light_blue", // formerly ice_blue
      "pastel_blue", // formerly haze_blue
      "lotus_purple",
      "sakura_pink",
      "pale_green", // formerly light_green
      "light_gray", // formerly fog_gray
      "gray_moss", // formerly pale_green
      "deep_green", // formerly dark_green
      "sparrow_green", // formerly bird_green
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
      "light_blue",
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
          </div>
        </div>
  
        {/* Imagen del producto en desktop: se muestra solo en pantallas medianas en adelante */}
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
      {/* Aquí se podría envolver todo el contenido en un form si es necesario */}
    </div>
  );
};

export default TeamOutfitForm;