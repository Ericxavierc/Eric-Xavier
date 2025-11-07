
import { Tour, Category } from './types';

export const PROMOTIONS: Tour[] = [
  {
    id: 1,
    title: "Combo Litoral Sul - Francês & Gunga",
    shortDescription: "Descubra dois paraísos imperdíveis no mesmo dia: as piscinas naturais...",
    fullDescription: "Descubra dois paraísos imperdíveis no mesmo dia: as piscinas naturais do Francês e o visual exuberante do Gunga. Inclui transporte ida e volta + guia.",
    originalPrice: 159.90,
    promoPrice: 139.90,
    image: "https://picsum.photos/seed/francesgunga/400/400",
    isPromo: true,
    discount: "15% Off"
  },
  {
    id: 2,
    title: "Aventura na Barra - São Miguel",
    shortDescription: "Viva a experiência de um dia inteiro na Barra de São Miguel! Mar calmo e cristalino...",
    fullDescription: "Bateu a vontade de relaxar? Temos um passeio novo na área! Barra de São Miguel (mar calmo e transparente), perfeito para banho e descanso. O passeio de lancha não está incluso, apenas o transporte com guia.",
    originalPrice: 99.90,
    promoPrice: 79.90,
    image: "https://picsum.photos/seed/barrasaomiguel/400/400",
    isPromo: true,
    discount: "20% Off"
  },
  {
    id: 3,
    title: "Gunga Express - Falésias + Mirante",
    shortDescription: "O passeio mais procurado! Transporte de van ou micro-ônibus até o Gunga, com parada no Mirante...",
    fullDescription: "O passeio mais procurado! Transporte de van ou micro-ônibus até o Gunga, com parada no Mirante. Aventura opcional de buggy ou quadriciclo (não inclusa).",
    originalPrice: 75.00,
    promoPrice: 59.90,
    image: "https://picsum.photos/seed/gungaexpress/400/400",
    isPromo: true,
    discount: "20% Off"
  }
];

export const CATEGORIES: Category[] = [
  {
    id: "litoral-sul",
    name: "Litoral Sul",
    tours: [
      {
        id: 4,
        title: "Praia do Francês",
        details: "30km de Maceió",
        shortDescription: "Famosa por suas piscinas naturais e ondas perfeitas para o surf.",
        fullDescription: "A Praia do Francês é um dos cartões postais de Alagoas, dividida entre uma área de águas calmas protegida por recifes e outra de mar aberto, ideal para surfistas. Um destino versátil para toda a família.",
        promoPrice: 40.00,
        image: "https://picsum.photos/seed/frances/400/400"
      },
      {
        id: 5,
        title: "Barra de São Miguel",
        details: "35km de Maceió",
        shortDescription: "A maior barreira de corais de Alagoas, formando uma imensa piscina natural.",
        fullDescription: "Com um mar de águas cristalinas e tranquilas, Barra de São Miguel é o refúgio perfeito para quem busca relaxar. Aproveite os passeios de barco e a culinária local.",
        promoPrice: 45.00,
        image: "https://picsum.photos/seed/barrasm/400/400"
      },
      {
        id: 6,
        title: "Praia do Gunga",
        details: "45km de Maceió",
        shortDescription: "Um visual de tirar o fôlego com coqueiros a perder de vista e falésias coloridas.",
        fullDescription: "Considerada uma das praias mais bonitas do Brasil, a Praia do Gunga encanta pela sua paisagem única, onde o mar encontra a Lagoa do Roteiro. Passeios de buggy e quadriciclo são imperdíveis.",
        promoPrice: 50.00,
        image: "https://picsum.photos/seed/gunga/400/400"
      }
    ]
  },
  {
    id: "litoral-norte",
    name: "Litoral Norte",
    tours: [
      {
        id: 7,
        title: "Ipioca (Hibiscus/Vivari)",
        details: "20km de Maceió",
        shortDescription: "Relaxe em beach clubs com estrutura completa e um mar de águas mornas.",
        fullDescription: "A praia de Ipioca é famosa por seus beach clubs de alto padrão, como o Hibiscus e o Vivari. Desfrute de um dia de conforto, boa música e gastronomia à beira-mar.",
        promoPrice: 60.00,
        image: "https://picsum.photos/seed/ipioca/400/400"
      },
      {
        id: 8,
        title: "Maragogi (Piscinas Naturais)",
        details: "125km de Maceió",
        shortDescription: "O Caribe Brasileiro! Mergulhe em águas transparentes e veja peixes coloridos.",
        fullDescription: "Maragogi é mundialmente conhecida por suas galés, enormes piscinas naturais a quilômetros da costa. Um passeio de catamarã te leva a este paraíso para um mergulho inesquecível.",
        promoPrice: 120.00,
        image: "https://picsum.photos/seed/maragogi/400/400"
      },
      {
        id: 9,
        title: "São Miguel dos Milagres",
        details: "100km de Maceió",
        shortDescription: "A Rota Ecológica dos Milagres, com praias desertas e um charme rústico.",
        fullDescription: "Faça parte da Rota Ecológica dos Milagres e descubra praias paradisíacas e quase intocadas. Um destino perfeito para quem busca tranquilidade, charme e contato com a natureza.",
        promoPrice: 110.00,
        image: "https://picsum.photos/seed/milagres/400/400"
      }
    ]
  },
  {
    id: "city-tour",
    name: "City Tour e Cultura",
    tours: [
      {
        id: 10,
        title: "Centro Histórico e Pontal da Barra",
        details: "Em Maceió",
        shortDescription: "Conheça a história de Maceió e o famoso artesanato do Pontal da Barra.",
        fullDescription: "Um passeio pela rica história e cultura de Maceió. Visite o centro histórico com sua arquitetura secular e finalize no Pontal da Barra, o bairro das rendeiras, com seu artesanato único.",
        promoPrice: 55.00,
        image: "https://picsum.photos/seed/centro/400/400"
      },
      {
        id: 11,
        title: "Piscinas Naturais de Pajuçara (Jangada)",
        details: "Em Maceió",
        shortDescription: "Um passeio de jangada rústica até as belas piscinas naturais da orla urbana.",
        fullDescription: "Navegue nas tradicionais jangadas coloridas de Pajuçara e mergulhe nas piscinas naturais formadas a 2 km da costa. Uma experiência autêntica e imperdível em Maceió.",
        promoPrice: 35.00,
        image: "https://picsum.photos/seed/pajucara/400/400"
      }
    ]
  }
];
