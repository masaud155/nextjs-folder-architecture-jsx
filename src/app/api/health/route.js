import { env } from "@/config/env";

export async function GET() {
  return Response.json({
    ok: true,
    service: "nextjs-scalable-folder-structure-jsx",
    environment: env.nodeEnv,
    timestamp: new Date().toISOString()
  });
}
