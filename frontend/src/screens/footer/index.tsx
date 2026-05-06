import ICON from "@/assets/digitaltwins_icone.png";
import NOVA from "@/assets/NOVA.png";
import { EnvelopeIcon, PhoneIcon, MapPinIcon} from "@heroicons/react/24/outline";

const Footer = () => {
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
              Documentação e preservação do património através de Digital Twins.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest mb-3 text-white">Links</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="https://www.fct.unl.pt/" target="_blank" rel="noreferrer" className="hover:underline opacity-80 hover:opacity-100 transition-opacity">
                  FCT NOVA
                </a>
              </li>
              <li>
                <a href="https://www.unl.pt/" target="_blank" rel="noreferrer" className="hover:underline opacity-80 hover:opacity-100 transition-opacity">
                  Universidade NOVA
                </a>
              </li>
              <li>
                <a href="https://www.museusemonumentos.pt/pt" target="_blank" rel="noreferrer" className="hover:underline opacity-80 hover:opacity-100 transition-opacity">
                  Museus e Monumentos
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest mb-3 text-white">Contacto</h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center gap-2 opacity-80">
                <EnvelopeIcon className="h-4 w-4 shrink-0" />
                <span className="truncate">dtwins.ch@fct.unl.pt</span>
              </li>
              <li className="flex items-center gap-2 opacity-80">
                <PhoneIcon className="h-4 w-4 shrink-0" />
                <span>(+351)  210 102 057</span>
              </li>
              <li className="flex items-center gap-2 opacity-80">
                <MapPinIcon className="h-4 w-4 shrink-0" />
                <span>Palácio Flor da Murta, 2770-186 Paço de Arcos, Portugal</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-3 md:items-end">
            <h4 className="font-bold text-xs uppercase tracking-widest mb-1 text-white">Parcerias</h4>
            <div className="flex items-center gap-3 bg-white/20 p-2 rounded-lg backdrop-blur-sm">
              <img 
                alt="nova-fct" 
                src={NOVA} 
                className="h-7 w-auto object-contain" 
              />
              <div className="h-5 w-px bg-white/30" />
              <img 
                alt="logo-icon" 
                src={ICON} 
                className="h-7 w-auto object-contain" 
              />
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-2 text-[10px] opacity-60 uppercase font-medium">
          <p>© 2026 NOVA FCT. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;