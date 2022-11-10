import { PrismaClient } from "@prisma/client";
import { getObjectSignedUrl } from "./s3.js";

const prisma = new PrismaClient();

export async function getPlatforms() {
  const platforms = await prisma.platform.findMany();
  for (let platform of platforms) {
    platform.imageUrl = await getObjectSignedUrl(platform.imageName);
  }
  return platforms;
}
