import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

type props = {
  index: number;
  removeMenuItem: () => void;
};

const MenuItemInput = ({ index, removeMenuItem }: props) => {
  const { control } = useFormContext();

  return (
    <div className="flex flex-row items-end gap-2">
      <FormField
        control={control}
        name={`menuItems.${index}.name`}
        render={({ field }) => (
          <FormItem>
            <FormLabel className="flex items-center gap-1">
              Name <FormMessage />
              <FormControl>
                <Input
                  {...field}
                  placeholder="Cheese Pizza"
                  className="bg-white"
                />
              </FormControl>
            </FormLabel>
          </FormItem>
        )}
      />
       <FormField
        control={control}
        name={`menuItems.${index}.price`}
        render={({ field }) => (
          <FormItem>
            <FormLabel className="flex items-center gap-1">
              Price($) <FormMessage />
              <FormControl>
                <Input
                  {...field}
                  placeholder="7.7 "
                  className="bg-white"
                />
              </FormControl>
            </FormLabel>
          </FormItem>
        )}
      />
      <Button type="button" onClick={removeMenuItem}
      className="bg-red-500 max-h-fit">Remove</Button>
    </div>
  );
};

export default MenuItemInput;
