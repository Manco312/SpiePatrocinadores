import Image from "next/image";

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
                El Capitulo SPIE de la Universidad EAFIT es una organizacion estudiantil dedicada a la promocion y divulgacion de la optica y la fotonica, areas fundamentales para el desarrollo tecnologico del siglo XXI.
              </p>
              <p>
                Somos parte de SPIE, la Sociedad Internacional de Optica y Fotonica, una de las organizaciones cientificas mas prestigiosas del mundo con mas de 20,000 miembros en todo el planeta.
              </p>
              <p>
                Nuestra mision es inspirar a la proxima generacion de cientificos e ingenieros a traves de eventos, talleres y actividades de divulgacion cientifica que acercan la luz y sus aplicaciones a la comunidad.
              </p>
            </div>
          </div>

          {/* Image placeholder */}
          <div className="relative">
            <div className="aspect-video rounded-2xl glass-card glow-border overflow-hidden flex items-center justify-center">
              {/* Replace with actual image */}
              <Image
                src="/imagen-capitulo.png"
                alt="Capítulo SPIE EAFIT"
                fill
                className="object-cover"
              />
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
