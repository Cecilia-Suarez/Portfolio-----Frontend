import React, { useState } from "react";
import { useCharStates } from "../Context/Context";

const Gallery = () => {
  const { project } = useCharStates();

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <section className="py-8">
      <div className="mx-auto max-w-7xl flex items-center justify-around">
       
        <div className="relative w-full max-w-4xl h-[350px] rounded-2xl overflow-hidden mb-6">
          {project.images && project.images.length > 0 ? (
            <img
              src={project.images[currentImageIndex]}
              alt={`Gallery image ${currentImageIndex + 1}`}
              className="w-full h-full object-cover"
            />
          ) : (
            <p className="text-center text-gray-500">No images available</p>
          )}
        </div>

        
        {project.images && project.images.length > 1 && (
          <div className="flex flex-col gap-4">
            {project.images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Thumbnail ${index + 1}`}
                className={`w-20 h-20 rounded-2xl border-2 ${index === currentImageIndex
                    ? "border-indigo-600"
                    : "border-gray-200"
                  } cursor-pointer object-cover transition-all duration-300`}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
