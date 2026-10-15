/**
 * Conteudo do empreendimento ficticio Vellaro Recife.
 *
 * Imagens: a unica foto presente no projeto e a do hero (/public).
 * Os demais caminhos abaixo apontam para /public/images/*. Enquanto o arquivo
 * nao existir, o componente Figure exibe um placeholder editorial no lugar.
 */

export const HERO_IMAGE = '/Hero_section_background.jpg'

export type Typology = {
  id: string
  name: string
  tabLabel: string
  floors: string
  area: string
  description: string
  image: string
  imageAlt: string
  imageLabel: string
  ctaLabel: string
  specs: { label: string; value: string }[]
}

export const typologies: Typology[] = [
  {
    id: 'residence-atlantica',
    name: 'Residence Atlântica',
    tabLabel: 'Residence Atlântica • 285m²',
    floors: 'Pavimentos 04 ao 20',
    area: '285 m² Privativos',
    description:
      'Concebida para famílias que valorizam fluidez e convívio descontraído com o mar. Living sem pilares intermediários integrado a terraço gourmet de 48m² com churrasqueira a carvão embutida.',
    image: '/images/residence-atlantica.jpg',
    imageAlt:
      'Living de pé-direito alto voltado para a praia de Boa Viagem, com mobiliário minimalista em linho natural e nogueira',
    imageLabel: 'Living integrado • Residence Atlântica',
    ctaLabel: 'Consultar Disponibilidade',
    specs: [
      { label: 'Dormitórios', value: '4 Suítes com Varanda' },
      { label: 'Garagem Privativa', value: '4 Vagas Livres + Depósito' },
      { label: 'Living Integrado', value: '84 m² de Área Social' },
      { label: 'Piso e Revestimentos', value: 'Mármore Paraná 120x120' },
    ],
  },
  {
    id: 'grand-panorama',
    name: 'Grand Panorama',
    tabLabel: 'Grand Panorama • 410m²',
    floors: 'Pavimentos 21 ao 32',
    area: '410 m² Privativos',
    description:
      'A expressão máxima da sofisticação residencial. Contempla galeria privativa de entrada, adega walk-in envidraçada para 450 rótulos e suíte master com 62m² e hidromassagem debruçada no oceano.',
    image: '/images/grand-panorama.jpg',
    imageAlt:
      'Sala de jantar e adega climatizada de penthouse à beira-mar, com painéis de carvalho fumê e ilha de mármore',
    imageLabel: 'Adega walk-in • Grand Panorama',
    ctaLabel: 'Consultar Disponibilidade',
    specs: [
      { label: 'Dormitórios', value: '4 Suítes + Adega Walk-in' },
      { label: 'Garagem Privativa', value: '5 Vagas Soltas + Box Náutico' },
      { label: 'Área Social', value: 'Living 4 Ambientes com Varandão' },
      { label: 'Diferenciais', value: 'Aspiração Central & Automação' },
    ],
  },
  {
    id: 'penthouse-suspensa',
    name: 'Penthouse Suspensa',
    tabLabel: 'Penthouse Suspensa • 580m²',
    floors: 'Pavimentos 33 e 34 (Duplex Top)',
    area: '580 m² Privativos',
    description:
      'Uma obra de arte singular em Pernambuco. Piscina privativa com borda de vidro no 34º andar, elevador exclusivo com parada interna nos dois níveis e rooftop privativo com solarium 360°.',
    image: '/images/penthouse-suspensa.jpg',
    imageAlt:
      'Piscina privativa de borda infinita no rooftop da penthouse, com vista panorâmica do mar ao pôr do sol',
    imageLabel: 'Rooftop privativo • Penthouse Suspensa',
    ctaLabel: 'Agendar Visita Confidencial',
    specs: [
      { label: 'Dormitórios', value: '5 Suítes Monumentais' },
      { label: 'Piscina Privada', value: 'Borda Infinita em Balanço' },
      { label: 'Garagem', value: '6 Vagas + Ponto Carregador' },
      { label: 'Pé-Direito', value: 'Duplo 6.4m no Living' },
    ],
  },
]

export type Amenity = {
  id: string
  eyebrow: string
  title: string
  description: string
  image: string
  imageAlt: string
  imageLabel: string
  /** Area ocupada no mosaico bento. */
  size: 'wide' | 'tall' | 'small'
}

