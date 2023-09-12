import React, { useState, useEffect } from "react";

const Component = ({ images }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isMobileView, setIsMobileView] = useState(false);

  {/* for image resize on smaller screens*/ }
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handleNextImages = () => {
    setStartIndex((prevIndex) => Math.min(prevIndex + 1, images.length - 1));
  };

  const handlePrevImages = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const numVisibleImages = isMobileView ? 1 : 3;
  const visibleImages = images.slice(startIndex, startIndex + numVisibleImages);
  const showScrollButtons = images.length > numVisibleImages;

  return (
    <div className={`flex items-center justify-center p-4 md:p-8`}>
      {showScrollButtons && (
        <button
          className="scroll-button1 absolute top-1/2 transform -translate-y-1/2 left-4 md:left-8"
          onClick={handlePrevImages}
          disabled={startIndex === 0}
        >
          &lt;
        </button>
      )}
      <div className={`w-full md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto`}>
        <div className={`flex mx-2`}>
          {visibleImages.map((image, index) => (
            <div
              key={index}
              className={`w-1/2 md:w-1/3 lg:w-1/4 p-2 max-w-[200px] max-h-[296px]${
                isMobileView ? "md:w-full" : ""
              }`}
            >
            <img
  src={image}
  alt={`Image ${index}`}
  className={`w-1/4 h-[200px] max-h-[296px] rounded cursor-pointer ${
    isMobileView ? "md:mb-4" : "md:hover:scale-105"
  }`}
  onClick={() => handleImageClick(image)}
/>
            </div>
          ))}
        </div>
      </div>
      {showScrollButtons && (
        <button
          className="scroll-button2 absolute top-1/2 transform -translate-y-1/2 right-4 md:right-8"
          onClick={handleNextImages}
          disabled={startIndex === images.length - numVisibleImages}
        >
          &gt;
        </button>
      )}
      {selectedImage && (
        <div className="modal fixed inset-0 flex items-center justify-center z-10">
          <div className="modal-overlay fixed inset-0 bg-black opacity-50"></div>
          <div className="modal-container bg-white mx-auto rounded-lg p-4 md:p-8 overflow-hidden shadow-lg z-50">
            <span
              className="close-button absolute top-0 right-0 px-4 py-2 text-xl cursor-pointer"
              onClick={handleCloseModal}
            >
              &times;
            </span>
            <img
              src={selectedImage}
              alt="Full Screen"
              className="full-screen-image max-h-screen mx-auto"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Component;
