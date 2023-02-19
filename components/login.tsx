import { useOutletContext } from "@remix-run/react";
import type { SupabaseOutletContextType } from "types/setup";
import { toast } from "react-toastify";

const Login = () => {
  const { supabase } = useOutletContext<SupabaseOutletContextType>();

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "github",
    });

    if (error) {
      toast.error("Unknown error");
    }

    toast.success("Login success");
  };

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      toast.error("Unknown error");
    }

    toast.success("Logout success");
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Login;
