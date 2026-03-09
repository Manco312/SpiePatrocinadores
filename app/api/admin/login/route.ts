import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createHash } from "crypto";

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "admin@spie-eafit.com";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "SpieEafit2025!";
const SESSION_SECRET = process.env.SESSION_SECRET || "spie-secret-key-change-in-production";

function hashPassword(password: string): string {
  return createHash("sha256").update(password + SESSION_SECRET).digest("hex");
}

function createSessionToken(email: string): string {
  const timestamp = Date.now();
  const data = `${email}:${timestamp}`;
  return Buffer.from(data).toString("base64") + "." + hashPassword(data);
}

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email y contraseña son requeridos" },
        { status: 400 }
      );
    }

    // Check credentials
    if (email !== ADMIN_EMAIL || password !== ADMIN_PASSWORD) {
      return NextResponse.json(
        { error: "Credenciales inválidas" },
        { status: 401 }
      );
    }

    // Create session token
    const sessionToken = createSessionToken(email);

    // Set cookie
    const cookieStore = await cookies();
    cookieStore.set("admin_session", sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24, // 24 hours
      path: "/",
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
