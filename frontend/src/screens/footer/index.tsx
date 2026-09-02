import ICON from "@/assets/digitaltwins_icone.png";
import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-primary-100 py-8 text-white border-t border-white/10">
      <div className="mx-auto w-5/6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 items-start">
          
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <img 
                alt="logo" 
                src={ICON} 
                className="h-8 w-auto object-contain" 
              />
              <span className="font-black tracking-tighter text-lg">DT4SST-CH</span>
            </div>
            <p className="text-xs leading-relaxed opacity-80 max-w-[200px]">
              {t("footer.description")}
            </p>
          </div>

          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest mb-3 text-white">
              {t("footer.linksTitle")}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="https://www.unl.pt/" target="_blank" rel="noreferrer" className="hover:underline opacity-80 hover:opacity-100 transition-opacity">
                  {t("footer.links.nova")}
                </a>
              </li>
              <li>
                <a href="https://www.fct.unl.pt/" target="_blank" rel="noreferrer" className="hover:underline opacity-80 hover:opacity-100 transition-opacity">
                  {t("footer.links.fct")}
                </a>
              </li>
              <li>
                <a href="https://www.fcsh.unl.pt/" target="_blank" rel="noreferrer" className="hover:underline opacity-80 hover:opacity-100 transition-opacity">
                  {t("footer.links.fcsh")}
                </a>
              </li>
              <li>
                <a href="https://www.uevora.pt/" target="_blank" rel="noreferrer" className="hover:underline opacity-80 hover:opacity-100 transition-opacity">
                  {t("footer.links.uevora")}
                </a>
              </li>
              <li>
                <a href="https://www.museusemonumentos.pt/pt" target="_blank" rel="noreferrer" className="hover:underline opacity-80 hover:opacity-100 transition-opacity">
                  {t("footer.links.mmp")}
                </a>
              </li>
              <li>
                <a href="https://www.patrimoniocultural.gov.pt/" target="_blank" rel="noreferrer" className="hover:underline opacity-80 hover:opacity-100 transition-opacity">
                  {t("footer.links.pc")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest mb-3 text-white">
              {t("footer.contactTitle")}
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center gap-2 opacity-80">
                <EnvelopeIcon className="h-4 w-4 shrink-0" />
                <span className="truncate">dtwins.ch@fct.unl.pt</span>
              </li>
              <li className="flex items-center gap-2 opacity-80">
                <MapPinIcon className="h-4 w-4 shrink-0" />
                <span>{t("footer.address")}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-2 text-[10px] opacity-60 uppercase font-medium">
          <p>{t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;