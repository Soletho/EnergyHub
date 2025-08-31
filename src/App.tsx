import React from 'react';
import { Zap, Globe, Shield, Users, Building2, GraduationCap, Heart, Car, Pill, MapPin, Award, Leaf, Clock, TrendingUp, Database, Cpu, Network, Battery, Target, CheckCircle, Calendar, FileText, Lock } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <Zap className="w-8 h-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">Pernambuco Energy Hub</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#geopolitics" className="text-gray-700 hover:text-blue-600 transition-colors">Geopolítica</a>
              <a href="#academy" className="text-gray-700 hover:text-blue-600 transition-colors">Academy & Business</a>
              <a href="#energy-ready" className="text-gray-700 hover:text-blue-600 transition-colors">Energy Ready</a>
              <a href="#ecosystem" className="text-gray-700 hover:text-blue-600 transition-colors">Ecossistema</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            PERNAMBUCO: <span className="text-blue-600">O Polo Sul para Dados Globais</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Posição geopolítica estratégica, compromisso institucional do governo estadual e disponibilidade 
            energética garantida fazem de Pernambuco o destino ideal para infraestrutura digital crítica 
            em um cenário de esgotamento nacional de escoamento energético.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg">
              Receber Resumo Executivo
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all">
              Assinar NDA para Dataroom
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Descubra os números que posicionam Pernambuco como destino irresistível para seu datacenter:
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">3 GW</div>
              <div className="text-gray-600">Capacidade Energética</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">6.700</div>
              <div className="text-gray-600">Hectares Disponíveis</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">99,99%</div>
              <div className="text-gray-600">Qualidade Energética Crítica</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">2ms</div>
              <div className="text-gray-600">Latência Regional</div>
            </div>
          </div>
        </div>
      </section>

      {/* Geopolitics Section */}
      <section id="geopolitics" className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4">Vantagem Geopolítica Estratégica</h3>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Enquanto o Brasil enfrenta esgotamento de escoamento energético nacional, 
              Pernambuco emerge como o polo estratégico com disponibilidade garantida e 
              compromisso institucional total.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-red-500 bg-opacity-20 rounded-xl flex items-center justify-center mr-4">
                    <TrendingUp className="w-8 h-8 text-red-400" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-red-400">Esgotamento Nacional</div>
                    <div className="text-gray-300">Escoamento energético limitado no Brasil</div>
                    <div className="text-sm text-gray-400">Oportunidade única para Pernambuco</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-16 h-16 bg-green-500 bg-opacity-20 rounded-xl flex items-center justify-center mr-4">
                    <Globe className="w-8 h-8 text-green-400" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-400">Conectividade Global</div>
                    <div className="text-gray-300">Cabos submarinos diretos EUA/Europa</div>
                    <div className="text-sm text-gray-400">Latência 120ms para Virgínia</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-16 h-16 bg-blue-500 bg-opacity-20 rounded-xl flex items-center justify-center mr-4">
                    <Shield className="w-8 h-8 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-400">Compromisso Institucional</div>
                    <div className="text-gray-300">Governo do Estado totalmente alinhado</div>
                    <div className="text-sm text-gray-400">Suporte político e regulatório garantido</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-xl">
              <h4 className="text-2xl font-bold mb-6 text-center">Posição Estratégica</h4>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold">2ms</div>
                  <div className="text-blue-100 text-sm">Polos PE</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">40ms</div>
                  <div className="text-blue-100 text-sm">São Paulo</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">120ms</div>
                  <div className="text-blue-100 text-sm">EUA</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">140ms</div>
                  <div className="text-blue-100 text-sm">Europa</div>
                </div>
              </div>
              <p className="text-blue-100 text-center">
                O único estado brasileiro com conectividade direta aos mercados globais 
                e disponibilidade energética garantida.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Academy and Business Section */}
      <section id="academy" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Academy & Business: Suporte e Consumo</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              O maior ecossistema de talento tecnológico do Brasil gera suporte operacional 
              especializado e demanda crescente por infraestrutura digital crítica.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl mb-8">
                <div className="flex items-center mb-4">
                  <GraduationCap className="w-10 h-10 mr-4" />
                  <div>
                    <div className="text-3xl font-bold">658</div>
                    <div className="text-blue-100">Estudantes TI / 100k hab</div>
                  </div>
                </div>
                <p className="text-blue-100 mb-4">
                  Líder nacional em formação de talentos tecnológicos
                </p>
                <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                  <h5 className="font-semibold mb-2">Suporte para Datacenters:</h5>
                  <ul className="text-sm space-y-1">
                    <li>• Operação técnica especializada 24x7</li>
                    <li>• Manutenção preventiva e corretiva</li>
                    <li>• Conformidade regulatória local</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <Building2 className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">141 Instituições de Ensino Superior</div>
                    <div className="text-gray-600">6 universidades públicas + 66 técnicas</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">+700 Doutores em TI</div>
                    <div className="text-gray-600">Especialistas para operação crítica</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-500 to-red-500 text-white p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <Building2 className="w-10 h-10 mr-4" />
                <div>
                  <h4 className="text-2xl font-bold">Porto Digital</h4>
                  <p className="text-orange-100">Maior parque tecnológico do Brasil</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold">470+</div>
                  <div className="text-orange-100 text-sm">Empresas</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">21k</div>
                  <div className="text-orange-100 text-sm">Colaboradores</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">R$ 6,2bi</div>
                  <div className="text-orange-100 text-sm">Faturamento</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">+15%</div>
                  <div className="text-orange-100 text-sm">Crescimento/ano</div>
                </div>
              </div>

              <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">Demanda por Datacenters:</h5>
                <ul className="text-sm space-y-1">
                  <li>• Escalabilidade para startups e fintechs</li>
                  <li>• Segurança para P&D crítico</li>
                  <li>• Baixa latência para aplicações</li>
                  <li>• Conectividade para mercados globais</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Polos Demandantes Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Polos Demandantes: O Consumo que Impulsiona</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Os principais setores econômicos de Pernambuco são grandes consumidores de dados, 
              criando um mercado cativo crescente para infraestrutura digital e energia associada.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Medical Hub */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mr-4">
                  <Heart className="w-8 h-8 text-red-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">Polo Médico</h4>
                  <p className="text-gray-600">Maior do Norte-Nordeste</p>
                </div>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Leitos:</span>
                  <span className="font-semibold">8.000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Atendimentos/dia:</span>
                  <span className="font-semibold">20.000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Estabelecimentos:</span>
                  <span className="font-semibold">2.116</span>
                </div>
              </div>

              <div className="border-t pt-4">
                <h5 className="font-semibold text-gray-900 mb-2">Consumo de Infraestrutura Digital:</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Disponibilidade total (99,99%)</li>
                  <li>• Segurança LGPD/HIPAA</li>
                  <li>• Telemedicina e IA diagnóstica</li>
                  <li>• Cirurgias remotas</li>
                </ul>
              </div>
            </div>

            {/* Automotive Hub */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                  <Car className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">Polo Automotivo</h4>
                  <p className="text-gray-600">Stellantis & Mata Norte</p>
                </div>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Veículos produzidos:</span>
                  <span className="font-semibold">2M</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Investidos:</span>
                  <span className="font-semibold">R$ 10bi</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Robôs integrados:</span>
                  <span className="font-semibold">700</span>
                </div>
              </div>

              <div className="border-t pt-4">
                <h5 className="font-semibold text-gray-900 mb-2">Consumo de Infraestrutura Digital:</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Dados em tempo real para robôs</li>
                  <li>• Baixa latência crítica</li>
                  <li>• IA e digital twin</li>
                  <li>• Integração ERP global</li>
                </ul>
              </div>
            </div>

            {/* Pharmaceutical Hub */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                  <Pill className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">Polo Farmacêutico</h4>
                  <p className="text-gray-600">Hub Nacional</p>
                </div>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Investimentos:</span>
                  <span className="font-semibold">R$ 4bi</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Empresas:</span>
                  <span className="font-semibold">Blau, Hemobrás</span>
                </div>
              </div>

              <div className="border-t pt-4">
                <h5 className="font-semibold text-gray-900 mb-2">Consumo de Infraestrutura Digital:</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Rastreabilidade digital total</li>
                  <li>• Monitoramento contínuo</li>
                  <li>• IA para P&D farmacêutico</li>
                  <li>• Conformidade regulatória</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Energy Ready Section - A VENDA CAMUFLADA */}
      <section id="energy-ready" className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4">Energy Ready: Projeto Morada Nova</h3>
            <p className="text-xl text-green-100 max-w-4xl mx-auto">
              Enquanto o Brasil enfrenta limitações de escoamento energético, Pernambuco apresenta 
              o projeto Morada Nova: 180MW de potência solar com outorga garantida, parceiros de 
              classe mundial e cronograma acelerado para operação comercial.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="bg-white bg-opacity-10 p-8 rounded-xl mb-8">
                <div className="flex items-center mb-6">
                  <Battery className="w-12 h-12 mr-4" />
                  <div>
                    <h4 className="text-3xl font-bold">180MW</h4>
                    <p className="text-green-100">Potência Solar Garantida</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-300 mr-3" />
                    <span>Outorga com 50% desconto TUST</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-300 mr-3" />
                    <span>Licenciamento em estágio avançado</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-300 mr-3" />
                    <span>Entrada em operação: Julho/2027</span>
                  </div>
                </div>
              </div>

              <div className="bg-orange-500 bg-opacity-20 p-6 rounded-xl">
                <div className="flex items-center mb-3">
                  <Clock className="w-6 h-6 text-orange-300 mr-3" />
                  <h5 className="font-bold text-orange-100">Janela de Urgência</h5>
                </div>
                <p className="text-orange-100 text-sm">
                  Cronograma acelerado para atender demanda crescente de datacenters. 
                  Project management dedicado para garantir prazos.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white bg-opacity-10 p-6 rounded-xl">
                <h4 className="text-xl font-bold mb-4">Cronograma de Implantação</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-green-100">Licenciamento</span>
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">Em Andamento</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-green-100">Construção</span>
                    <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">Q2 2025</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-green-100">Comissionamento</span>
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">Q1 2027</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-green-100">Operação Comercial</span>
                    <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">Jul 2027</span>
                  </div>
                </div>
              </div>

              <div className="bg-white bg-opacity-10 p-6 rounded-xl">
                <h4 className="text-xl font-bold mb-4">Vantagens Competitivas</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <Target className="w-4 h-4 text-green-300 mr-2" />
                    <span>Licenciamento facilitado (32 vs 156 dias)</span>
                  </div>
                  <div className="flex items-center">
                    <Target className="w-4 h-4 text-green-300 mr-2" />
                    <span>Gestão de projeto dedicada</span>
                  </div>
                  <div className="flex items-center">
                    <Target className="w-4 h-4 text-green-300 mr-2" />
                    <span>Parceiros de classe mundial</span>
                  </div>
                  <div className="flex items-center">
                    <Target className="w-4 h-4 text-green-300 mr-2" />
                    <span>Suporte institucional total</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white bg-opacity-10 p-8 rounded-xl">
            <h4 className="text-2xl font-bold text-center mb-8">Pipeline Energético Estratégico</h4>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-green-300" />
                </div>
                <div className="text-2xl font-bold mb-2">180MW</div>
                <div className="text-green-100">Morada Nova</div>
                <div className="text-xs text-green-200 mt-1">Operação Jul/27</div>
              </div>
              <div className="text-center opacity-60">
                <div className="w-16 h-16 bg-blue-500 bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-blue-300" />
                </div>
                <div className="text-2xl font-bold mb-2">500MW</div>
                <div className="text-blue-100">Fase 2</div>
                <div className="text-xs text-blue-200 mt-1">Pipeline</div>
              </div>
              <div className="text-center opacity-40">
                <div className="w-16 h-16 bg-purple-500 bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-purple-300" />
                </div>
                <div className="text-2xl font-bold mb-2">1GW</div>
                <div className="text-purple-100">Fase 3</div>
                <div className="text-xs text-purple-200 mt-1">Expansão</div>
              </div>
              <div className="text-center opacity-30">
                <div className="w-16 h-16 bg-orange-500 bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-orange-300" />
                </div>
                <div className="text-2xl font-bold mb-2">3GW</div>
                <div className="text-orange-100">Capacidade Total</div>
                <div className="text-xs text-orange-200 mt-1">Visão 2030</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Growth Driver */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Cpu className="w-12 h-12 mr-4" />
                <h3 className="text-3xl font-bold">IA: O Futuro Chegou aos Datacenters</h3>
              </div>
              <p className="text-xl text-purple-100 mb-6">
                A revolução da Inteligência Artificial redefine completamente a demanda por datacenters, 
                criando oportunidades históricas para infraestrutura energética dedicada.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-3">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <span>Crescimento explosivo: +30% ao ano em servidores IA</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-3">
                    <Database className="w-4 h-4" />
                  </div>
                  <span>24% da demanda atual dos datacenters</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-3">
                    <Zap className="w-4 h-4" />
                  </div>
                  <span>50% do crescimento total projetado até 2030</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-10 p-8 rounded-xl">
                <div className="text-6xl font-bold mb-4">+30%</div>
                <div className="text-xl text-purple-100 mb-2">Crescimento Anual</div>
                <div className="text-purple-200 mb-4">Servidores de IA</div>
                <div className="text-sm text-purple-200 italic">
                  Fonte: IEA Energy and AI Report 2025
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Ecosystem Section */}
      <section id="ecosystem" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Ecossistema de Interesses: Parceiros Estratégicos</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Uma articulação única de players estratégicos garante o sucesso do projeto Morada Nova 
              e a viabilidade de longo prazo para datacenters em Pernambuco.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Soletho */}
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold mb-4">Soletho</h4>
              <p className="text-blue-100 mb-4">Desenvolvedora do Projeto Morada Nova</p>
              <ul className="text-sm text-blue-100 space-y-2">
                <li>• Articulação e desenvolvimento</li>
                <li>• Gestão de projeto dedicada</li>
                <li>• Expertise em energia solar</li>
                <li>• Compromisso com prazos</li>
              </ul>
            </div>

            {/* Governo do Estado */}
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold mb-4">Governo do Estado</h4>
              <p className="text-green-100 mb-4">Compromisso Institucional Total</p>
              <ul className="text-sm text-green-100 space-y-2">
                <li>• Suporte político garantido</li>
                <li>• Licenciamento facilitado</li>
                <li>• Incentivos fiscais robustos</li>
                <li>• Visão estratégica de longo prazo</li>
              </ul>
            </div>

            {/* Moura Baterias */}
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Battery className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold mb-4">Moura Baterias</h4>
              <p className="text-orange-100 mb-4">Acordo Operacional BESS</p>
              <ul className="text-sm text-orange-100 space-y-2">
                <li>• Compromisso com sucesso do negócio</li>
                <li>• Equipe dedicada e local</li>
                <li>• Padrão internacional</li>
                <li>• Desenvolvimento conjunto</li>
              </ul>
            </div>

            {/* Atlas Renováveis */}
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Network className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold mb-4">Atlas Renováveis</h4>
              <p className="text-purple-100 mb-4">Parceria Estratégica Solar</p>
              <ul className="text-sm text-purple-100 space-y-2">
                <li>• Construção e operação solar</li>
                <li>• Expertise técnica comprovada</li>
                <li>• Gestão de ativos renováveis</li>
                <li>• Garantia de performance</li>
              </ul>
            </div>

            {/* TechHub Senai */}
            <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold mb-4">TechHub Senai</h4>
              <p className="text-indigo-100 mb-4">Acordo Técnico Especializado</p>
              <ul className="text-sm text-indigo-100 space-y-2">
                <li>• Suporte técnico especializado</li>
                <li>• Capacitação contínua</li>
                <li>• Inovação e desenvolvimento</li>
                <li>• Padrões internacionais</li>
              </ul>
            </div>

            {/* Articulação Completa */}
            <div className="bg-gradient-to-br from-gray-700 to-gray-800 text-white p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold mb-4">Articulação Institucional</h4>
              <p className="text-gray-300 mb-4">Suporte Governamental Completo</p>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>• ADEPE - Agência de Desenvolvimento</li>
                <li>• Ministérios federais alinhados</li>
                <li>• Concessionárias energéticas</li>
                <li>• Órgãos reguladores</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Fiscal Incentives Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Incentivos Fiscais: Vantagem Competitiva Decisiva</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              O pacote de incentivos mais competitivo do Brasil para infraestrutura digital, 
              potencializando o retorno sobre investimento em projetos energéticos associados.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-xl text-center">
              <Award className="w-12 h-12 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">58,85%</div>
              <div className="text-green-100 text-sm">Redução ICMS</div>
              <div className="text-green-100 text-xs mt-2">CAPEX Tecnológico</div>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-xl text-center">
              <Shield className="w-12 h-12 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">75%</div>
              <div className="text-blue-100 text-sm">Redução IRPJ</div>
              <div className="text-blue-100 text-xs mt-2">Incentivo Sudene</div>
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-xl text-center">
              <Leaf className="w-12 h-12 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">50%</div>
              <div className="text-purple-100 text-sm">Desconto TUST</div>
              <div className="text-purple-100 text-xs mt-2">Projeto Morada Nova</div>
            </div>

            <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-xl text-center">
              <Clock className="w-12 h-12 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">32</div>
              <div className="text-orange-100 text-sm">Dias</div>
              <div className="text-orange-100 text-xs mt-2">Licenciamento (era 156)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Environment */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold mb-6">Ambiente de Negócios Ágil: Acelere seu Investimento</h3>
              <p className="text-xl text-gray-300 mb-8">
                Pernambuco revolucionou seus processos para acelerar projetos energéticos e de infraestrutura digital, 
                garantindo que iniciativas como o Morada Nova sejam executadas com máxima eficiência.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-green-500 bg-opacity-20 rounded-xl flex items-center justify-center mr-4">
                    <Clock className="w-8 h-8 text-green-400" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-400">79% mais rápido</div>
                    <div className="text-gray-300">Licenciamento ambiental digitalizado</div>
                    <div className="text-sm text-gray-400">Facilita projetos como Morada Nova</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-16 h-16 bg-blue-500 bg-opacity-20 rounded-xl flex items-center justify-center mr-4">
                    <Leaf className="w-8 h-8 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-400">Selo Verde</div>
                    <div className="text-gray-300">Certificação para projetos sustentáveis</div>
                    <div className="text-sm text-gray-400">Diferencial competitivo global</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 p-8 rounded-xl">
              <h4 className="text-2xl font-bold mb-6 text-center">Project Management Dedicado</h4>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                  <span>Cronograma acelerado para Jul/2027</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                  <span>Gestão de riscos proativa</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                  <span>Equipe local dedicada</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                  <span>Padrões internacionais</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-blue-500 bg-opacity-20 rounded-lg">
                <p className="text-center text-blue-200 font-medium">
                  Garantia de execução dentro do prazo crítico
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Invest Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-6">Por Que Pernambuco e Morada Nova: Sua Próxima Grande Jogada</h3>
            <p className="text-xl text-blue-100 mb-8 max-w-4xl mx-auto">
              A convergência única de vantagem geopolítica, compromisso institucional, 
              ecossistema de parceiros e projeto energético pronto para execução torna 
              esta oportunidade verdadeiramente irresistível.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white bg-opacity-10 p-6 rounded-xl text-center">
              <Globe className="w-12 h-12 mx-auto mb-4" />
              <h4 className="font-bold mb-2">Vantagem Geopolítica</h4>
              <p className="text-sm text-blue-100">
                Único estado com conectividade global direta e disponibilidade energética 
                em cenário de esgotamento nacional
              </p>
            </div>

            <div className="bg-white bg-opacity-10 p-6 rounded-xl text-center">
              <Target className="w-12 h-12 mx-auto mb-4" />
              <h4 className="font-bold mb-2">Projeto Pronto</h4>
              <p className="text-sm text-blue-100">
                180MW com outorga garantida, licenciamento avançado e 
                cronograma para Jul/2027
              </p>
            </div>

            <div className="bg-white bg-opacity-10 p-6 rounded-xl text-center">
              <Users className="w-12 h-12 mx-auto mb-4" />
              <h4 className="font-bold mb-2">Parceiros de Elite</h4>
              <p className="text-sm text-blue-100">
                Moura Baterias, Atlas Renováveis, TechHub Senai e 
                compromisso total do governo estadual
              </p>
            </div>

            <div className="bg-white bg-opacity-10 p-6 rounded-xl text-center">
              <TrendingUp className="w-12 h-12 mx-auto mb-4" />
              <h4 className="font-bold mb-2">Mercado Cativo</h4>
              <p className="text-sm text-blue-100">
                Polos demandantes locais + crescimento IA de +30% ao ano 
                garantem consumo de longo prazo
              </p>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-white bg-opacity-10 p-8 rounded-xl inline-block">
              <h4 className="text-2xl font-bold mb-4">Próximos Passos</h4>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg flex items-center">
                  <FileText className="w-5 h-5 mr-2" />
                  Receber Resumo Executivo
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all flex items-center">
                  <Lock className="w-5 h-5 mr-2" />
                  Assinar NDA para Dataroom
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <Zap className="w-8 h-8 text-blue-400" />
                <h4 className="text-2xl font-bold">Pernambuco Energy Hub</h4>
              </div>
              <p className="text-gray-400 mb-4">
                O Polo Sul para Dados Globais. Projeto Morada Nova: 180MW de energia solar 
                com parceiros estratégicos e cronograma acelerado para Jul/2027.
              </p>
              <div className="text-sm text-gray-500">
                Fonte: IEA Energy and AI Report 2025, DOE 2024
              </div>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Projeto Morada Nova</h5>
              <ul className="space-y-2 text-gray-400">
                <li>180MW Potência Solar</li>
                <li>Outorga com 50% desconto TUST</li>
                <li>Operação Jul/2027</li>
                <li>Parceiros de classe mundial</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Contato</h5>
              <ul className="space-y-2 text-gray-400">
                <li>Soletho - Desenvolvedora</li>
                <li>ADEPE - Governo PE</li>
                <li>Resumo Executivo</li>
                <li>NDA e Dataroom</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Pernambuco Energy Hub. Projeto Morada Nova - Energia garantida para o futuro digital.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;