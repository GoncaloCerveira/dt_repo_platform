import { motion } from "framer-motion";
import HText from "@/components/HText";
import { 
  ArrowRightIcon
} from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

type PilotDetailProps = {
  title: string;
  description: string;
  image: any;
  tag: string;
  results?: string[];
  setSelectedPage?: (value: any) => void;
};

const PilotDetailPage = ({
  title,
  description,
  image,
  tag,
  results,
}: PilotDetailProps) => {
  const imageSrc = image?.src || image;
  const navigate = useNavigate();

  return (
    <section className="w-full bg-gray-20 py-8 md:py-16">
      <div className="mx-auto w-11/12 md:w-5/6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="space-y-8 md:space-y-12"
        >
          {/* HEADER */}
          <div className="space-y-6">
            {tag && (
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-primary-500" />
                <p className="text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-500">
                  {tag}
                </p>
              </div>
            )}

            {/* Flex container: Column on mobile, Row on medium screens and up */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="max-w-3xl">
                <HText>{title}</HText>
              </div>

              {/* Added 'w-fit' and 'self-start' to ensure it only takes the width of its content on mobile */}
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                onClick={() => navigate("/")}
                className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-200 rounded-xl bg-white shadow-sm text-gray-700 font-bold text-sm uppercase tracking-wider hover:border-primary-500 hover:text-primary-500 hover:shadow-md transition-all duration-300 group shrink-0 w-fit self-start md:self-auto"
              >
                <ArrowRightIcon className="h-5 w-5 rotate-180 group-hover:translate-x-1 transition-transform" />
                Voltar
              </motion.button>
            </div>
          </div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full overflow-hidden rounded-2xl shadow-md"
          >
            <img
              src={imageSrc}
              alt={title}
              className="w-full h-auto object-cover transition duration-700 hover:scale-[1.015]"
            />
          </motion.div>

          {/* DESCRIPTION */}
          <div className="max-w-4xl space-y-4 px-2 md:px-6">
            <div className="h-1 w-12 rounded-full bg-primary-500" />

            <p className="text-base md:text-lg leading-relaxed text-gray-700 whitespace-pre-line text-left md:text-justify">
              {description}
            </p>
          </div>

          {/* RESULTS */}
          {results && results.length > 0 && (
            <div className="space-y-6 border-t border-gray-300 pt-6 px-2 md:px-6">
              <div className="flex items-center gap-4">
                <div className="h-1 w-12 rounded-full bg-primary-500" />
                <h3 className="text-lg md:text-xl font-bold text-gray-900">
                  Resultados do Projeto
                </h3>
              </div>

              {/* Grid layout that is 1 column on mobile, but adds an indent on desktop */}
              <div className="grid gap-3 md:ml-16 max-w-3xl">
                {results.map((result, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.06 }}
                    className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm border border-gray-100"
                  >
                    <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary-500" />
                    <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                      {result}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default PilotDetailPage;