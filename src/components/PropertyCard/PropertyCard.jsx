import PropertyInfo from "../PropertyInfo/PropertyInfo";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import { useGetData } from "../../../Hooks/useGetData";
import { Loader } from "lucide-react";
import { api } from "../../../api/RealEstate";

export default function PropertyCard() {
  const { data, isLoading } = useGetData(api);

  return (
    <>
      {isLoading && (
        <div className="grid place-items-center col-span-3 w-full">
          <Loader size={40} />
        </div>
      )}

      {!isLoading && !data && (
        <div className="grid place-items-center col-span-3 w-full">
          <p className="font-semibold text-xl rounded-2xl ring ring-red-600 px-5 py-2">
            could not fetch data right now
          </p>
        </div>
      )}

      {data?.map((item) => (
        <div
          key={item.id}
          className="w-full md:w-full bg-white rounded-xl overflow-hidden shadow hover:cursor-pointer hover:-translate-y-1 duration-200"
        >
          <img
            src={item.icon}
            alt={item.description}
            className="h-52 w-full object-cover"
          />

          <div className="p-5 flex flex-col justify-between">
            <div className="flex justify-between">
              <h3 className="text-cyan-500 font-bold">
                {item.weekend_amount}$ /weekend
              </h3>

              <FavoriteButton />
            </div>

            <h2 className="font-bold text-xl mt-2 line-clamp-2">{item.name}</h2>

            <p className="text-gray-500 mt-2 line-clamp-1">{item.address}</p>

            <PropertyInfo
              bathrooms={item.bathrooms}
              bedrooms={item.bedrooms}
              size={item.size}
            />
          </div>
        </div>
      ))}
    </>
  );
}
