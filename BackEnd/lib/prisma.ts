import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../prisma/prismaClient/client";
import dotenv from "dotenv";

dotenv.config({ path: ".env" });



const connectionString = `${process.env.DATABASE_URL}`;
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });
export { prisma };