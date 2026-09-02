import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { SelectedPage } from "@/components/types";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import AR1 from "@/assets/azulejo/AR1.jpeg";
import AR2 from "@/assets/azulejo/AR2.jpeg";
import AR3 from "@/assets/azulejo/Video_AR.mp4";
import VR1 from "@/assets/azulejo/VR1.jpeg";
import VR2 from "@/assets/azulejo/VR2.png";
import VR3 from "@/assets/azulejo/VR3.png";
import VR4 from "@/assets/azulejo/VR4.png";
import VR5 from "@/assets/azulejo/Video_VR.mp4";

type ExperienceType = "VR" | "AR";

type Props = {
  setSelectedPage?: (v: SelectedPage) => void;
};

const AzulejoDetailFullTech = ({ setSelectedPage }: Props) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<ExperienceType>("VR");
  const [currentIndex, setCurrentIndex] = useState(0);

  const getParagraphs = (key: string): string[] => {
    const raw = t(key, { returnObjects: true });
    return Array.isArray(raw) ? (raw as string[]) : [];
  };

  const projectData = {
    VR: {
      subtitle: t("technologyPages.azulejo.vrSubtitle"),
      description: getParagraphs("technologyPages.azulejo.vrParagraphs"),
      media: [
        { url: VR1, type: "image" as const },
        { url: VR2, type: "image" as const },
        { url: VR3, type: "image" as const },
        { url: VR4, type: "image" as const },
        { url: VR5, type: "video" as const },
      ],
    },
    AR: {
      subtitle: t("technologyPages.azulejo.arSubtitle"),
      description: getParagraphs("technologyPages.azulejo.arParagraphs"),
      media: [
        { url: AR1, type: "image" as const },
        { url: AR2, type: "image" as const },
        { url: AR3, type: "video" as const },
      ],
    },
  };

  const currentContent = projectData[activeTab];
  const currentMedia = currentContent.media[currentIndex];

  useEffect(() => {
    setCurrentIndex(0);
  }, [activeTab]);

  const nextMedia = () =>
    setCurrentIndex((prev) => (prev + 1) % currentContent.media.length);
  const prevMedia = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + currentContent.media.length) % currentContent.media.length
    );

  return (
    <div className="min-h-full bg-gray-20">
      <main className="pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-2">
                {t("technologyPages.azulejo.title")}
              </h1>
              <p className="text-lg md:text-xl text-primary-500 font-medium">
                {t("technologyPages.azulejo.subtitle")}
              </p>
              <div className="inline-flex p-1 bg-white rounded-2xl border border-gray-200 shadow-sm mt-4">
                {(["VR", "AR"] as ExperienceType[]).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-2 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${
                      activeTab === tab
                        ? "bg-gray-900 text-white shadow-md"
                        : "text-gray-400 hover:text-gray-600"
                    }`}
                  >
                    {t("technologyPages.azulejo.experienceTab", { type: tab })}
                  </button>
                ))}
              </div>
            </motion.div>

            <button
              onClick={() => navigate("/")}
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white border-2 border-gray-100 text-gray-700 hover:border-primary-500 hover:text-primary-500 transition-all group shrink-0"
            >
              <ArrowRightIcon className="h-5 w-5 rotate-180 group-hover:-translate-x-1 transition-transform" />
              <span className="font-bold text-sm uppercase tracking-wider">
                {t("technologyPages.actions.back")}
              </span>
            </button>
          </div>

          {/* MEDIA SLIDER */}
          <div className="relative mb-9 group">
            <div className="relative w-full aspect-[23/9] overflow-hidden rounded-3xl shadow-xl bg-gray-200">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeTab}-${currentIndex}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full relative"
                >
                  {currentMedia.type === "image" ? (
                    <img
                      src={currentMedia.url}
                      className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl opacity-40"
                    />
                  ) : (
                    <video
                      src={currentMedia.url}
                      autoPlay
                      muted
                      loop
                      className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl opacity-40"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/40" />

                  <div className="relative z-10 w-full h-full flex items-center justify-center p-4">
                    {currentMedia.type === "image" ? (
                      <img
                        src={currentMedia.url}
                        className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
                      />
                    ) : (
                      <video
                        src={currentMedia.url}
                        controls
                        className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
                      />
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>

              {currentContent.media.length > 1 && (
                <>
                  <button
                    onClick={prevMedia}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all z-20"
                  >
                    <ChevronLeftIcon className="h-6 w-6" />
                  </button>
                  <button
                    onClick={nextMedia}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all z-20"
                  >
                    <ChevronRightIcon className="h-6 w-6" />
                  </button>
                </>
              )}
            </div>
          </div>

          {/* TEXT CONTENT */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2 space-y-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6"
                >
                  <div className="inline-flex items-center gap-3">
                    <div className="h-1 w-10 bg-primary-500 rounded-full" />
                    <h3 className="text-2xl font-bold text-gray-800">
                      {currentContent.subtitle}
                    </h3>
                  </div>
                  {currentContent.description.map((p, i) => (
                    <p key={i} className="text-lg text-gray-600 leading-relaxed">
                      {p}
                    </p>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AzulejoDetailFullTech;