import { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';

interface ZineImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
}

export function ZineImage({ src, alt, className = '', fallbackLabel }: ZineImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#B2BEAB] via-[#EFECE6] to-[#9EAA96] text-[#434E3D] p-4 text-center ${className}`}
      >
        <ImageIcon className="w-7 h-7 opacity-75 mb-2" aria-hidden="true" />
        <span className="font-mono text-[11px] font-bold uppercase tracking-wider leading-tight">
          {fallbackLabel || alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
