import { useLoaderData } from "@remix-run/react";
import supabase from "utils/supabase";

export const loader = async () => {
  const { data } = await supabase.from("messages").select();
  return { data };
};

export default function Index() {
  const { data } = useLoaderData();

  return <div>{JSON.stringify(data)}</div>;
}
