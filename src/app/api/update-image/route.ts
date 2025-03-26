import { NextResponse } from "next/server";
import { db } from "@/lib/db";
export async function POST(req: Request) {
  try {
    // const session = await getServerSession(authOptions);
    // if (!session?.user) {
    //   return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    // }

    const {email, image } = await req.json();

    await db.user.update({
      where: { email: email },
      data: { image: image },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erro ao atualizar a imagem:", error);
    return NextResponse.json({ error: "Erro ao atualizar a imagem" }, { status: 500 });
  }
}
