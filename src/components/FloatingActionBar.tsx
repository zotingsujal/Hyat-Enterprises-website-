import React, { useState, useEffect, useRef } from 'react';
import { CONTACT_INFO } from '../data/content';

interface FloatingActionBarProps {
  onQuoteClick: () => void;
}

export const FloatingActionBar: React.FC<FloatingActionBarProps> = ({ onQuoteClick }) => {
  const [positionX, setPositionX] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef<{ startX: number; initialX: number }>({ startX: 0, initialX: 0 });
  const barRef = useRef<HTMLDivElement>(null);

  // Drag logic for the low-middle floating pill bar
  const handleMouseDown = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('button, a')) return;
    setIsDragging(true);
    const initial = positionX ?? (window.innerWidth / 2);
    dragStartRef.current = { startX: e.clientX, initialX: initial };
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if ((e.target as HTMLElement).closest('button, a')) return;
    setIsDragging(true);
    const initial = positionX ?? (window.innerWidth / 2);
    dragStartRef.current = { startX: e.touches[0].clientX, initialX: initial };
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - dragStartRef.current.startX;
      const newX = Math.max(160, Math.min(window.innerWidth - 160, dragStartRef.current.initialX + deltaX));
      setPositionX(newX);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;
      const deltaX = e.touches[0].clientX - dragStartRef.current.startX;
      const newX = Math.max(160, Math.min(window.innerWidth - 160, dragStartRef.current.initialX + deltaX));
      setPositionX(newX);
    };

    const handleEnd = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleEnd);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleEnd);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleEnd);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleEnd);
    };
  }, [isDragging]);

  return (
    <div
      ref={barRef}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      style={{
        left: positionX ? `${positionX}px` : '50%',
        transform: 'translateX(-50%)'
      }}
      className={`fixed bottom-4 sm:bottom-6 z-40 flex items-center justify-center gap-2.5 px-3 py-1.5 rounded-full select-none transition-transform duration-150 ${
        isDragging ? 'cursor-grabbing scale-105' : 'cursor-grab'
      }`}
      title="Draggable Quick Action Bar"
    >
      {/* 1. Call Now Button (White Pill with dark text) */}
      <a
        href={CONTACT_INFO.phoneHref}
        className="px-5 sm:px-6 py-2.5 rounded-full bg-white text-stone-900 border border-stone-200/90 font-semibold text-xs sm:text-sm shadow-lg hover:bg-stone-50 active:scale-95 transition-all text-center whitespace-nowrap"
      >
        Call Now
      </a>

      {/* 2. WhatsApp Button (Bright Green Pill) */}
      <a
        href={CONTACT_INFO.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="px-5 sm:px-6 py-2.5 rounded-full bg-[#25D366] text-white font-semibold text-xs sm:text-sm shadow-lg hover:bg-[#20ba5a] active:scale-95 transition-all text-center whitespace-nowrap"
      >
        WhatsApp
      </a>

      {/* 3. Get Quote Button (Dark Black Pill) */}
      <button
        onClick={onQuoteClick}
        className="px-5 sm:px-6 py-2.5 rounded-full bg-[#141414] text-white font-semibold text-xs sm:text-sm shadow-lg hover:bg-[#2b2b2b] active:scale-95 transition-all text-center whitespace-nowrap"
      >
        Get Quote
      </button>
    </div>
  );
};
