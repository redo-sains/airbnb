import { NextResponse } from "next/server";

import getCurrentUser from "@/app/actions/getCurrentUser";
import client from "@/libs/prismadb";
import { error } from "console";
import prisma from "../../../../libs/prismadb";

interface IParams {
  listingId?: string;
}

export async function DELETE(
  request: Request,
  { params }: { params: IParams }
) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const { listingId } = params;

  const listing = await prisma?.listing.deleteMany({
    where: {
      id: listingId,
      userId: currentUser.id,
    },
  });

  return NextResponse.json(listing);
}
