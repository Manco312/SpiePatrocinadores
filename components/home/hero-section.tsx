import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Animated light beams */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/20 blur-3xl animate-pulse"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo placeholder */}
        <div className="mb-8 flex justify-center">
          <div className="w-32 h-32 rounded-full glass-card glow-border flex items-center justify-center">
            {/* Placeholder for SPIE logo - replace src with actual logo */}
            <div className="text-center">
              <span className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                SPIE
              </span>
              <p className="text-xs text-muted-foreground mt-1">EAFIT</p>
            </div>
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent glow-text">
            Capitulo SPIE
          </span>
          <br />
          <span className="text-foreground">Universidad EAFIT</span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 text-balance">
          Somos el capitulo estudiantil de SPIE en la Universidad EAFIT, 
          dedicados a promover la optica y la fotonica en Colombia. 
          Unete como patrocinador y se parte del futuro de la ciencia.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/paquetes" className="btn-primary text-center">
            Ver Paquetes de Patrocinio
          </Link>
          <Link href="/contacto" className="btn-secondary text-center">
            Contactanos
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-muted-foreground"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
