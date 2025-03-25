import { BentoGrid, BentoGridItem } from "@/Components/ui/bento-grid";
import Navbar from "@/Components/ui/navbar";
import Image from "next/image";
import { Button } from "../Components/ui/button";
import { Pencil, Trash } from "lucide-react"; // Minimal UI icons
import EditAlbumBtn from "@/Components/ActionButton";
import ActionButton from "@/Components/ActionButton";

export default function Home() {
  const Galleryarray = [
    {
      Id: 1,
      Name: "Sunset Wonders",
      Description: "A breathtaking collection of sunset photography from around the world.",
      Image: "sunset_gallery.jpg",
      CreatedBy: "John Doe",
      CreatedDate: "2024-03-20",
      ModifiedBy: "Jane Smith",
      ModifiedDate: "2024-03-22",
      IsDeleted: false,
    },
    {
      Id: 2,
      Name: "Urban Life",
      Description: "Capturing the essence of bustling city life and architecture.",
      Image: "urban_gallery",
      CreatedBy: "Alice Johnson",
      CreatedDate: "2023-12-10",
      ModifiedBy: "Michael Lee",
      ModifiedDate: "2024-01-05",
      IsDeleted: false,
    },
    {
      Id: 3,
      Name: "Nature's Beauty",
      Description: "A collection showcasing the most serene and untouched landscapes.",
      Image: "nature_gallery",
      CreatedBy: "David Brown",
      CreatedDate: "2023-11-15",
      ModifiedBy: "Emily White",
      ModifiedDate: "2024-02-01",
      IsDeleted: true,
    },
    {
      Id: 4,
      Name: "Urban Life",
      Description: "Capturing the essence of bustling city life and architecture.",
      Image: "urban_gallery",
      CreatedBy: "Alice Johnson",
      CreatedDate: "2023-12-10",
      ModifiedBy: "Michael Lee",
      ModifiedDate: "2024-01-05",
      IsDeleted: false,
    },
    {
      Id: 5,
      Name: "Nature's Beauty",
      Description: "A collection showcasing the most serene and untouched landscapes.",
      Image: "nature_gallery",
      CreatedBy: "David Brown",
      CreatedDate: "2023-11-15",
      ModifiedBy: "Emily White",
      ModifiedDate: "2024-02-01",
      IsDeleted: true,
    }
  ];

  const handleEdit = (galleryName: string) => {
    console.log(`Edit clicked for ${galleryName}`);
    // Add edit logic here
  };

  const handleDelete = (galleryName: string) => {
    console.log(`Delete clicked for ${galleryName}`);
    // Add delete logic here
  };

  return (
    <>
      <Navbar />
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <BentoGrid>
            {Galleryarray.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.Name}
                description={item.Description}
                header={item.Image}
                action={<div className="flex gap-2 mt-4">
                 <ActionButton item={item} action="edit" />
                 <ActionButton item={item} action="delete" />
                  {/* <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleDelete(item.Name)}
                    className="hover:bg-red-100 dark:hover:bg-red-800 transition-all"
                  >
                    <Trash className="w-5 h-5 text-red-600 dark:text-red-300" />
                  </Button> */}
                </div>}
              />
            ))}
          </BentoGrid>
        </main>
      </div>
    </>
  );
}
