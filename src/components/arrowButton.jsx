import { useState, useEffect } from "react";
import Arrow from "../img/arrow.png";

function ArrowButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleClick() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      {isVisible && (
        <div>
          <button
            className={`${
              isVisible ? "block" : "hidden"
            } back-to-top fixed bottom-60 right-12 z-50 flex justify-center items-center w-12 h-12 rounded-full bg-white text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
            onClick={handleClick}
          >
            <img className="opacity-40 bg-opacity-50" src={Arrow} />
          </button>
        </div>
      )}
    </>
  );
}

export default ArrowButton;
