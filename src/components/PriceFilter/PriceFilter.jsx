import { Slider } from "@/components/ui/slider";
import { useUpdateParams } from "@/lib/utils";
import { useState } from "react";

export default function PriceFilter() {
  const [range, setRange] = useState([800, 5000]);

  const updateParams = useUpdateParams();

  function changePrice(minValue, maxValue) {
    updateParams({ miniPrice: minValue, maxPrice: maxValue });
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
