# Vellaro Recife — landing page de portfólio

Landing page estática de um empreendimento imobiliário **fictício** (Vellaro, Boa Viagem /
Recife), criada para fins de portfólio.

Não existe backend: ao enviar qualquer um dos formulários aparece o aviso
*"Isso é apenas uma simulação para fins de portfólio, nenhum dados será salvo ou enviado."*
e os campos são limpos. Nada é coletado, salvo ou transmitido.

## Stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS 4 (tokens do design definidos em `@theme`, em [src/index.css](src/index.css))
- Fontes Playfair Display + Plus Jakarta Sans e ícones Material Symbols, via Google Fonts

## Rodando

```bash
npm install
npm run dev      # servidor de desenvolvimento
npm run build    # typecheck + build de produção em dist/
npm run preview  # serve o build
npm run lint
```

## Estrutura

```
src/
  App.tsx                     composição das seções
  index.css                   tokens de design (@theme) + base
  data/content.ts             todo o conteúdo editorial (textos, tipologias, lazer)
  components/
    Header.tsx                header fixo com menu mobile
    Hero.tsx                  hero editorial + formulário "Reserva Privada"
    Overview.tsx              01 • Architectural Statement
    Residences.tsx            02 • tipologias em abas
    FloorPlanModal.tsx        modal da planta humanizada
    Wellness.tsx              03 • mosaico bento de lazer e spa
    Location.tsx              04 • localização
    Contact.tsx               formulário de consultoria privada
    Footer.tsx                rodapé
    SimulationNotice.tsx      modal de aviso de simulação (provider)
    simulationNoticeContext.ts  contexto/hook + texto do aviso
    Figure.tsx                imagem com placeholder de fallback
    FormField.tsx             label + classes dos campos
    Icon.tsx                  glifo Material Symbols
```

## Imagens

A única foto presente no repositório é a do hero (também usada como fundo da seção):
`public/Hero_section_background.jpg`.

As demais imagens têm caminhos reservados em [src/data/content.ts](src/data/content.ts).
Enquanto o arquivo não existir, o componente `Figure` exibe um placeholder editorial no
lugar — basta soltar o arquivo no caminho indicado em `public/images/` para a foto aparecer,
sem mudar código:

| Caminho esperado                         | Onde aparece                     |
| ---------------------------------------- | -------------------------------- |
| `public/images/varanda-travertino.jpg`   | O Projeto                        |
| `public/images/residence-atlantica.jpg`  | Tipologia 285m²                  |
| `public/images/grand-panorama.jpg`       | Tipologia 410m²                  |
| `public/images/penthouse-suspensa.jpg`   | Tipologia 580m²                  |
| `public/images/planta-humanizada.jpg`    | Modal da planta                  |
| `public/images/piscina-borda-infinita.jpg` | Lazer & Wellness               |
| `public/images/thermal-spa.jpg`          | Lazer & Wellness                 |
| `public/images/academia-technogym.jpg`   | Lazer & Wellness                 |
| `public/images/beach-tennis.jpg`         | Lazer & Wellness                 |
| `public/images/wine-lounge.jpg`          | Lazer & Wellness                 |
| `public/images/mapa-boa-viagem.jpg`      | Localização                      |

## Observações

- Marcas, nomes de escritórios, CRECI e coordenadas são fictícios/ilustrativos.
- As abas de tipologia e os modais seguem padrões ARIA (`tablist`, `dialog`,
  `alertdialog`), fecham com `Esc` e respeitam `prefers-reduced-motion`.
