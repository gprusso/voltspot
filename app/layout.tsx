import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'VOLTSPOT - Conecte. Analise. Invista em Eletropostos',
  description: 'Plataforma segura que conecta estabelecimentos a investidores com análise de IA e proteção total de dados',
  keywords: 'eletropostos, investimento, carros elétricos, marketplace, análise IA',
  authors: [{ name: 'VOLTSPOT Team' }],
  creator: 'VOLTSPOT',
  publisher: 'VOLTSPOT',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://voltspot.com.br',
    title: 'VOLTSPOT - Plataforma de Eletropostos',
    description: 'Conecte estabelecimentos a investidores com proteção total',
    siteName: 'VOLTSPOT',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VOLTSPOT - Eletropostos',
    description: 'Plataforma segura para investimentos em eletropostos',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0066FF" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* Layout principal */}
        <div className="min-h-screen bg-background">
          {/* Header global (se necessário) */}
          <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b">
            <div className="container mx-auto px-4 py-3">
              <nav className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold text-voltspot-blue">⚡ VOLTSPOT</span>
                </div>
                <div className="hidden md:flex items-center space-x-4">
                  <a href="#como-funciona" className="text-gray-600 hover:text-voltspot-blue">
                    Como Funciona
                  </a>
                  <a href="#precos" className="text-gray-600 hover:text-voltspot-blue">
                    Preços
                  </a>
                  <a href="#contato" className="text-gray-600 hover:text-voltspot-blue">
                    Contato
                  </a>
                </div>
              </nav>
            </div>
          </header>

          {/* Conteúdo principal */}
          <main>
            {children}
          </main>

          {/* Footer global */}
          <footer className="bg-gray-900 text-white py-8 mt-16">
            <div className="container mx-auto px-4 text-center">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <span className="text-2xl font-bold">⚡ VOLTSPOT</span>
              </div>
              <p className="text-gray-400 mb-4">
                Conectando estabelecimentos a investidores com proteção total
              </p>
              <div className="flex justify-center space-x-6 text-sm text-gray-400">
                <a href="#" className="hover:text-white">Termos de Uso</a>
                <a href="#" className="hover:text-white">Política de Privacidade</a>
                <a href="#" className="hover:text-white">Suporte</a>
              </div>
              <p className="text-xs text-gray-500 mt-4">
                © 2024 VOLTSPOT. Todos os direitos reservados.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
