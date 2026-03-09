import { createClient } from "@/lib/supabase/server";
import { PackagesList } from "@/components/packages/packages-list";
import { Footer } from "@/components/footer";
import { SponsorshipPackage } from "@/lib/types";

export const revalidate = 60; // Revalidate every 60 seconds

async function getPackages(): Promise<SponsorshipPackage[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("sponsorship_packages")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching packages:", error);
    return [];
  }

  return data || [];
}

export default async function PaquetesPage() {
  const packages = await getPackages();

  return (
    <div className="min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Paquetes de Patrocinio
            </span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
            Explora nuestras opciones de patrocinio y encuentra la que mejor se adapte 
            a tus objetivos. Cada paquete está diseñado para maximizar tu visibilidad.
          </p>
        </div>

        <PackagesList initialPackages={packages} />
      </div>
      <Footer />
    </div>
  );
}
