import React from "react";
import Image from "next/image";

export function Footer(): React.JSX.Element {
  return (
    <footer className="bg-yellow-800 flex items-center flex-col text-gray-400 p-10">
      <div className="container p-30 grid md:grid-cols-3 gap-4">
        <div>
          <a href="/"
             className="h-full"
             title="Link para a página de Início">
            <Image src={'/icon_dengue.png'} alt={'Logo deng'} width={200} height={100}/>
          </a>
          <p className='text-xs'>.
          </p>
        </div>
        <div className="flex flex-col items-start"><h2
          className="text-gray-200">Entre em contato</h2>
          <ul className="list-unstyled footer-list mt-4">
            <li><p className='text-xs'>+55 (11) 95169-8212</p></li>
            <li><p className='text-xs'>joaquimkbs@gmail.com</p></li>
          </ul>
        </div>
      </div>
      <div className="footer-py-30 footer-bar bg-footer">
        <div className="container">
          <div className="row align-items-center">
            <div className="col">
              <div className="text-center">
                <p className="mb-0 text-muted">
                  2024© DEVKEMC. Todos os direitos reservados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}