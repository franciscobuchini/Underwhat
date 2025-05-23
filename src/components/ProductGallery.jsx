import React from 'react';

export default function ProductGallery({ images }) {
  // Imágenes por defecto dentro del componente
  const defaultImages = [
    'https://res.cloudinary.com/dpleitc1d/image/upload/v1748029140/fx3nqdaibi62v0qxj2ln.webp',
    'https://res.cloudinary.com/dpleitc1d/image/upload/v1748029140/fx3nqdaibi62v0qxj2ln.webp',
    'https://res.cloudinary.com/dpleitc1d/image/upload/v1748029140/fx3nqdaibi62v0qxj2ln.webp',
    'https://res.cloudinary.com/dpleitc1d/image/upload/v1748029140/fx3nqdaibi62v0qxj2ln.webp',
    'https://res.cloudinary.com/dpleitc1d/image/upload/v1748029140/fx3nqdaibi62v0qxj2ln.webp',
  ];
  
  const displayImages = images && images.length > 0 ? images : defaultImages;

  return (
    <div className="p-2 grid grid-cols-3 gap-4">
      {displayImages.map((url, idx) => (
        <div
          key={idx}
          className="w-full overflow-hidden rounded-2xl aspect-[13/10]"
        >
          <img
            src={url}
            alt={`Gallery image ${idx + 1}`}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}