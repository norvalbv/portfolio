'use client';

import CodeLink from '@/src/components/CodeLink';
import StyledLink from '@/src/components/StyledLink';
import Image from 'next/image';
import { ReactElement, useCallback, useEffect, useState } from 'react';
import { classNames } from '@/src/utils';

type MyWorkCardProps = {
  title: string;
  subTitle?: string;
  link: { to: string; label?: string };
  description: string | JSX.Element | JSX.Element[];
  images: { alt: string; image: string }[];
  skills: string;
};

const MyWorkCard = ({
  title,
  subTitle,
  link,
  description,
  images,
  skills,
}: MyWorkCardProps): ReactElement => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isAutoPlaying && images.length > 1) {
      intervalId = setInterval(nextImage, 5000); // Change image every 5 seconds
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isAutoPlaying, images.length, nextImage]);

  const handleMouseEnter = (): void => setIsAutoPlaying(false);
  const handleMouseLeave = (): void => setIsAutoPlaying(true);

  return (
    <div className="before:linear-gradient-background-with-blue relative mb-6 rounded-t-xl border border-light-text bg-black/20 p-4 text-center before:absolute before:bottom-[-0.08rem] before:left-0 before:h-1 before:w-full dark:border-dark-text/50 dark:bg-dark-dark/30 sm:mb-8 sm:p-5 md:mb-10 md:p-6">
      <h3
        className={classNames('text-base uppercase underline sm:text-lg md:text-xl lg:text-2xl', {
          'mb-2 sm:mb-3 md:mb-4': !subTitle,
        })}
      >
        {title}
      </h3>
      {subTitle && (
        <h2 className="mb-3 mt-2 text-xs uppercase underline sm:mb-4 sm:text-sm md:mb-5 md:text-base">
          {subTitle}
        </h2>
      )}
      <CodeLink link={link.to} className="my-3 sm:my-4 md:my-5 lg:absolute lg:right-6 lg:top-4" />
      <span className="text-xs sm:text-sm md:text-base">{description}</span>
      <div
        className="relative my-4 aspect-video sm:my-5 md:my-6"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative h-full w-full overflow-hidden">
          {images.map((image, index) => (
            <Image
              key={`image-${image.alt}`}
              src={image.image}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={`object-contain transition-opacity duration-300 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>
        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-accent-primary/50 p-2 text-white transition-colors duration-300 hover:bg-accent-primary/70"
              aria-label="Previous image"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              type="button"
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-accent-primary/50 p-2 text-white transition-colors duration-300 hover:bg-accent-primary/70"
              aria-label="Next image"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
            <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 space-x-2">
              {images.map((image, index) => (
                <button
                  type="button"
                  key={`dot-${image.alt}`}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`h-3 w-3 rounded-full transition-colors duration-300 ${
                    index === currentImageIndex
                      ? 'bg-accent-primary'
                      : 'bg-accent-primary/50 hover:bg-accent-primary/75'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
      <p className="text-xs sm:text-sm md:text-base">Built with: {skills}</p>
      <StyledLink label="Read full project" link={link.to} className="mt-4" />
    </div>
  );
};

export default MyWorkCard;
