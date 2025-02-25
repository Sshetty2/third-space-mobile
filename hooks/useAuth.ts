import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Session, Provider } from '@supabase/supabase-js';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri } from 'expo-auth-session';
import { Platform } from 'react-native';

const redirectUrl = makeRedirectUri({
  scheme: 'myapp',
  path  : 'auth/callback'
});

export function useAuth () {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signInWithProvider = async (provider: Provider) => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo         : Platform.OS === 'web' ? undefined : redirectUrl,
        skipBrowserRedirect: Platform.OS !== 'web'
      }
    });

    if (error) {
      throw error;
    }

    if (Platform.OS !== 'web' && data?.url) {
      const result = await WebBrowser.openAuthSessionAsync(
        data.url,
        redirectUrl
      );

      if (result.type === 'success') {
        const { url } = result;
        await supabase.auth.signInWithOAuth({
          provider,
          options: { url }
        });
      }
    }
  };

  return {
    session,
    loading,
    user  : session?.user ?? null,
    signIn: (email: string, password: string) => supabase.auth.signInWithPassword({
      email,
      password
    }),
    signUp: (email: string, password: string) => supabase.auth.signUp({
      email,
      password
    }),
    signOut           : () => supabase.auth.signOut(),
    signInWithGoogle  : () => signInWithProvider('google'),
    signInWithFacebook: () => signInWithProvider('facebook'),
    signInWithTwitter : () => signInWithProvider('twitter')
  };
}
