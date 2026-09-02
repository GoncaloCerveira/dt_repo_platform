import React, { useEffect, useRef, useState } from "react";
import Navbar from "@/screens/navbar";
import { SelectedPage } from "@/components/types";
import { motion, AnimatePresence } from "framer-motion";
import {
  LinkIcon,
  DocumentTextIcon,
  GlobeAltIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ArrowRightIcon,
  CubeIcon,
  XMarkIcon,
  InformationCircleIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

/* ================= CUSTOM ELEMENTS ================= */
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        src?: string | null;
        alt?: string;
        loading?: "lazy" | "eager";
        reveal?: "interaction" | "auto";
        poster?: string;
        "auto-rotate"?: boolean;
        "camera-controls"?: boolean;
        "interaction-prompt"?: string;
        "tone-mapping"?: string;
        "environment-image"?: string;
        exposure?: string;
        "shadow-intensity"?: string;
      };
    }
  }
}

/* ================= TYPES ================= */

type ModelVersion = {
  label: string;
  url: string;
  fullModelUrl?: string;
};

type ProjectLink = {
  label: string;
  url: string; 
  type: "document" | "external" | "web" | "3d-model";
  fullModelUrl?: string; 
  versions?: ModelVersion[]; 
};

type MediaItem = {
  url: string;
  type: "image" | "video";
};

type ProjectProps = {
  title: string;
  subtitle: string;
  description: string[];
  media?: MediaItem[];
  links?: ProjectLink[];
  setSelectedPage: (value: SelectedPage) => void;
};

const DEFAULT_SHAREPOINT_MODEL_URL =
  "https://unlpt-my.sharepoint.com/:u:/g/personal/mgv_fct_unl_pt/IQCfd7wZtnJjRokPbEQP68ZZAcB9XDghQEhE5HVnnHRVc10";

/* ================= COMPONENT ================= */

