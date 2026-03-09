import { redirect } from "next/navigation";
import { verifySession } from "@/lib/auth";
import { createClient } from "@/lib/supabase/server";
import { AdminDashboard } from "@/components/admin/admin-dashboard";
import { SponsorshipPackage } from "@/lib/types";

async function getPackages(): Promise<SponsorshipPackage[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("sponsorship_packages")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching packages:", error);
    return [];
  }

  return data || [];
}

export default async function AdminDashboardPage() {
  const isAuthenticated = await verifySession();

  if (!isAuthenticated) {
    redirect("/admin/login");
  }

  const packages = await getPackages();

  return <AdminDashboard initialPackages={packages} />;
}
