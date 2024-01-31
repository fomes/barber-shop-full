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
    </main>
  );
}
