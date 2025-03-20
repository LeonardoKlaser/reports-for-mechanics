"use client"
import ImagePreview from "@/components/imagePreview"

interface ImagePreviewWrapperProps {
  images: { [key: string]: File }
  labels: string[]
}

export function ImagePreviewWrapper({ images, labels }: ImagePreviewWrapperProps) {
  // This client component just wraps the ImagePreview component
  // It acts as a boundary between server and client components
  return <ImagePreview images={images} />
}

