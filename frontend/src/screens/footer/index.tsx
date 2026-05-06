import Logo from "@/assets/Logo_navbar.png";
import NOVA from "@/assets/NOVA.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-10 text-white">
      <div className="mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-8 basis-1/3 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <ul className="ml-4 my-2">
            <li>
              <a href="https://www.fct.unl.pt/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                FCT NOVA
              </a>
            </li>
            <li>
              <a href="https://www.unl.pt/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                Universidade NOVA de Lisboa
              </a>
            </li>
            <li>
              <a href="https://www.museusemonumentos.pt/pt" target="_blank" rel="noopener noreferrer" className="hover:underline">
                Museums and Monuments of Portugal
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-8 basis-1/2 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-2">Contact us via email or phone:</p>
          <p className="ml-4">identificador_clip@campus.fct.unl.pt</p>
          <p className="ml-4">(+351) 999 999 999</p>
        </div>
        <div className="mt-8 basis-1/6 md:mt-0 flex justify-center">
          <img alt="nova-fct" src={NOVA} className="w-44 h-auto object-contain" />
        </div>
        <div className="mt-8 basis-1/6 md:mt-0 flex justify-center">
          <img alt="logo" src={Logo} className="w-40 h-auto object-contain" />
        </div>
      </div>

      {/* Bottom copyright notice */}
      <div className="mt-8 text-center text-sm">
        <p>© 2025 NOVA FCT, All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
