import {prisma} from "../lib/prisma";
import dotenv from "dotenv";

dotenv.config({ path: ".env" });

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error("DATABASE_URL environment variable is not set.");
}


async function main() {
  // Usuario administrador
  

  // Materiales
  await prisma.materials.createMany({
    data: [
      { name: "PLA" },
      { name: "PETG" },
      { name: "TPU" },
    ],
  });

  // Obtener PLA para relacionarlo con los filamentos
  const pla = await prisma.materials.findFirst({
    where: { name: "PLA" },
  });

  if (!pla) {
    throw new Error("PLA material not found");
  }

  // Filamentos
  const filamentGreen = await prisma.filaments.create({
    data: {
      brand: "Filanova",
      color: "Amazon Green",
      wheight: 1000,
      materialId: pla.id,
    },
  });

  const filamentWhite = await prisma.filaments.create({
    data: {
      brand: "Filanova",
      color: "Ice White",
      wheight: 1000,
      materialId: pla.id,
    },
  });

  const filamentBlack = await prisma.filaments.create({
    data: {
      brand: "Filanova",
      color: "Black",
      wheight: 1000,
      materialId: pla.id,
    },
  });

  // Pedido que usa los 3 filamentos
  const order1 = await prisma.orders.create({
    data: {
      client: "Juan Perez",
      description: "Pedido con 3 filamentos",
      delivered: false,
      filaments: {
        connect: [
          { id: filamentGreen.id },
          { id: filamentWhite.id },
          { id: filamentBlack.id },
        ],
      },
    },
  });

  // Pedido que usa solo 1 filamento
  const order2 = await prisma.orders.create({
    data: {
      client: "Maria Lopez",
      description: "Pedido con 1 filamento",
      delivered: false,
      filaments: {
        connect: [{ id: filamentBlack.id }],
      },
    },
  });

  console.log("Seed completado");
  console.log({
    order1,
    order2,
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });