import { useState } from 'react';
import Image from 'next/image';
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { arrayMove, SortableContext, sortableKeyboardCoordinates, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Trash2, Star } from 'lucide-react';

interface PropertyImageGridProps {
  images: string[];
  onImagesChange: (newImages: string[]) => void;
  onImageDelete: (index: number) => void;
  onSetCoverImage: (index: number) => void;
}

interface SortableImageProps {
  id: string;
  imageUrl: string;
  isCover: boolean;
  onDelete: () => void;
  onSetCover: () => void;
}

function SortableImage({ id, imageUrl, isCover, onDelete, onSetCover }: SortableImageProps) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="relative group aspect-video rounded-lg overflow-hidden shadow-md"
      {...attributes}
      {...listeners}
    >
      <Image
        src={imageUrl}
        alt="Property image"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-200">
        <div className="absolute top-2 right-2 flex gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onSetCover();
            }}
            className="p-1.5 bg-white/90 rounded-full hover:bg-white transition-colors"
            title="Set as cover image"
          >
            <Star className={`w-4 h-4 ${isCover ? 'fill-yellow-400 text-yellow-400' : 'text-gray-600'}`} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
            className="p-1.5 bg-white/90 rounded-full hover:bg-white transition-colors"
            title="Delete image"
          >
            <Trash2 className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>
      {isCover && (
        <div className="absolute bottom-2 left-2 bg-yellow-400 text-gray-900 px-2 py-1 rounded text-sm font-medium">
          Cover
        </div>
      )}
    </div>
  );
}

export default function PropertyImageGrid({ images, onImagesChange, onImageDelete, onSetCoverImage }: PropertyImageGridProps) {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      const oldIndex = images.indexOf(active.id);
      const newIndex = images.indexOf(over.id);
      const newImages = arrayMove(images, oldIndex, newIndex);
      onImagesChange(newImages);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-garamond text-gray-900">Property Images</h3>
        <div className="text-sm text-gray-500">
          Drag to reorder • First image is the cover
        </div>
      </div>
      
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={images}
          strategy={verticalListSortingStrategy}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((imageUrl, index) => (
              <SortableImage
                key={imageUrl}
                id={imageUrl}
                imageUrl={imageUrl}
                isCover={index === 0}
                onDelete={() => onImageDelete(index)}
                onSetCover={() => onSetCoverImage(index)}
              />
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
} 