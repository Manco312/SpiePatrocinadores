import { SponsorshipPackage as PrismaSponsorshipPackage } from "@prisma/client";

export type SponsorshipPackage = PrismaSponsorshipPackage;

export type PackageCategory = "Espacio Físico" | "Pieza" | "Espacio en Redes Sociales";

export const CATEGORIES: PackageCategory[] = [
  "Espacio Físico",
  "Pieza",
  "Espacio en Redes Sociales",
];
