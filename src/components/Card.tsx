//component card with title, description and image
import React from 'react';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <article className="">
      <img className="w-full" src={imageUrl} alt={title} />
      <div className="px-6 py-4 text-center ">
        <h2 className="font-bold text-4xl mb-2  py-3">{title}</h2>
        <p className="text-gray-200 text-base">{description}</p>
      </div>
    </article>
  );
};
