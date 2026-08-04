import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import { useGetData } from "../../../Hooks/useGetData";

export default function PriceFilter() {
  const [range, setRange] = useState([800, 2500]);
  const { UpdateParams } = useGetData();

  function changePrice(minValue, maxValue) {
    UpdateParams({ miniPrice: minValue, maxPrice: maxValue });
  }

  function getRange(value) {
    setRange(value);
    changePrice(range[0], range[1]);
  }

  return (
    <div>
      <h3 className="font-semibold mb-4">
        Price: {range[0]}, {range[1]}
      </h3>

      <Slider
        value={range}
        onValueChange={(value) => getRange(value)}
        defaultValue={[800, 2000]}
        min={500}
        max={6000}
        step={5}
        className="mx-auto w-full max-w-xs"
      />

      <div className="flex justify-between text-sm mt-2">
        <span>$500</span>
        <span>$6000</span>
      </div>
    </div>
  );
}
