export function SponsorsSection() {
  // Placeholder for sponsor logos - replace with actual sponsors
  const sponsorPlaceholders = [1, 2, 3, 4, 5, 6];

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
            Empresas e instituciones que confían en nosotros y apoyan 
            la divulgación científica en Colombia.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {sponsorPlaceholders.map((index) => (
            <div
              key={index}
              className="aspect-square glass-card rounded-xl flex items-center justify-center p-6 transition-all hover:scale-105 hover:glow-border"
            >
              {/* Replace with actual sponsor logos */}
              <div className="text-center">
                <svg
                  className="w-12 h-12 mx-auto text-muted-foreground/30 mb-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <p className="text-xs text-muted-foreground/50">Logo {index}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-8 text-sm">
          ¿Quieres ver tu logo aquí? Contáctanos para ser parte de nuestros patrocinadores.
        </p>
      </div>
    </section>
  );
}
