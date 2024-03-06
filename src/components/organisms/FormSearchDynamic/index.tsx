import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LOCATION_OPTIONS } from "@/constants";
import { optionType } from "@/types";
import React, { FC } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";

interface FormSearchDynamicProps {}

const FormSearchDynamic: FC<FormSearchDynamicProps> = ({}) => {
  return (
    <div className="mx-auto w-max">
      <div className="bg-background bg-white p-4 shadow-md inline-flex items-center gap-4 relative w-max z-10 text-center">
        <div className="inline-flex gap-3 items-center">
          <AiOutlineSearch className="w-6 h-6" />
          <Input
            className="py-5 w-[350px] border-none"
            placeholder="Job Title or Keyword"
          />
        </div>
        <div className="inline-flex gap-4 items-center">
          <HiOutlineLocationMarker className="w-6 h-6" />
          <Select>
            <SelectTrigger className="py-5 w-[350px] text-gray-500 border-none outline-none">
              <SelectValue placeholder="Select a Location" />
            </SelectTrigger>
            <SelectContent>
              {LOCATION_OPTIONS.map((item: optionType, i: number) => (
                <SelectItem key={i} value={item.id}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Button className="">Seacrh</Button>
        </div>
      </div>
      <div>
        <div className="text-muted-foreground mt-3">
          Popular : UI Designer, UX Researcher, Android, Admin
        </div>
      </div>
    </div>
  );
};

export default FormSearchDynamic;
