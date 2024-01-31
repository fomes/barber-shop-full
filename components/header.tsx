import React from "react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

export default function Header() {
  return (
    <Card>
      <CardContent className="px-5 py-8 justify-between flex flex-row">
        <Image alt="F Barber" src={"/logo.png"} height={22} width={120} />

        <Button variant={"outline"} size={"icon"}>
          <MenuIcon size={22} />
        </Button>
      </CardContent>
    </Card>
  );
}
