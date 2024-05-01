import {Image} from "@/model/entity/image";
import {PrismaClient} from "@prisma/client";

export class ImagesRepository {
  private connection: PrismaClient;
  
  constructor(connection: PrismaClient) {
    this.connection = connection;
  }
  
  async createImage(data: Image) {
    return this.connection.images.create({
      data: {
        ...data,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
  }
}