'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MessageSquare, Linkedin, Instagram, Globe } from 'lucide-react';

export default function GabrielPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl">
        {/* Cartão Digital */}
        <div className="relative w-full aspect-[3/2] mb-8">
          <Image
            src="/images/cartao-digital.svg"
            alt="Cartão Digital Gabriel"
            fill
            className="object-contain"
          />
        </div>

        {/* Botões de Ação */}
        <div className="grid grid-cols-2 gap-4">
          <Button
            variant="outline"
            className="w-full bg-green-500 hover:bg-green-600 text-white"
            onClick={() => window.open('https://wa.me/SEUNUMERO', '_blank')}
          >
            <MessageSquare className="mr-2 h-4 w-4" />
            WhatsApp
          </Button>

          <Button
            variant="outline"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white"
            onClick={() => window.open('tel:SEUNUMERO', '_blank')}
          >
            <Phone className="mr-2 h-4 w-4" />
            Ligar
          </Button>

          <Button
            variant="outline"
            className="w-full bg-red-500 hover:bg-red-600 text-white"
            onClick={() => window.open('mailto:SEUEMAIL', '_blank')}
          >
            <Mail className="mr-2 h-4 w-4" />
            Email
          </Button>

          <Button
            variant="outline"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            onClick={() => window.open('https://linkedin.com/in/SEUPERFIL', '_blank')}
          >
            <Linkedin className="mr-2 h-4 w-4" />
            LinkedIn
          </Button>

          <Button
            variant="outline"
            className="w-full bg-pink-500 hover:bg-pink-600 text-white"
            onClick={() => window.open('https://instagram.com/SEUPERFIL', '_blank')}
          >
            <Instagram className="mr-2 h-4 w-4" />
            Instagram
          </Button>

          <Button
            variant="outline"
            className="w-full bg-purple-500 hover:bg-purple-600 text-white"
            onClick={() => window.open('https://SEUSITE.com', '_blank')}
          >
            <Globe className="mr-2 h-4 w-4" />
            Site
          </Button>
        </div>
      </div>
    </div>
  );
} 