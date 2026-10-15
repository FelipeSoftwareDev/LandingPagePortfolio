import { useEffect, useState } from 'react'
import { navLinks } from '../data/content'
import { Icon } from './Icon'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  // Fecha o menu mobile quando a viewport volta para desktop
  useEffect(() => {
    const breakpoint = window.matchMedia('(min-width: 1280px)')
    const onChange = () => {
      if (breakpoint.matches) setMenuOpen(false)
    }

    breakpoint.addEventListener('change', onChange)
    return () => breakpoint.removeEventListener('change', onChange)
  }, [])

  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-surface/80 shadow-[0_1px_8px_rgba(0,0,0,0.04)] backdrop-blur-xl transition-all duration-300">
      <div className="flex h-20 w-full items-center justify-between gap-6 px-margin-mobile lg:px-margin">
        <a href="#top" className="flex items-center gap-4">
          <span className="flex size-10 items-center justify-center border border-primary/20 bg-primary text-on-primary">
            <span className="font-headline-sm text-headline-sm leading-none">V</span>
          </span>
          <span className="flex flex-col">
            <span className="font-headline-sm text-headline-sm leading-none tracking-widest text-primary uppercase">
              Vellaro
            </span>
            <span className="mt-1 font-label-caps text-label-caps leading-none tracking-widest text-secondary uppercase">
              Boa Viagem • Recife
            </span>
          </span>
        </a>

        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-8 font-label-caps text-label-caps uppercase xl:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-on-surface-variant transition-colors duration-200 hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="#contato-vip"
            className="hidden items-center justify-center bg-primary px-space-md py-space-xs font-label-caps text-label-caps tracking-widest text-on-primary uppercase shadow-[0_4px_16px_rgba(43,40,37,0.06)] transition-all duration-200 hover:bg-secondary hover:text-on-secondary sm:inline-flex"
          >
            Agendar Visita Privada
          </a>

          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="menu-mobile"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setMenuOpen((open) => !open)}
            className="flex size-10 items-center justify-center border border-outline-variant text-primary transition-colors hover:bg-surface-container xl:hidden"
          >
            <Icon name={menuOpen ? 'close' : 'menu'} className="text-xl" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="menu-mobile"
          aria-label="Navegação principal (mobile)"
          className="flex flex-col gap-1 border-t border-surface-container-highest bg-surface px-margin-mobile pb-space-md xl:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-surface-container py-4 font-label-caps text-label-caps text-on-surface-variant uppercase transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato-vip"
            onClick={() => setMenuOpen(false)}
            className="mt-space-sm bg-primary py-4 text-center font-label-caps text-label-caps tracking-widest text-on-primary uppercase"
          >
            Agendar Visita Privada
          </a>
        </nav>
      )}
    </header>
  )
}
