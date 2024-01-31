import BarbershopItem from "@/components/barbershop-item";
import BookingItem from "@/components/booking-item";
import Header from "@/components/header";
import Search from "@/components/search";
import { db } from "@/lib/prisma";
import { Barbershop } from "@prisma/client";
import dayjs from "dayjs";

import "dayjs/locale/pt-br";

export default async function Home() {
  const barbershops = await db.barbershop.findMany({});

  dayjs.locale("pt-br");
  const today = dayjs().format("dddd, DD [de] MMMM");

  return (
    <main>
      <Header />

      <div className="px-5 pt-5">
        <h2 className="text-xl font-bold">Olá, Felipe</h2>
        <p className="capitalize text-sm'">{today}</p>
      </div>

      <div className="px-5 pt-5">
        <Search />
      </div>

      <div className="px-5 mt-6">
        <h2 className="text-xs mb-3 uppercase text-gray-400 font-bold"></h2>
        <BookingItem />
      </div>

      <div className="mt-6">
        <h2 className="px-5 text-xs mb-3 uppercase text-gray-400 font-bold">
          Recomendados
        </h2>

        <div className="flex px-5 gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop: Barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>

      <div className="mt-6 mb-[4.5rem]">
        <h2 className="px-5 text-xs mb-3 uppercase text-gray-400 font-bold">
          Populares
        </h2>

        <div className="flex px-5 gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop: Barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </main>
  );
}
