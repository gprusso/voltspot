'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { 
  Zap, 
  Shield, 
  TrendingUp, 
  Users, 
  Lock, 
  DollarSign, 
  CheckCircle, 
  AlertTriangle,
  BarChart3,
  MessageSquare,
  Eye,
  Star,
  ArrowRight,
  Play
} from 'lucide-react'

export default function LandingPage() {
  const [userType, setUserType] = useState<'estabelecimento' | 'investidor' | null>(null)
  const [showDemo, setShowDemo] = useState(false)

  return (
    <div className="min-h-screen">
      {/* Hero Section Melhorada */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-20 h-20 bg-voltspot-blue rounded-full"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-voltspot-green rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-voltspot-orange rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-voltspot-blue rounded-full text-sm font-medium mb-6 animate-fade-in">
              <Zap className="h-4 w-4 mr-2" />
              Plataforma Anti-Burla com IA
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Conecte. Analise. 
              <span className="text-gradient"> Invista</span>
              <br />
              <span className="text-voltspot-blue">em Eletropostos</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Primeira plataforma do Brasil com <strong className="text-voltspot-green">proteção total de dados</strong> e 
              <strong className="text-voltspot-blue"> análise de IA Edison</strong> que conecta estabelecimentos a investidores
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-12 text-center">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-voltspot-blue">R$ 10K</span>
                <span className="text-sm text-gray-600">Multa Anti-Burla</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-voltspot-green">100%</span>
                <span className="text-sm text-gray-600">Dados Protegidos</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-voltspot-orange">24/7</span>
                <span className="text-sm text-gray-600">IA Monitora</span>
              </div>
            </div>
            
            {/* Seletor de Tipo de Usuário Melhorado */}
            <div className="flex flex-col lg:flex-row gap-6 justify-center mb-8 max-w-4xl mx-auto">
              <div
                onClick={() => setUserType('estabelecimento')}
                className={`cursor-pointer p-8 rounded-2xl border-2 transition-all duration-300 hover-lift ${
                  userType === 'estabelecimento' 
                    ? 'border-voltspot-green bg-green-50 shadow-xl' 
                    : 'border-gray-200 hover:border-voltspot-green hover:shadow-lg bg-white'
                }`}
              >
                <Users className="h-12 w-12 text-voltspot-green mx-auto mb-4" />
                <h3 className="font-bold text-xl mb-2">SOU ESTABELECIMENTO</h3>
                <p className="text-gray-600 mb-4">Quero receber investimentos para eletropostos</p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-voltspot-green mr-2" />
                    Análise IA gratuita
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-voltspot-green mr-2" />
                    Dados protegidos
                  </div>
                </div>
                <span className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-bold">
                  SEMPRE GRÁTIS
                </span>
              </div>

              <div
                onClick={() => setUserType('investidor')}
                className={`cursor-pointer p-8 rounded-2xl border-2 transition-all duration-300 hover-lift ${
                  userType === 'investidor' 
                    ? 'border-voltspot-blue bg-blue-50 shadow-xl' 
                    : 'border-gray-200 hover:border-voltspot-blue hover:shadow-lg bg-white'
                }`}
              >
                <TrendingUp className="h-12 w-12 text-voltspot-blue mx-auto mb-4" />
                <h3 className="font-bold text-xl mb-2">SOU INVESTIDOR</h3>
                <p className="text-gray-600 mb-4">Quero investir em eletropostos analisados</p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-voltspot-blue mr-2" />
                    Oportunidades pré-analisadas
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-voltspot-blue mr-2" />
                    ROI calculado pela IA
                  </div>
                </div>
                <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-bold">
                  R$ 297/MÊS
                </span>
              </div>
            </div>

            {/* Botões de Ação Melhorados */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="text-lg px-8 py-4 animate-pulse-glow">
                <Zap className="h-5 w-5 mr-2" />
                COMEÇAR AGORA
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-4"
                onClick={() => setShowDemo(true)}
              >
                <Play className="h-5 w-5 mr-2" />
                VER DEMONSTRAÇÃO
              </Button>
            </div>

            {/* Social Proof */}
            <div className="mt-12 flex items-center justify-center space-x-2 text-sm text-gray-600">
              <div className="flex -space-x-2">
                {[1,2,3,4,5].map(i => (
                  <div key={i} className="w-8 h-8 bg-gradient-to-r from-voltspot-blue to-voltspot-green rounded-full border-2 border-white"></div>
                ))}
              </div>
              <span>+50 estabelecimentos já cadastrados</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sistema de Proteção Melhorado */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-voltspot-green rounded-full text-sm font-medium mb-6">
              <Shield className="h-4 w-4 mr-2" />
              Tecnologia Patenteada
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Sistema de <span className="text-voltspot-green">Proteção Total</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tecnologia anti-burla que <strong>garante sua receita</strong> e protege dados sensíveis com multas severas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            <div className="card card-hover text-center bg-green-50 border-green-200">
              <Lock className="h-16 w-16 text-voltspot-green mx-auto mb-6" />
              <h3 className="font-bold text-xl mb-4">Dados Ocultos</h3>
              <p className="text-gray-600 mb-4">
                Endereços, contatos e informações sensíveis ficam ocultos até assinatura de contrato
              </p>
              <div className="flex items-center justify-center text-sm text-voltspot-green font-medium">
                <Eye className="h-4 w-4 mr-1" />
                Proteção 100%
              </div>
            </div>

            <div className="card card-hover text-center bg-blue-50 border-blue-200">
              <Zap className="h-16 w-16 text-voltspot-blue mx-auto mb-6" />
              <h3 className="font-bold text-xl mb-4">IA Edison Monitora</h3>
              <p className="text-gray-600 mb-4">
                Sistema detecta tentativas de burla automaticamente e bloqueia acesso instantaneamente
              </p>
              <div className="flex items-center justify-center text-sm text-voltspot-blue font-medium">
                <BarChart3 className="h-4 w-4 mr-1" />
                Monitoramento 24/7
              </div>
            </div>

            <div className="card card-hover text-center bg-red-50 border-red-200">
              <AlertTriangle className="h-16 w-16 text-red-600 mx-auto mb-6" />
              <h3 className="font-bold text-xl mb-4">Multas Severas</h3>
              <p className="text-gray-600 mb-4">
                R$ 10.000 + banimento permanente por tentativa de violação do sistema
              </p>
              <div className="flex items-center justify-center text-sm text-red-600 font-medium">
                <DollarSign className="h-4 w-4 mr-1" />
                Penalidade Máxima
              </div>
            </div>
          </div>

          {/* Garantia */}
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-voltspot-blue to-voltspot-green text-white rounded-full font-bold">
              <Star className="h-5 w-5 mr-2" />
              GARANTIA: Sistema Impossível de Burlar
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona Melhorado */}
      <section className="py-20 bg-gray-50" id="como-funciona">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Como Funciona</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Processo simples, seguro e automatizado em 4 etapas
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              { 
                step: '1', 
                title: 'Cadastro Gratuito', 
                desc: 'Estabelecimento se cadastra em 2 minutos',
                icon: Users,
                color: 'voltspot-green'
              },
              { 
                step: '2', 
                title: 'Análise IA Edison', 
                desc: 'IA analisa potencial de ROI automaticamente',
                icon: BarChart3,
                color: 'voltspot-blue'
              },
              { 
                step: '3', 
                title: 'Conexão Segura', 
                desc: 'Investidores veem oportunidades pré-analisadas',
                icon: MessageSquare,
                color: 'voltspot-orange'
              },
              { 
                step: '4', 
                title: 'Negociação Protegida', 
                desc: 'Chat interno protegido até assinatura',
                icon: Shield,
                color: 'voltspot-green'
              }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className={`w-20 h-20 bg-${item.color} text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {item.step}
                </div>
                <div className={`w-12 h-12 bg-${item.color} bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <item.icon className={`h-6 w-6 text-${item.color}`} />
                </div>
                <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
                {index < 3 && (
                  <ArrowRight className="h-6 w-6 text-gray-400 mx-auto mt-4 hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final Melhorado */}
      <section className="py-20 bg-gradient-to-r from-voltspot-blue via-blue-600 to-voltspot-green text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronto para a Revolução dos Eletropostos?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Junte-se à primeira plataforma do Brasil com proteção total de dados e análise de IA
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              size="lg" 
              className="bg-white text-voltspot-blue hover:bg-gray-100 text-lg px-8 py-4"
            >
              <Zap className="h-5 w-5 mr-2" />
              COMEÇAR GRÁTIS AGORA
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-voltspot-blue text-lg px-8 py-4"
            >
              FALAR COM ESPECIALISTA
            </Button>
          </div>

          <p className="text-sm opacity-75">
            ✅ Sem compromisso • ✅ Cadastro em 2 minutos • ✅ Suporte 24/7
          </p>
        </div>
      </section>
    </div>
  )
}
