import {PrismaClient} from "@prisma/client";
import {ComplaintEntity} from "@/model/entity/complaintEntity";

export class ComplaintRepository {
  private connection: PrismaClient;
  
  constructor(connection: PrismaClient) {
    this.connection = connection;
  }
  
  async getComplaints() {
    return this.connection.complaint.findMany(
      {
        include: {
          images: true,
        },
      }
    );
  }
  
  async createComplaint(data: ComplaintEntity) {
    const complaint = await (await this.connection.complaint.create({
      data: {
        address: data.address ?? '',
        name: data.name ?? '',
        descriptionForLocale: data.descriptionForLocale,
        additionalComments: "",
        dataObservation: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
        // Não inclua 'images' aqui, pois as imagens serão associadas após a criação da reclamação
      },
    }));
    
    const images = await Promise.all(
      data.images!.map((image) => {
        return this.connection.images.create({
          data: {
            Complaint: {connect: {id: complaint.id}}, // Use o ID da reclamação
            url: image.url,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        });
      })
    );
    return {...complaint, images};
  }
}