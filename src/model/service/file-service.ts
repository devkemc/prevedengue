import {Image} from "@/model/image";

export interface FileService {
  upload(file: Image): Promise<string>;
}