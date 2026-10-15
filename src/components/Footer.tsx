import { navLinks } from '../data/content'

export function Footer() {
  return (
    <footer className="w-full bg-primary px-margin-mobile pt-space-xl pb-space-lg text-on-primary lg:px-margin">
      <div className="grid grid-cols-1 gap-gutter border-b border-surface/15 pb-space-lg md:grid-cols-3">
        <div className="flex flex-col gap-3">
          <span className="font-headline-sm text-headline-sm tracking-widest text-surface uppercase">
            Vellaro
          </span>
          <p className="max-w-xs font-body-sm text-body-sm text-surface-dim">
            Coleção residencial privada na orla de Boa Viagem, Recife. Entrega prevista para
            dezembro de 2027.
          </p>
        </div>

        <nav aria-label="Navegação do rodapé" className="flex flex-col gap-3">
          <span className="font-label-caps text-label-caps tracking-widest text-secondary-fixed uppercase">
            Navegação
          </span>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body-sm text-body-sm text-surface-dim transition-colors hover:text-surface"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-3">
          <span className="font-label-caps text-label-caps tracking-widest text-secondary-fixed uppercase">
            Stand de Vendas
          </span>
          <p className="font-body-sm text-body-sm text-surface-dim">
            Av. Boa Viagem, 3800 — Recife / PE
          </p>
          <p className="font-body-sm text-body-sm text-surface-dim">
            Visitas de segunda a sábado, sob agendamento.
          </p>
          <p className="font-body-sm text-body-sm text-surface-dim">
            CRECI 12.450-J / 7ª Região
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-2 pt-space-md font-body-sm text-body-sm text-surface-dim sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Vellaro Empreendimentos — projeto fictício.</p>
        <p className="text-outline-variant">
          Landing page criada para fins de portfólio. Nenhum dado é coletado, salvo ou
          enviado.
        </p>
      </div>
    </footer>
  )
}
