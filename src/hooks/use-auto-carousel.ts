import { useEffect } from 'react';
import { useCallback } from 'react';
import type { CarouselApi } from '@/components/ui/carousel';

export function useAutoCarousel(api: CarouselApi | null, interval = 5000) {
  const scrollNext = useCallback(() => {
    if (!api) return;
    api.scrollNext();
  }, [api]);

  useEffect(() => {
    if (!api) return;

    const intervalId = setInterval(scrollNext, interval);

    return () => clearInterval(intervalId);
  }, [api, interval, scrollNext]);
}
