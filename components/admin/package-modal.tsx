"use client";

import { useState, useEffect } from "react";
import { SponsorshipPackage, CATEGORIES, PackageCategory } from "@/lib/types";

interface PackageModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: { title: string; category: PackageCategory; description: string }) => Promise<void>;
  editingPackage: SponsorshipPackage | null;
  loading: boolean;
}

export function PackageModal({ isOpen, onClose, onSave, editingPackage, loading }: PackageModalProps) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState<PackageCategory>("Espacio Físico");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (editingPackage) {
      setTitle(editingPackage.title);
      setCategory(editingPackage.category as PackageCategory);
      setDescription(editingPackage.description);
    } else {
      setTitle("");
      setCategory("Espacio Físico");
      setDescription("");
    }
  }, [editingPackage, isOpen]);

  if (!isOpen) return null;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await onSave({ title, category, description });
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative glass-card rounded-2xl p-6 w-full max-w-lg max-h-[90vh] overflow-y-auto glow-border">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">
            {editingPackage ? "Editar Paquete" : "Nuevo Paquete"}
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-muted/50 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium mb-2">
              Título
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Ej: Stand en Evento Principal"
              required
              className="input-field"
            />
          </div>

          <div>
            <label htmlFor="category" className="block text-sm font-medium mb-2">
              Categoría
            </label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value as PackageCategory)}
              className="input-field"
            >
              {CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium mb-2">
              Descripción
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe el paquete de patrocinio..."
              required
              rows={5}
              className="input-field resize-none"
            />
          </div>

          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="btn-secondary flex-1"
              disabled={loading}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="btn-primary flex-1 disabled:opacity-50"
              disabled={loading}
            >
              {loading ? "Guardando..." : editingPackage ? "Actualizar" : "Crear"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
