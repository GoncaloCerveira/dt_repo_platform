import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { supabase } from "@/store/supabaseClient";
import { useTranslation } from "react-i18next";
import {
  BuildingLibraryIcon,
  CommandLineIcon,
  ArrowRightIcon,
  CubeIcon,
  LanguageIcon,
} from "@heroicons/react/24/outline";

export default function Login() {
  const { t, i18n } = useTranslation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    const checkExistingSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session) {
        navigate(from, { replace: true });
      }
    };

    checkExistingSession();
  }, [navigate, from]);

  const toggleLanguage = () => {
    const nextLang = i18n.language.startsWith("pt") ? "en" : "pt";
    i18n.changeLanguage(nextLang);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const formattedEmail = `${username.trim().toLowerCase()}@dtsstch.pt`;

    const { data, error: authError } =
      await supabase.auth.signInWithPassword({
        email: formattedEmail,
        password: password,
      });

    if (authError) {
      setError(t("login.invalidCredentials"));
    } else if (data.session) {
      navigate(from, { replace: true });
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="group w-full max-w-lg overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl hover:shadow-2xl transition-all duration-300"
      >
        {/* HEADER GRADIENTE */}
        <div className="relative overflow-hidden border-b border-[#77945D]/20 bg-gradient-to-r from-[#77945D] via-[#88a36f] to-[#77945D] p-10">
          {/* Glow Accents */}
          <div className="absolute top-0 right-0 h-52 w-52 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-black/10 blur-2xl" />

          <div className="relative">
            {/* TOP BAR: BADGE + LANGUAGE TOGGLE */}
            <div className="mb-4 flex items-center justify-between text-white/90">
              <div className="flex items-center gap-2.5">
                <div className="p-2.5 rounded-xl border border-white/20 bg-white/10 backdrop-blur-md">
                  <BuildingLibraryIcon className="h-6 w-6 text-white" />
                </div>

                <span className="text-[10px] font-black uppercase tracking-[0.3em]">
                  {t("login.badge")}
                </span>
              </div>

              {/* Language Switcher Button */}
              <button
                type="button"
                onClick={toggleLanguage}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/20 bg-white/10 backdrop-blur-md text-xs font-bold text-white hover:bg-white/20 transition-all cursor-pointer"
              >
                <LanguageIcon className="h-4 w-4" />
                <span className="uppercase">{i18n.language.slice(0, 2)}</span>
              </button>
            </div>

            <h2 className="text-3xl font-black tracking-tight text-white">
              {t("login.title")}
            </h2>

            <p className="mt-2.5 max-w-xl text-sm leading-relaxed text-white/80">
              {t("login.subtitle")}
            </p>
          </div>
        </div>

        {/* FORM AREA */}
        <form className="p-10 pb-12 space-y-8" onSubmit={handleLogin}>
          {error && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-xl border border-rose-200 bg-rose-50/50 p-4 text-center text-sm text-rose-700 font-medium"
            >
              {error}
            </motion.div>
          )}

          <div className="space-y-6">
            {/* Username Field */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 mb-2 px-2">
                <CommandLineIcon className="h-5 w-5 text-[#77945D]" />

                <label className="text-[11px] font-black text-gray-400 uppercase tracking-[0.2em]">
                  {t("login.usernameLabel")}
                </label>
              </div>

              <input
                type="text"
                required
                className="w-full rounded-xl bg-gray-50 border border-gray-100 px-5 py-3.5 text-sm text-gray-900 placeholder:text-gray-300 focus:border-[#77945D] focus:ring-1 focus:ring-[#77945D]/30 focus:outline-none transition-all shadow-sm"
                placeholder={t("login.usernamePlaceholder")}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <div className="flex items-center justify-between mb-2 px-2">
                <div className="flex items-center gap-2">
                  <CubeIcon className="h-5 w-5 text-[#77945D]" />

                  <label className="text-[11px] font-black text-gray-400 uppercase tracking-[0.2em]">
                    {t("login.passwordLabel")}
                  </label>
                </div>
              </div>

              <input
                type="password"
                required
                className="w-full rounded-xl bg-gray-50 border border-gray-100 px-5 py-3.5 text-sm text-gray-900 placeholder:text-gray-300 focus:border-[#77945D] focus:ring-1 focus:ring-[#77945D]/30 focus:outline-none transition-all shadow-sm"
                placeholder="••••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex w-full items-center justify-between gap-3 px-6 py-4 bg-gray-900 text-white rounded-xl font-bold text-sm hover:bg-gray-800 transition-all shadow-md group/btn cursor-pointer"
          >
            <span>{t("login.submitButton")}</span>

            <div className="flex items-center gap-2">
              <span className="text-[11px] font-black uppercase text-white/70">
                {t("login.actionText")}
              </span>

              <ArrowRightIcon className="h-5 w-5 text-white transition-transform duration-300 group-hover/btn:translate-x-1" />
            </div>
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}