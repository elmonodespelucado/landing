//component card with title, description and image
import React from 'react';
import { XMap } from '../icons/XMap.tsx';

interface ServiceCardProps {
  title: string;
  description?: string;
  imageUrl?: string;
  children?: React.ReactNode;
  directionXMap?: 'left' | 'right' | 'center';
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  imageUrl,
  children,
  directionXMap = 'left',
}) => {
  const classDirection = {
    left: 'left-0',
    right: 'right-0',
    center: 'left-1/2',
  };

  return (
    <article className="relative text-shadow-lg flex flex-col justify-center items-center max-w-md p-5">
      {imageUrl && <img className="w-full" src={imageUrl} alt={title} />}
      <XMap className={`${classDirection[directionXMap]} text-primary-500/50 top-0 absolute z-0`} />
      <div className="text-center z-10">
        <h2 className="font-bold text-4xl pb-5 ">{title}</h2>
        <p className="text-gray-200 text-base text-balance">{description || children}</p>
      </div>
    </article>
  );
};
