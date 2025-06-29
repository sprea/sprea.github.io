import React from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const CVDownload: React.FC = () => {
  const handleOpenCV = () => {
    // Replace this URL with your actual Google Drive CV link
    const googleDriveUrl = "https://drive.google.com/file/d/13XsJY7HUTQIOUWt2mKpwFy-S_DUZw9Ow/view?usp=sharing";
    window.open(googleDriveUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <Button 
      onClick={handleOpenCV}
      size="lg"
      className="flex items-center gap-2"
    >
      <ExternalLink className="w-4 h-4" />
      <span>View my CV</span>
    </Button>
  );
};

export default CVDownload;