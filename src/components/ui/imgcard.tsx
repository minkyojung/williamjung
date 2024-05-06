import React from 'react';

// TypeScript with React Functional Component
interface ImgCardProps {
  src: string;
  title: string;
  subtitle: string;
  gradientFrom: string;
  gradientTo: string;
}

const ImgCard: React.FC<ImgCardProps> = ({ src, title, subtitle, gradientFrom, gradientTo }) => {
  return (
    <div className="relative w-full max-w-sm rounded-lg overflow-hidden">
      <img
        alt="Abstract art as background"
        className="w-full h-full object-cover aspect-[3/3.7]"
        src={src}
      />
      <div className={`absolute inset-0 bg-gradient-to-t from-${gradientFrom} to-${gradientTo}`} />
      <div className="absolute bottom-0 left-0 p-6 text-white">
        <h5 className="text-lg font-semibold">{title}</h5>
        <h4 className="text-xl font-bold mt-2">{subtitle}</h4>
      </div>
    </div>
  );
};

export default ImgCard;
