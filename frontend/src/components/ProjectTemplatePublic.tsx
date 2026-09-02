import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { SelectedPage } from "@/components/types";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronLeftIcon,
  ChevronRightIcon,
  ArrowRightIcon
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

/* ================= TYPES ================= */

type MediaItem = {
  url: string;
  type: "image" | "video";
};

type ProjectProps = {
  title: string;
  subtitle: string;
  description: string[];
  media?: MediaItem[]; 
  setSelectedPage: (value: SelectedPage) => void;
};

/* ================= COMPONENT ================= */

const ProjectDetailPublic = ({
  title,
  subtitle,
  description,
  media = [],
  setSelectedPage,
}: ProjectProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (media.length === 0) return;

    const videos = document.querySelectorAll("video");
    videos.forEach((video) => {
      video.pause();
      video.currentTime = 0;
    });
  }, [currentIndex, media.length]);

  const nextMedia = () =>
    setCurrentIndex((prev) => (prev + 1) % media.length);

  const prevMedia = () =>
    setCurrentIndex((prev) => (prev - 1 + media.length) % media.length);

  // MEDIA CONTENT
  const current = media.length > 0 ? media[currentIndex] : null;

  return (
    <div className="min-h-full bg-gray-20">
      <main className="pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* HEADER */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex-grow"
            >
              <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-2">
                {title}
              </h1>
              <p className="text-lg md:text-xl text-primary-500 font-medium">
                {subtitle}
              </p>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={() => navigate("/")}
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white border-2 border-gray-100 text-gray-700 hover:border-primary-500 hover:text-primary-500 hover:shadow-md transition-all duration-300 group shrink-0"
            >
              <ArrowRightIcon className="h-5 w-5 rotate-180 group-hover:translate-x-1 transition-transform" />
              <span className="font-bold text-sm uppercase tracking-wider">
                {t("projectDetail.back")}
              </span>
            </motion.button>
          </div>

          {/* MEDIA SLIDER */}
          {media.length > 0 && current && (
            <div className="relative mb-9 group">
              <div className="relative w-full aspect-[23/9] overflow-hidden rounded-3xl shadow-xl">
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full relative"
                  >
                    {/* BACKGROUND BLUR EFFECT */}
                    {current.type === "image" ? (
                      <img
                        src={current.url}
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl opacity-40"
                      />
                    ) : (
                      <video
                        src={current.url}
                        autoPlay
                        muted
                        loop
                        className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl opacity-40"
                      />
                    )}
                    <div className="absolute inset-0 bg-black/40" />

                    {/* MAIN CONTENT */}
                    <div className="relative z-10 w-full h-full flex items-center justify-center p-4">
                      {current.type === "image" ? (
                        <img
                          src={current.url}
                          alt={t("projectDetail.mediaAlt")}
                          className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
                        />
                      ) : (
                        <video
                          src={current.url}
                          controls
                          className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
                        />
                      )}
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* CONTROLS */}
                {media.length > 1 && (
                  <>
                    <button
                      onClick={prevMedia}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all hover:scale-110 opacity-0 group-hover:opacity-100 z-20"
                    >
                      <ChevronLeftIcon className="h-6 w-6 text-gray-900" />
                    </button>

                    <button
                      onClick={nextMedia}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all hover:scale-110 opacity-0 group-hover:opacity-100 z-20"
                    >
                      <ChevronRightIcon className="h-6 w-6 text-gray-900" />
                    </button>

                    {/* PAGINATION DOTS */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                      {media.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentIndex(idx)}
                          className={`h-2 transition-all rounded-full ${
                            idx === currentIndex
                              ? "w-8 bg-white shadow-md"
                              : "w-2 bg-white/40 hover:bg-white/60"
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          )}

          {/* CONTENT GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            
            {/* TEXT DESCRIPTION */}
            <div className="space-y-8 lg:col-span-3">
              <div className="inline-flex items-center gap-3">
                <div className="h-1 w-10 bg-primary-500 rounded-full" />
                <h3 className="text-2xl font-bold text-gray-800">
                  {t("projectDetail.aboutProject")}
                </h3>
              </div>

              <div className="space-y-6">
                {description.map((para, idx) => (
                  <p key={idx} className="text-lg text-gray-600 leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetailPublic;