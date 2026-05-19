

import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export default function BacktoTop() {
  const [scroll, setScroll] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {scroll > 100 && (
        <Button
          className="bg-fourth h-10 w-10 hover:bg-third cursor-pointer rounded-full  fixed bottom-4 right-4"
          onClick={() => window.scrollTo({ top: 0 })}
        >
          <ChevronUp className="text-white"/>
        </Button>
      )}
    </>
  );
}