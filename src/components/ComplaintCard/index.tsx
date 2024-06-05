import {Complaint} from "@/types/complaint";

type ComplaintCardProps = {
  complaint: Complaint;
}
export const ComplaintCard = ({complaint}:ComplaintCardProps) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
      <p className="text-2xl font-bold text-blue-800 mb-4">Nome do denunciante: {complaint.name}</p>
      <p className="text-gray-800 mb-2">Local para ação: {complaint.address}</p>
      <p className="text-gray-800 mb-2">Descrição: {complaint.descriptionForLocale}</p>
      <p className="text-gray-800 mb-2">Observações: {complaint.dataObservation}</p>
      <p className="text-gray-800 mb-2">Comentários adicionais: {complaint.additionalComments}</p>
      <div className="grid grid-cols-3 gap-4">
        {complaint.images.map((image) => (
          <img style={{ objectFit: "cover"}} key={image.id} src={image.url}
               alt={`Imagem ${image.id}`} className="w-full h-auto rounded-lg"/>
        ))}
      </div>
    </div>
  );
};