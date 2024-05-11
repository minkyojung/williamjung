import React from 'react';
import Link from 'next/link';

// TypeScript with React Functional Component
interface ImgCardProps {
  src: string;
  title: string;
  subtitle: string;
  className?: string;
  url: string; // New prop for URL
}

const ImgCard: React.FC<ImgCardProps> = ({ src, title, subtitle, className, url}) => {
  return (
    <a href={url} className="block"> {/* Wrap content with an anchor tag */}
      <div className={`relative w-full max-w-xs rounded-lg overflow-hidden mx-4 ${className} flex-auto border border-zinc-800 transition-transform duration-300 ease-in-out hover:scale-105`}>
        <img
          alt="Abstract art as background"
          className="w-full h-full object-cover aspect-[1/1.25]" 
          src={src}
        />
        <div style={{ background: 'linear-gradient(to top, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0))' }} className="absolute inset-0" />
        <div className="absolute bottom-0 left-0 p-6 text-white">
          <h4 className="text-lg font-semibold">{title}</h4>
          <h5 className="text-base text-gray-300 font-regular mt-1">{subtitle}</h5>
        </div>
      </div>
    </a>
  );
};

/*const ImgCard: React.FC<ImgCardProps> = ({ src, title, subtitle}) => {
  return (
    <div className="relative w-full max-w-sm rounded-lg overflow-hidden">
      <img
        alt="Abstract art as background"
        className="w-full h-full object-cover aspect-[3/3.7]"
        src={src}
      />
      <div style={{ background: 'linear-gradient(to top, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0))' }} className="absolute inset-0" />
      <div className="absolute bottom-0 left-0 p-6 text-white">
        <h4 className="text-lg font-semibold">{title}</h4>
        <h5 className="text-base text-gray-300 font-regular mt-1">{subtitle}</h5>
      </div>
    </div>
  );
};*/

export default ImgCard;
