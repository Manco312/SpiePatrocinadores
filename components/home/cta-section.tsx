import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden glow-border">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-b from-primary/20 to-transparent rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                ¿Listo para ser Patrocinador?
              </span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto text-balance">
              Únete a nosotros y conecta tu marca con una comunidad apasionada 
              por la ciencia. Explora nuestros paquetes de patrocinio y encuentra 
              la opción perfecta para ti.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/paquetes" className="btn-primary text-center">
                Explorar Paquetes
              </Link>
              <Link href="/contacto" className="btn-secondary text-center">
                Hablar con Nosotros
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
