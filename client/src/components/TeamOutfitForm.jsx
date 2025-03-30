import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Icon } from "@iconify/react";

const TeamOutfitForm = () => {
  const { t } = useTranslation("global");

  // Estados para el outfit actual
  const [selectedColor, setSelectedColor] = useState("white");
  const [selectedWear, setSelectedWear] = useState("regular_tshirt");
  const [files, setFiles] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState("");
  // Email único para todo el pedido
  const [email, setEmail] = useState("");
  const [progress, setProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  // Array de outfits agregados
  const [outfits, setOutfits] = useState([]);

  // Objeto que mapea la combinación "wear-color" a una URL de imagen
const customProductImages = {
  // Regular T-Shirt
  // "regular_tshirt-white": "https://via.placeholder.com/400x400?text=Regular+T-Shirt+-+White",
  // "regular_tshirt-seagull_gray": "https://via.placeholder.com/400x400?text=Regular+T-Shirt+-+Seagull+Gray",
  // "regular_tshirt-khaki": "https://via.placeholder.com/400x400?text=Regular+T-Shirt+-+Khaki",
  // "regular_tshirt-glacier_blue": "https://via.placeholder.com/400x400?text=Regular+T-Shirt+-+Glacier+Blue",
  // "regular_tshirt-breeze_green": "https://via.placeholder.com/400x400?text=Regular+T-Shirt+-+Breeze+Green",
  // "regular_tshirt-apricot": "https://via.placeholder.com/400x400?text=Regular+T-Shirt+-+Apricot",
  // "regular_tshirt-ice_blue": "https://via.placeholder.com/400x400?text=Regular+T-Shirt+-+Ice+Blue",
  // "regular_tshirt-haze_blue": "https://via.placeholder.com/400x400?text=Regular+T-Shirt+-+Haze+Blue",
  // "regular_tshirt-lotus_purple": "https://via.placeholder.com/400x400?text=Regular+T-Shirt+-+Lotus+Purple",
  // "regular_tshirt-sakura_pink": "https://via.placeholder.com/400x400?text=Regular+T-Shirt+-+Sakura+Pink",
  // "regular_tshirt-light_green": "https://via.placeholder.com/400x400?text=Regular+T-Shirt+-+Light+Green",
  // "regular_tshirt-fog_gray": "https://via.placeholder.com/400x400?text=Regular+T-Shirt+-+Fog+Gray",
  // "regular_tshirt-pale_green": "https://via.placeholder.com/400x400?text=Regular+T-Shirt+-+Pale+Green",
  // "regular_tshirt-dark_green": "https://via.placeholder.com/400x400?text=Regular+T-Shirt+-+Dark+Green",
  // "regular_tshirt-bird_green": "https://via.placeholder.com/400x400?text=Regular+T-Shirt+-+Bird+Green",
  // "regular_tshirt-navy_blue": "https://via.placeholder.com/400x400?text=Regular+T-Shirt+-+Navy+Blue",
  // "regular_tshirt-dark_gray": "https://via.placeholder.com/400x400?text=Regular+T-Shirt+-+Dark+Gray",
  // "regular_tshirt-light_gray": "https://via.placeholder.com/400x400?text=Regular+T-Shirt+-+Light+Gray",
  // "regular_tshirt-coffee": "https://via.placeholder.com/400x400?text=Regular+T-Shirt+-+Coffee",
  // "regular_tshirt-maple_leaf_red": "https://via.placeholder.com/400x400?text=Regular+T-Shirt+-+Maple+Leaf+Red",
  // "regular_tshirt-black": "https://via.placeholder.com/400x400?text=Regular+T-Shirt+-+Black",

  // Sleeveless Vest
  // "sleeveless_shirt-white": "https://via.placeholder.com/400x400?text=Sleeveless+Vest+-+White",
  // "sleeveless_shirt-black": "https://via.placeholder.com/400x400?text=Sleeveless+Vest+-+Black",
  // "sleeveless_shirt-dark_gray": "https://via.placeholder.com/400x400?text=Sleeveless+Vest+-+Dark+Gray",

  // Oversized T-Shirt (casos especiales para white y black)
  "oversized_tshirt-white": "https://res.cloudinary.com/dpleitc1d/image/upload/v1743357592/Plain-Tshirt_jvzfmx.png",
  "oversized_tshirt-khaki": "https://res.cloudinary.com/dpleitc1d/image/upload/v1743357592/Plain-Tshirt2_yv1aor.png",
  "oversized_tshirt-light_green": "https://res.cloudinary.com/dpleitc1d/image/upload/v1743357594/Plain-Tshirt3_v2mgdp.png",
  "oversized_tshirt-dark_gray": "https://res.cloudinary.com/dpleitc1d/image/upload/v1743357592/Plain-Tshirt4_rvipgg.png",
  "oversized_tshirt-dark_green": "https://res.cloudinary.com/dpleitc1d/image/upload/v1743357593/Plain-Tshirt5_w72cuc.png",
  "oversized_tshirt-coffee": "https://res.cloudinary.com/dpleitc1d/image/upload/v1743357594/Plain-Tshirt6_fari7l.png",
  "oversized_tshirt-maple_leaf_red": "https://res.cloudinary.com/dpleitc1d/image/upload/v1743357593/Plain-Tshirt7_rs4qhd.png",
  "oversized_tshirt-black": "https://res.cloudinary.com/dpleitc1d/image/upload/v1743357593/Plain-Tshirt8_x9o009.png",

  // Zip Hoodie
  // "zip_hoodie-white": "https://via.placeholder.com/400x400?text=Zip+Hoodie+-+White",
  // "zip_hoodie-black": "https://via.placeholder.com/400x400?text=Zip+Hoodie+-+Black",
  // "zip_hoodie-navy_blue": "https://via.placeholder.com/400x400?text=Zip+Hoodie+-+Navy+Blue",
  // "zip_hoodie-dark_gray": "https://via.placeholder.com/400x400?text=Zip+Hoodie+-+Dark+Gray",
  // "zip_hoodie-light_gray": "https://via.placeholder.com/400x400?text=Zip+Hoodie+-+Light+Gray",
  // "zip_hoodie-khaki": "https://via.placeholder.com/400x400?text=Zip+Hoodie+-+Khaki",

  // Hoodie
  // "hoodie-white": "https://via.placeholder.com/400x400?text=Hoodie+-+White",
  // "hoodie-black": "https://via.placeholder.com/400x400?text=Hoodie+-+Black",
  // "hoodie-wood_ash": "https://via.placeholder.com/400x400?text=Hoodie+-+Wood+Ash",
  // "hoodie-khaki": "https://via.placeholder.com/400x400?text=Hoodie+-+Khaki",
  // "hoodie-milk_apricot": "https://via.placeholder.com/400x400?text=Hoodie+-+Milk+Apricot",
  // "hoodie-ink_blue": "https://via.placeholder.com/400x400?text=Hoodie+-+Ink+Blue",
  // "hoodie-light_coffee": "https://via.placeholder.com/400x400?text=Hoodie+-+Light+Coffee",
  // "hoodie-jungle_green": "https://via.placeholder.com/400x400?text=Hoodie+-+Jungle+Green",
  // "hoodie-wine_red": "https://via.placeholder.com/400x400?text=Hoodie+-+Wine+Red",
  // "hoodie-hemp_ash": "https://via.placeholder.com/400x400?text=Hoodie+-+Hemp+Ash",

  // Round Neck Hoodie
  // "round_neck_hoodie-white": "https://via.placeholder.com/400x400?text=Round+Neck+Hoodie+-+White",
  // "round_neck_hoodie-pink": "https://via.placeholder.com/400x400?text=Round+Neck+Hoodie+-+Pink",
  // "round_neck_hoodie-navy_blue": "https://via.placeholder.com/400x400?text=Round+Neck+Hoodie+-+Navy+Blue",
  // "round_neck_hoodie-haze_blue": "https://via.placeholder.com/400x400?text=Round+Neck+Hoodie+-+Haze+Blue",
  // "round_neck_hoodie-deep_khaki": "https://via.placeholder.com/400x400?text=Round+Neck+Hoodie+-+Deep+Khaki",
  // "round_neck_hoodie-burgundy": "https://via.placeholder.com/400x400?text=Round+Neck+Hoodie+-+Burgundy",
  // "round_neck_hoodie-asami": "https://via.placeholder.com/400x400?text=Round+Neck+Hoodie+-+Asami",
  // "round_neck_hoodie-light_blue": "https://via.placeholder.com/400x400?text=Round+Neck+Hoodie+-+Light+Blue",
  // "round_neck_hoodie-big_red": "https://via.placeholder.com/400x400?text=Round+Neck+Hoodie+-+Big+Red",
  // "round_neck_hoodie-ash": "https://via.placeholder.com/400x400?text=Round+Neck+Hoodie+-+Ash",
  // "round_neck_hoodie-milk_tea": "https://via.placeholder.com/400x400?text=Round+Neck+Hoodie+-+Milk+Tea",
  // "round_neck_hoodie-yone_anzu": "https://via.placeholder.com/400x400?text=Round+Neck+Hoodie+-+Yone+Anzu",
  // "round_neck_hoodie-iron_gray": "https://via.placeholder.com/400x400?text=Round+Neck+Hoodie+-+Iron+Gray",
  // "round_neck_hoodie-hemp_ash": "https://via.placeholder.com/400x400?text=Round+Neck+Hoodie+-+Hemp+Ash",
  // "round_neck_hoodie-black": "https://via.placeholder.com/400x400?text=Round+Neck+Hoodie+-+Black",
  // "round_neck_hoodie-sapphire": "https://via.placeholder.com/400x400?text=Round+Neck+Hoodie+-+Sapphire",
};

  // Mapeo de colores
  const colorMapping = {
    white: "#EEEEEE",
    seagull_gray: "#D6D0D0",
    khaki: "#E0D3CB",
    glacier_blue: "#DFE8E5",
    breeze_green: "#CFE3E2",
    apricot: "#F4DFCC",
    ice_blue: "#CBD7E5",
    haze_blue: "#A7B9DD",
    lotus_purple: "#CDCDEF",
    sakura_pink: "#FFB9DB",
    light_green: "#C9CAC4",
    fog_gray: "#8B8788",
    pale_green: "#63625E",
    dark_green: "#2C403D",
    bird_green: "#255E72",
    navy_blue: "#34365C",
    dark_gray: "#323232",
    light_gray: "#92909B",
    coffee: "#45342C",
    maple_leaf_red: "#412428",
    black: "#1E1D23",
    wood_ash: "#D8C8B9",
    light_coffee: "#905340",
    ink_blue: "#32344B",
    milk_apricot: "#EDD9BA",
    jungle_green: "#37564E",
    wine_red: "#983541",
    hemp_ash: "#AFAFB1",
    pink: "#EBB2B9",
    asami: "#F4E7D7",
    light_blue: "#A9B6C6",
    deep_khaki: "#AE8E75",
    burgundy: "#851C25",
    big_red: "#DE012C",
    ash: "#DADADA",
    milk_tea: "#E3D7CB",
    yone_anzu: "#ECD3BD",
    iron_gray: "#59575A",
    sapphire: "#4976D3",
  };

  // Opciones de colores por tipo de prenda
  const wearColorOptions = {
    regular_tshirt: [
      "white",
      "seagull_gray",
      "khaki",
      "glacier_blue",
      "breeze_green",
      "apricot",
      "ice_blue",
      "haze_blue",
      "lotus_purple",
      "sakura_pink",
      "light_green",
      "fog_gray",
      "pale_green",
      "dark_green",
      "bird_green",
      "navy_blue",
      "dark_gray",
      "light_gray",
      "coffee",
      "maple_leaf_red",
      "black",
    ],
    sleeveless_shirt: ["white", "black", "dark_gray"],
    oversized_tshirt: [
      "white",
      "khaki",
      "light_green",
      "dark_gray",
      "dark_green",
      "coffee",
      "maple_leaf_red",
      "black",
    ],
    zip_hoodie: ["white", "black", "navy_blue", "dark_gray", "light_gray", "khaki"],
    hoodie: [
      "white",
      "black",
      "wood_ash",
      "khaki",
      "milk_apricot",
      "ink_blue",
      "light_coffee",
      "jungle_green",
      "wine_red",
      "hemp_ash",
    ],
    round_neck_hoodie: [
      "white",
      "pink",
      "navy_blue",
      "haze_blue",
      "deep_khaki",
      "burgundy",
      "asami",
      "light_blue",
      "big_red",
      "ash",
      "milk_tea",
      "yone_anzu",
      "iron_gray",
      "hemp_ash",
      "black",
      "sapphire",
    ],
  };

  // Mapeo de imágenes para cada tipo de prenda (reemplaza las URLs según tus recursos)
  const productImages = {
    regular_tshirt: "https://via.placeholder.com/400x400?text=Regular+T-Shirt",
    sleeveless_shirt: "https://via.placeholder.com/400x400?text=Sleeveless+Vest",
    oversized_tshirt: "https://via.placeholder.com/400x400?text=Oversized+T-Shirt",
    zip_hoodie: "https://via.placeholder.com/400x400?text=Zip+Hoodie",
    hoodie: "https://via.placeholder.com/400x400?text=Hoodie",
    round_neck_hoodie: "https://via.placeholder.com/400x400?text=Round+Neck+Hoodie",
  };

  const getFormattedColorName = (colorKey) => {
    return colorKey
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  // Manejo de archivos
  const handleFileChange = (newFiles) => {
    const validFiles = Array.from(newFiles).filter((file) => {
      if (!file.type.startsWith("image/")) {
        alert(t("team.file_type_error") || "Only image files are allowed");
        return false;
      }
      if (file.size > 2 * 1024 * 1024) {
        alert(t("team.file_size_error") || "File size exceeds 2MB limit");
        return false;
      }
      return true;
    });

    if (validFiles.length > 0) {
      setFiles((prev) => [...prev, ...validFiles]);
      simulateUpload();
    }
  };

  const handleRemoveFile = (index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files?.length > 0) {
      handleFileChange(e.dataTransfer.files);
    }
  };

  const simulateUpload = () => {
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 10;
      setProgress(currentProgress);
      if (currentProgress >= 100) clearInterval(interval);
    }, 200);
  };

  // Manejo de cambio de tipo de prenda
  const handleWearChange = (e) => {
    const newWear = e.target.value;
    setSelectedWear(newWear);
    // Resetea el color si no está en las opciones de la nueva prenda
    if (!wearColorOptions[newWear].includes(selectedColor)) {
      setSelectedColor("white");
    }
  };

  // Manejo de envío del outfit actual (para agregar al listado)
  const handleAddOutfit = (e) => {
    e.preventDefault();
    const newOutfit = {
      wear: selectedWear,
      color: selectedColor,
      files,
      quantity,
      description,
    };
    setOutfits((prev) => [...prev, newOutfit]);

    // Reiniciar el formulario para un nuevo outfit
    setSelectedWear("regular_tshirt");
    setSelectedColor("white");
    setFiles([]);
    setProgress(0);
    setQuantity(1);
    setDescription("");
  };

  // Remover un outfit del listado
  const handleRemoveOutfit = (index) => {
    setOutfits((prev) => prev.filter((_, i) => i !== index));
  };

  // Simulación de confirmación de pedido (puedes ajustar la lógica)
  const handleConfirmOrder = () => {
    // Aquí se podría enviar la información de outfits junto con el email
    console.log("Outfits confirmados:", outfits, "Email:", email);
    alert("Pedido confirmado");
    setOutfits([]);
  };

  // Función para obtener la imagen a mostrar
  const getProductImage = () => {
    const key = `${selectedWear}-${selectedColor}`;
    return customProductImages[key] || productImages[selectedWear];
  };

  // Función para obtener la imagen del outfit en la miniatura
  const getOutfitImage = (outfit) => {
    const key = `${outfit.wear}-${outfit.color}`;
    return customProductImages[key] || productImages[outfit.wear];
  };
  
  

  return (
    <div className="bg-white w-full rounded-2xl border border-gray-300 p-4">

      {/* Contenedor en dos columnas */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Columna Izquierda: Formulario */}
        <div className="flex-1">
          <form className="grid gap-y-6" noValidate onSubmit={handleAddOutfit}>
            {/* Selector de prenda */}
            <div>
              <label
                className="block text-sm font-medium text-gray-600 mb-1"
                htmlFor="selectWear"
              >
                {t("team.select_wear")}
              </label>
              <select
                id="selectWear"
                required
                value={selectedWear}
                onChange={handleWearChange}
                className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-600 focus:border-pink-800 focus:ring-pink-800"
              >
                <option value="regular_tshirt">Regular T-Shirt</option>
                <option value="sleeveless_shirt">Sleeveless Shirt</option>
                <option value="oversized_tshirt">Oversized T-Shirt</option>
                <option value="zip_hoodie">Zip Hoodie</option>
                <option value="hoodie">Hoodie</option>
                <option value="round_neck_hoodie">Round Neck Hoodie</option>
              </select>
            </div>

            {/* Selector de color */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                {t("team.select_color")}{" "}
                <span className="ml-2 text-sm font-medium text-gray-600">
                  {getFormattedColorName(selectedColor)}
                </span>
              </label>
              <div className="flex items-center gap-4">
                <div className="grid grid-cols-5 gap-2 flex-1 sm:grid-cols-6 md:grid-cols-5 lg:grid-cols-7">
                  {wearColorOptions[selectedWear].map((colorKey) => {
                    const isSelected = selectedColor === colorKey;
                    return (
                      <button
                        key={colorKey}
                        type="button"
                        onClick={() => setSelectedColor(colorKey)}
                        className={`relative w-8 h-8 rounded-full border-2 transition-all duration-200 ${
                          isSelected
                            ? "ring-2 ring-pink-800 ring-offset-2 scale-110"
                            : "border-gray-200 hover:scale-105"
                        }`}
                        style={{ backgroundColor: colorMapping[colorKey] }}
                        title={getFormattedColorName(colorKey)}
                      >
                        {isSelected && (
                          <span className="absolute inset-0 flex items-center justify-center text-white">
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={3}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Sección de carga de imágenes */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                {t("team.upload_files")}
              </label>
              <div
                className="border border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors border-gray-400 hover:border-pink-800"
                onDragOver={(e) => {
                  e.preventDefault();
                  setIsDragging(true);
                }}
                onDragLeave={(e) => {
                  e.preventDefault();
                  setIsDragging(false);
                }}
                onDrop={handleDrop}
                onClick={() => document.getElementById("file-upload").click()}
              >
                <div className="flex flex-col items-center">
                  <span className="bg-gray-100 rounded-full p-3 mb-4">
                    <Icon
                      icon="icon-park-twotone:folder-upload"
                      className="w-6 h-6 text-gray-500"
                    />
                  </span>
                  <div className="text-gray-600">{t("team.drop_or_browse")}</div>
                  <p className="text-gray-400 text-sm mt-1">
                    {t("team.file_info")}
                  </p>
                </div>
                <input
                  type="file"
                  className="hidden"
                  id="file-upload"
                  accept="image/*"
                  multiple
                  onChange={(e) => handleFileChange(e.target.files)}
                />
              </div>

              {/* Previsualización de imágenes */}
              <div className="grid grid-cols-4 gap-4 mt-4">
                {files.map((file, index) => (
                  <div key={file.name + index} className="relative group">
                    <img
                      src={URL.createObjectURL(file)}
                      alt="Preview"
                      className="w-full h-32 object-cover rounded-lg"
                      loading="lazy"
                    />
                    <button
                      className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() => handleRemoveFile(index)}
                    >
                      <Icon icon="tabler:trash" className="w-4 h-4" />
                    </button>
                    <div className="w-full bg-gray-200 rounded-full h-1 mt-1">
                      <div
                        className="bg-pink-500 h-1 rounded-full transition-all duration-300"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Input para cantidad */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Cantidad:
              </label>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-600 focus:border-pink-800"
                required
              />
            </div>

            {/* Descripción */}
            <div>
              <label
                className="block text-sm font-medium text-gray-600 mb-1"
                htmlFor="forUsInfo"
              >
                {t("team.relevant_forUs_info")}
              </label>
              <textarea
                id="forUsInfo"
                placeholder={t("team.forUs_info_placeholder")}
                rows="5"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-600 focus:border-pink-800 resize-none"
              ></textarea>
            </div>

            {/* Botón para agregar la prenda */}
            <div className="flex justify-center mt-4">             
              <button
                type="submit"
                className="border rounded-full w-auto px-4 py-1 flex justify-center gap-2 items-center border-pink-600 text-pink-600 bg-pink-100 hover:outline-1 focus:outline-1 outline-pink-600 cursor-pointer"
              >
                {t("team.add")}
              </button>
            </div>
          </form>

          {/* Campo de email para el pedido (único para todo el outfit) */}
          {outfits.length > 0 && (
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                {t("team.contact_details")}
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t("team.email")}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-600 focus:border-pink-800"
                required
              />
            </div>
          )}

          {/* Botón de confirmación (solo se muestra si hay outfits agregados) */}
          {outfits.length > 0 && (
            <div className="flex justify-center mt-4">
              <button
                type="button"
                onClick={handleConfirmOrder}
                className="border rounded-full w-auto px-4 py-1 flex justify-center gap-2 items-center border-green-600 text-green-600 bg-green-100 hover:outline-1 focus:outline-1 outline-green-600 cursor-pointer"
              >
                Confirm Order
              </button>
            </div>
          )}
        </div>

        {/* Columna Derecha: Imagen del producto actualmente seleccionado */}
        <div className="flex-1 flex items-center justify-center">
          <div className="relative">
            <img
              src={getProductImage()}
              alt={selectedWear}
              className="w-auto h-full object-cover"
              loading="lazy"
            />
                  </div>
                </div>
              </div>

              {/* Listado de outfits agregados */}
              {outfits.length > 0 && (
                <div className="mt-8">
                  <h2 className="text-xl text-gray-600 font-semibold mb-4">Outfits Added:</h2>
                  <ul className="space-y-4">
                  {outfits.map((outfit, index) => (
          <li key={index} className="flex items-center p-4 border border-gray-300 rounded-md">
            {/* Miniatura de la imagen del producto */}
            <img
              src={getOutfitImage(outfit)}
              alt={outfit.wear}
              className="w-24 h-full object-cover"
              loading="lazy"
            />
            <div className="flex-1">
              <p className="text-gray-600 font-semibol">
                <span className="font-semibold">Wear:</span> {outfit.wear} | <span className="font-semibold">Color:</span> {getFormattedColorName(outfit.color)}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Quantity:</span> {outfit.quantity}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Description:</span> {outfit.description}
              </p>
            </div>
            <button
              onClick={() => handleRemoveOutfit(index)}
              className="text-red-400 hover:text-red-600 cursor-pointer"
            >
              Remove
            </button>
          </li>
        ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TeamOutfitForm;