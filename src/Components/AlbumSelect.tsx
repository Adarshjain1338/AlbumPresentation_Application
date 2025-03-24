"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

interface AlbumSelectProps {
  albums: string[];
  selectedAlbum: string;
  onSelectAlbum: (album: string) => void;
}

const AlbumSelect = ({ albums, selectedAlbum, onSelectAlbum }: AlbumSelectProps) => {
  return (
    <Select value={selectedAlbum} onValueChange={onSelectAlbum}>
      <SelectTrigger className="w-full bg-gray-800 text-white">
        <SelectValue placeholder="Select an Album" />
      </SelectTrigger>
      <SelectContent className="bg-gray-800 text-white">
        <SelectItem value="-1">No Album Selected</SelectItem>
        {albums.map((album) => (
          <SelectItem key={album} value={album}>
            {album}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default AlbumSelect;
