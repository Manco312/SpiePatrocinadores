import Image from "next/image";

export function SponsorsSection() {
  // Placeholder for sponsor logos - replace with actual sponsors
  const sponsors = [
    "anturios.png",
    "celestron.png",
    "coopebombas.png",
    "cremhelado.png",
    "cromar.png",
    "rosamaria.png",
    "skylight.png",
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Nuestros Patrocinadores
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
            Empresas e instituciones que han confiado en nosotros y apoyan 
            la divulgacion cientifica en Colombia.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {sponsors.map((logo) => (
            <div
              key={logo}
              className="aspect-square glass-card rounded-xl flex items-center justify-center p-6 transition-all hover:scale-105 hover:glow-border"
            >
              <Image
                src={`/${logo}`}
                alt="Sponsor logo"
                width={120}
                height={120}
                className="object-contain"
              />
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-8 text-sm">
          Quieres ver tu logo aqui? Contactanos para ser parte de nuestros patrocinadores.
        </p>
      </div>
    </section>
  );
}
