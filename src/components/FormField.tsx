import type { ReactNode } from 'react'

/** Classe compartilhada por input, select e textarea dos dois formularios. */
export const controlClasses =
  'w-full bg-surface-container-low px-4 py-3 font-body-md text-body-md text-on-surface outline-none transition-all placeholder:text-outline-variant focus:bg-surface-container-lowest focus:ring-2 focus:ring-secondary'

type FormFieldProps = {
  /** Deve coincidir com o id do controle filho. */
  htmlFor: string
  label: string
  children: ReactNode
}

export function FormField({ htmlFor, label, children }: FormFieldProps) {
  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={htmlFor}
        className="font-label-caps text-label-caps text-on-surface-variant uppercase"
      >
        {label}
      </label>
      {children}
    </div>
  )
}
