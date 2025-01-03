import React, { useEffect, useState } from "react";

function Event() {
  const [visibleCount, setVisibleCount] = useState(0); // To track how many videos have become visible

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && visibleCount < 6) {
          setVisibleCount((prev) => prev + 1); // Increment when a video is 30% visible
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the element is visible
    );

    const elements = document.querySelectorAll(".video-element");
    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, [visibleCount]);

  return (
    <div className="bg-gradient-to-r from-blue-300 to-blue-500 text-black min-h-screen mt-5 text-lg xl:mt-16 space-y-12">
      <h1 className="xl:ml-12 xl:mt-16 xl:text-6xl py-12 sm:text-3xl anton-regular uppercase mt-12 text-center">
        EVENTS
      </h1>

      <div className="grid grid-cols-3 grid-rows-2 gap-2 sm:grid-cols-1 sm:grid-rows-6 xl:grid-cols-3 xl:grid-rows-2 xl:gap-10">
        <div
          className={`col-span-2 row-span-1 bg-black video-element transform transition-transform duration-1000 ${
            visibleCount >= 1 ? "scale-100 opacity-100" : "scale-90 opacity-0"
          }`}
        >
          {/* Video 1 */}
          <video src="./LEO_Video.mp4" className="w-full h-full object-cover" controls></video>
        </div>
        <div
          className={`col-span-1 row-span-1 bg-black video-element transform transition-transform duration-1000 ${
            visibleCount >= 2 ? "scale-100 opacity-100" : "scale-90 opacity-0"
          }`}
        >
          {/* Video 2 */}
          <video src="./LEO_Video.mp4" className="w-full h-full object-cover" controls></video>
        </div>
        <div
          className={`col-span-1 row-span-2 bg-black video-element transform transition-transform duration-1000 ${
            visibleCount >= 3 ? "scale-100 opacity-100" : "scale-90 opacity-0"
          }`}
        >
          {/* Video 3 */}
          <video src="./LEO_Video.mp4" className="w-full h-full object-cover" controls></video>
        </div>
        <div
          className={`col-span-1 row-span-1 bg-black video-element transform transition-transform duration-1000 ${
            visibleCount >= 4 ? "scale-100 opacity-100" : "scale-90 opacity-0"
          }`}
        >
          {/* Video 4 */}
          <video src="./LEO_Video.mp4" className="w-full h-full object-cover" controls></video>
        </div>
        <div
          className={`col-span-1 row-span-1 bg-black video-element transform transition-transform duration-1000 ${
            visibleCount >= 5 ? "scale-100 opacity-100" : "scale-90 opacity-0"
          }`}
        >
          {/* Video 5 */}
          <video src="./LEO_Video.mp4" className="w-full h-full object-cover" controls></video>
        </div>
        <div
          className={`col-span-2 row-span-1 bg-black video-element transform transition-transform duration-1000 ${
            visibleCount >= 6 ? "scale-100 opacity-100" : "scale-90 opacity-0"
          }`}
        >
          {/* Video 6 */}
          <video src="./LEO_Video.mp4" className="w-full h-full object-cover" controls></video>
        </div>
      </div>
    </div>
  );
}

export default Event;
