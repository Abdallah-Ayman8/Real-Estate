import PropertyCard from "../PropertyCard/PropertyCard";

export default function PropertyGrid() {
  return (
    <>
      <div className="flex w-full flex-wrap lg:justify-center md:justify-start items-center mt-8 gap-6">
        <PropertyCard />
      </div>
    </>
  );
}
