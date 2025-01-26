"use client";

import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/client";

const SignInWithOAuth = () => {
  const handleGithubSignIn = async () => {
    const supabase = createClient();
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) {
      console.error("OAuth 로그인 에러:", error.message);
    }
  };

  return (
    <div>
      <Button onClick={handleGithubSignIn}>Sign in with Github</Button>
    </div>
  );
};

export default SignInWithOAuth;
