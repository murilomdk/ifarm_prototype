import * as SecureStore from "expo-secure-store";
import { createClient } from '@supabase/supabase-js'


const ExpoSecureStoreAdapter = {
    getItem: (key: string) => {
        return SecureStore.getItemAsync(key);
    },
    setItem: (key: string, value: string) => {
        SecureStore.setItemAsync(key, value);
    },
    removeItem: (key: string) => {
        SecureStore.deleteItemAsync(key);
    },
};

const supabaseUrl = 'https://ezbjhrjxupunlcrouczz.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV6Ympocmp4dXB1bmxjcm91Y3p6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODIzNzIwMDksImV4cCI6MTk5Nzk0ODAwOX0.TyyJ7mp_qQ8RGv1KuU_6xAHk1hofBxHFbeu4EvGLojg'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
        storage: ExpoSecureStoreAdapter as any,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
    },
})