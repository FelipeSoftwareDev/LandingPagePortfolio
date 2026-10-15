import { locationHighlights } from '../data/content'
import { Figure } from './Figure'
import { Icon } from './Icon'

export function Location() {
  return (
    <section
      id="localizacao"
      className="w-full bg-surface-container-low px-margin-mobile py-space-xl lg:px-margin"
    >
      <div className="grid grid-cols-1 items-center gap-gutter lg:grid-cols-12">
        <div className="flex flex-col gap-space-sm lg:col-span-5">
          <span className="font-label-caps text-label-caps tracking-[0.25em] text-secondary uppercase">
            04 • Endereço Nobre
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile text-primary sm:text-headline-lg">
            Avenida Boa Viagem, 3800.
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            O trecho mais calmo e aristocrático da orla recifense, onde a barreira de
            recifes naturais cria piscinas tépidas a poucos passos da sua porta.
          </p>

          <ul className="mt-2 flex flex-col gap-4">
            {locationHighlights.map((highlight) => (
              <li
                key={highlight.title}
                className="flex items-start gap-4 bg-surface-container-lowest p-4 shadow-sm"
              >
                <Icon name={highlight.icon} className="mt-1 text-2xl text-secondary" />
                <div>
                  <h3 className="font-label-caps text-label-caps text-primary uppercase">
                    {highlight.title}
                  </h3>
                  <p className="mt-0.5 font-body-sm text-body-sm text-on-surface-variant">
                    {highlight.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-7">
          <div className="relative h-[420px] w-full overflow-hidden bg-surface-container shadow-xl sm:h-[520px]">
            <Figure
              src="/images/mapa-boa-viagem.jpg"
              alt="Mapa da orla de Boa Viagem indicando a localização do Vellaro na Avenida Boa Viagem, 3800"
              label="Mapa • Av. Boa Viagem, 3800"
              imgClassName="size-full object-cover"
            />

            <div className="absolute right-6 bottom-6 left-6 border-l-2 border-secondary bg-surface/90 p-6 shadow-lg backdrop-blur-md sm:right-auto sm:max-w-sm">
              <span className="font-label-caps text-[10px] tracking-widest text-secondary uppercase">
                Localização Exata
              </span>
              <p className="mt-1 font-headline-sm text-headline-sm text-primary">
                Praia de Boa Viagem
              </p>
              <p className="mt-1 font-body-sm text-body-sm text-on-surface-variant">
                Em frente ao Parque Dona Lindu e aos mais límpidos arrecifes de Pernambuco.
              </p>
              <div className="mt-4 flex items-center justify-between gap-2 border-t border-surface-container pt-3 font-label-caps text-[12px] text-primary uppercase">
                <span>Coordenadas GPS</span>
                <span className="font-mono text-secondary">8°07&apos;42.1&quot;S 34°53&apos;58.4&quot;W</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
