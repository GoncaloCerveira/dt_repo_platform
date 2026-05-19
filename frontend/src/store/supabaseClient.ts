import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rnefpxunzjwxbrwksvhd.supabase.co';
const supabaseAnonKey = 'sb_publishable_9i5GV5hClkkPgqLvOFOp8Q_Nn1wzB9x';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: window.sessionStorage, 
    autoRefreshToken: true,        
    persistSession: true,
  }
});