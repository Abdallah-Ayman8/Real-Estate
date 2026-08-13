import { useLocation } from "react-router-dom";
import Button from "../Button/Button";
import Tabs from "../Tabs/Tabs";

export default function Header() {
  const location = useLocation();
  const data = location.state;
  console.log(data);

  return (
    <div className="w-full bg-white rounded-xl p-6 shadow">
      <Tabs />

      <div className="flex items-center justify-between mt-4 flex-wrap gap-4">
        <div>
          <p className="text-gray-400 text-sm">Community</p>
          <h3 className="font-semibold">North Coast, Egypt</h3>
        </div>

        <div>
          <p className="text-gray-400 text-sm">Unit type</p>
          <h3 className="font-semibold">Chalet, Apartment</h3>
        </div>

        <div>
          <p className="text-gray-400 text-sm">Staying date</p>
          <h3 className="font-semibold">1 Jun - 15 Oct</h3>
        </div>

        <Button>Browse Properties</Button>
      </div>
    </div>
  );
}
