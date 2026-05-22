import { SelectedPage } from "@/components/types";
import { motion } from "framer-motion";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

const childVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

type Props = {
  icon: JSX.Element;
  image: string;
  title: string;
  description: string;
  link: string;
  accent: string;
  tag: string;
  index: number;
  setSelectedPage: (value: SelectedPage) => void;
};

const Board = ({
  icon,
  image,
  title,
  description,
  link,
  accent,
  tag,
  index,
  setSelectedPage,
}: Props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (link.startsWith("/")) {
      window.scrollTo(0, 0);
      navigate(link);
    }
  };

  return (
    <motion.div
      variants={childVariant}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className={`h-1 w-full bg-gradient-to-r ${accent}`} />

      {/* IMAGE SECTION */}
      <div className="relative h-48 w-full overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

        {/* Tag badge */}
        <span
          className={`absolute bottom-2 left-3 rounded-full bg-gradient-to-r ${accent} px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white shadow`}
        >
          {tag}
        </span>

        {/* Index number */}
        <span className="absolute top-2 right-3 text-[11px] font-black text-white/60 tabular-nums">
          {String(index).padStart(2, "0")}
        </span>
      </div>

      <div className="flex flex-grow flex-col p-4">
        <div className="mb-2 flex items-start gap-3">
          <div
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${accent} text-white shadow-sm`}
          >
            <div className="scale-90">{icon}</div>
          </div>
          <h4 className="pt-0.5 font-bold text-sm md:text-base text-gray-900 leading-snug">
            {title}
          </h4>
        </div>

        <p className="mb-3 flex-grow text-xs text-gray-500 leading-relaxed line-clamp-3">
          {/* description */}
        </p>

        {/* Action Button */}
        <div className="mt-auto">
          {link.startsWith("http") ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r ${accent} px-3.5 py-1.5 text-xs font-bold text-white shadow-sm transition-opacity hover:opacity-90`}
            >
              Saber Mais
              <ArrowTopRightOnSquareIcon className="h-3.5 w-3.5" />
            </a>
          ) : (
            <button
              onClick={handleClick}
              className={`inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r ${accent} px-3.5 py-1.5 text-xs font-bold text-white shadow-sm transition-opacity hover:opacity-90`}
            >
              Saber Mais
              <ArrowTopRightOnSquareIcon className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Board;