export const amenities: Amenity[] = [
  {
    id: 'piscina',
    eyebrow: 'Mirante Aquático',
    title: 'Piscina de Borda Infinita de 25m',
    description:
      'Raia semiolímpica com aquecimento solar, deck molhado e gazebos privativos com serviço de toalhas e drinques.',
    image: '/images/piscina-borda-infinita.jpg',
    imageAlt:
      'Piscina de borda infinita suspensa sobre a orla de Boa Viagem ao anoitecer, com iluminação subaquática',
    imageLabel: 'Piscina de borda infinita',
    size: 'wide',
  },
  {
    id: 'spa',
    eyebrow: 'Recuperação & Vitalidade',
    title: 'Thermal Spa & Saunas',
    description:
      'Sauna seca em cedro canadense, sauna úmida aromática e salas de massagem assinadas.',
    image: '/images/thermal-spa.jpg',
    imageAlt:
      'Spa térmico minimalista com sauna seca de cedro, piscina de imersão em basalto e iluminação âmbar',
    imageLabel: 'Thermal spa & saunas',
    size: 'tall',
  },
  {
    id: 'academia',
    eyebrow: 'Performance',
    title: 'Academia Technogym Artis',
    description:
      'Espaço de pilates clássico e estúdio funcional com vista oceânica ininterrupta.',
    image: '/images/academia-technogym.jpg',
    imageAlt:
      'Academia privativa com equipamentos de alto padrão e janelas panorâmicas voltadas para o coqueiral',
    imageLabel: 'Academia & estúdio funcional',
    size: 'small',
  },
  {
    id: 'beach-tennis',
    eyebrow: 'Esporte Exclusivo',
    title: 'Quadra Coberta de Beach Tennis',
    description:
      'Areia de quartzo com sistema de exaustão térmica e lounge gourmet anexo.',
    image: '/images/beach-tennis.jpg',
    imageAlt:
      'Quadra coberta de beach tennis com areia de quartzo branca e vigas de madeira aparentes',
    imageLabel: 'Quadra coberta de beach tennis',
    size: 'small',
  },
  {
    id: 'wine-lounge',
    eyebrow: 'Sommelier Privé',
    title: 'Wine Lounge & Charutaria',
    description:
      'Sistema individual de lockers climatizados e exaustão com filtro eletrostático.',
    image: '/images/wine-lounge.jpg',
    imageAlt:
      'Lounge privativo de charutaria e sommelier com poltronas de couro, latão e carvalho escuro',
    imageLabel: 'Wine lounge & charutaria',
    size: 'small',
  },
]

export const navLinks = [
  { label: 'O Conceito', href: '#o-conceito' },
  { label: 'Residências', href: '#residencias' },
  { label: 'Lazer & Wellness', href: '#lazer-wellness' },
  { label: 'Localização', href: '#localizacao' },
]

export const heroMetrics = [
  { value: '01', label: 'Unidade por Andar' },
  { value: '3.2', unit: 'm', label: 'Pé-Direito Livre' },
  { value: '100', unit: '%', label: 'Vista Oceânica Definitiva' },
]

export const projectFacts = [
  { label: 'Localização', value: 'Av. Boa Viagem, 3800' },
  { label: 'Arquitetura', value: 'Studio Bernardes & Associados' },
  { label: 'Paisagismo', value: 'Burle Marx Paisagismo' },
  { label: 'Previsão de Entrega', value: 'Dezembro / 2027' },
]

export const projectIndicators = [
  {
    value: '36',
    label: 'Pavimentos Monumentais',
    detail: 'Silhueta imponente na linha do horizonte',
  },
  {
    value: '04 a 06',
    label: 'Vagas Demarcadas',
    detail: 'Com ponto elétrico ultrarrápido individual',
  },
  {
    value: '1.400',
    unit: 'm²',
    label: 'Wellness & Resort',
    detail: 'Área total de conveniência e lazer privado',
  },
  {
    value: 'Marina & Heli',
    label: 'Parcerias Exclusivas',
    detail: 'Concierge náutico no Cabanga Iate Clube',
  },
]

export const locationHighlights = [
  {
    icon: 'restaurant',
    title: 'Polo Gastronômico do Pina & Boa Viagem',
    description:
      'A 3 minutos de restaurantes premiados, como Le Bife, Chicama, Wiella Bistrô e Tapa de Cuadril.',
  },
  {
    icon: 'flight',
    title: 'Aeroporto Internacional dos Guararapes',
    description:
      'Apenas 8 minutos com via expressa segregada e serviço de heliponto privativo homologado.',
  },
  {
    icon: 'anchor',
    title: 'Acesso Náutico e Marinas',
    description:
      'Convênio para ancoragem e embarque prioritário no Cabanga Iate Clube e Bacia do Pina.',
  },
]
