import {Image} from "@/model/entity/image";

interface ArgsConstructor {
  id?: string;
  name: string;
  address: string;
  description: string;
  images?: Array<Image>;
  createdAt?: Date;
  updatedAt?: Date;
}

export class ComplaintEntity{
  readonly id?: string;
  readonly name: string;
  readonly address: string;
  readonly descriptionForLocale: string;
  readonly images?: Array<Image>
  createdAt?: Date;
  updatedAt?: Date;
  
  constructor(data: ArgsConstructor) {
    this.id = data.id;
    this.name = data.name;
    this.descriptionForLocale = data.description;
    this.images = data.images;
    this.address = data.address;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
  }
}