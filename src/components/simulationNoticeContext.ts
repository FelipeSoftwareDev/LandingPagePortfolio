import { createContext, useContext } from 'react'

export const SIMULATION_MESSAGE =
  'Isso é apenas uma simulação para fins de portfólio, nenhum dados será salvo ou enviado.'

export const SimulationNoticeContext = createContext<(() => void) | null>(null)

/** Dispara o aviso de simulacao. Usado pelos formularios da pagina. */
export function useSimulationNotice() {
  const notify = useContext(SimulationNoticeContext)
  if (!notify) {
    throw new Error('useSimulationNotice precisa estar dentro de SimulationNoticeProvider')
  }
  return notify
}
