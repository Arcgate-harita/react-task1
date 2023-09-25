import React, { useState, useEffect } from "react";


const Component = ({ setSelectedImage, setShowSelectImageModal, images }) => {
  const [startIndex, setStartIndex] = useState(0);
  // const [selectedImage, setSelectedImage] = useState(null);
  const [isMobileView, setIsMobileView] = useState(false);


  useEffect(() => {
    const storedImage = localStorage.getItem("selectedImage");
    if (storedImage && images.includes(storedImage)) {
      setSelectedImage(storedImage);
    }
  }, [images,setSelectedImage]);

  const handleImageClick = (imageUrl) => {
    setShowSelectImageModal(true);
    setSelectedImage(imageUrl);
    // Store the selected image URL in localStorage
     localStorage.setItem("selectedImage", imageUrl);
  };
  
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

  const handleNextImages = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImages = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Automatically scroll images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNextImages();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const numVisibleImages = isMobileView ? 1 : 3;
  const visibleImages = images.slice(startIndex, startIndex + numVisibleImages);
  const showScrollButtons = images.length > numVisibleImages;


  return (
    <div className={`flex items-center justify-center p-2 md:p-8`}>
      {showScrollButtons && (
        <button
          className="scroll-button1 absolute top-1/2 transform -translate-y-1/2"
          onClick={handlePrevImages}
        >
          &lt;
        </button>
      )}
      <div
        className={`w-full md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto`}
        style={{
          overflowX: "auto",
          whiteSpace: "nowrap",
          display: "flex", // Add display: flex
        }}
      >
        {visibleImages.map((image, index) => (
          <div
            key={index}
            style={{ flex: "0 0 auto", width: "350px" }} // Fixed width for images
            className={`w-1/2 md:w-1/3 lg:w-1/4 p-2 max-w-[200px] max-h-[296px]${
              isMobileView ? "md:w-full" : ""
            }`}
          >
 
  <img
    src={image}
    alt={`Image ${index}`}
    style={{ width: "100%", height: "auto" }}
    className={`w-1/4 h-[200px] max-h-[296px] rounded cursor-pointer ${
      isMobileView ? "md:mb-4" : "md:hover:scale-105"
    }`}
    onClick={() => handleImageClick(image)} // Pass the image URL to the function
  />
     </div>
        ))}
      </div>
      {showScrollButtons && (
        <button
          className="scroll-button2 absolute top-1/2 transform -translate-y-1/2"
          onClick={handleNextImages}
        >
          &gt;
        </button>
      )}
    </div>
  );
};

export default Component;
