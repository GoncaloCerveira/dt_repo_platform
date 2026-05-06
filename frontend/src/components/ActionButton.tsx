import { useNavigate } from "react-router-dom";
import { SelectedPage } from "./types";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

const ActionButton = ({ children, setSelectedPage }: Props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    setSelectedPage(SelectedPage.ModelDemo);
    navigate("/model-demo");
  };

  return (
    <button
      className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-300 hover:text-white"
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default ActionButton;
