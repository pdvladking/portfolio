import Image from "next/image";
import React from "react";

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/9779768446227?text=Hi%20Raja%2C%20I%20saw%20your%20site%20and%20wanted%20to%20connect"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
    >
      <Image
        src="images/WhatsApp.svg"
        alt="Chat with Raja"
        width={56}
        height={56}
        priority
      />
    </a>
  );
};

export default WhatsAppButton;