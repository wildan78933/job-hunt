import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { FC } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";

interface FormSearchProps {}

const FormSearch: FC<FormSearchProps> = ({}) => {
  return (
    <>
      <div className="mt-6 bg-background bg-white p-4 shadow-md inline-flex items-center gap-4 relative w-max z-10">
        <div className="inline-flex gap-3 items-center">
          <AiOutlineSearch className="w-6 h-6" />
          <Input
            className="py-8 w-[300px] border-none"
            placeholder="Job Title or Keyword"
          />
        </div>
        <div className="inline-flex gap-4 items-center">
          <HiOutlineLocationMarker className="w-6 h-6" />
          <Select>
            <SelectTrigger className="py-8 w-[300px] text-gray-500 border-none outline-none">
              <SelectValue placeholder="Select a Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Indonesia</SelectItem>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="light">Light</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Button className="py-8 px-10 text-lg">Seacrh my Job</Button>
        </div>
      </div>
      <div>
        <div className="text-muted-foreground mt-3">
          Popular : UI Designer, UX Researcher, Android, Admin
        </div>
      </div>
    </>
  );
};

export default FormSearch;
