import { useState } from 'react'
import { Icon } from './Icon'

type FigureProps = {
  /** Caminho da imagem em /public. Sem arquivo, cai no placeholder editorial. */
  src?: string
  alt: string
  /** Descricao curta exibida no placeholder enquanto a foto nao existe. */
  label: string
  className?: string
  /** Classes aplicadas a imagem ou ao placeholder (altura, object-fit, hover). */
  imgClassName?: string
}

/**
 * Imagem com placeholder de fallback. Como o projeto nao tem banco de imagens,
 * basta soltar o arquivo em /public no caminho indicado para a foto aparecer.
 */
export function Figure({
  src,
  alt,
  label,
  className = '',
  imgClassName = '',
}: FigureProps) {
  const [failed, setFailed] = useState(false)

  if (!src || failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center gap-space-sm bg-linear-to-br from-surface-container-high via-surface-container to-surface-variant p-8 text-center ${className} ${imgClassName}`}
      >
        <Icon name="image" className="text-[32px] text-outline" />
        <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
          {label}
        </span>
        <span className="font-body-sm text-body-sm max-w-xs text-outline">
          Espaco reservado para imagem do projeto
        </span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className={`${className} ${imgClassName}`}
    />
  )
}
