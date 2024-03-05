import { DropdownMenu, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Button } from "./ui/button";
import { DropdownMenuContent } from "./ui/dropdown-menu";

type props ={
    onChange:(value: string) => void;
    sortOption: string;

};

const SORT_OPTIONS  = [
    {
        label: "Best match",
        value: "bestMatch"
    },
    {
        label: "Delivery price",
        value: "deliveryPrice"
    },
    {
        label: "Estimated delivery price",
        value: "estimatedDeliveryPrice",
    },
]

const SortOptionDropdown = ({onChange, sortOption}:props) => {

    const selectedSortLabel = SORT_OPTIONS.find((option)=> option.value === sortOption)?.label || SORT_OPTIONS[0].label;
  return (
    <DropdownMenu>
        <DropdownMenuTrigger className="cursor-pointer">
            <Button variant="outline" className="w-full">
                Sort by: {selectedSortLabel}
            </Button>

        </DropdownMenuTrigger>
        <DropdownMenuContent>
            {SORT_OPTIONS.map((option) => (
               <DropdownMenuItem className="cursor-pointer" onClick={() => onChange(option.value)}
               >
                {option.label}
               </DropdownMenuItem>
            ))}
        </DropdownMenuContent>
    </DropdownMenu>

  )
}



export default SortOptionDropdown;