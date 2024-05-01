import React from "react";
import Image from "next/image";
import {LinkNavigation} from "@/components/link-navigation";
import Link from "next/link";

export function Footer(): React.JSX.Element {
  return (
    <footer className="bg-blue-800 flex items-center flex-col text-gray-400 p-10">
      <div className="container p-30 grid md:grid-cols-3 gap-4">
        <div>
          <a href="/"
             className="h-full"
             title="Link para a página de Início">
            <Image src={'/logo_dark.png'} alt={'sdfa'} width={200} height={100}/>
          </a>
          <p className='text-xs'>Conectando Tecnologia ao Sucesso do seu Negócio.
          </p>
        </div>
        <div className="flex flex-col items-start"><h2
          className="text-gray-200">Acesso rápido</h2>
          <ul>
            <li><Link
              title="Link para a página de Início"
              href='/'>
              Início
            </Link></li>
            
            <li><Link href="/#services" className="text-foot"
                      title="Link para a seção de Serviços"> Serviços</Link></li>
            <li><Link href="/#contact" className="text-foot"
                      title="Link para a seção de Contato"> Contato</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start"><h2
          className="text-gray-200">Contate-nos</h2>
          <ul className="list-unstyled footer-list mt-4">
            <li><p className='text-xs'>+55 (11) 95169-8212</p></li>
            <li><p className='text-xs'>santsdev@gmail.com</p></li>
            <li>
              <p className='text-xs'>
                R. Doutor Durval José Habib, 112 - Centro, Santo Estevão - BA - Brasil, CEP
                44190-000
                Somos uma fábrica de software com sede em Santo Estevão-BA
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-py-30 footer-bar bg-footer">
        <div className="container">
          <div className="row align-items-center">
            <div className="col">
              <div className="text-center">
                <p className="mb-0 text-muted">
                  2024© Sants DEV. Todos os direitos reservados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}