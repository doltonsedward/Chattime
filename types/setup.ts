import type { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "./db_types";

type SupabaseClientType = SupabaseClient<Database>;

export type SupabaseOutletContextType = {
  supabase: SupabaseClientType;
};
