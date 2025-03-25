"use client";

import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { LogOut } from "lucide-react";
import { Button } from "./button";

export default function Navbar() {
  return (
    <nav className="w-full fixed flex items-center justify-between px-2 py-1 shadow-sm bg-white/20 shadow-lg backdrop-blur-md">
      {/* Left: Project Name */}
      <h1 className="text-lg font-semibold">Gallery Vault</h1>

      {/* Right: Profile and Logout */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/profile.jpg" alt="Profile" />
            <AvatarFallback className="bg-[#2e2e2e] text-white">AJ</AvatarFallback>
          </Avatar>
          <span className="text-md font-medium">Adarsh</span>
        </div>
        <Button variant="ghost" size="icon">
          <LogOut className="h-6 w-6 text-red-500" />
        </Button>
      </div>
    </nav>
  );
}
