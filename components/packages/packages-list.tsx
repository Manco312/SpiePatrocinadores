"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { SponsorshipPackage, CATEGORIES, PackageCategory } from "@/lib/types";

interface PackagesListProps {
  initialPackages: SponsorshipPackage[];
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

export function PackagesList({ initialPackages }: PackagesListProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<PackageCategory | "all">("all");

  const filteredPackages = useMemo(() => {
    return initialPackages.filter((pkg) => {
      const matchesSearch = pkg.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "all" || pkg.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [initialPackages, searchQuery, selectedCategory]);

  return (
    <div>
      {/* Filters */}
      <div className="glass-card rounded-2xl p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="flex-1">
            <div className="relative">
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Buscar por título..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input-field pl-10"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedCategory === "all"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted/50 text-muted-foreground hover:bg-muted"
              }`}
            >
              Todos
            </button>
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted/50 text-muted-foreground hover:bg-muted"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results count */}
      <p className="text-sm text-muted-foreground mb-6">
        Mostrando {filteredPackages.length} de {initialPackages.length} paquetes
      </p>

      {/* Packages Grid */}
      {filteredPackages.length === 0 ? (
        <div className="glass-card rounded-2xl p-12 text-center">
          <svg
            className="w-16 h-16 mx-auto text-muted-foreground/50 mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h3 className="text-lg font-semibold mb-2">No se encontraron paquetes</h3>
          <p className="text-muted-foreground text-sm">
            Intenta con otros términos de búsqueda o filtros.
          </p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPackages.map((pkg) => (
            <Link
              key={pkg.id}
              href={`/paquetes/${pkg.id}`}
              className="glass-card rounded-2xl p-6 transition-all hover:scale-[1.02] hover:glow-border group"
            >
              <div className="flex items-start justify-between mb-4">
                <span className={`category-badge ${getCategoryClass(pkg.category)}`}>
                  {pkg.category}
                </span>
                <svg
                  className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {pkg.title}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {pkg.description}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
