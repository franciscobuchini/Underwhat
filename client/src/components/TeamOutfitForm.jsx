//TeamOutfitForm.jsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import _ from 'lodash';
import Dropzone from 'dropzone';

const TeamOutfitForm = () => {
  const { t } = useTranslation("global");

  const ColorSelector = () => {
    // Estado para almacenar el color seleccionado
    const [selectedColor, setSelectedColor] = useState('');

    // Mapeo de los valores de las opciones a códigos de color válidos en CSS
    const colorMapping = {
      white: '#ffffff',
      seagull_gray: '#b0b0b0',
      khaki: '#c3b091',
      glacier_blue: '#7ec8e3',
      breeze_green: '#a3d9a5',
      apricot: '#fbceb1',
      ice_blue: '#d7eef5',
      haze_blue: '#aec6cf',
      lotus_purple: '#a18cd1',
      sakura_pink: '#f7c8da',
      light_green: '#b6d7a8',
      fog_gray: '#c0c0c0',
      pale_green: '#d0f0c0',
      dark_green: '#006400',
      bird_green: '#7cb342',
      navy_blue: '#000080',
      dark_gray: '#555555',
      light_gray: '#d3d3d3',
      coffee: '#6f4e37',
      maple_leaf_red: '#d32f2f',
      black: '#000000',
      wood_ash: '#b2beb5',
      light_coffee: '#a67b5b',
      ink_blue: '#3b5998',
      milk_apricot: '#fdd5b1',
      jungle_green: '#29ab87',
      wine_red: '#722f37',
      hemp_ash: '#8e8d8a',
      pink: '#ffc0cb',
      asami: '#e6a8d7',
      light_blue: '#add8e6',
      deep_khaki: '#bdb76b',
      burgundy: '#800020',
      big_red: '#ff0000',
      ash: '#b2beb5',
      milk_tea: '#c4a484',
      mi_xing: '#f5deb3',
      iron_gray: '#48494b',
      sapphire: '#0f52ba'
    };

    // Función para manejar el cambio en el select
    const handleColorChange = (e) => {
      setSelectedColor(e.target.value);
    };

    // Se obtiene el color correspondiente o se deja transparente si no hay selección
    const currentColor = colorMapping[selectedColor] || 'transparent';

    return (
      <div className="bg-white w-full rounded-2xl border">
        <div className="w-full p-4">
          <form className="grid gap-y-4" noValidate>
            <div className="flex">
              <div className="flex flex-col gap-6 md:grid-cols-2">
                <div>
                  <label className="label label-text text-gray-600" htmlFor="selectWear">
                    Select Wear
                  </label>
                  <select
                    className="select bg-white text-gray-600"
                    id="selectWear"
                    aria-label="select"
                  >
                    <option value="regular_tshirt">Regular T-Shirt</option>
                    <option value="sleeveless_vest">Sleeveless Vest</option>
                    <option value="oversized_tshirt">Oversized T-Shirt</option>
                    <option value="zip_hoodie">Zip Hoodie</option>
                    <option value="hoodie">Hoodie</option>
                    <option value="round_neck_hoodie">Round Neck Hoodie</option>
                  </select>
                  <span className="error-message">Please select your country</span>
                  <span className="success-message">Looks good!</span>
                </div>
                <div>
                  <label className="label label-text text-gray-600" htmlFor="selectColor">
                    Select Color
                  </label>
                  <select
                    className="select bg-white text-gray-600"
                    id="selectColor"
                    aria-label="select"
                    onChange={handleColorChange}
                  >
                    <option value="white">White</option>
                    <option value="seagull_gray">Seagull Gray</option>
                    <option value="khaki">Khaki</option>
                    <option value="glacier_blue">Glacier Blue</option>
                    <option value="breeze_green">Breeze Green</option>
                    <option value="apricot">Apricot</option>
                    <option value="ice_blue">Ice Blue</option>
                    <option value="haze_blue">Haze Blue</option>
                    <option value="lotus_purple">Lotus Purple</option>
                    <option value="sakura_pink">Sakura Pink</option>
                    <option value="light_green">Light Green</option>
                    <option value="fog_gray">Fog Gray</option>
                    <option value="pale_green">Pale Green</option>
                    <option value="dark_green">Dark Green</option>
                    <option value="bird_green">Bird Green</option>
                    <option value="navy_blue">Navy Blue</option>
                    <option value="dark_gray">Dark Gray</option>
                    <option value="light_gray">Light Gray</option>
                    <option value="coffee">Coffee</option>
                    <option value="maple_leaf_red">Maple Leaf Red</option>
                    <option value="black">Black</option>
                    <option value="wood_ash">Wood Ash</option>
                    <option value="light_coffee">Light Coffee</option>
                    <option value="ink_blue">Ink Blue</option>
                    <option value="milk_apricot">Milk Apricot</option>
                    <option value="jungle_green">Jungle Green</option>
                    <option value="wine_red">Wine Red</option>
                    <option value="hemp_ash">Hemp Ash</option>
                    <option value="pink">Pink</option>
                    <option value="asami">Asami</option>
                    <option value="light_blue">Light Blue</option>
                    <option value="deep_khaki">Deep Khaki</option>
                    <option value="burgundy">Burgundy</option>
                    <option value="big_red">Big Red</option>
                    <option value="ash">Ash</option>
                    <option value="milk_tea">Milk Tea</option>
                    <option value="mi_xing">Mi Xing</option>
                    <option value="iron_gray">Iron Gray</option>
                    <option value="sapphire">Sapphire</option>
                  </select>
                  <span className="error-message">Please select your country</span>
                  <span className="success-message">Looks good!</span>
                </div>
                <div
                  data-file-upload={JSON.stringify({
                    url: "/upload",
                    acceptedFiles: "image/*",
                    autoHideTrigger: false,
                    extensions: {
                      csv: {
                        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="m5 12-3 3 3 3"/><path d="m9 18 3-3-3-3"/></svg>',
                        className: "shrink-0 size-5"
                      }
                    }
                  })}
                >
                  <label className="label label-text text-gray-600" htmlFor="uploadFiles">
                    Upload Files
                  </label>
                  <template data-file-upload-preview="">
                    <div className="relative mt-2 rounded-2xl bg-white text-gray-600 p-2">
                      <img className="mb-2 w-full rounded-2xl object-cover" data-dz-thumbnail=""/>
                      <div className="mb-1 flex items-center justify-between gap-x-3 whitespace-nowrap">
                        <div className="w-10">
                          <span className="text-base-content mb-0.5 text-sm">
                            <span data-file-upload-progress-bar-value="">0</span>%
                          </span>
                        </div>
                        <div className="flex items-center gap-x-2">
                          <button type="button" className="btn btn-sm btn-circle btn-text" data-file-upload-remove="">
                            <span className="icon-[tabler--trash] size-4 shrink-0"></span>
                          </button>
                        </div>
                      </div>
                      <div
                        className="progress h-2"
                        role="progressbar"
                        aria-valuenow="0"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        data-file-upload-progress-bar=""
                      >
                        <div className="progress-bar progress-primary file-upload-complete:progress-success transition-all duration-500" data-file-upload-progress-bar-pane=""></div>
                      </div>
                    </div>
                  </template>

                  <div className="border bg-white rounded-2xl flex cursor-pointer justify-center border-dashed p-12" data-file-upload-trigger="">
                    <div className="text-center">
                      <span className="bg-gray-100 inline-flex size-16 items-center justify-center rounded-full">
                        <span className="icon-[tabler--upload] size-6 shrink-0"></span>
                      </span>
                      <div className="mt-4 flex flex-wrap justify-center">
                        <span className="text-gray-400 pe-1 text-base font-medium">Drop your file here or</span>
                        <span className="link link-animated link-primary font-semibold">browse</span>
                      </div>
                      <p className="text-gray-300 mt-1 text-xs">Pick files up to 2MB.</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-2 empty:gap-0 max-sm:grid-cols-2" data-file-upload-previews=""></div>
                </div>
              </div>
              <div>
                <div className="ProductImage hover:bg-gray-100 rounded-t-2xl overflow-hidden">
                  <img
                    className="Image01 object-cover w-full h-auto transition-all duration-1000 hover:scale-105"
                    loading="lazy"
                  />
                  <div
                    className="colourCircle rounded-full w-12 h-12 m-4"
                    style={{ backgroundColor: currentColor }}
                  ></div>
                </div>
              </div>
              {/* Submit Button */}
              <div className="mt-4 flex justify-center">
                <button type="submit" name="submitButton" className="btn btn-primary border-none">
                  Confirm
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  };

  return <ColorSelector />;
};

export default TeamOutfitForm;