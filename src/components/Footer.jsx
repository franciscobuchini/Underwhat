// Footer.jsx
import nav02 from "../assets/Logo/nav02.webp";
import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react";

function Footer() {
  const { t } = useTranslation("global");
  return (
    <footer className="footer bg-white rounded-t-2xl border border-gray-300 px-8 py-6 mt-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Redes sociales */}
        <div className="flex gap-6">
          <a href="#" className="link" aria-label="Instagram Link">
            <Icon icon="icon-park-twotone:instagram" className="w-6 h-6 flex-shrink-0 text-pink-800" />
          </a>
          <a href="#" className="link" aria-label="Gmail Link">
            <Icon icon="icon-park-twotone:mail" className="w-6 h-6 flex-shrink-0 text-pink-800" />
          </a>
        </div>
        {/* Tagline */}
        <p className="text-gray-400 text-center md:text-left">{t("footer.tagline")}</p>
        {/* Marca */}
        <div className="flex flex-col items-center gap-2">
          <img src={nav02} className="h-8" alt={t("header.logo_alt")} />
          <small className="font-semibold text-gray-400">{t("footer.brand")}</small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
