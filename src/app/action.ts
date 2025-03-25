"use server";

export async function deleteGallery(id: number) {
  console.log(`Deleting gallery with ID: ${id}`);
  // Add your DB delete logic here
}

export async function editGallery(updatedItem: { Id: number; Name: string; Description: string; Image: string }) {
    console.log("Updating gallery:", updatedItem);
    // Add your DB update logic here
  }