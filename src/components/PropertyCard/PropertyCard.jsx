import PropertyInfo from "../PropertyInfo/PropertyInfo";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import { useGetData } from "../../../Hooks/useGetData";
import { Loader } from "lucide-react";

export default function PropertyCard() {
  const { data: response, isLoading } = useGetData();
  const properties = response?.data ?? [];
  console.log(`useGetData Result: ` + properties);

  return (
    <>
      {isLoading && (
        <div>
          <Loader />
        </div>
      )}

      {!properties && !isLoading && (
        <div className="w-full">
          <p className="font-semibold text-xl rounded-2xl ring ring-red-600 px-5 py-2 flex justify-center items-center w-full mt-16 ml-16">
            could not fetch data right now
          </p>
        </div>
      )}

      {properties &&
        properties.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl overflow-hidden shadow hover:cursor-pointer hover:-translate-y-1 duration-200"
          >
            <img
              src={item.icon}
              alt={item.description}
              className="h-52 w-full object-cover"
            />

            <div className="p-5">
              <div className="flex justify-between">
                <h3 className="text-cyan-500 font-bold">
                  {item.weekend_amount}$ /weekend
                </h3>

                <FavoriteButton />
              </div>

              <h2 className="font-bold text-xl mt-2">{item.name}</h2>

              <p className="text-gray-500 mt-2">{item.address}</p>

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
