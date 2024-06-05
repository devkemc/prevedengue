import {Image} from "@/model/entity/image";

export interface FileService {
  upload(file: Image): Promise<string>;
}