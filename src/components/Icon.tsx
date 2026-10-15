type IconProps = {
  /** Nome do glifo no Material Symbols Outlined, ex.: "lock_open". */
  name: string
  className?: string
}

/** Glifo decorativo: fica escondido de leitores de tela por padrao. */
export function Icon({ name, className = '' }: IconProps) {
  return (
    <span aria-hidden="true" className={`material-symbols-outlined ${className}`}>
      {name}
    </span>
  )
}
