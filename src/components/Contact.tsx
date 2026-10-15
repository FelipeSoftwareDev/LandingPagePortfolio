import type { FormEvent } from 'react'
import { controlClasses, FormField } from './FormField'
import { Icon } from './Icon'
import { useSimulationNotice } from './simulationNoticeContext'

const assurances = [
  {
    icon: 'verified_user',
    text: 'Proteção integral de dados sob termo de confidencialidade',
  },
  {
    icon: 'calendar_today',
    text: 'Visitas presenciais ao decorado sob agendamento exclusivo',
  },
  {
    icon: 'corporate_fare',
    text: 'CRECI 12.450-J / 7ª Região • Vellaro Empreendimentos',
  },
]

export function Contact() {
  const notifySimulation = useSimulationNotice()

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    notifySimulation()
    event.currentTarget.reset()
  }

  return (
    <section
      id="contato-vip"
      className="w-full bg-surface px-margin-mobile py-space-xl lg:px-margin"
    >
      <div className="relative mx-auto max-w-5xl overflow-hidden bg-primary p-8 text-on-primary shadow-2xl sm:p-14 lg:p-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -bottom-20 size-80 rounded-full bg-secondary/10 blur-3xl"
        />

        <div className="relative z-10 grid grid-cols-1 gap-gutter lg:grid-cols-12">
          <div className="flex flex-col justify-between lg:col-span-5">
            <div>
              <span className="font-label-caps text-label-caps tracking-[0.3em] text-secondary-fixed uppercase">
                Atendimento Confidencial
              </span>
              <h2 className="mt-3 font-headline-lg text-headline-lg-mobile leading-tight text-surface sm:text-headline-lg">
                Inicie a sua jornada no Vellaro.
              </h2>

              <div aria-hidden="true" className="my-6 h-px w-12 bg-secondary-fixed/50" />

              <p className="font-body-md text-body-md text-surface-variant">
                Um membro sênior de nossa diretoria imobiliária entrará em contato para
                apresentar os detalhes construtivos, plantas em alta resolução e condições
                reservadas de aquisição.
              </p>
            </div>

            <ul className="mt-8 flex flex-col gap-3 font-body-sm text-body-sm text-surface-dim">
              {assurances.map((assurance) => (
                <li key={assurance.text} className="flex items-center gap-3">
                  <Icon name={assurance.icon} className="text-lg text-secondary-fixed" />
                  <span>{assurance.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-surface p-8 text-on-surface shadow-md sm:p-10 lg:col-span-7">
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              <FormField htmlFor="contact-name" label="Nome Completo">
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Como prefere ser chamado(a)?"
                  className={controlClasses}
                />
              </FormField>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <FormField htmlFor="contact-phone" label="Telefone / WhatsApp">
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    placeholder="+55 (XX) 9XXXX-XXXX"
                    className={controlClasses}
                  />
                </FormField>

                <FormField htmlFor="contact-time" label="Melhor Horário">
                  <select
                    id="contact-time"
                    name="time"
                    defaultValue="manha"
                    className={`${controlClasses} cursor-pointer`}
                  >
                    <option value="manha">Manhã (09h às 12h)</option>
                    <option value="tarde">Tarde (14h às 18h)</option>
                    <option value="noite">Noite (18h às 21h)</option>
                    <option value="qualquer">Qualquer horário confidencial</option>
                  </select>
                </FormField>
              </div>

              <FormField htmlFor="contact-email" label="E-mail Profissional">
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="seu.email@dominio.com.br"
                  className={controlClasses}
                />
              </FormField>

              <FormField
                htmlFor="contact-notes"
                label="Mensagem ou Observações Particulares (Opcional)"
              >
                <textarea
                  id="contact-notes"
                  name="notes"
                  rows={3}
                  placeholder="Gostaria de agendar visita na próxima terça-feira ou saber detalhes sobre a Penthouse..."
                  className={`${controlClasses} resize-none`}
                />
              </FormField>

              <button
                type="submit"
                className="mt-2 flex w-full items-center justify-center gap-3 bg-primary py-4 font-label-caps text-label-caps tracking-widest text-on-primary uppercase shadow-lg transition-all duration-300 hover:bg-secondary hover:text-on-secondary"
              >
                <span>Receber Apresentação Privada</span>
                <Icon name="send" className="text-lg" />
              </button>

              <p className="text-center font-body-sm text-[11px] text-outline">
                Projeto fictício. Formulário sem envio de dados — demonstração de
                portfólio.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
