import type { FormEvent } from 'react'
import { HERO_IMAGE, heroMetrics } from '../data/content'
import { controlClasses, FormField } from './FormField'
import { Icon } from './Icon'
import { useSimulationNotice } from './simulationNoticeContext'

export function Hero() {
  const notifySimulation = useSimulationNotice()

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    notifySimulation()
    event.currentTarget.reset()
  }

  return (
    <section
      id="top"
      className="relative -mt-20 w-full overflow-hidden bg-primary text-on-primary"
    >
      {/* Camada atmosferica com scrim quente sobre a foto da orla */}
      <div
        aria-hidden="true"
        className="absolute inset-0 size-full scale-105 bg-cover bg-center opacity-65 mix-blend-luminosity"
        style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-t from-primary via-primary/60 to-primary/30"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-r from-primary/80 via-transparent to-primary/70"
      />

      {/* Cabecalho editorial em marca d'agua */}
      <div
        aria-hidden="true"
        className="pointer-events-none relative w-full px-margin-mobile pt-28 pb-12 opacity-20 select-none lg:px-margin"
      >
        <div className="flex items-baseline justify-between gap-4 border-b border-surface/20 pb-4">
          <span className="font-label-caps text-label-caps tracking-[0.3em] text-surface uppercase">
            Coleção Residencial Privada • 2026
          </span>
          <span className="hidden font-label-caps text-label-caps tracking-[0.3em] text-surface uppercase sm:inline">
            Boa Viagem, Recife • Brasil
          </span>
        </div>
        <p className="mt-6 w-full text-center font-headline-lg text-[64px] leading-none font-light tracking-tight text-surface/30 uppercase sm:text-[110px] lg:text-[160px]">
          Vellaro
        </p>
      </div>

      <div className="relative w-full px-margin-mobile pb-space-xl lg:px-margin">
        <div className="grid grid-cols-1 items-end gap-gutter lg:grid-cols-12">
          {/* Coluna editorial */}
          <div className="z-10 flex flex-col gap-space-sm lg:col-span-7">
            <div className="inline-flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-8 bg-secondary-fixed" />
              <span className="font-label-caps text-label-caps tracking-[0.25em] text-secondary-fixed uppercase">
                Orla de Boa Viagem • Recife
              </span>
            </div>

            <h1 className="font-headline-lg text-headline-lg-mobile font-normal text-surface sm:text-headline-lg lg:text-[56px] lg:leading-[64px]">
              A nova definição do habitar monumental{' '}
              <span className="block font-normal text-secondary-fixed italic">
                frente ao Atlântico.
              </span>
            </h1>

            <p className="max-w-xl font-body-lg text-body-lg font-light text-surface-variant">
              Residências suspensas exclusivas de 285m² a 580m² com horizonte perpétuo,
              brises bioclimáticos e a tranquilidade inestimável do litoral pernambucano.
            </p>

            <dl className="grid max-w-xl grid-cols-3 gap-6 border-t border-surface/15 pt-space-md">
              {heroMetrics.map((metric) => (
                <div key={metric.label}>
                  <dd className="block font-headline-md text-headline-md leading-none font-light text-surface">
                    {metric.value}
                    {metric.unit && (
                      <span className="text-headline-sm text-secondary-fixed">
                        {metric.unit}
                      </span>
                    )}
                  </dd>
                  <dt className="mt-2 block font-label-caps text-label-caps tracking-wider text-surface-dim uppercase">
                    {metric.label}
                  </dt>
                </div>
              ))}
            </dl>
          </div>

          {/* Formulario de reserva privada */}
          <div className="z-20 lg:col-span-5">
            <div className="relative bg-surface/95 p-8 text-on-surface shadow-2xl backdrop-blur-xl sm:p-10">
              <div aria-hidden="true" className="absolute top-0 left-0 h-[2px] w-full bg-secondary" />

              <div className="mb-6 flex items-baseline justify-between gap-4">
                <div>
                  <span className="block font-label-caps text-label-caps tracking-widest text-secondary uppercase">
                    Reserva Privada
                  </span>
                  <h2 className="mt-1 font-headline-sm text-headline-sm text-primary">
                    Book de Apresentação
                  </h2>
                </div>
                <Icon name="lock_open" className="text-2xl text-secondary" />
              </div>

              <p className="mb-6 font-body-sm text-body-sm text-on-surface-variant">
                Acesso restrito a plantas técnicas, tabela reservada de lançamento e
                agendamento de visita privativa ao stand imersivo.
              </p>

              <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                <FormField htmlFor="lead-name" label="Nome Completo">
                  <input
                    id="lead-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Ex.: Dra. Helena Cavalcanti"
                    className={controlClasses}
                  />
                </FormField>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <FormField htmlFor="lead-phone" label="WhatsApp / Telefone">
                    <input
                      id="lead-phone"
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      placeholder="+55 (81) 99999-0000"
                      className={controlClasses}
                    />
                  </FormField>

                  <FormField htmlFor="lead-typology" label="Tipologia Desejada">
                    <select
                      id="lead-typology"
                      name="typology"
                      defaultValue="285"
                      className={`${controlClasses} cursor-pointer`}
                    >
                      <option value="285">Residence Atlântica (285m²)</option>
                      <option value="410">Grand Panorama (410m²)</option>
                      <option value="580">Penthouse Suspensa (580m²)</option>
                    </select>
                  </FormField>
                </div>

                <FormField htmlFor="lead-email" label="E-mail Institucional ou Pessoal">
                  <input
                    id="lead-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="h.cavalcanti@invest.com.br"
                    className={controlClasses}
                  />
                </FormField>

                <button
                  type="submit"
                  className="mt-2 flex w-full items-center justify-center gap-2 bg-primary py-4 font-label-caps text-label-caps tracking-widest text-on-primary uppercase shadow-lg transition-all duration-300 hover:bg-secondary hover:text-on-secondary"
                >
                  <span>Receber Book &amp; Consultoria VIP</span>
                  <Icon name="arrow_forward" className="text-lg" />
                </button>

                <p className="text-center font-body-sm text-[11px] text-outline">
                  Projeto fictício. Formulário sem envio de dados — demonstração de
                  portfólio.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
