import { NextResponse } from "next/server";
import { db } from "@/lib/db";
export async function POST(req: Request) {
  try {
    // const session = await getServerSession(authOptions);
    // if (!session?.user) {
    //   return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    // }

    const {email} = await req.json();

    const user = await db.user.findUnique({
        where:{
            email: email,
        },
    })

    return NextResponse.json({ image: user?.image });
  } catch (error) {
    console.error("Erro ao atualizar a imagem:", error);
    return NextResponse.json({ error: "Erro ao atualizar a imagem" }, { status: 500 });
  }
}
