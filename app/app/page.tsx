'use client'

import { useState } from 'react'
import { Zap, Shield, TrendingUp, Users, Lock, DollarSign, CheckCircle, AlertTriangle } from 'lucide-react'

export default function HomePage() {
  const [userType, setUserType] = useState<'estabelecimento' | 'investidor' | null>(null)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Conecte. Analise. 
              <span className="text-voltspot-blue"> Invista em Eletropostos</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Plataforma segura com <strong>proteção total de dados</strong> e análise de IA que conecta estabelecimentos a investidores
            </p>
            
            {/* Seletor de Tipo de Usuário */}
            <div className="flex flex-col md:flex-row gap-6 justify-center mb-8">
              <button
                onClick={() => setUserType('estabelecimento')}
                className={`p-6 rounded-xl border-2 transition-all ${
                  userType === 'estabelecimento' 
                    ? 'border-voltspot-green bg-green-50' 
                    : 'border-gray-200 hover:border-voltspot-green'
                }`}
              >
                <Users className="h-8 w-8 text-voltspot-green mx-auto mb-2" />
                <h3 className="font-bold text-lg">SOU ESTABELECIMENTO</h3>
                <p className="text-sm text-gray-600">Quero receber investimentos</p>
                <span className="inline-block mt-2 px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-bold">
                  SEMPRE GRÁTIS
                </span>
              </button>

              <button
                onClick={() => setUserType('investidor')}
                className={`p-6 rounded-xl border-2 transition-all ${
                  userType === 'investidor' 
                    ? 'border-voltspot-blue bg-blue-50' 
                    : 'border-gray-200 hover:border-voltspot-blue'
                }`}
              >
                <TrendingUp className="h-8 w-8 text-voltspot-blue mx-auto mb-2" />
                <h3 className="font-bold text-lg">SOU INVESTIDOR</h3>
                <p className="text-sm text-gray-600">Quero investir em eletropostos</p>
                <span className="inline-block mt-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-bold">
                  R$ 297/MÊS
                </span>
              </button>
            </div>

            {/* Botões de Ação */}
            <div className="flex gap-4 justify-center">
              <button className="bg-voltspot-blue text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors">
                COMEÇAR AGORA
              </button>
              <button className="border-2 border-voltspot-blue text-voltspot-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors">
                VER DEMONSTRAÇÃO
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Sistema de Proteção */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Shield className="h-16 w-16 text-voltspot-green mx-auto mb-4" />
            <h2 className="text-4xl font-bold mb-4">Sistema de Proteção Total</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tecnologia anti-burla que <strong>garante sua receita</strong> e protege dados sensíveis
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-6 rounded-xl bg-green-50 border border-green-200">
              <Lock className="h-12 w-12 text-voltspot-green mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Dados Ocultos</h3>
              <p className="text-gray-600">
                Endereços e contatos ficam ocultos até assinatura de contrato
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-blue-50 border border-blue-200">
              <Zap className="h-12 w-12 text-voltspot-blue mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">IA Monitora 24/7</h3>
              <p className="text-gray-600">
                Sistema detecta tentativas de burla automaticamente
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-red-50 border border-red-200">
              <AlertTriangle className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Multas Severas</h3>
              <p className="text-gray-600">
                R$ 10.000 + banimento permanente por violação
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-16 bg-gray-50" id="como-funciona">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Como Funciona</h2>
            <p className="text-xl text-gray-600">Processo simples e seguro em 4 etapas</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { step: '1', title: 'Cadastro', desc: 'Estabelecimento se cadastra gratuitamente' },
              { step: '2', title: 'Análise IA', desc: 'Edison analisa potencial automaticamente' },
              { step: '3', title: 'Conexão', desc: 'Investidores veem oportunidades pré-analisadas' },
              { step: '4', title: 'Negociação', desc: 'Chat interno protegido até contrato' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-voltspot-blue text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preços */}
      <section className="py-16 bg-white" id="precos">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Preços Transparentes</h2>
            <p className="text-xl text-gray-600">Modelo de receita que protege todos</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Estabelecimentos */}
            <div className="p-8 rounded-xl border-2 border-voltspot-green bg-green-50">
              <div className="text-center">
                <Users className="h-12 w-12 text-voltspot-green mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Estabelecimentos</h3>
                <div className="text-4xl font-bold text-voltspot-green mb-4">GRÁTIS</div>
                <p className="text-gray-600 mb-6">Sempre gratuito, para sempre</p>
                
                <ul className="text-left space-y-3 mb-6">
                  {[
                    'Cadastro ilimitado',
                    'Análise IA automática',
                    'Receber propostas',
                    'Chat interno protegido',
                    'Suporte prioritário'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-voltspot-green mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-voltspot-green text-white py-3 rounded-lg font-bold hover:bg-green-700 transition-colors">
                  CADASTRAR GRÁTIS
                </button>
              </div>
            </div>

            {/* Investidores */}
            <div className="p-8 rounded-xl border-2 border-voltspot-blue bg-blue-50">
              <div className="text-center">
                <TrendingUp className="h-12 w-12 text-voltspot-blue mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Investidores</h3>
                <div className="text-4xl font-bold text-voltspot-blue mb-2">R$ 297</div>
                <div className="text-gray-600 mb-4">por mês + 3% comissão</div>
                
                <ul className="text-left space-y-3 mb-6">
                  {[
                    'Acesso a todas oportunidades',
                    'Análises IA detalhadas',
                    'Chat interno ilimitado',
                    'Dados liberados pós-contrato',
                    'Suporte VIP 24/7'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-voltspot-blue mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-voltspot-blue text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors">
                  ASSINAR AGORA
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-r from-voltspot-blue to-voltspot-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Pronto para Começar?</h2>
          <p className="text-xl mb-8 opacity-90">
            Junte-se à revolução dos eletropostos com proteção total
          </p>
          <button className="bg-white text-voltspot-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
            COMEÇAR AGORA - É GRÁTIS
          </button>
        </div>
      </section>
    </div>
  )
}
