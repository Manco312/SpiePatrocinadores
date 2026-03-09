"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SponsorshipPackage, CATEGORIES, PackageCategory } from "@/lib/types";
import { PackageModal } from "./package-modal";
import { DeleteModal } from "./delete-modal";

interface AdminDashboardProps {
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

export function AdminDashboard({ initialPackages }: AdminDashboardProps) {
  const [packages, setPackages] = useState(initialPackages);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [editingPackage, setEditingPackage] = useState<SponsorshipPackage | null>(null);
  const [deletingPackage, setDeletingPackage] = useState<SponsorshipPackage | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  function openCreateModal() {
    setEditingPackage(null);
    setIsModalOpen(true);
  }

  function openEditModal(pkg: SponsorshipPackage) {
    setEditingPackage(pkg);
    setIsModalOpen(true);
  }

  function openDeleteModal(pkg: SponsorshipPackage) {
    setDeletingPackage(pkg);
    setIsDeleteModalOpen(true);
  }

  async function handleSave(data: { title: string; category: PackageCategory; description: string }) {
    setLoading(true);
    try {
      const url = editingPackage 
        ? `/api/admin/packages/${editingPackage.id}` 
        : "/api/admin/packages";
      
      const method = editingPackage ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Error al guardar");
      }

      const savedPackage = await response.json();

      if (editingPackage) {
        setPackages(packages.map(p => p.id === savedPackage.id ? savedPackage : p));
      } else {
        setPackages([savedPackage, ...packages]);
      }

      setIsModalOpen(false);
      setEditingPackage(null);
    } catch (error) {
      console.error("Error saving package:", error);
      alert("Error al guardar el paquete");
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete() {
    if (!deletingPackage) return;
    
    setLoading(true);
    try {
      const response = await fetch(`/api/admin/packages/${deletingPackage.id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Error al eliminar");
      }

      setPackages(packages.filter(p => p.id !== deletingPackage.id));
      setIsDeleteModalOpen(false);
      setDeletingPackage(null);
    } catch (error) {
      console.error("Error deleting package:", error);
      alert("Error al eliminar el paquete");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Panel de Administración
              </span>
            </h1>
            <p className="text-muted-foreground mt-1">
              Gestiona los paquetes de patrocinio
            </p>
          </div>
          <div className="flex gap-4">
            <button onClick={openCreateModal} className="btn-primary">
              + Nuevo Paquete
            </button>
            <button onClick={handleLogout} className="btn-secondary">
              Cerrar Sesión
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="glass-card rounded-xl p-6">
            <p className="text-muted-foreground text-sm">Total Paquetes</p>
            <p className="text-3xl font-bold text-primary mt-1">{packages.length}</p>
          </div>
          <div className="glass-card rounded-xl p-6">
            <p className="text-muted-foreground text-sm">Espacio Físico</p>
            <p className="text-3xl font-bold text-primary mt-1">
              {packages.filter(p => p.category === "Espacio Físico").length}
            </p>
          </div>
          <div className="glass-card rounded-xl p-6">
            <p className="text-muted-foreground text-sm">Redes Sociales</p>
            <p className="text-3xl font-bold text-accent mt-1">
              {packages.filter(p => p.category === "Espacio en Redes Sociales").length}
            </p>
          </div>
        </div>

        {/* Packages Table */}
        <div className="glass-card rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/50">
                  <th className="text-left p-4 font-semibold">Título</th>
                  <th className="text-left p-4 font-semibold">Categoría</th>
                  <th className="text-left p-4 font-semibold hidden md:table-cell">Descripción</th>
                  <th className="text-right p-4 font-semibold">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {packages.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="p-8 text-center text-muted-foreground">
                      No hay paquetes. Crea uno nuevo para comenzar.
                    </td>
                  </tr>
                ) : (
                  packages.map((pkg) => (
                    <tr key={pkg.id} className="border-b border-border/30 hover:bg-muted/20">
                      <td className="p-4">
                        <p className="font-medium">{pkg.title}</p>
                      </td>
                      <td className="p-4">
                        <span className={`category-badge ${getCategoryClass(pkg.category)}`}>
                          {pkg.category}
                        </span>
                      </td>
                      <td className="p-4 hidden md:table-cell">
                        <p className="text-sm text-muted-foreground line-clamp-2 max-w-md">
                          {pkg.description}
                        </p>
                      </td>
                      <td className="p-4">
                        <div className="flex justify-end gap-2">
                          <button
                            onClick={() => openEditModal(pkg)}
                            className="p-2 rounded-lg bg-primary/20 text-primary hover:bg-primary/30 transition-colors"
                            title="Editar"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                          </button>
                          <button
                            onClick={() => openDeleteModal(pkg)}
                            className="p-2 rounded-lg bg-destructive/20 text-destructive hover:bg-destructive/30 transition-colors"
                            title="Eliminar"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modals */}
      <PackageModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingPackage(null);
        }}
        onSave={handleSave}
        editingPackage={editingPackage}
        loading={loading}
      />

      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={() => {
          setIsDeleteModalOpen(false);
          setDeletingPackage(null);
        }}
        onConfirm={handleDelete}
        packageTitle={deletingPackage?.title || ""}
        loading={loading}
      />
    </div>
  );
}
