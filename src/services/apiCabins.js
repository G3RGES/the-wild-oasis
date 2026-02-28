import supabase, { supabaseUrl } from "./supabase";

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
  const imageName = `${Date.now()}-${cabin.image.name}`.replaceAll("/", "");
  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // https://rnfhyxtxtbsuxjhirwrp.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg
  //* 1. Create the cabin
  const { data, error } = await supabase
    .from("cabins")
    .insert([{ ...cabin, image: imagePath }]);

  if (error) {
    console.log(error);
    throw new Error("Cabin could not be created");
  }

  //* 2. Upload the image
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, cabin.image);

  //* 3. If image upload fails, delete the cabin we just created to avoid having a cabin without an image

  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.log(storageError);
    throw new Error(
      "Cabin image could not be uploaded, and the cabin was not created",
    );
  }

  return data;
}
