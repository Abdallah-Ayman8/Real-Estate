import { logOut, openSidebar } from "@/Redux/slices/RealEstate/slicer";

import { CircleUserRound } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";

export default function Tabs() {
  const { isLoggedIn } = useSelector((state) => state.listings);

  const location = useLocation();
  const data = location.state ?? null;

  const dispatch = useDispatch();

  return (
    <div className="flex justify-between items-center border-b pb-4">
      <div className="flex gap-8 justify-center items-center">
        <button className="text-cyan-500 border-b-2 border-cyan-500 pb-2">
          Rent
        </button>

        <button className="text-gray-400">Sale</button>

        <button
          className="md:hidden text-gray-400 cursor-pointer"
          onClick={() => dispatch(openSidebar())}
        >
          Filters
        </button>
      </div>
      <div className="relative">
        {isLoggedIn ? (
          <>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    <CircleUserRound />
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-72 sm:w-80 p-2 flex flex-col flex-wrap justify-center items-start gap-3">
                      <div className="flex w-full flex-wrap justify-between items-start">
                        <p className="font-semibold">
                          <span className="font-bold">Name</span>: {data?.name}
                        </p>
                      </div>
                      <p className="font-semibold">
                        <span className="font-bold">userName</span> :
                        {data.userName}
                      </p>
                      <p className="font-semibold">
                        <span className="font-bold">Email</span>: {data.email}
                      </p>
                      <p className="font-semibold">
                        <span className="font-bold">Phone</span>: {data.phone}
                      </p>
                      <button
                        type="button"
                        className="w-full self-center mt-4 font-semibold py-2 bg-blue-600 flex justify-center items-center rounded-xl cursor-pointer"
                        onClick={() => dispatch(logOut())}
                      >
                        Log out
                      </button>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </>
        ) : (
          <button type="button" className="text-gray-400 cursor-pointer">
            <Link to={"/form"}>Log in</Link>
          </button>
        )}
      </div>
    </div>
  );
}
