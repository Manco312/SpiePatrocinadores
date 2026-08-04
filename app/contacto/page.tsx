import { Footer } from "@/components/footer";
import Image from "next/image";

export default function ContactoPage() {
  return (
    <div className="min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Contáctanos
            </span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
            ¿Interesado en patrocinar nuestros eventos? ¿Tienes preguntas sobre el Capítulo SPIE? 
            Estamos aquí para ayudarte.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Organization Info */}
            <div className="glass-card rounded-2xl p-8 glow-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center">
                  <Image
                    src="/logo-spie-blanco.png"
                    alt="SPIE Logo"
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h2 className="text-xl font-bold">Capítulo SPIE</h2>
                  <p className="text-muted-foreground">Universidad EAFIT</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm mb-1">Correos Electrónicos</h3>
                    <div className="space-y-1">
                      <a href="mailto:capitulospie@eafit.edu.co" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                        capitulospie@eafit.edu.co
                      </a>
                      <a href="mailto:spie.eafit@gmail.com" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                        spie.eafit@gmail.com
                      </a>
                      <a href="mailto:capitulospiee@gmail.com" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                        capitulospiee@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm mb-1">Teléfono</h3>
                    <a href="tel:+573195991889" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                      +57 3148457472
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Director RRPP */}
            <div className="glass-card rounded-2xl p-8 glow-border">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                Directora de Relaciones Públicas
              </h2>

              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <span className="text-white font-bold text-xl">SC</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Susana Carmona Marin</h3>
                  <a href="mailto:scarmonam@eafit.edu.co" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    scarmonam@eafit.edu.co
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map or additional info */}
          <div className="space-y-8">
            <div className="glass-card rounded-2xl p-8 glow-border h-full flex flex-col">
              <h2 className="text-xl font-bold mb-6">¿Por qué patrocinarnos?</h2>
              
              <div className="space-y-6 flex-1">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Visibilidad de Marca</h3>
                    <p className="text-sm text-muted-foreground">
                      Conecta tu marca con más de 3,400 seguidores comprometidos y una audiencia 
                      apasionada por la ciencia y la tecnología.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-accent font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Impacto Social</h3>
                    <p className="text-sm text-muted-foreground">
                      Apoya la educación científica y la divulgación de la óptica y la fotónica 
                      en Colombia.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Networking</h3>
                    <p className="text-sm text-muted-foreground">
                      Conecta con estudiantes talentosos, profesionales del sector y otras 
                      empresas líderes en tecnología.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-accent font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Flexibilidad</h3>
                    <p className="text-sm text-muted-foreground">
                      Ofrecemos paquetes de patrocinio adaptables a diferentes presupuestos 
                      y objetivos de marketing.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border/50">
                <a 
                  href="/paquetes" 
                  className="btn-primary w-full text-center block"
                >
                  Ver Paquetes de Patrocinio
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
