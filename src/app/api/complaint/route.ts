import {ComplaintRepository} from "@/model/repository/complaint-repository";
import {Connection} from "@/model/database/connection";
import {UploadImageLocal} from "@/model/service/upload-image-local";
import {ComplaintService} from "@/model/service/complaint-service";
import {Image} from "@/model/entity/image";
import {ComplaintEntity} from "@/model/entity/complaintEntity";

const repository = new ComplaintRepository(Connection.getInstance());
const complaintService = new ComplaintService(repository, new UploadImageLocal());

export async function GET() {
  const complaints = await complaintService.getComplaints();
  return Response.json(complaints);
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const images = formData.getAll('images') as Array<File>;
  const imageEntity = images.map(async (image) => {
    const buffer = await image.arrayBuffer();
    const name = image.name.replace(/\s/g, '').trim();
    return new Image(name, Buffer.from(buffer));
  });
  
  const i = await Promise.all(imageEntity)
  const name = formData.get('name') as string;
  const address = formData.get('address') as string;
  const description = formData.get('description') as string;
  const complaint = new ComplaintEntity({
    name: name,
    address: address,
    description: description,
    images: i
  })
  const paths = await complaintService.createComplaint(complaint)
  
  return Response.json({paths: paths})
}
