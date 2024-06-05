'use client'
import {ChangeEvent, ChangeEventHandler, FormEvent, FormEventHandler, useEffect, useMemo, useState} from "react";
import Image from "next/image";
import {ComplaintCard} from "@/components/ComplaintCard";
import {Spinner} from "@/components/Spinner";
import {Skeleton} from "@/components/Skeleton";
import {Complaint} from "@/types/complaint";
export default function Home() {
  const [images, setImages] = useState<Array<File>>([] as File[]);
  const [complaints, setComplaints] = useState<Array<Complaint>>([])
  const [imagesPath, setImagesPath] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sendRequest, setSendRequest] = useState(false);
  
  useEffect(() => {
    (async () => {
      await getComplaints();
      setLoading(false)
    })()
    
  }, []);
  
  const getComplaints = async () => {
    const response = await fetch('/api/complaint');
    const data = await response.json();
    setComplaints(data);
  }
  
  const handleImageChange: ChangeEventHandler<HTMLInputElement> = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e?.target?.files) return
    const file = e.target?.files[0];
    setImages((prevImages) => [...prevImages, file]);
  };
  
  const handleRemoveImage = (id: string) => {
    setImages((prevImages) => prevImages.filter((image) => `${image.name}${image.lastModified}` !== id));
  };
  
  const handleClick: FormEventHandler<HTMLFormElement> = (e: FormEvent<HTMLFormElement>) => {
    setSendRequest(true)
    e.preventDefault();
    const formData = new FormData();
    images.forEach((image) => {
      formData.append('images', image);
    });
    const form = new FormData(e.target as HTMLFormElement);
    formData.append('name', form.get('name') as string);
    formData.append('address', form.get('address') as string);
    formData.append('description', form.get('description') as string);
    formData.append('date', form.get('date') as string);
    formData.append('comments', form.get('comments') as string);
    
    fetch('/api/complaint', {
      method: 'POST',
      body: formData,
    }).then((response) => {
      response.json().then((data) => {
        getComplaints().then(() => {
          setImages([]);
          form.set('name', '');
          form.set('address', '');
          form.set('description', '');
          form.set('date', '');
          form.set('comments', '');
          form.set('current_image', '');
          setSendRequest(false);
        })
      });
      
    });
  }
  const imagesList = useMemo(() => {
    if (imagesPath.length === 0) {
      return null;
    }
    return (
      <div>
        <h1>Images uploads</h1>
        {imagesPath.map((image) => (
          <div key={image} style={{display: 'flex', alignItems: 'center', marginBottom: '10px'}}>
            <Image src={image} alt={`Imagem ${image}`}
                   width={400} height={400}/>
          </div>
        ))}
      </div>
    );
  }, [imagesPath])
  const imagesUploaded = useMemo(() => {
    return (
      <div>
        {images.map((image) => (
          <div key={`${image.name}${image.lastModified}`}
               style={{display: 'flex', alignItems: 'center', marginBottom: '10px'}}>
            <img src={URL.createObjectURL(image)} alt={`Imagem ${image.name}`}
                 style={{width: '200px', height: '200px', marginRight: '10px', objectFit: "cover"}}/>
            <button onClick={() => handleRemoveImage(`${image.name}${image.lastModified}`)}>Remover</button>
          </div>
        ))}
      </div>
    )
  }, [images])
  if (imagesList) {
    return imagesList
  }
  return (
    <main>
      <div className="container mx-auto">
        <h1 className="text-3xl font-semibold text-center mb-8 text-gray-800">PreveDengue: Prevenção e Informação</h1>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Nossa missão</h2>
          <p className='text-gray-600'>Proteger a comunidade da cidade de <b className='text-gray-800'>Santo
            Estevão</b> contra a propagação da dengue, fornecendo informações essenciais e facilitando a denúncia de
            focos de mosquito.</p>
        </div>
        
        <div>
          <h2>
            Denuncias:
          </h2>
          <div>
            {complaints.length !== 0 ? complaints.map((complaint) => (
              <ComplaintCard key={complaint.id} complaint={complaint}/>
            )) : loading ? <Skeleton/> : (<p>Nenhuma denúncia encontrada</p>)}
          </div>
        </div>
        
        {!sendRequest ? (<section className="bg-yellow-50 p-6 md:p-10">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Denuncie Focos de Mosquito</h2>
          <p className='text-gray-600'>Ajude-nos a Combater a Dengue! Utilize o formulário abaixo para denunciar
            qualquer foco de mosquito que você tenha observado em sua comunidade. Sua contribuição é crucial para manter
            nossa região segura.</p>
          
          <form className="mt-4" onSubmit={handleClick}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Nome:</label>
              <input
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name" name='name' type="text" placeholder="Nome"/>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">Endereço do Foco de
                Mosquito:</label>
              <input
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="address" name='address' type="text" placeholder="Endereço"/>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">Descrição do
                Local:</label>
              <textarea
                required
                name='description'
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="description" placeholder="Descrição"></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">Data da Observação:</label>
              <input
                required
                name='date'
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="date" type="date"/>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="comments">Comentários
                Adicionais:</label>
              <textarea
                name='comments'
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="comments" placeholder="Comentários"></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="file">Enviar Foto
                (opcional):</label>
              <input id='file' type="file"
                     required
                     name='current_image'
                     className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                     accept="image/*" multiple onChange={handleImageChange}/>
              {imagesUploaded}
            </div>
            <button
              disabled={sendRequest}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit">Enviar
            </button>
          </form>
        </section>) : <Spinner/>}
      </div>
    
    </main>
  );
}
