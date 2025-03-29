import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Icon } from "@iconify/react";

const TeamOutfitForm = () => {
  const { t, i18n } = useTranslation("global");
  const [selectedColor, setSelectedColor] = useState('white');
  const [selectedWear, setSelectedWear] = useState('regular_tshirt');
  const [files, setFiles] = useState([]);
  const [progress, setProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (newFiles) => {
    const validFiles = Array.from(newFiles).filter(file => {
      if (!file.type.startsWith('image/')) {
        alert(t("teamoutfit.file_type_error") || 'Only image files are allowed');
        return false;
      }
      if (file.size > 2 * 1024 * 1024) {
        alert(t("teamoutfit.file_size_error") || 'File size exceeds 2MB limit');
        return false;
      }
      return true;
    });

    if (validFiles.length > 0) {
      setFiles(prev => [...prev, ...validFiles]);
      simulateUpload();
    }
  };

  // Resto de funciones
  const handleRemoveFile = (index) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
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

  // Mapeo de colores
  const colorMapping = {
    white: '#EEEEEE',
    seagull_gray: '#D6D0D0',
    khaki: '#E0D3CB',
    glacier_blue: '#DFE8E5',
    breeze_green: '#CFE3E2',
    apricot: '#F4DFCC',
    ice_blue: '#CBD7E5',
    haze_blue: '#A7B9DD',
    lotus_purple: '#CDCDEF',
    sakura_pink: '#FFB9DB',
    light_green: '#C9CAC4',
    fog_gray: '#8B8788',
    pale_green: '#63625E',
    dark_green: '#2C403D',
    bird_green: '#255E72',
    navy_blue: '#34365C',
    dark_gray: '#323232',
    light_gray: '#92909B',
    coffee: '#45342C',
    maple_leaf_red: '#412428',
    black: '#1E1D23',
    wood_ash: '#D8C8B9',
    light_coffee: '#905340',
    ink_blue: '#32344B',
    milk_apricot: '#EDD9BA',
    jungle_green: '#37564E',
    wine_red: '#983541',
    hemp_ash: '#AFAFB1',
    pink: '#EBB2B9',
    asami: '#F4E7D7',
    light_blue: '#A9B6C6',
    deep_khaki: '#AE8E75',
    burgundy: '#851C25',
    big_red: '#DE012C',
    ash: '#DADADA',
    milk_tea: '#E3D7CB',
    yone_anzu: '#ECD3BD',
    iron_gray: '#59575A',
    sapphire: '#4976D3'
  };

  // Definir los colores disponibles para cada tipo de prenda
  const wearColorOptions = {
    regular_tshirt: [
      'white', 'seagull_gray', 'khaki', 'glacier_blue', 'breeze_green', 
      'apricot', 'ice_blue', 'haze_blue', 'lotus_purple', 'sakura_pink', 
      'light_green', 'fog_gray', 'pale_green', 'dark_green', 'bird_green', 
      'navy_blue', 'dark_gray', 'light_gray', 'coffee', 'maple_leaf_red', 'black'
    ],
    sleeveless_vest: ['white', 'black', 'dark_gray'],
    oversized_tshirt: [
      'white', 'khaki', 'light_green', 'dark_gray', 
      'dark_green', 'coffee', 'maple_leaf_red', 'black'
    ],
    zip_hoodie: ['black', 'white', 'navy_blue', 'dark_gray', 'light_gray', 'khaki'],
    hoodie: [
      'black', 'wood_ash', 'khaki', 'milk_apricot', 
      'ink_blue', 'light_coffee', 'jungle_green', 
      'wine_red', 'hemp_ash', 'white'
    ],
    round_neck_hoodie: [
      'white', 'pink', 'navy_blue', 'haze_blue', 
      'deep_khaki', 'burgundy', 'asami', 
      'light_blue', 'big_red', 'ash', 
      'milk_tea', 'yone_anzu', 'iron_gray', 
      'hemp_ash', 'black', 'sapphire'
    ]
  };

  const currentColor = colorMapping[selectedColor] || 'white';

  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };

  const handleWearChange = (e) => {
    const newWear = e.target.value;
    setSelectedWear(newWear);
    
    // Resetear el color si no está disponible en la nueva prenda
    if (!wearColorOptions[newWear].includes(selectedColor)) {
      setSelectedColor('white');
    }
  };

  const getFormattedColorName = (colorKey) => {
    return colorKey.split('_').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado");
  };

  return (
    <div className="bg-white w-full rounded-2xl border border-gray-300">
      <div className="w-full p-4">
        <form className="needs-validation grid gap-y-6" noValidate onSubmit={handleSubmit}>
          {/* Selección de prenda y color */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-600" htmlFor="selectWear">
                {t("teamoutfit.select_wear") || "Select Wear"} *
              </label>
              <select
                id="selectWear"
                required
                value={selectedWear}
                onChange={handleWearChange}
                className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-600 focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option value="regular_tshirt">Regular T-Shirt</option>
                <option value="sleeveless_vest">Sleeveless Vest</option>
                <option value="oversized_tshirt">Oversized T-Shirt</option>
                <option value="zip_hoodie">Zip Hoodie</option>
                <option value="hoodie">Hoodie</option>
                <option value="round_neck_hoodie">Round Neck Hoodie</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600" htmlFor="selectColor">
                {t("teamoutfit.select_color") || "Select Color"} *
              </label>
              <div className="flex gap-2 items-center">
                <select
                  id="selectColor"
                  required
                  value={selectedColor}
                  onChange={handleColorChange}
                  className="mt-1 block w-50 rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-600 focus:border-indigo-500 focus:ring-indigo-500"
                >
                  {wearColorOptions[selectedWear].map(colorKey => (
                    <option key={colorKey} value={colorKey}>
                      {getFormattedColorName(colorKey)}
                    </option>
                  ))}
                </select>
                <div
                  className="rounded-lg w-10 h-10 border"
                  style={{ backgroundColor: currentColor }}
                ></div>
              </div>
            </div>
          </div>

        {/* Sección de carga de archivos */}
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-600 mb-2">
              {t("teamoutfit.upload_files") || "Upload Files"}
            </label>
            
            <div 
              className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
                isDragging ? 'border-violet-500 bg-violet-50' : 'border-gray-300 hover:border-violet-400'
              }`}
              onDragOver={(e) => {
                e.preventDefault();
                setIsDragging(true);
              }}
              onDragLeave={(e) => {
                e.preventDefault();
                setIsDragging(false);
              }}
              onDrop={handleDrop}
              onClick={() => document.getElementById('file-upload').click()}
            >
              <div className="flex flex-col items-center">
                <span className="bg-gray-100 rounded-full p-3 mb-4">
                  <Icon icon="tabler:upload" className="w-6 h-6 text-gray-500" />
                </span>
                <div className="text-gray-600">
                  <span className="text-violet-600 hover:text-violet-500 font-medium">
                    {t("teamoutfit.browse") || "Browse files"}
                  </span>
                  <span className="mx-2">{t("teamoutfit.drop_or_browse") || "or drag and drop"}</span>
                </div>
                <p className="text-gray-400 text-sm mt-1">
                  {t("teamoutfit.file_info") || "PNG, JPG up to 2MB"}
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

            {/* Previsualizaciones de archivos */}
            <div className="grid grid-cols-4 gap-4 mt-4">
              {files.map((file, index) => (
                <div key={file.name + index} className="relative group">
                  <img 
                    src={URL.createObjectURL(file)} 
                    alt="Preview" 
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  <button 
                    className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => handleRemoveFile(index)}
                  >
                    <Icon icon="tabler:trash" className="w-4 h-4" />
                  </button>
                  <div className="w-full bg-gray-200 rounded-full h-1 mt-1">
                    <div 
                      className="bg-violet-500 h-1 rounded-full transition-all duration-300" 
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Botón de envío */}
          <div className="mt-6 flex justify-center">
            <button
              type="submit"
              className="w-full max-w-xs bg-pink-800 py-2 px-4 text-sm font-bold text-white hover:bg-pink-900 rounded-full transition-colors"
            >
              {t("teamoutfit.confirm_order") || "Confirm Order"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TeamOutfitForm;