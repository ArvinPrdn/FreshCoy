import { NextResponse } from "next/server";
import { stages } from "@/lib/freshness";

export async function GET() {
  return NextResponse.json({
    product: "Freshcoy Package",
    qr: { sections: ["status", "panduan", "penyimpanan", "kimia", "penelitian", "pengamatan", "food-waste"] },
    disclaimer: "Indikator digunakan sebagai alat bantu penelitian/pemantauan, bukan satu-satunya penentu keamanan pangan.",
    stages
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const current = Number.isInteger(body?.stage) ? Number(body.stage) : 0;
    const next = (current + 1) % stages.length;
    return NextResponse.json({ stage: next, data: stages[next] });
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
}
