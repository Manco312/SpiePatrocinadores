import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-white font-bold text-sm">SPIE</span>
              </div>
              <div>
                <h3 className="font-semibold">Capítulo SPIE</h3>
                <p className="text-sm text-muted-foreground">Universidad EAFIT</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Promoviendo la óptica y la fotónica en Colombia.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-foreground transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/paquetes" className="hover:text-foreground transition-colors">
                  Paquetes de Patrocinio
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-foreground transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="mailto:capitulospie@eafit.edu.co" className="hover:text-foreground transition-colors">
                  capitulospie@eafit.edu.co
                </a>
              </li>
              <li>
                <a href="tel:+573052974023" className="hover:text-foreground transition-colors">
                  +57 305 297 4023
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Capítulo SPIE EAFIT. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
