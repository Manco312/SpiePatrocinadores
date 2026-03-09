import { redirect } from "next/navigation";
import { verifySession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { AdminDashboard } from "@/components/admin/admin-dashboard";

async function getPackages() {
  try {
    const packages = await prisma.sponsorshipPackage.findMany({
      orderBy: { createdAt: "desc" },
    });
    return packages;
  } catch (error) {
    console.error("Error fetching packages:", error);
    return [];
  }
}

export default async function AdminDashboardPage() {
  const isAuthenticated = await verifySession();

  if (!isAuthenticated) {
    redirect("/admin/login");
  }

  const packages = await getPackages();

  return <AdminDashboard initialPackages={packages} />;
}
