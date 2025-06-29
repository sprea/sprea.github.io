
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import React from "react";

const PersonalPhoto = () => (
  <div className="mb-6 sm:mb-8">
    <Avatar className="w-32 h-32 sm:w-64 sm:h-64 mx-auto border-4 border-primary/20 shadow-lg">
      <AvatarImage 
        src='/personal.JPG' 
        alt="Simone Spreafico" 
        className="object-cover"
      />
      <AvatarFallback className="text-2xl font-bold bg-primary/10 text-primary">
        SS
      </AvatarFallback>
    </Avatar>
  </div>
);

export default PersonalPhoto;
