import { db } from "@/lib/prisma";
import BarbershopInfo from "../barbershop-info";

interface BarbershopDetailsProps {
  params: any;
}

export default async function BarbershopDetails({
  params,
}: BarbershopDetailsProps) {
  if (!params.id) {
    return null;
  }

  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
  });

  if (!barbershop) {
    return null;
  }

  return (
    <div>
      <BarbershopInfo barbershop={barbershop} />
    </div>
  );
}
