export interface Complaint {
  id: string;
  name: string;
  descriptionForLocale: string;
  address: string;
  dataObservation: string;
  additionalComments: string;
  images: Image[];
}

export interface Image {
  id: string;
  url: string;
}