export function AboutSection() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Sobre Nosotros
              </span>
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                {"El Cap\u00EDtulo SPIE de la Universidad EAFIT es una organizaci\u00F3n estudiantil dedicada a la promoci\u00F3n y divulgaci\u00F3n de la \u00F3ptica y la fot\u00F3nica, \u00E1reas fundamentales para el desarrollo tecnol\u00F3gico del siglo XXI."}
              </p>
              <p>
                {"Somos parte de SPIE, la Sociedad Internacional de \u00D3ptica y Fot\u00F3nica, una de las organizaciones cient\u00EDficas m\u00E1s prestigiosas del mundo con m\u00E1s de 20,000 miembros en todo el planeta."}
              </p>
              <p>
                {"Nuestra misi\u00F3n es inspirar a la pr\u00F3xima generaci\u00F3n de cient\u00EDficos e ingenieros a trav\u00E9s de eventos, talleres y actividades de divulgaci\u00F3n cient\u00EDfica que acercan la luz y sus aplicaciones a la comunidad."}
              </p>
            </div>
          </div>

          {/* Image placeholder */}
          <div className="relative">
            <div className="aspect-video rounded-2xl glass-card glow-border overflow-hidden flex items-center justify-center">
              {/* Replace with actual image */}
              <div className="text-center p-8">
                <svg
                  className="w-16 h-16 mx-auto text-primary/50 mb-4"
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
                <p className="text-muted-foreground text-sm">
                  {"Espacio para imagen del Cap\u00EDtulo"}
                </p>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-accent/30 to-primary/30 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
