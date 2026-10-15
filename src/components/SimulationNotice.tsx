import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react'
import { Icon } from './Icon'
import { SIMULATION_MESSAGE, SimulationNoticeContext } from './simulationNoticeContext'

export function SimulationNoticeProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  const notify = useCallback(() => setOpen(true), [])
  const close = useCallback(() => setOpen(false), [])

  useEffect(() => {
    if (!open) return

    closeButtonRef.current?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close()
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open, close])

  return (
    <SimulationNoticeContext.Provider value={notify}>
      {children}

      {/* Live region: anuncia o aviso tambem para leitores de tela */}
      <div aria-live="assertive" className="sr-only">
        {open ? SIMULATION_MESSAGE : ''}
      </div>

      {open && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-primary/80 p-4 backdrop-blur-md"
          onClick={close}
        >
          <div
            role="alertdialog"
            aria-modal="true"
            aria-labelledby="simulation-notice-title"
            aria-describedby="simulation-notice-text"
            onClick={(event) => event.stopPropagation()}
            className="relative w-full max-w-md bg-surface p-8 text-on-surface shadow-2xl sm:p-10"
          >
            <div aria-hidden="true" className="absolute top-0 left-0 h-[2px] w-full bg-secondary" />

            <div className="flex items-start gap-4">
              <Icon name="info" className="mt-1 text-2xl text-secondary" />
              <div className="flex flex-col gap-2">
                <span className="font-label-caps text-label-caps tracking-widest text-secondary uppercase">
                  Aviso
                </span>
                <h2
                  id="simulation-notice-title"
                  className="font-headline-sm text-headline-sm text-primary"
                >
                  Formulário demonstrativo
                </h2>
                <p
                  id="simulation-notice-text"
                  className="font-body-md text-body-md text-on-surface-variant"
                >
                  {SIMULATION_MESSAGE}
                </p>
              </div>
            </div>

            <button
              ref={closeButtonRef}
              type="button"
              onClick={close}
              className="mt-8 w-full bg-primary py-4 font-label-caps text-label-caps tracking-widest text-on-primary uppercase transition-all duration-300 hover:bg-secondary hover:text-on-secondary"
            >
              Entendi
            </button>
          </div>
        </div>
      )}
    </SimulationNoticeContext.Provider>
  )
}
