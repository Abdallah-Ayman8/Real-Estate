import { BedDouble, Bath, Square } from "lucide-react";

export default function PropertyInfo({ bathrooms, bedrooms, size }) {
  return (
    <div className="flex justify-between mt-5 text-sm text-gray-500">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-1 text-xs">
          <BedDouble size={18} />
          {bedrooms} bedrooms
        </div>

        <div className="flex items-center gap-1">
          <Bath size={18} />
          {bathrooms} bathrooms
        </div>

        <div className="flex items-center gap-1">
          <Square size={18} />
          {size} m²
        </div>
      </div>
    </div>
  );
}
