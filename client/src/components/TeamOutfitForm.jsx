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
        alert(t("team.file_type_error") || 'Only image files are allowed');
        return false;
      }
      if (file.size > 2 * 1024 * 1024) {
        alert(t("team.file_size_error") || 'File size exceeds 2MB limit');
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
    zip_hoodie: ['white', 'black', 'navy_blue', 'dark_gray', 'light_gray', 'khaki'],
    hoodie: [
      'white', 'black', 'wood_ash', 'khaki', 'milk_apricot', 
      'ink_blue', 'light_coffee', 'jungle_green', 
      'wine_red', 'hemp_ash'
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
            {/* Selector de tipo de prenda (se mantiene igual) */}
            <div>
              <label className="block text-sm font-medium text-gray-600 m-2 ml-0" htmlFor="selectWear">
                {t("team.select_wear")}
              </label>
              <select
                id="selectWear"
                required
                value={selectedWear}
                onChange={handleWearChange}
                className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-600 focus:border-pink-800 focus:ring-pink-800"
              >
                <option value="regular_tshirt">Regular T-Shirt</option>
                <option value="sleeveless_vest">Sleeveless Vest</option>
                <option value="oversized_tshirt">Oversized T-Shirt</option>
                <option value="zip_hoodie">Zip Hoodie</option>
                <option value="hoodie">Hoodie</option>
                <option value="round_neck_hoodie">Round Neck Hoodie</option>
              </select>
            </div>
  
            {/* Selector de color (nueva versión visual) */}
            <div>
              <label className="block text-sm font-medium text-gray-600 m-2 ml-0">
                {t("team.select_color")}
                <span className="m-2 text-sm font-medium text-gray-600">
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
                            ? 'ring-2 ring-pink-800 ring-offset-2 scale-110' 
                            : 'border-gray-200 hover:scale-105'
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
                {/* Muestra del color seleccionado */}
              </div>
            </div>
          </div>
        {/* Sección de carga de archivos */}
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-600 mb-2">
              {t("team.upload_files")}
            </label>
            
            <div 
              className= "border-1 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors border-gray-400 hover:border-pink-800"
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
                  <Icon icon="icon-park-twotone:folder-upload" className="w-6 h-6 text-gray-500" />
                </span>
                <div className="text-gray-600">
                  <span className="mx-2">{t("team.drop_or_browse")}</span>
                </div>
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
                      className="bg-pink-500 h-1 rounded-full transition-all duration-300" 
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full">
            <label className="block text-sm font-medium text-gray-600" htmlFor="forUsInfo">
              {t("team.relevant_forUs_info")}
            </label>
            <textarea
              id="forUsInfo"
              placeholder={t("team.forUs_info_placeholder")}
              rows="5"
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-600 focus:border-pink-800  resize-none"
            ></textarea>
          </div>

          {/* Botón de envío */}
          <div className="mt-6 flex justify-center">
            <button
              type="submit"
              className="w-full max-w-xs bg-pink-800 py-2 px-4 text-sm font-bold text-white hover:bg-pink-900 rounded-full"
            >
              {t("team.add")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TeamOutfitForm;