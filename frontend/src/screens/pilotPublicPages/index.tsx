import { motion } from "framer-motion";
import HText from "@/components/HText";

type PilotDetailProps = {
  title: string;
  description: string;
  image: any;
  tag: string;
};

const PilotDetailPage = ({ title, description, image, tag }: PilotDetailProps) => {
  return (
    <div className="mx-auto w-5/6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-primary-500 font-bold uppercase tracking-widest">{tag}</p>
        <HText>{title}</HText>
        
        <div className="mt-10 flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2">
            <img src={image.src} alt={title} className="rounded-lg shadow-xl" />
          </div>
          <div className="md:w-1/2">
            <p className="text-lg leading-relaxed text-gray-700">{description}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PilotDetailPage;