import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifySession } from "@/lib/auth";

export async function POST(request: NextRequest) {
  try {
    const isAuthenticated = await verifySession();
    
    if (!isAuthenticated) {
      return NextResponse.json(
        { error: "No autorizado" },
        { status: 401 }
      );
    }

    const { title, category, description } = await request.json();

    if (!title || !category || !description) {
      return NextResponse.json(
        { error: "Todos los campos son requeridos" },
        { status: 400 }
      );
    }

    const data = await prisma.sponsorshipPackage.create({
      data: {
        title,
        category,
        description,
      },
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error creating package:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
