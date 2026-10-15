import { amenities, type Amenity } from '../data/content'
import { Figure } from './Figure'

const spanBySize: Record<Amenity['size'], string> = {
  wide: 'lg:col-span-8 min-h-[380px]',
  tall: 'lg:col-span-4 min-h-[380px]',
  small: 'lg:col-span-4 min-h-[320px]',
}

export function Wellness() {
  return (
    <section
      id="lazer-wellness"
      className="w-full bg-surface px-margin-mobile py-space-xl lg:px-margin"
    >
      <div className="mb-space-lg grid grid-cols-1 items-end gap-gutter lg:grid-cols-12">
        <div className="lg:col-span-8">
          <span className="font-label-caps text-label-caps tracking-[0.25em] text-secondary uppercase">
            03 • Lazer, Spa &amp; Wellness
          </span>
          <h2 className="mt-2 font-headline-lg text-headline-lg-mobile text-primary sm:text-headline-lg">
            Um refúgio de serenidade onde o tempo desacelera.
          </h2>
        </div>
        <div className="lg:col-span-4">
          <p className="font-body-md text-body-md text-on-surface-variant">
            Espaços de convívio com acústica tratada, assinatura de iluminação cênica e
            serviços de hotelaria de luxo operados por equipe residente.
          </p>
        </div>
      </div>

      {/* Mosaico bento de areas comuns */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-12">
        {amenities.map((amenity) => (
          <article
            key={amenity.id}
            className={`group relative overflow-hidden bg-surface-container ${spanBySize[amenity.size]}`}
          >
            <Figure
              src={amenity.image}
              alt={amenity.imageAlt}
              label={amenity.imageLabel}
              imgClassName="size-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-primary/90 via-primary/30 to-transparent p-6 text-surface sm:p-8">
              <span className="font-label-caps text-[11px] tracking-widest text-secondary-fixed uppercase">
                {amenity.eyebrow}
              </span>
              <h3
                className={`mt-1 font-light text-surface ${
                  amenity.size === 'wide'
                    ? 'font-headline-md text-headline-sm sm:text-headline-md'
                    : 'font-headline-sm text-headline-sm'
                }`}
              >
                {amenity.title}
              </h3>
              <p className="mt-2 max-w-lg font-body-sm text-body-sm text-surface-variant">
                {amenity.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
