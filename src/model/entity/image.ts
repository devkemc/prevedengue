import {ComplaintEntity} from "@/model/entity/complaintEntity";

export class Image {
  readonly name: string;
  url: string;
  pathUpload: string;
  readonly data: Buffer;
  createdAt: Date;
  updatedAt: Date;
  complaint: ComplaintEntity
  complaintId: string;
  
  constructor(name: string, data: Buffer) {
    this.name = name;
    this.data = data;
  }
  
}