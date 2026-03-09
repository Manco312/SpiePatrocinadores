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
                El Capítulo SPIE de la Universidad EAFIT es una organización estudiantil 
                dedicada a la promoción y divulgación de la óptica y la fotónica, 
                áreas fundamentales para el desarrollo tecnológico del siglo XXI.
              </p>
              <p>
                Somos parte de SPIE, la Sociedad Internacional de Óptica y Fotónica, 
                una de las organizaciones científicas más prestigiosas del mundo con 
                más de 20,000 miembros en todo el planeta.
              </p>
              <p>
                Nuestra misión es inspirar a la próxima generación de científicos e 
                ingenieros a través de eventos, talleres y actividades de divulgación 
                científica que acercan la luz y sus aplicaciones a la comunidad.
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
                  Espacio para imagen del Capítulo
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