const ProjectDetail = ({
  title,
  subtitle,
  description,
  media = [],
  links = [],
  setSelectedPage,
}: ProjectProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  // State to manage the 3D model viewer modal
  const [active3DModel, setActive3DModel] = useState<ProjectLink | null>(null);
  const [activeVersionIndex, setActiveVersionIndex] = useState<number>(0);
  const [modelLoading, setModelLoading] = useState(false);
  const [modelLoaded, setModelLoaded] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  // Ref for the model-viewer custom element
  const modelViewerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (media.length === 0) return;

    const videos = document.querySelectorAll("video");
    videos.forEach((video) => {
      video.pause();
      video.currentTime = 0;
    });
  }, [currentIndex, media.length]);

  // Manually attach load/error listeners to the model-viewer element
  useEffect(() => {
    const viewer = modelViewerRef.current;

    if (!viewer) return;

    const onLoad = () => {
      setModelLoading(false);
      setModelLoaded(true);
    };

    const onError = () => {
      setModelLoading(false);
    };

    const onProgress = (event: any) => {
      if (event.detail) {
        setLoadingProgress(Math.round(event.detail.totalProgress * 100));
      }
    };

    viewer.addEventListener("load", onLoad);
    viewer.addEventListener("error", onError);
    viewer.addEventListener("progress", onProgress);

    return () => {
      viewer.removeEventListener("load", onLoad);
      viewer.removeEventListener("error", onError);
      viewer.removeEventListener("progress", onProgress);
    };
  }, [active3DModel, activeVersionIndex]);

  const nextMedia = () =>
    setCurrentIndex((prev) => (prev + 1) % media.length);

  const prevMedia = () =>
    setCurrentIndex((prev) => (prev - 1 + media.length) % media.length);

  const current = media.length > 0 ? media[currentIndex] : null;

  // Determine current active URL and Download link based on selected version
  const currentModelUrl =
    active3DModel?.versions?.[activeVersionIndex]?.url || active3DModel?.url;
  const currentDownloadUrl =
    active3DModel?.versions?.[activeVersionIndex]?.fullModelUrl ||
    active3DModel?.fullModelUrl ||
    DEFAULT_SHAREPOINT_MODEL_URL;

  // Cleanup function for closing modal to free memory
  const handleCloseModal = () => {
    setActive3DModel(null);
    setModelLoading(false);
    setModelLoaded(false);
    setLoadingProgress(0);
    setActiveVersionIndex(0);
  };

  return (
    <div className="min-h-screen bg-gray-20">
      <Navbar selectedPage={SelectedPage.OurProject} setSelectedPage={() => {}} />

      <main className="pt-24 pb-20 relative">
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
              onClick={() => navigate("/repository")}
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white border-2 border-gray-100 text-gray-700 hover:border-primary-500 hover:text-primary-500 hover:shadow-md transition-all duration-300 group shrink-0"
            >
              <ArrowRightIcon className="h-5 w-5 rotate-180 group-hover:translate-x-1 transition-transform" />
              <span className="font-bold text-sm uppercase tracking-wider">
                {t("projectDetail2.backButton")}
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
                          alt="project media"
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
            <div
              className={`space-y-8 ${
                links.length === 0 ? "lg:col-span-3" : "lg:col-span-2"
              }`}
            >
              <div className="inline-flex items-center gap-3">
                <div className="h-1 w-10 bg-primary-500 rounded-full" />
                <h3 className="text-2xl font-bold text-gray-800">
                  {t("projectDetail2.aboutSectionTitle")}
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

            {/* SIDEBAR LINKS */}
            {links.length > 0 && (
              <aside className="lg:sticky lg:top-32">
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                    <LinkIcon className="h-6 w-6 text-primary-500" />
                    {t("projectDetail2.linksSectionTitle")}
                  </h3>

                  <div className="flex flex-col gap-4">
                    {links.map((link, idx) => {
                      const Icon =
                        link.type === "document"
                          ? DocumentTextIcon
                          : link.type === "external"
                          ? ArrowRightIcon
                          : link.type === "3d-model"
                          ? CubeIcon
                          : GlobeAltIcon;

                      if (link.type === "3d-model") {
                        return (
                          <button
                            key={idx}
                            onClick={() => {
                              setLoadingProgress(0);
                              setModelLoaded(false);
                              setModelLoading(true);
                              setActiveVersionIndex(0);
                              setActive3DModel(link);
                            }}
                            className="w-full flex items-center text-left gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-primary-500 hover:text-white transition-all duration-300 group"
                          >
                            <div className="p-2 rounded-xl bg-white text-primary-600 group-hover:bg-primary-400 group-hover:text-white transition-colors">
                              <Icon className="h-6 w-6" />
                            </div>
                            <span className="font-bold text-sm tracking-wide">
                              {link.label}
                            </span>
                          </button>
                        );
                      }

                      return (
                        <a
                          key={idx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-primary-500 hover:text-white transition-all duration-300 group"
                        >
                          <div className="p-2 rounded-xl bg-white text-primary-600 group-hover:bg-primary-400 group-hover:text-white transition-colors">
                            <Icon className="h-6 w-6" />
                          </div>

                          <span className="font-bold text-sm tracking-wide">
                            {link.label}
                          </span>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </aside>
            )}
          </div>
        </div>
      </main>

      {/* 3D MODEL VIEWER MODAL */}
      <AnimatePresence>
        {active3DModel && currentModelUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 md:p-12"
          >
            <div className="relative w-full max-w-5xl aspect-video bg-gray-900 rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center border border-gray-700">
              {/* MODEL OPTIMIZATION DISCLAIMER */}
              <div className="absolute top-4 left-4 z-30 flex items-center gap-2 bg-gray-900/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-gray-700/60 text-gray-300 text-xs">
                <InformationCircleIcon className="h-4 w-4 text-primary-500 shrink-0" />
                <span>
                  {t("projectDetail2.modalDisclaimer")}
                </span>
              </div>

              {/* CLOSE BUTTON */}
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 z-30 p-2 bg-black/50 hover:bg-white/20 rounded-full text-white transition-colors"
              >
                <XMarkIcon className="h-7 w-7" />
              </button>

              {/* VERSIONS MENU (If multiple exist) */}
              {active3DModel.versions && active3DModel.versions.length > 1 && (
                <div className="absolute top-16 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 bg-gray-900/80 backdrop-blur-md p-1.5 rounded-2xl border border-gray-700/60 shadow-lg">
                  {active3DModel.versions.map((version, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        if (activeVersionIndex === idx) return;
                        setLoadingProgress(0);
                        setModelLoaded(false);
                        setModelLoading(true);
                        setActiveVersionIndex(idx);
                      }}
                      className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                        activeVersionIndex === idx
                          ? "bg-primary-500 text-white shadow-md"
                          : "text-gray-400 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      {version.label}
                    </button>
                  ))}
                </div>
              )}

              {/* DOWNLOAD FULL MODEL BUTTON (BOTTOM RIGHT) */}
              <div className="absolute bottom-4 right-4 z-30">
                <a
                  href={currentDownloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-semibold text-sm shadow-lg backdrop-blur-md border border-primary-400/30 transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  <ArrowDownTrayIcon className="h-5 w-5 shrink-0" />
                  <span>{t("projectDetail2.downloadModelButton")}</span>
                </a>
              </div>

              {/* LOADER */}
              <div
                className={`absolute inset-0 z-20 flex flex-col items-center justify-center bg-gray-900 transition-opacity duration-500 ${
                  modelLoading
                    ? "opacity-100"
                    : "opacity-0 pointer-events-none"
                }`}
              >
                <div className="text-center">
                  <div className="w-16 h-16 border-4 border-white/20 border-t-primary-500 rounded-full animate-spin mx-auto" />
                  <p className="mt-6 text-white">
                    {t("projectDetail2.loadingText", { progress: loadingProgress })}
                  </p>
                  <div className="w-64 h-2 bg-white/20 rounded-full mt-4 overflow-hidden">
                    <div
                      className="h-full bg-primary-500 transition-all duration-300"
                      style={{
                        width: `${loadingProgress}%`,
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* MODEL VIEWER */}
              <model-viewer
                key={currentModelUrl}
                ref={modelViewerRef}
                src={currentModelUrl}
                alt="3D Model"
                loading="lazy"
                camera-controls
                auto-rotate={modelLoaded}
                interaction-prompt="none"
                tone-mapping="neutral"
                exposure="1"
                shadow-intensity="0"
                environment-image="neutral"
                style={{
                  width: "100%",
                  height: "100%",
                  background: "#111827",
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectDetail;