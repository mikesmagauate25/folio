"use client";
import React, { useState, useEffect } from "react";

const BackToTopButton: React.FC = () => {
  const [top, setOnTop] = useState<boolean>(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollToTop();
  }, [top]);

  return (
    <button
      onClick={() => setOnTop(!top)}
      className="uppercase font-machina text-white"
    >
      back to top
    </button>
  );
};

export default BackToTopButton;
