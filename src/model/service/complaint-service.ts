import {ComplaintRepository} from '@/model/repository/complaint-repository';
import {FileService} from "@/model/service/file-service";
import {ComplaintEntity} from "@/model/entity/complaintEntity";

export class ComplaintService {
  private repository: ComplaintRepository;
  private uploadImage: FileService;
  
  constructor(repository: ComplaintRepository, uploadImage: FileService) {
    this.repository = repository;
    this.uploadImage = uploadImage;
  }
  
  async createComplaint(complaint: ComplaintEntity) {
    const promises = complaint.images!.map((image, index) => {
      image.url = `/complaint/${Math.random() + image.name}`
      image.pathUpload = `./public${image.url}`
      return this.uploadImage.upload(image);
    })
    const paths = await Promise.all(promises);
    await this.repository.createComplaint(complaint);
    return paths;
   
  }
  
  async getComplaints() {
    return await this.repository.getComplaints();
  }
  
}