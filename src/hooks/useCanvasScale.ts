import { useEffect, useRef } from 'react';

interface UseCanvasScaleOptions {
  frameCount: number;
  scrollProgress: number;
}

export function useCanvasScale({ frameCount, scrollProgress }: UseCanvasScaleOptions) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const loadedCountRef = useRef(0);

  // Calculate cover dimensions for canvas
  const drawImageCover = (
    ctx: CanvasRenderingContext2D,
    img: HTMLImageElement,
    canvasWidth: number,
    canvasHeight: number
  ) => {
    const imgRatio = img.width / img.height;
    const canvasRatio = canvasWidth / canvasHeight;

    let drawWidth, drawHeight, offsetX, offsetY;

    if (imgRatio > canvasRatio) {
      // Image is wider than canvas
      drawHeight = canvasHeight;
      drawWidth = img.width * (canvasHeight / img.height);
      offsetX = (canvasWidth - drawWidth) / 2;
      offsetY = 0;
    } else {
      // Image is taller than canvas
      drawWidth = canvasWidth;
      drawHeight = img.height * (canvasWidth / img.width);
      offsetX = 0;
      offsetY = (canvasHeight - drawHeight) / 2;
    }

    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  // Preload images
  const preloadImages = (onProgress: (percent: number) => void) => {
    return new Promise<HTMLImageElement[]>((resolve) => {
      const images: HTMLImageElement[] = [];
      loadedCountRef.current = 0;

      for (let i = 1; i <= frameCount; i++) {
        const img = new Image();
        img.onload = () => {
          loadedCountRef.current++;
          const progress = Math.round((loadedCountRef.current / frameCount) * 100);
          onProgress(progress);

          if (loadedCountRef.current === frameCount) {
            resolve(images);
          }
        };
        img.onerror = () => {
          loadedCountRef.current++;
          const progress = Math.round((loadedCountRef.current / frameCount) * 100);
          onProgress(progress);

          if (loadedCountRef.current === frameCount) {
            resolve(images);
          }
        };
        img.src = `/sequence/ezgif-frame-${i.toString().padStart(3, '0')}.jpg`;
        images.push(img);
      }

      imagesRef.current = images;
    });
  };

  // Render frame based on scroll
  const renderFrame = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const images = imagesRef.current;
    if (images.length === 0) return;

    // Map scroll progress to frame index
    const frameIndex = Math.min(
      frameCount - 1,
      Math.floor(scrollProgress * frameCount)
    );

    const img = images[frameIndex];
    if (!img || !img.complete) return;

    // Clear and draw
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawImageCover(ctx, img, canvas.width, canvas.height);
  };

  return {
    canvasRef,
    preloadImages,
    renderFrame,
    drawImageCover,
  };
}
