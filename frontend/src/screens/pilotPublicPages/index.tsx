import { motion } from "framer-motion";
import HText from "@/components/HText";

type PilotDetailProps = {
  title: string;
  description: string;
  image: any;
  tag: string;
  setSelectedPage: (value: any) => void;
};

const PilotDetailPage = ({ title, description, image, tag }: PilotDetailProps) => {
  const imageSrc = image?.src || image;

  return (
    <section className="w-full bg-gray-20 py-10 md:py-24">
      <div className="mx-auto w-5/6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="space-y-8 md:space-y-12"
        >
          {/* HEADER SECTION */}
          <div className="space-y-2">
            {tag && (
              <div className="flex items-center gap-2">
                <span className="h-px w-6 bg-primary-500" />
                <p className="text-xs font-bold uppercase tracking-widest text-primary-500">
                  {tag}
                </p>
              </div>
            )}
            <HText>{title}</HText>
          </div>

          {/* TWO-COLUMN GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            
            {/* VISUAL MEDIA */}
            <div className="w-full overflow-hidden rounded-2xl bg-white shadow-md border border-gray-100 aspect-[4/3] md:aspect-auto">
              <img 
                src={imageSrc} 
                alt={title} 
                className="w-full h-full object-cover"
              />
            </div>

            {/* TEXT CONTENT */}
            <div className="flex flex-col space-y-6">
              <div className="h-1 w-12 bg-primary-500 rounded-full" />
              <p className="text-base md:text-lg leading-relaxed text-gray-700 font-normal whitespace-pre-line">
                {description}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PilotDetailPage;