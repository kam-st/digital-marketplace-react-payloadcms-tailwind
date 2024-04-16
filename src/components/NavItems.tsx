'use client';

import { PRODUCT_CATEGORIES } from '@/config';
import React, { useEffect, useRef, useState } from 'react';
import { NavItem } from './NavItem';
import { useOnClickOutside } from '@/hooks/use-on-click-outside';

export const NavItems = () => {
  const [activeIndex, SetActiveIndex] = useState<null | number>(null);

  // Function to close the nav menu with escape key

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        SetActiveIndex(null);
      }
    };
    document.addEventListener('keydown', handler);

    return () => {
      document.removeEventListener('keydown', handler);
    };
  }, []);

  const isAnyOpen = activeIndex !== null;
  const navRef = useRef<HTMLDivElement | null>(null);

  // Ref function for closing nav menu when clicked outside context window.

  useOnClickOutside(navRef, () => SetActiveIndex(null));

  return (
    <div className='flex h-full gap-4 ' ref={navRef}>
      {PRODUCT_CATEGORIES.map((category, i) => {
        const handleOpen = () => {
          if (activeIndex === i) {
            SetActiveIndex(null);
          } else {
            SetActiveIndex(i);
          }
        };

        const isOpen = i === activeIndex;

        return (
          <NavItem
            category={category}
            handleOpen={handleOpen}
            isOpen={isOpen}
            key={category.value}
            isAnyOpen={isAnyOpen}
          ></NavItem>
        );
      })}
    </div>
  );
};
