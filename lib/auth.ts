import { cookies } from "next/headers";
import { createHash } from "crypto";

const SESSION_SECRET = process.env.SESSION_SECRET || "spie-secret-key-change-in-production";
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "admin@spie-eafit.com";

function hashPassword(password: string): string {
  return createHash("sha256").update(password + SESSION_SECRET).digest("hex");
}

export async function verifySession(): Promise<boolean> {
  try {
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get("admin_session");
    
    if (!sessionCookie?.value) {
      return false;
    }

    const [encodedData, hash] = sessionCookie.value.split(".");
    
    if (!encodedData || !hash) {
      return false;
    }

    const data = Buffer.from(encodedData, "base64").toString();
    const [email, timestamp] = data.split(":");

    // Verify email matches admin
    if (email !== ADMIN_EMAIL) {
      return false;
    }

    // Verify hash
    const expectedHash = hashPassword(data);
    if (hash !== expectedHash) {
      return false;
    }

    // Check if session is not older than 24 hours
    const sessionAge = Date.now() - parseInt(timestamp);
    const maxAge = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
    
    if (sessionAge > maxAge) {
      return false;
    }

    return true;
  } catch {
    return false;
  }
}

export async function getAdminEmail(): Promise<string | null> {
  const isValid = await verifySession();
  return isValid ? ADMIN_EMAIL : null;
}
