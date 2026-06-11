import { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { supabase } from "@/store/supabaseClient";
import { LockClosedIcon, CheckCircleIcon } from "@heroicons/react/24/outline";

export default function ActivateAccount() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  const userId = searchParams.get("id");
  const nickname = searchParams.get("nick") || "Utilizador";
  
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleActivate = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);
  setError("");

  try {
    const { error: funcError } = await supabase.functions.invoke('create-user', {
      body: { username: nickname, password }
    });

    if (funcError) throw funcError;

    alert("Conta criada com sucesso! Já pode iniciar sessão.");
    navigate("/login"); 
  } catch (err: any) {
    // Displays the error message returned by your Edge Function
    setError("Erro ao criar conta: " + (err.message || "Tente novamente."));
  } finally {
    setLoading(false);
  }
};

  if (!userId) return <div className="p-10 text-center">Link inválido.</div>;

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
      >
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-black text-gray-900">Ativação de Conta</h2>
          <p className="text-gray-500 mt-2">Olá, <strong>{nickname}</strong>. Defina a sua palavra-passe para começar.</p>
        </div>

        <form onSubmit={handleActivate} className="space-y-6">
          {error && <div className="p-3 bg-rose-50 text-rose-600 rounded-lg text-sm">{error}</div>}
          
          <div>
            <label className="block text-[11px] font-black text-gray-400 uppercase tracking-widest mb-2">Palavra-passe</label>
            <input 
              type="password"
              required
              className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-[#77945D] outline-none"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button 
            disabled={loading || password.length < 6}
            className="w-full flex items-center justify-center gap-2 bg-[#77945D] text-white py-3 rounded-xl font-bold hover:bg-[#66824e] transition-all disabled:bg-gray-300"
          >
            {loading ? "A processar..." : "Ativar Conta"}
            {!loading && <CheckCircleIcon className="h-5 w-5" />}
          </button>
        </form>
      </motion.div>
    </div>
  );
}