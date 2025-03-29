//TeamOutfit.jsx
import { useTranslation } from 'react-i18next';
import TeamOutfitForm from '../components/TeamOutfitForm';
import { Icon } from "@iconify/react";

const TeamOutfit = () => {
  const { t } = useTranslation("global");
  return (
    <div className="flex flex-col gap-4 mx-auto px-4 py-8 mt-20">
      <h1 className="text-3xl font-bold mb-8 text-gray-600 flex items-center gap-4"> 
      <Icon icon="icon-park-twotone:basketball-clothes" className="size-10 text-pink-800" />  
      {t("team.title")}</h1>
      <p className='text-gray-600 leading-8'>{t("team.content")}</p>
      <TeamOutfitForm />
    </div>
  );
};

export default TeamOutfit;