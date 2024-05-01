import {FileService} from "@/model/service/file-service";
import * as fs from "fs/promises";
import {Image} from "@/model/entity/image";

export class UploadImageLocal implements FileService {
  async upload(image: Image): Promise<string> {
    await fs.writeFile(image.pathUpload, image.data, 'binary');
    return image.url
  }
}