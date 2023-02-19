import { useOutletContext } from "@remix-run/react";
import type { SupabaseOutletContextType } from "types/setup";

const Login = () => {
  const { supabase } = useOutletContext<SupabaseOutletContextType>();

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "github",
    });

    if (error) {
      console.log(error, "error");
    }
  };

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.log(error, "error");
    }
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Login;
