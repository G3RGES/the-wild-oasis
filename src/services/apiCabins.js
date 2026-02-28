import supabase from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.log(error);
    throw new Error("Cabins could not be retrieved");
  }

  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.log(error);
    throw new Error("Cabin could not be deleted");
  }

  return data;
}

export async function createCabin(cabin) {
  const { data, error } = await supabase.from("cabins").insert([cabin]);

  if (error) {
    console.log(error);
    throw new Error("Cabin could not be created");
  }

  return data;
}
