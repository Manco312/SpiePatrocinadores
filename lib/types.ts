export interface SponsorshipPackage {
  id: string;
  title: string;
  category: "Espacio Físico" | "Pieza" | "Espacio en Redes Sociales";
  description: string;
  created_at: string;
  updated_at: string;
}

export type PackageCategory = SponsorshipPackage["category"];

export const CATEGORIES: PackageCategory[] = [
  "Espacio Físico",
  "Pieza",
  "Espacio en Redes Sociales",
];
