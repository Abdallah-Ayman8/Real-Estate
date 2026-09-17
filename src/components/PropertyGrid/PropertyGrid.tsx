import PropertyCard from "../PropertyCard/PropertyCard";

export default function PropertyGrid() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4">
        <PropertyCard />
      </div>
    </>
  );
}
