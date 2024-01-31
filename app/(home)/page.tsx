export const revalidate = 0;

import BookingItem from "@/components/booking-item";
import Header from "@/components/header";
import Search from "@/components/search";
import dayjs from "dayjs";

import "dayjs/locale/pt-br";

export default function Home() {
  const today = dayjs().format("dddd, DD [de] MMMM");

  dayjs.locale("pt-br");

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
    </main>
  );
}
