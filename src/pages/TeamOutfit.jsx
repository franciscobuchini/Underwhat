import { useTranslation } from 'react-i18next';
import TeamOutfitForm from '../components/TeamOutfitForm';
import { Icon } from "@iconify/react";

const TeamOutfit = () => {
  const { t } = useTranslation("global");
  return (
    <div className="flex flex-col gap-8 mx-auto px-6 py-12 mt-20 max-w-5xl">
      <h1 className="text-3xl font-bold mb-10 text-gray-600 flex items-center gap-4"> 
        <Icon icon="icon-park-twotone:basketball-clothes" className="w-10 h-10 flex-shrink-0 text-pink-800" />  
        {t("team.title")}
      </h1>
      <p className="text-gray-600 leading-relaxed text-center">
        {t("team.content")}
      </p>
      <TeamOutfitForm />
    </div>
  );
};

export default TeamOutfit;
