import { useEffect, useRef } from 'react'
import { Figure } from './Figure'
import { Icon } from './Icon'

type FloorPlanModalProps = {
  open: boolean
  onClose: () => void
  /** Tipologia que abriu o modal, usada no subtitulo. */
  typologyName: string
}

export function FloorPlanModal({ open, onClose, typologyName }: FloorPlanModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return

    closeButtonRef.current?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-primary/80 p-4 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-planta-title"
        onClick={(event) => event.stopPropagation()}
        className="relative my-auto w-full max-w-4xl bg-surface p-6 shadow-2xl sm:p-10"
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Fechar planta humanizada"
          className="absolute top-6 right-6 p-2 text-on-surface-variant transition-colors hover:text-primary"
        >
          <Icon name="close" className="text-2xl" />
        </button>

        <div className="mb-6 pr-12">
          <span className="font-label-caps text-label-caps text-secondary uppercase">
            Estudo de Arquitetura &amp; Layout
          </span>
          <h2
            id="modal-planta-title"
            className="mt-1 font-headline-md text-headline-md text-primary"
          >
            Planta Humanizada Ilustrativa
          </h2>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            {typologyName} — conexão fluida entre varanda oceânica, gourmet e sala de estar
            principal.
          </p>
        </div>

        <div className="flex w-full items-center justify-center bg-surface-container-low p-4">
          <Figure
            src="/images/planta-humanizada.jpg"
            alt="Planta humanizada ilustrativa do apartamento, com suítes, living amplo e varanda panorâmica"
            label="Planta humanizada ilustrativa"
            imgClassName="max-h-[500px] w-full object-contain"
          />
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <span className="font-body-sm text-body-sm text-outline">
            Planta sujeita a alterações decorrentes do projeto executivo aprovado.
          </span>
          <a
            href="#contato-vip"
            onClick={onClose}
            className="bg-primary px-6 py-3 font-label-caps text-label-caps text-on-primary uppercase transition-all hover:bg-secondary hover:text-on-secondary"
          >
            Solicitar Caderno Técnico Completo
          </a>
        </div>
      </div>
    </div>
  )
}
