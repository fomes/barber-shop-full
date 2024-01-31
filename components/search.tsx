"use client";

import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { SearchIcon } from "lucide-react";

export default function Search() {
  return (
    <div className="flex items-center">
      <Input placeholder="Busque por uma barbearia..." />

      <Button variant={"default"} size={"icon"}>
        <SearchIcon size={18} />
      </Button>
    </div>
  );
}
