export class Image {
  readonly name: string;
  url: string = '';
  pathUpload: string = '';
  readonly data: Buffer;
  constructor(name: string, data: Buffer) {
    this.name = name;
    this.data = data;
  }
}