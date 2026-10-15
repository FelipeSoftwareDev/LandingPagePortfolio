import { projectFacts, projectIndicators } from '../data/content'
import { Figure } from './Figure'

export function Overview() {
  return (
    <section id="o-conceito" className="w-full bg-surface px-margin-mobile py-space-xl lg:px-margin">
      <div className="grid grid-cols-1 items-start gap-gutter lg:grid-cols-12">
        {/* Abertura tipografica */}
        <div className="flex flex-col gap-3 lg:col-span-4">
          <span className="font-label-caps text-label-caps tracking-[0.25em] text-secondary uppercase">
            01 • Architectural Statement
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile leading-tight text-primary sm:text-headline-lg">
            O PROJETO
            <span className="block font-subhead-editorial text-subhead-editorial text-secondary italic">
              overview contemporâneo
            </span>
          </h2>

          <div aria-hidden="true" className="my-4 h-px w-12 bg-secondary/40" />

          <dl className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant">
            {projectFacts.map((fact) => (
              <div key={fact.label} className="flex flex-wrap gap-x-1">
                <dt className="font-medium text-primary">{fact.label}:</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Narrativa */}
        <div className="flex flex-col gap-space-sm font-body-lg text-body-lg leading-relaxed text-on-surface-variant lg:col-span-4">
          <p>
            O Vellaro nasce da aspiração de silenciar o ruído urbano para elevar a
            contemplação do oceano a um ritual diário. Inspirado nas linhas sóbrias da alta
            relojoaria suíça e na fluidez dos ventos alísios de Pernambuco, o edifício
            estabelece um marco escultórico na orla mais cobiçada do Nordeste.
          </p>
          <p className="font-body-md text-body-md">
            Cada residência opera como uma mansão suspensa independente. Os brises
            pivotantes de madeira maciça sustentável filtram a insolação tropical, enquanto
            painéis de vidro acústico floor-to-ceiling proporcionam uma comunhão visual
            absoluta com os arrecifes de corais de Boa Viagem.
          </p>

          <div className="mt-2 bg-surface-container-low p-6">
            <span className="mb-1 block font-label-caps text-label-caps text-secondary uppercase">
              Engenharia Acústica &amp; Bioclimática
            </span>
            <p className="font-body-sm text-body-sm text-on-surface">
              Esquadrias de alta performance importadas da Alemanha garantem isolamento
              térmico impecável e absorção de até 42dB de ruído marinho externo.
            </p>
          </div>
        </div>

        {/* Composicao visual */}
        <div className="lg:col-span-4">
          <figure className="group relative overflow-hidden bg-surface-container shadow-md">
            <Figure
              src="/images/varanda-travertino.jpg"
              alt="Detalhe da varanda oceânica em mármore travertino com fachada de vidro e jardineiras tropicais"
              label="Varanda oceânica em travertino"
              imgClassName="h-[420px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <figcaption className="absolute right-0 bottom-0 left-0 bg-linear-to-t from-primary/80 to-transparent p-4 text-surface">
              <span className="font-label-caps text-[10px] tracking-widest text-secondary-fixed uppercase">
                Mármore Travertino Romano Bruto
              </span>
              <p className="font-body-sm text-body-sm font-light text-surface">
                Acabamento mineral orgânico nas varandas oceânicas
              </p>
            </figcaption>
          </figure>
        </div>
      </div>

      {/* Indicadores do projeto */}
      <dl className="mt-space-lg grid grid-cols-2 gap-6 border-t border-surface-container-highest pt-space-lg md:grid-cols-4">
        {projectIndicators.map((indicator) => (
          <div key={indicator.label} className="flex flex-col">
            <dd className="font-headline-md text-headline-md font-normal text-primary">
              {indicator.value}
              {indicator.unit && (
                <span className="text-headline-sm text-secondary">{indicator.unit}</span>
              )}
            </dd>
            <dt className="mt-1 font-label-caps text-label-caps text-secondary uppercase">
              {indicator.label}
            </dt>
            <p className="mt-1 font-body-sm text-body-sm text-on-surface-variant">
              {indicator.detail}
            </p>
          </div>
        ))}
      </dl>
    </section>
  )
}
