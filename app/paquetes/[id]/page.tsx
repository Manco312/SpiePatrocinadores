import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Footer } from "@/components/footer";

interface PageProps {
  params: Promise<{ id: string }>;
}

function getCategoryClass(category: string) {
  switch (category) {
    case "Espacio Físico":
      return "category-fisico";
    case "Pieza":
      return "category-pieza";
    case "Espacio en Redes Sociales":
      return "category-redes";
    default:
      return "category-fisico";
  }
}

async function getPackage(id: string) {
  try {
    const pkg = await prisma.sponsorshipPackage.findUnique({
      where: { id },
    });
    return pkg;
  } catch (error) {
    console.error("Error fetching package:", error);
    return null;
  }
}

export default async function PackageDetailPage({ params }: PageProps) {
  const { id } = await params;
  const pkg = await getPackage(id);

  if (!pkg) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back button */}
        <Link
          href="/paquetes"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Volver a Paquetes
        </Link>

        <div className="glass-card rounded-3xl p-8 sm:p-12 glow-border">
          <div className="mb-6">
            <span className={`category-badge ${getCategoryClass(pkg.category)}`}>
              {pkg.category}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {pkg.title}
            </span>
          </h1>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {pkg.description}
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-border/50">
            <h2 className="text-xl font-semibold mb-4">{"¿Interesado en este paquete?"}</h2>
            <p className="text-muted-foreground mb-6">
              {"Contáctanos para más información sobre este paquete de patrocinio y cómo puede beneficiar a tu marca."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contacto" className="btn-primary text-center">
                Contactar Ahora
              </Link>
              <a 
                href="mailto:capitulospie@eafit.edu.co" 
                className="btn-secondary text-center"
              >
                Enviar Email
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
