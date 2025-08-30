import React from 'react';
import { Zap, Globe, Shield, Users, Building2, GraduationCap, Heart, Car, Pill, MapPin, Award, Leaf, Clock, TrendingUp, Database, Cpu, Network, Battery } from 'lucide-react';

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
              <a href="#infrastructure" className="text-gray-700 hover:text-blue-600 transition-colors">Infraestrutura</a>
              <a href="#ecosystem" className="text-gray-700 hover:text-blue-600 transition-colors">Ecossistema</a>
              <a href="#incentives" className="text-gray-700 hover:text-blue-600 transition-colors">Incentivos</a>
              <a href="#partnerships" className="text-gray-700 hover:text-blue-600 transition-colors">Parcerias</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Energia Garantida para <span className="text-blue-600">Big Tech</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Suape oferece 3 GW de capacidade energética renovável, infraestrutura crítica e ecossistema de inovação 
            para datacenters das maiores empresas de tecnologia do mundo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg">
              Explore as Vantagens
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all">
              Fale Conosco
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <div className="text-gray-600">Disponibilidade</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">2ms</div>
              <div className="text-gray-600">Latência Regional</div>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section id="infrastructure" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Infraestrutura de Classe Mundial</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Suape oferece a infraestrutura mais robusta do Brasil para datacenters, com energia renovável, 
              conectividade internacional e segurança máxima.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center mb-4">
                <Battery className="w-8 h-8 text-green-600 mr-3" />
                <h4 className="text-xl font-semibold">Energia Renovável</h4>
              </div>
              <p className="text-gray-600 mb-4">
                Matriz energética 85% renovável com subestação Suape II de 3.000 MW. 
                Operação contínua 24x7x365 com qualidade crítica.
              </p>
              <div className="text-sm text-green-600 font-medium">
                Base load ideal para datacenters
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center mb-4">
                <Network className="w-8 h-8 text-blue-600 mr-3" />
                <h4 className="text-xl font-semibold">Conectividade Global</h4>
              </div>
              <p className="text-gray-600 mb-4">
                Cabos submarinos diretos para EUA e Europa. Latência de 2ms para polos econômicos 
                regionais e 40ms para São Paulo.
              </p>
              <div className="text-sm text-blue-600 font-medium">
                Conectividade internacional direta
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center mb-4">
                <Shield className="w-8 h-8 text-purple-600 mr-3" />
                <h4 className="text-xl font-semibold">Segurança Máxima</h4>
              </div>
              <p className="text-gray-600 mb-4">
                +200 vigilantes, integração com forças policiais, proteção climática 
                com cinturão verde de 8.000 hectares.
              </p>
              <div className="text-sm text-purple-600 font-medium">
                Segurança física e ambiental
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center mb-4">
                <Database className="w-8 h-8 text-indigo-600 mr-3" />
                <h4 className="text-xl font-semibold">Recursos Abundantes</h4>
              </div>
              <p className="text-gray-600 mb-4">
                42 milhões m³/ano de água (expansão para 402 milhões até 2029), 
                acesso a gás natural e biomassa.
              </p>
              <div className="text-sm text-indigo-600 font-medium">
                Recursos essenciais garantidos
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center mb-4">
                <TrendingUp className="w-8 h-8 text-orange-600 mr-3" />
                <h4 className="text-xl font-semibold">Crescimento Acelerado</h4>
              </div>
              <p className="text-gray-600 mb-4">
                Setor de datacenters cresce +15% ao ano, com IA representando 30% 
                do crescimento e 24% da demanda atual.
              </p>
              <div className="text-sm text-orange-600 font-medium">
                Mercado em expansão exponencial
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center mb-4">
                <Leaf className="w-8 h-8 text-green-600 mr-3" />
                <h4 className="text-xl font-semibold">Sustentabilidade</h4>
              </div>
              <p className="text-gray-600 mb-4">
                Datacenters são os maiores compradores de energia renovável (40-60%). 
                Brasil tem uma das matrizes mais limpas do mundo.
              </p>
              <div className="text-sm text-green-600 font-medium">
                ESG e sustentabilidade garantidos
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Ecosystem Section */}
      <section id="ecosystem" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Ecossistema de Inovação e Talento</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recife é a capital brasileira com maior número de estudantes de TI por habitante, 
              criando um ambiente único para datacenters e inovação tecnológica.
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
                <p className="text-blue-100">
                  Líder nacional em formação de talentos tecnológicos
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <Building2 className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">6 Universidades Públicas</div>
                    <div className="text-gray-600">141 instituições de ensino superior</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">+700 Doutores em TI</div>
                    <div className="text-gray-600">Especialistas locais para operação e conformidade</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                    <GraduationCap className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">66 Instituições Técnicas</div>
                    <div className="text-gray-600">16 federais + 50 estaduais</div>
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
                  <div className="text-3xl font-bold">2024</div>
                  <div className="text-orange-100 text-sm">Dados atuais</div>
                </div>
              </div>

              <p className="text-orange-100">
                Startups, fintechs e P&D demandam escalabilidade, segurança e baixa latência - 
                sinergias naturais com datacenters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Synergies Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Sinergias Setoriais Estratégicas</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Os principais setores econômicos de Pernambuco geram demanda natural e crescente 
              por infraestrutura de datacenters, criando um ecossistema integrado único.
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
                <h5 className="font-semibold text-gray-900 mb-2">Demandas por Datacenters:</h5>
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
                  <span className="text-gray-600">Já investidos:</span>
                  <span className="font-semibold">R$ 10bi</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Robôs integrados:</span>
                  <span className="font-semibold">700</span>
                </div>
              </div>

              <div className="border-t pt-4">
                <h5 className="font-semibold text-gray-900 mb-2">Demandas por Datacenters:</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Dados em tempo real</li>
                  <li>• Baixa latência para robôs</li>
                  <li>• IA e digital twin</li>
                  <li>• Integração ERP</li>
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
                  <span className="font-semibold">Blau, Hemobrás, Aché</span>
                </div>
              </div>

              <div className="border-t pt-4">
                <h5 className="font-semibold text-gray-900 mb-2">Demandas por Datacenters:</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Rastreabilidade digital</li>
                  <li>• Monitoramento contínuo</li>
                  <li>• IA para P&D</li>
                  <li>• Conformidade regulatória</li>
                </ul>
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
                <h3 className="text-3xl font-bold">IA: Principal Driver de Crescimento</h3>
              </div>
              <p className="text-xl text-purple-100 mb-6">
                A Inteligência Artificial está transformando a demanda por datacenters, 
                criando oportunidades sem precedentes para infraestrutura energética.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-3">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <span>Crescimento de +30% ao ano em servidores IA</span>
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
                <div className="text-purple-200">Servidores de IA</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fiscal Incentives Section */}
      <section id="incentives" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Incentivos Fiscais Robustos</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pernambuco oferece o pacote de incentivos mais competitivo do Brasil para datacenters, 
              com benefícios federais, estaduais e municipais integrados.
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
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-purple-100 text-sm">Isenção ICMS</div>
              <div className="text-purple-100 text-xs mt-2">Geração Distribuída</div>
            </div>

            <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-xl text-center">
              <Clock className="w-12 h-12 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">32</div>
              <div className="text-orange-100 text-sm">Dias</div>
              <div className="text-orange-100 text-xs mt-2">Licenciamento (era 156)</div>
            </div>
          </div>

          <div className="mt-12 bg-gray-50 p-8 rounded-xl">
            <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">Benefícios Adicionais</h4>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h5 className="font-semibold text-gray-900 mb-4">Incentivos Estaduais:</h5>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Diferimento ICMS para solar/eólica
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Selo Verde para empresas sustentáveis
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Licenciamento ambiental digitalizado
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-4">Incentivos Locais:</h5>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Isenção/redução IPTU
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Isenção/redução ISS
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Reinvestimento de 30% (Sudene)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Environment */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold mb-6">Ambiente de Negócios Ágil</h3>
              <p className="text-xl text-gray-300 mb-8">
                Pernambuco revolucionou seus processos para acelerar a instalação de datacenters, 
                com digitalização completa e redução drástica de prazos.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-green-500 bg-opacity-20 rounded-xl flex items-center justify-center mr-4">
                    <Clock className="w-8 h-8 text-green-400" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-400">79% mais rápido</div>
                    <div className="text-gray-300">Licenciamento ambiental digitalizado</div>
                    <div className="text-sm text-gray-400">De 156 para 32 dias</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-16 h-16 bg-blue-500 bg-opacity-20 rounded-xl flex items-center justify-center mr-4">
                    <Leaf className="w-8 h-8 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-400">Selo Verde</div>
                    <div className="text-gray-300">Certificação para empresas sustentáveis</div>
                    <div className="text-sm text-gray-400">Lei 16.112/2017</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-16 h-16 bg-purple-500 bg-opacity-20 rounded-xl flex items-center justify-center mr-4">
                    <Zap className="w-8 h-8 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-400">R$ 360M</div>
                    <div className="text-gray-300">Investimento em PPP solar</div>
                    <div className="text-sm text-gray-400">Autoprodução governamental</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 p-8 rounded-xl">
              <h4 className="text-2xl font-bold mb-6 text-center">Suporte Institucional Completo</h4>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Building2 className="w-6 h-6 text-blue-400 mr-3" />
                  <span>ADEPE - Articulação com prefeituras e órgãos</span>
                </div>
                <div className="flex items-center">
                  <Globe className="w-6 h-6 text-green-400 mr-3" />
                  <span>Ministérios (Comunicações, MME, MDIC)</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-6 h-6 text-purple-400 mr-3" />
                  <span>Ministério da Defesa e ANATEL</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-6 h-6 text-orange-400 mr-3" />
                  <span>Concessionárias e instituições financeiras</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-blue-500 bg-opacity-20 rounded-lg">
                <p className="text-center text-blue-200 font-medium">
                  Descentralização da infraestrutura digital brasileira
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Location */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Posição Estratégica Global</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pernambuco oferece conectividade privilegiada com baixa latência para mercados 
              estratégicos no Brasil e no mundo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <div className="text-2xl font-bold text-blue-600 mb-2">2ms</div>
              <div className="text-gray-600 font-medium">Polos Econômicos PE</div>
              <div className="text-sm text-gray-500 mt-1">Latência ultra-baixa</div>
            </div>

            <div className="text-center p-6 bg-green-50 rounded-xl">
              <MapPin className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <div className="text-2xl font-bold text-green-600 mb-2">12ms</div>
              <div className="text-gray-600 font-medium">Salvador</div>
              <div className="text-sm text-gray-500 mt-1">Nordeste integrado</div>
            </div>

            <div className="text-center p-6 bg-purple-50 rounded-xl">
              <MapPin className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <div className="text-2xl font-bold text-purple-600 mb-2">40ms</div>
              <div className="text-gray-600 font-medium">São Paulo</div>
              <div className="text-sm text-gray-500 mt-1">Centro financeiro</div>
            </div>

            <div className="text-center p-6 bg-orange-50 rounded-xl">
              <MapPin className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <div className="text-2xl font-bold text-orange-600 mb-2">120ms</div>
              <div className="text-gray-600 font-medium">EUA (Virgínia)</div>
              <div className="text-sm text-gray-500 mt-1">Mercado global</div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Partnerships */}
      <section id="partnerships" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Parcerias Estratégicas</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Articulação institucional completa para garantir o sucesso dos investimentos 
              em infraestrutura digital crítica.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Governo Federal</h4>
              <ul className="text-gray-600 space-y-2">
                <li>Ministério das Comunicações</li>
                <li>Ministério de Minas e Energia</li>
                <li>Ministério da Defesa</li>
                <li>ANATEL</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Estado de Pernambuco</h4>
              <ul className="text-gray-600 space-y-2">
                <li>ADEPE - Agência de Desenvolvimento</li>
                <li>Órgãos Ambientais</li>
                <li>Secretarias Estaduais</li>
                <li>Corpo de Bombeiros</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Setor Privado</h4>
              <ul className="text-gray-600 space-y-2">
                <li>Concessionárias de Energia</li>
                <li>Instituições Financeiras</li>
                <li>Prefeituras Municipais</li>
                <li>Empresas de Telecomunicações</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl text-center">
            <h4 className="text-2xl font-bold mb-4">Objetivo Estratégico Nacional</h4>
            <p className="text-xl text-blue-100">
              Descentralização da infraestrutura digital brasileira para questões de 
              <span className="font-bold text-white"> soberania e segurança nacionais</span>
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-4xl font-bold mb-6">Pronto para o Futuro Digital?</h3>
          <p className="text-xl text-blue-100 mb-8">
            Pernambuco oferece o ecossistema mais completo do Brasil para datacenters: 
            energia renovável abundante, talento especializado, incentivos robustos e 
            conectividade global estratégica.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
              Solicitar Proposta
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all">
              Agendar Visita Técnica
            </button>
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
                Energia garantida, ecossistema de inovação e incentivos robustos para 
                datacenters das Big Techs em Suape.
              </p>
              <div className="text-sm text-gray-500">
                Fonte: IEA Energy and AI Report 2025, DOE 2024
              </div>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Infraestrutura</h5>
              <ul className="space-y-2 text-gray-400">
                <li>Energia Renovável</li>
                <li>Conectividade Global</li>
                <li>Segurança Máxima</li>
                <li>Recursos Abundantes</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Contato</h5>
              <ul className="space-y-2 text-gray-400">
                <li>ADEPE</li>
                <li>Governo de Pernambuco</li>
                <li>Complexo de Suape</li>
                <li>Porto Digital</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Pernambuco Energy Hub. Estratégia de futuro para datacenters.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;