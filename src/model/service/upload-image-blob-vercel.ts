import {FileService} from "@/model/service/file-service";
import {Image} from "@/model/entity/image";
import {put} from "@vercel/blob";

export class UploadImageBlobVercel implements FileService {
  async upload(image: Image): Promise<string> {
    const blob = await put(image.url, image.data, {
      access: 'public',
    });
    image.url = blob.url;
    return image.url
  }
}