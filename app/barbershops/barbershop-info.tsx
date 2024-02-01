"use client";

import { Button } from "@/components/ui/button";
import { Barbershop } from "@prisma/client";
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface BarbershopInfoProps {
  barbershop: Barbershop;
}

export default function BarbershopInfo({ barbershop }: BarbershopInfoProps) {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <div>
      <div className="h-[250px] w-full relative">
        <Button
          size={"icon"}
          variant={"outline"}
          className="z-50 absolute top-4 left-4"
          onClick={handleBackClick}
        >
          <ChevronLeftIcon />
        </Button>

        <Button
          size={"icon"}
          variant={"outline"}
          className="z-50 absolute top-4 right-4"
        >
          <MenuIcon />
        </Button>

        <Image
          fill
          alt={barbershop.name}
          src={barbershop.imageUrl}
          style={{ objectFit: "cover" }}
          className="opacity-85"
        />
      </div>

      <div className="px-5 pt-3 pb-6">
        <h1 className="text-xl font-bold">{barbershop.name}</h1>
        <div className="flex items-center gap-1 mt-2">
          <MapPinIcon className="text-primary" size={18} />
          <p className="text-sm">{barbershop.address}</p>
        </div>

        <div className="flex items-center gap-1 mt-2">
          <StarIcon className="text-primary" size={18} />
          <p className="text-sm">5,0 (399 avaliações)</p>
        </div>
      </div>
    </div>
  );
}
