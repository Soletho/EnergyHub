import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  Zap, 
  Globe, 
  TrendingUp, 
  Users, 
  Clock,
  ArrowRight,
  Building2,
  Cpu,
  Network,
  Target,
  CheckCircle2,
  Battery,
  Sun,
  Wind,
  Shield,
  Award,
  FileText,
  GraduationCap,
  Stethoscope,
  Car,
  Pill,
  Brain,
  Server,
  DollarSign,
  Leaf,
  Timer
} from 'lucide-react';

interface BigTechCompany {
  name: string;
  status: 'interested' | 'evaluating' | 'committed' | 'confidential';
  lastUpdate: string;
  accessLevel: 'public' | 'restricted' | 'classified';
}

interface EnergyProject {
  name: string;
  location: string;
  capacity: string;
  dataHubPotential: string;
  status: 'planning' | 'development' | 'construction';
  landArea: string;
}

interface EcosystemSector {
  icon: React.ReactNode;
  title: string;
  stats: string;
  description: string;
  synergy: string;
}
function App() {
  const [bigTechStatus, setBigTechStatus] = useState<BigTechCompany[]>([
    { name: 'Microsoft', status: 'evaluating', lastUpdate: '2 dias', accessLevel: 'restricted' },
    { name: 'Google', status: 'confidential', lastUpdate: 'Classificado', accessLevel: 'classified' },
    { name: 'Amazon', status: 'evaluating', lastUpdate: '3 dias', accessLevel: 'restricted' },
    { name: 'Meta', status: 'interested', lastUpdate: '5 dias', accessLevel: 'public' },
    { name: 'Oracle', status: 'committed', lastUpdate: '1 dia', accessLevel: 'public' },
  ]);

  const [energyProjects, setEnergyProjects] = useState<EnergyProject[]>([
    { 
      name: 'Suape Solar Complex', 
      location: 'Suape Industrial Port', 
      capacity: '200MW', 
      dataHubPotential: '50MW dedicados',
      status: 'development',
      landArea: '500 hectares'
    },
    { 
      name: 'Atlântico Wind Farm', 
      location: 'Litoral Sul PE', 
      capacity: '150MW', 
      dataHubPotential: '40MW dedicados',
      status: 'construction',
      landArea: '300 hectares'
    }
  ]);

  const ecosystemSectors: EcosystemSector[] = [
    {
      icon: <GraduationCap className="w-12 h-12" />,
      title: "POLO UNIVERSITÁRIO",
      stats: "658 estudantes TI/100k hab • 700+ Doutores",
      description: "Capital brasileira líder em formação de TI com 6 universidades públicas e 141 instituições de ensino superior.",
      synergy: "Especialistas locais garantem disponibilidade e conformidade dos datacenters"
    },
    {
      icon: <Brain className="w-12 h-12" />,
      title: "PORTO DIGITAL",
      stats: "470+ empresas • R$ 6,2 bi faturamento • 21k colaboradores",
      description: "Maior parque tecnológico do Brasil em faturamento por m², atuando em TIC, IoT e manufatura digital.",
      synergy: "Startups e fintechs demandam escalabilidade, segurança e baixa latência"
    },
    {
      icon: <Stethoscope className="w-12 h-12" />,
      title: "POLO MÉDICO",
      stats: "8k leitos • 20k atendimentos/dia • 2º maior do Brasil",
      description: "Maior polo médico do Norte-Nordeste com 59 serviços especializados e 2.116 estabelecimentos.",
      synergy: "Telemedicina, IA em diagnósticos e cirurgias remotas exigem disponibilidade total"
    },
    {
      icon: <Car className="w-12 h-12" />,
      title: "POLO AUTOMOTIVO",
      stats: "2M veículos produzidos • R$ 23 bi investidos • 700 robôs",
      description: "Stellantis e ecossistema automotivo com centro de P&D e automação avançada na Mata Norte.",
      synergy: "Indústrias 4.0 geram grandes volumes de dados em tempo real com baixa latência"
    }
  ];
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const statusColors = {
    interested: 'text-black bg-gray-200',
    evaluating: 'text-black bg-white border border-black',
    committed: 'text-white bg-black',
    confidential: 'text-white bg-gray-800'
  };

  const accessLevelColors = {
    public: 'text-green-600',
    restricted: 'text-yellow-600',
    classified: 'text-red-600'
  };

  const advantages = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "ENERGIA GARANTIDA",
      description: "200MW disponíveis imediatamente, expansível para 500MW. Base load ideal com crescimento +15% ao ano"
    },
    {
      icon: <Battery className="w-8 h-8" />,
      title: "BESS TECHNOLOGY",
      description: "Parceria Moura Baterias: sistema de armazenamento desenvolvido nacionalmente"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "CONECTIVIDADE GLOBAL",
      description: "Cabo submarino 400GB/s conectando diretamente EUA-Europa via Fortaleza"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "SUAPE STRATEGIC PORT",
      description: "Infraestrutura portuária consolidada com acesso logístico internacional"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section */}

          {/* Latency Details */}
          <div className="mt-12 bg-gray-50 p-8 border border-black/20">
            <h3 className="text-2xl font-bold mb-6 text-center">LATÊNCIA ESTRATÉGICA</h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-green-600">2ms</div>
                <div className="text-sm">Polos econômicos PE</div>
              </div>
              <div>
                <div className="text-2xl font-bold">40ms</div>
                <div className="text-sm">Recife ↔ São Paulo</div>
              </div>
              <div>
                <div className="text-2xl font-bold">120ms</div>
                <div className="text-sm">Recife ↔ EUA (Virgínia)</div>
              </div>
              <div>
                <div className="text-2xl font-bold">12ms</div>
                <div className="text-sm">Recife ↔ Salvador</div>
              </div>
            </div>
          </div>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Industrial Infrastructure"
            className="w-full h-full object-cover opacity-30"
            style={{ filter: 'grayscale(100%) contrast(1.5) brightness(0.8)' }}
          />
        </div>
        <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
          <div className="mb-8">
            <div className="inline-block border border-black px-4 py-2 text-sm tracking-widest mb-6">
              LIVE: {currentTime.toLocaleTimeString('pt-BR')} | RECIFE TIME
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight leading-none">
              PERNAMBUCO
              <br />
              <span className="text-4xl md:text-6xl font-light">ENERGY HUB</span>
            </h1>
            <div className="w-32 h-px bg-black mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed">
              A janela de oportunidade que as Big Techs estavam esperando.
              <br />
              <strong>Energia garantida. Conectividade global. Infraestrutura pronta.</strong>
            </p>
          </div>
          
          <div className="flex justify-center gap-8 text-center">
            <div>
              <div className="text-3xl font-bold">200MW</div>
              <div className="text-sm">Energia Disponível</div>
            </div>
            <div>
              <div className="text-3xl font-bold">95%</div>
              <div className="text-sm">Matriz Renovável</div>
            </div>
            <div>
              <div className="text-3xl font-bold">180ms</div>
              <div className="text-sm">Latência Miami</div>
            </div>
          </div>
        </div>
      </section>

      {/* Government Commitment Section */}
      <section className="py-20 border-t border-black/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              COMPROMISSO DO GOVERNO DE PERNAMBUCO
              <div className="w-24 h-px bg-black mx-auto mt-4"></div>
            </h2>
            <p className="text-xl max-w-4xl mx-auto leading-relaxed">
              O Estado de Pernambuco assume o compromisso público de transformar a região em 
              <strong> o principal hub de datacenters do Brasil</strong>, com investimentos diretos 
              em infraestrutura e parcerias estratégicas.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 border border-black/20">
              <Shield className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">GARANTIA GOVERNAMENTAL</h3>
              <p className="text-sm">Estabilidade jurídica e fiscal com incentivos de longo prazo</p>
            </div>
            <div className="text-center p-8 border border-black/20">
              <Network className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">CABO SUBMARINO</h3>
              <p className="text-sm">Investimento de R$ 2 bilhões em conectividade internacional</p>
            </div>
            <div className="text-center p-8 border border-black/20">
              <Award className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">MARCO REGULATÓRIO</h3>
              <p className="text-sm">Legislação específica para facilitar instalação de datacenters</p>
            </div>
          </div>

          {/* Fiscal Incentives */}
          <div className="bg-gray-50 p-12 border border-black/20 mb-16">
            <div className="text-center mb-12">
              <DollarSign className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-4">INCENTIVOS FISCAIS ESTRATÉGICOS</h3>
              <p className="text-lg text-gray-700">
                Pacote completo de benefícios fiscais para maximizar o retorno sobre investimento
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 border border-black/20 text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">58,85%</div>
                <div className="text-sm font-bold mb-2">REDUÇÃO ICMS</div>
                <div className="text-xs text-gray-600">Sobre CAPEX tecnológico (Lei 15.946/16)</div>
              </div>
              <div className="bg-white p-6 border border-black/20 text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">75%</div>
                <div className="text-sm font-bold mb-2">REDUÇÃO IRPJ</div>
                <div className="text-xs text-gray-600">Sudene + reinvestimento 30%</div>
              </div>
              <div className="bg-white p-6 border border-black/20 text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">100%</div>
                <div className="text-sm font-bold mb-2">ISENÇÃO ICMS</div>
                <div className="text-xs text-gray-600">Geração distribuída renovável</div>
              </div>
              <div className="bg-white p-6 border border-black/20 text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">DIFERIMENTO</div>
                <div className="text-sm font-bold mb-2">ICMS SOLAR/EÓLICA</div>
                <div className="text-xs text-gray-600">Decreto 44.650/17</div>
              </div>
            </div>
          </div>

          {/* Business Environment */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 border border-black/20">
              <Timer className="w-12 h-12 mb-4 text-blue-600" />
              <h3 className="text-2xl font-bold mb-4">AMBIENTE DE NEGÓCIOS ÁGIL</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Licenciamento Ambiental:</span>
                  <span className="font-bold text-green-600">156 → 32 dias</span>
                </div>
                <div className="text-xs text-gray-600">
                  Processo digitalizado com redução de 80% no tempo
                </div>
                <div className="border-t pt-4">
                  <div className="text-sm font-bold mb-2">Incentivos Locais:</div>
                  <div className="text-xs text-gray-600">
                    • Isenção/redução IPTU<br/>
                    • Isenção/redução ISS<br/>
                    • Apoio ADEPE integrado
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 border border-black/20">
              <Leaf className="w-12 h-12 mb-4 text-green-600" />
              <h3 className="text-2xl font-bold mb-4">SUSTENTABILIDADE CERTIFICADA</h3>
              <div className="space-y-4">
                <div className="text-sm">
                  <strong>Selo Verde (Lei 16.112/2017)</strong><br/>
                  Certificação para empresas sustentáveis
                </div>
                <div className="text-sm">
                  <strong>PPP Solar Governamental</strong><br/>
                  R$ 360 milhões em autoprodução
                </div>
                <div className="border-t pt-4">
                  <div className="text-xs text-gray-600">
                    Datacenters são os maiores compradores corporativos 
                    de energia renovável (40-60% do mercado global)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diplomatic Competition Dashboard */}
      <section className="py-20 border-t border-black/20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-wide mb-4 text-gray-600">
              ACESSO RESTRITO • INFORMAÇÕES DIPLOMÁTICAS • ATUALIZAÇÃO CONTÍNUA
            </p>
            <h2 className="text-4xl font-bold mb-6">
              INTERESSE DAS BIG TECHS
              <div className="w-24 h-px bg-black mx-auto mt-4"></div>
            </h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-700">
              Dashboard curado com informações de acesso controlado. Nem todas as empresas 
              têm conhecimento público sobre este projeto estratégico.
            </p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-6 mb-12">
            {bigTechStatus.map((company, index) => (
              <div key={index} className="bg-white border border-black/20 p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="text-2xl font-bold mb-2">{company.name}</div>
                <div className={`inline-block px-3 py-1 text-xs uppercase tracking-wide rounded mb-2 ${statusColors[company.status]}`}>
                  {company.status === 'confidential' ? 'CONFIDENCIAL' : company.status}
                </div>
                <div className="text-xs mb-2">{company.lastUpdate}</div>
                <div className={`text-xs uppercase ${accessLevelColors[company.accessLevel]}`}>
                  {company.accessLevel}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="text-sm text-gray-600 mb-4">
              Transparência controlada • Blockchain verification • Diplomatic protocols
            </div>
            <button className="border border-black px-8 py-3 hover:bg-black hover:text-white transition-all duration-300 flex items-center gap-2 mx-auto">
              ACESSAR DASHBOARD COMPLETO
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Energy Projects Section */}
      <section className="py-20 border-t border-black/20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">
            PROJETOS DA VEZ
            <div className="w-24 h-px bg-black mx-auto mt-4"></div>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {energyProjects.map((project, index) => (
              <div key={index} className="border border-black/20 p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold">{project.name}</h3>
                  <span className={`px-3 py-1 text-xs uppercase ${
                    project.status === 'construction' ? 'bg-green-100 text-green-800' :
                    project.status === 'development' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="font-medium">Localização:</span>
                    <span>{project.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Capacidade Total:</span>
                    <span>{project.capacity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Data Hub Dedicado:</span>
                    <span>{project.dataHubPotential}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Área Disponível:</span>
                    <span>{project.landArea}</span>
                  </div>
                </div>
                
                <button className="w-full mt-6 border border-black py-2 hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                  <FileText className="w-4 h-4" />
                  ABRIR DATA ROOM
                </button>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg mb-6">
              <strong>Pipeline energético:</strong> 500MW em desenvolvimento para datacenters
            </p>
            <button className="border border-black px-8 py-3 hover:bg-black hover:text-white transition-all duration-300">
              VER TODOS OS PROJETOS
            </button>
          </div>
        </div>
      </section>

      {/* Strategic Partnerships */}
      <section className="py-20 border-t border-black/20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">
            PARCERIAS ESTRATÉGICAS
            <div className="w-24 h-px bg-black mx-auto mt-4"></div>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border border-black/20">
              <Sun className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-4">SOLETO</h3>
              <p className="text-sm mb-4">
                Parceiro principal para desenvolvimento e operação dos complexos solares 
                dedicados aos datacenters.
              </p>
              <div className="text-xs text-gray-600">
                • Contratos de longo prazo<br/>
                • PPA em dólar disponível<br/>
                • Expertise em grandes projetos
              </div>
            </div>
            
            <div className="bg-white p-8 border border-black/20">
              <Battery className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-4">MOURA BATERIAS</h3>
              <p className="text-sm mb-4">
                Tecnologia BESS (Battery Energy Storage System) desenvolvida nacionalmente 
                para garantir estabilidade energética.
              </p>
              <div className="text-xs text-gray-600">
                • Tecnologia 100% nacional<br/>
                • Engenharia de altíssimo nível<br/>
                • Suporte técnico local
              </div>
            </div>
            
            <div className="bg-white p-8 border border-black/20">
              <Wind className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-4">ATLAS ENERGIAS</h3>
              <p className="text-sm mb-4">
                Construtora e operadora de plantas renováveis, especializada em 
                transmissão e PPAs em dólar.
              </p>
              <div className="text-xs text-gray-600">
                • Operação e transmissão<br/>
                • Contratos em moeda forte<br/>
                • Experiência internacional
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Ecosystem */}
      <section className="py-20 border-t border-black/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              ECOSSISTEMA DE INOVAÇÃO E TALENTO
              <div className="w-24 h-px bg-black mx-auto mt-4"></div>
            </h2>
            <p className="text-xl max-w-4xl mx-auto leading-relaxed">
              <strong>Recife é a capital brasileira com maior número de estudantes de TI por habitante:</strong> 
              658 por 100 mil habitantes. Um ecossistema único que garante disponibilidade de especialistas 
              e conformidade operacional para datacenters.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-gray-50 p-8 border border-black/20">
              <GraduationCap className="w-12 h-12 mb-6" />
              <h3 className="text-2xl font-bold mb-6">POLO UNIVERSITÁRIO</h3>
              <div className="grid grid-cols-2 gap-6 text-center mb-6">
                <div>
                  <div className="text-3xl font-bold">6</div>
                  <div className="text-sm">Universidades Públicas</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">141</div>
                  <div className="text-sm">Instituições de Ensino Superior</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">16</div>
                  <div className="text-sm">Instituições Técnicas Federais</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">+700</div>
                  <div className="text-sm">Doutores em TI</div>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Especialistas locais garantem disponibilidade e conformidade. 
                Hubs acadêmicos estimulam inovação e demanda por datacenters.
              </p>
            </div>

            <div className="bg-gray-50 p-8 border border-black/20">
              <Building2 className="w-12 h-12 mb-6" />
              <h3 className="text-2xl font-bold mb-6">PORTO DIGITAL</h3>
              <div className="grid grid-cols-2 gap-6 text-center mb-6">
                <div>
                  <div className="text-3xl font-bold">+470</div>
                  <div className="text-sm">Empresas</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">21K</div>
                  <div className="text-sm">Colaboradores</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">R$ 6,2bi</div>
                  <div className="text-sm">Faturamento 2024</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">TIC</div>
                  <div className="text-sm">IoT • Economia Criativa</div>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Startups e fintechs demandam escalabilidade. P&D exige alta conectividade. 
                Proximidade reduz latência e custos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Sectors Synergies */}
      <section className="py-20 border-t border-black/20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              SINERGIAS SETORIAIS ESTRATÉGICAS
              <div className="w-24 h-px bg-black mx-auto mt-4"></div>
            </h2>
            <p className="text-xl max-w-4xl mx-auto leading-relaxed">
              Os principais setores econômicos de Pernambuco geram demanda natural e crescente 
              por infraestrutura de datacenters, criando um ecossistema integrado e sustentável.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 border border-black/20">
              <Stethoscope className="w-12 h-12 mb-4 text-red-600" />
              <h3 className="text-2xl font-bold mb-4">POLO MÉDICO</h3>
              <div className="text-sm mb-4 space-y-2">
                <div><strong>Maior do Norte-Nordeste</strong></div>
                <div>• 8 mil leitos</div>
                <div>• 20 mil atendimentos/dia</div>
                <div>• 2.116 estabelecimentos</div>
              </div>
              <div className="text-xs text-gray-600 border-t pt-4">
                <strong>Demanda por Datacenters:</strong><br/>
                • Disponibilidade total (99,99%)<br/>
                • Segurança LGPD/HIPAA<br/>
                • Telemedicina e IA médica<br/>
                • Cirurgias remotas
              </div>
            </div>

            <div className="bg-white p-8 border border-black/20">
              <Car className="w-12 h-12 mb-4 text-blue-600" />
              <h3 className="text-2xl font-bold mb-4">POLO AUTOMOTIVO</h3>
              <div className="text-sm mb-4 space-y-2">
                <div><strong>Stellantis • Mata Norte</strong></div>
                <div>• 2 milhões de veículos</div>
                <div>• R$ 23 bi investidos/anunciados</div>
                <div>• 700 robôs integrados</div>
              </div>
              <div className="text-xs text-gray-600 border-t pt-4">
                <strong>Demanda por Datacenters:</strong><br/>
                • Grandes volumes em tempo real<br/>
                • Baixa latência para robôs<br/>
                • IA, ERP e digital twin<br/>
                • Automação industrial
              </div>
            </div>

            <div className="bg-white p-8 border border-black/20">
              <Pill className="w-12 h-12 mb-4 text-green-600" />
              <h3 className="text-2xl font-bold mb-4">POLO FARMACÊUTICO</h3>
              <div className="text-sm mb-4 space-y-2">
                <div><strong>R$ 4 bi investidos em PE</strong></div>
                <div>• Blau, Hemobrás, Aché</div>
                <div>• Expansões bilionárias</div>
                <div>• Centro de P&D</div>
              </div>
              <div className="text-xs text-gray-600 border-t pt-4">
                <strong>Demanda por Datacenters:</strong><br/>
                • Rastreabilidade digital<br/>
                • Monitoramento tempo real<br/>
                • IA para P&D<br/>
                • Conformidade regulatória
              </div>
            </div>
          </div>

          <div className="text-center bg-white p-8 border border-black/20">
            <Brain className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">INTELIGÊNCIA ARTIFICIAL - PRINCIPAL DRIVER</h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600">+30%</div>
                <div className="text-sm">Crescimento anual IA</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">24%</div>
                <div className="text-sm">Servidores IA em datacenters</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">50%</div>
                <div className="text-sm">Do crescimento total até 2030</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Advantages Grid */}
      <section className="py-20 border-t border-black/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="group">
                <div className="border border-black/20 p-8 h-full hover:bg-black hover:text-white transition-all duration-500">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    {advantage.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{advantage.title}</h3>
                  <p className="text-sm leading-relaxed opacity-80">{advantage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 border-t border-black/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">
                POSIÇÃO GEOGRÁFICA
                <br />
                ESTRATÉGICA
              </h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Network className="w-6 h-6" />
                  <span>Ponto de encontro entre América do Sul, América do Norte e Europa</span>
                </div>
                <div className="flex items-center gap-4">
                  <Cpu className="w-6 h-6" />
                  <span>Recife: 2ms dos polos econômicos de PE • 40ms de SP • 120ms EUA</span>
                </div>
                <div className="flex items-center gap-4">
                  <Building2 className="w-6 h-6" />
                  <span>Suape: 6.700 hectares disponíveis • 3GW de conexão elétrica</span>
                </div>
                <div className="flex items-center gap-4">
                  <Target className="w-6 h-6" />
                  <span>Acesso direto aos mercados do BRICS e Mercosul</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/159304/construction-site-build-construction-work-159304.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Infrastructure Development"
                className="w-full h-64 object-cover"
                style={{ filter: 'grayscale(100%) contrast(1.5) brightness(0.8)' }}
              />
              <div className="absolute inset-0 border-4 border-black/20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Specs */}
      <section className="py-20 border-t border-black/20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">
            ESPECIFICAÇÕES TÉCNICAS
            <div className="w-24 h-px bg-black mx-auto mt-4"></div>
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-5xl font-bold mb-4">400GB/s</div>
              <div className="text-xl mb-2">Cabo Submarino</div>
              <div className="text-sm text-gray-600">Conexão direta USA-Europa</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-4">200MW</div>
              <div className="text-xl mb-2">Energia Imediata</div>
              <div className="text-sm text-gray-600">Expansível para 500MW</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-4">99.99%</div>
              <div className="text-xl mb-2">SLA Garantido</div>
              <div className="text-sm text-gray-600">Uptime com BESS</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-4">24/7</div>
              <div className="text-xl mb-2">Suporte Local</div>
              <div className="text-sm text-gray-600">Engenharia nacional</div>
            </div>
          </div>

          {/* Energy Profile for Data Centers */}
          <div className="bg-gray-50 p-12 border border-black/20">
            <div className="text-center mb-12">
              <Zap className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-4">PERFIL ENERGÉTICO IDEAL PARA DATACENTERS</h3>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                A demanda energética dos datacenters é perfeitamente alinhada com a oferta 
                de Pernambuco: operação contínua, demanda estável e crescimento acelerado.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">24x7x365</div>
                <div className="text-sm font-bold mb-2">OPERAÇÃO CONTÍNUA</div>
                <div className="text-xs text-gray-600">Base load ideal para energia renovável</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">+15%</div>
                <div className="text-sm font-bold mb-2">CRESCIMENTO ANUAL</div>
                <div className="text-xs text-gray-600">Setor em expansão acelerada</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">99.99%</div>
                <div className="text-sm font-bold mb-2">DISPONIBILIDADE</div>
                <div className="text-xs text-gray-600">Qualidade crítica exigida</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">40-60%</div>
                <div className="text-sm font-bold mb-2">ENERGIA RENOVÁVEL</div>
                <div className="text-xs text-gray-600">Maiores compradores corporativos</div>
              </div>
            </div>
          </div>

          {/* Infraestrutura Suape Detalhada */}
          <div className="bg-gray-50 p-8 border border-black/20">
            <h3 className="text-2xl font-bold mb-6 text-center">INFRAESTRUTURA SUAPE</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
        </div>
      </section>

      {/* Timeline & CTA - Special Black Section */}
      <section className="py-20 border-t border-black/20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">
            JANELA DE OPORTUNIDADE
            <br />
            <span className="text-2xl font-light">30 meses para operação do projeto principal</span>
          </h2>
          
          <div className="space-y-8 mb-12">
            <div className="flex items-center gap-4 justify-center">
              <CheckCircle2 className="w-6 h-6 text-green-400" />
              <span>Q1 2025: Início da construção do projeto de 180MW</span>
            </div>
            <div className="flex items-center gap-4 justify-center">
              <Clock className="w-6 h-6" />
              <span>Q3 2026: Primeiros módulos de 45MW em teste</span>
            </div>
            <div className="flex items-center gap-4 justify-center">
              <TrendingUp className="w-6 h-6" />
              <span>Jul 2027: Operação completa - 180MW disponíveis</span>
            </div>
          </div>

          {/* Incentivos Fiscais Detalhados */}
          <div className="bg-gray-50 p-8 border border-black/20 mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">
              INCENTIVOS FISCAIS ESTRATÉGICOS
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <DollarSign className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold text-green-600">58,85%</div>
                <div className="text-sm">Redução ICMS sobre CAPEX tecnológico</div>
              </div>
              <div className="text-center">
                <Sun className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold text-green-600">100%</div>
                <div className="text-sm">Diferimento ICMS solar/eólica</div>
              </div>
              <div className="text-center">
                <Shield className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold text-green-600">75%</div>
                <div className="text-sm">Redução IRPJ (Sudene)</div>
              </div>
              <div className="text-center">
                <Timer className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold text-green-600">32 dias</div>
                <div className="text-sm">Licenciamento digitalizado</div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-green-100 px-4 py-2 rounded">
              <Leaf className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium">Selo Verde disponível para empresas sustentáveis</span>
            </div>
          </div>
          <div className="border-4 border-white p-12 mb-12">
            <h3 className="text-3xl font-bold mb-6">EMUU - MEMORANDO DE ENTENDIMENTO</h3>
            <div className="text-lg mb-4 opacity-90">
              <strong>PROJETO PRINCIPAL:</strong> 180MW • 4 Módulos • 50% TUST • Jul/2027
            </div>
            <p className="text-lg mb-8 opacity-90">
              Garanta sua cota no projeto energético transferido do Ceará para Pernambuco.
              <br />
              Energia garantida. 3GW de margem de escoamento. Ecossistema de parceiros consolidado.
            </p>
            <button className="bg-white text-black px-12 py-4 text-xl font-bold hover:bg-black hover:text-white border-2 border-white transition-all duration-300 flex items-center gap-3 mx-auto">
              ASSINAR EMUU AGORA
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>

          <div className="text-center">
            <div className="text-sm opacity-70 mb-4">
              Soleto • Moura BESS • Atlas Energias • SENAI TechHub • Barboza e Costa
            </div>
            <div className="text-sm opacity-70 mb-4">
              Articulação Institucional: ADEPE • Ministérios (Comunicações, MME, MDIC, Defesa, ANATEL)
            </div>
            <div className="text-xs opacity-50">
              Pernambuco Energy Hub © 2025 • Infraestrutura Crítica da Economia Digital • Projeto Principal 180MW
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
      {/* NEW: Ecossistema de Inovação e Talento */}
      <section className="py-20 border-t border-black/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              ECOSSISTEMA DE INOVAÇÃO E TALENTO
              <div className="w-24 h-px bg-black mx-auto mt-4"></div>
            </h2>
            <p className="text-xl max-w-4xl mx-auto leading-relaxed">
              Pernambuco concentra o maior ecossistema de inovação tecnológica do Nordeste, 
              criando <strong>sinergias naturais com a demanda por datacenters</strong> de alta performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {ecosystemSectors.map((sector, index) => (
              <div key={index} className="bg-white border border-black/20 p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    {sector.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{sector.title}</h3>
                    <div className="text-sm font-medium text-gray-600 mb-3">{sector.stats}</div>
                    <p className="text-sm mb-4 leading-relaxed">{sector.description}</p>
                    <div className="bg-gray-50 p-3 rounded">
                      <div className="text-xs font-medium text-gray-500 mb-1">SINERGIA COM DATACENTERS:</div>
                      <div className="text-sm">{sector.synergy}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-black text-white p-8">
              <h3 className="text-2xl font-bold mb-4">DEMANDA SETORIAL CRESCENTE</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <Server className="w-8 h-8 mx-auto mb-2" />
                  <div className="text-lg font-bold">+30% ao ano</div>
                  <div className="text-sm opacity-80">Crescimento IA</div>
                </div>
                <div>
                  <TrendingUp className="w-8 h-8 mx-auto mb-2" />
                  <div className="text-lg font-bold">+15% ao ano</div>
                  <div className="text-sm opacity-80">Cloud Computing</div>
                </div>
                <div>
                  <Target className="w-8 h-8 mx-auto mb-2" />
                  <div className="text-lg font-bold">99,99%</div>
                  <div className="text-sm opacity-80">SLA Exigido</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>