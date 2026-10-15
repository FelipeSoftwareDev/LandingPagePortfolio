import { useState } from 'react'
import { typologies } from '../data/content'
import { Figure } from './Figure'
import { FloorPlanModal } from './FloorPlanModal'

export function Residences() {
  const [activeId, setActiveId] = useState(typologies[0].id)
  const [planOpen, setPlanOpen] = useState(false)

  const active = typologies.find((typology) => typology.id === activeId) ?? typologies[0]

  return (
    <section
      id="residencias"
      className="w-full bg-surface-container-low px-margin-mobile py-space-xl lg:px-margin"
    >
      <div className="mb-space-lg flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <span className="font-label-caps text-label-caps tracking-[0.25em] text-secondary uppercase">
            02 • As Residências
          </span>
          <h2 className="mt-2 font-headline-lg text-headline-lg-mobile text-primary sm:text-headline-lg">
            Tipologias Magníficas
          </h2>
        </div>
        <p className="max-w-md font-body-md text-body-md text-on-surface-variant">
          Plantas generosas com integração de living e terraço marinho, circulação de
          serviço 100% blindada e suítes master com closet duplo.
        </p>
      </div>

      <div className="w-full">
        <div
          role="tablist"
          aria-label="Tipologias disponíveis"
          className="mb-space-md flex flex-wrap gap-2 border-b border-surface-container-highest pb-4"
        >
          {typologies.map((typology) => {
            const selected = typology.id === active.id
            return (
              <button
                key={typology.id}
                type="button"
                role="tab"
                id={`tab-btn-${typology.id}`}
                aria-selected={selected}
                aria-controls={`tab-${typology.id}`}
                onClick={() => setActiveId(typology.id)}
                className={`px-6 py-3 font-label-caps text-label-caps uppercase transition-all duration-200 ${
                  selected
                    ? 'bg-primary text-on-primary'
                    : 'bg-surface-container-lowest text-on-surface hover:bg-surface-variant'
                }`}
              >
                {typology.tabLabel}
              </button>
            )
          })}
        </div>

        <div
          role="tabpanel"
          id={`tab-${active.id}`}
          aria-labelledby={`tab-btn-${active.id}`}
          className="grid grid-cols-1 items-center gap-gutter bg-surface-container-lowest p-6 shadow-sm lg:grid-cols-12 lg:p-10"
        >
          <div className="overflow-hidden lg:col-span-7">
            <Figure
              src={active.image}
              alt={active.imageAlt}
              label={active.imageLabel}
              imgClassName="h-[300px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[440px]"
            />
          </div>

          <div className="flex flex-col gap-6 lg:col-span-5">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <span className="font-label-caps text-label-caps text-secondary uppercase">
                {active.floors}
              </span>
              <span className="font-headline-sm text-headline-sm text-primary">
                {active.area}
              </span>
            </div>

            <h3 className="font-headline-md text-headline-md text-primary">{active.name}</h3>

            <p className="font-body-md text-body-md text-on-surface-variant">
              {active.description}
            </p>

            <dl className="grid grid-cols-2 gap-4 border-y border-surface-container py-4">
              {active.specs.map((spec) => (
                <div key={spec.label}>
                  <dt className="block font-label-caps text-[11px] text-on-surface-variant uppercase">
                    {spec.label}
                  </dt>
                  <dd className="font-body-md text-body-md font-medium text-primary">
                    {spec.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contato-vip"
                className="bg-primary px-6 py-3 font-label-caps text-label-caps text-on-primary uppercase transition-all hover:bg-secondary hover:text-on-secondary"
              >
                {active.ctaLabel}
              </a>
              <button
                type="button"
                onClick={() => setPlanOpen(true)}
                className="border border-secondary px-6 py-3 font-label-caps text-label-caps text-primary uppercase transition-all hover:bg-secondary/10"
              >
                Ver Planta Humanizada
              </button>
            </div>
          </div>
        </div>
      </div>

      <FloorPlanModal
        open={planOpen}
        onClose={() => setPlanOpen(false)}
        typologyName={active.name}
      />
    </section>
  )
}
