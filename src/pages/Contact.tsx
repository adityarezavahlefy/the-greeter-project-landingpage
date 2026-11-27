import { useState, type FormEvent, type ReactNode } from 'react'
import { useSearchParams } from 'react-router-dom'
import { AlertTriangle, ArrowUpRight, Mail, MapPin, MessageCircle } from 'lucide-react'
import { PageHero } from '../components/PageHero'
import { Eyebrow } from '../components/ui'
import { services } from '../data/services'
import { site } from '../data/site'
import { usePageMeta } from '../lib/meta'
import { Reveal } from '../lib/motion'
import { cn } from '../lib/cn'

/**
 * Set VITE_CONTACT_ENDPOINT in an env file to enable real submissions.
 * The form POSTs JSON: { fullName, email, company, link, service, budget, message }.
 */
const ENDPOINT = (import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined)?.trim()

type Fields = {
  fullName: string
  email: string
  company: string
  link: string
  service: string
  budget: string
  message: string
}

type Errors = Partial<Record<keyof Fields, string>>
type Status = 'idle' | 'submitting' | 'sent' | 'unconfigured' | 'error'

const budgets = [
  'Prefer to discuss',
  'Under IDR 25M / month',
  'IDR 25M – 50M / month',
  'IDR 50M – 100M / month',
  'IDR 100M+ / month',
  'One-off project budget',
]

function validate(values: Fields): Errors {
  const errors: Errors = {}
  if (values.fullName.trim().length < 2) errors.fullName = 'Please enter your full name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) {
    errors.email = 'Please enter a valid work email address.'
  }
  if (values.company.trim().length < 2) errors.company = 'Please tell us the company or brand.'
  if (!values.service) errors.service = 'Please choose the service you are interested in.'
  if (values.message.trim().length < 20) {
    errors.message = 'Please add a little more detail — at least 20 characters.'
  }
  return errors
}

function FieldLabel({ htmlFor, children, required }: { htmlFor: string; children: ReactNode; required?: boolean }) {
  return (
    <label htmlFor={htmlFor} className="label flex items-center gap-1.5 text-ink/60">
      {children}
      {required ? (
        <span className="text-ink/60" aria-hidden="true">
          *
        </span>
      ) : (
        <span className="text-ink/60">(optional)</span>
      )}
    </label>
  )
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null
  return (
    <p id={id} role="alert" className="mt-2 flex items-start gap-2 text-[12px] font-medium leading-snug text-ink">
      <span aria-hidden="true" className="mt-[5px] h-[5px] w-[5px] shrink-0 bg-sun" />
      {message}
    </p>
  )
}

export default function Contact() {
  usePageMeta({
    title: 'Contact',
    description:
      'Tell The Gretter Projects about your brand, your goals or the challenge you are trying to solve. Email inquiry@gretter.site or send an inquiry.',
    path: '/contact',
  })

  const [searchParams] = useSearchParams()
  const requestedService = searchParams.get('service')
  const initialService =
    requestedService && services.some((service) => service.name === requestedService) ? requestedService : ''

  const [form, setForm] = useState<Fields>({
    fullName: '',
    email: '',
    company: '',
    link: '',
    service: initialService,
    budget: budgets[0],
    message: '',
  })
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<Status>('idle')

  const update = (key: keyof Fields) => (value: string) => {
    setForm((current) => ({ ...current, [key]: value }))
    setErrors((current) => ({ ...current, [key]: undefined }))
  }

  const mailtoHref = () => {
    const subject = `Project inquiry — ${form.company || 'New brand'}`
    const body = [
      `Full name: ${form.fullName}`,
      `Work email: ${form.email}`,
      `Company / brand: ${form.company}`,
      `Website or social: ${form.link || '—'}`,
      `Service interested in: ${form.service || '—'}`,
      `Monthly marketing budget: ${form.budget || 'Not specified'}`,
      '',
      form.message,
    ].join('\n')
    return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextErrors = validate(form)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    if (!ENDPOINT) {
      setStatus('unconfigured')
      return
    }

    setStatus('submitting')
    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (!response.ok) throw new Error(`Request failed with ${response.status}`)
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  const resetForm = () => {
    setForm({
      fullName: '',
      email: '',
      company: '',
      link: '',
      service: '',
      budget: budgets[0],
      message: '',
    })
    setErrors({})
    setStatus('idle')
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={['Let’s talk about your', 'next growth move.']}
        lead="Tell us about your brand, your goals, or the challenge you're trying to solve. We'd love to hear from you."
        meta={[
          { label: 'Email', value: site.email },
          { label: 'WhatsApp', value: site.whatsapp },
          { label: 'Locations', value: site.cities.join(' · ') },
          { label: 'Best brief', value: 'Objective, audience, constraint' },
        ]}
      />

      <section className="bg-cream">
        <div className="shell py-14 md:py-20">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-7" y={18}>
              {!ENDPOINT && status !== 'sent' && (
                <div className="mb-8 flex gap-3 border border-ink/20 bg-sun/25 p-4">
                  <AlertTriangle aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
                  <p className="text-[12.5px] font-light leading-relaxed text-ink/75">
                    <span className="font-medium text-ink">This form is not connected yet.</span> It validates your
                    details and is ready for a submission endpoint, but messages cannot be delivered until{' '}
                    <code className="border border-ink/15 bg-cream px-1 py-0.5 text-[11px]">VITE_CONTACT_ENDPOINT</code>{' '}
                    is configured. Nothing is sent by this build.
                  </p>
                </div>
              )}

              {status === 'sent' ? (
                <div className="border border-ink/20 bg-paper p-7 md:p-10">
                  <p className="label flex items-center gap-2 text-ink/60">
                    <span aria-hidden="true" className="h-[6px] w-[6px] bg-sun" />
                    Inquiry received
                  </p>
                  <h2 className="mt-5 text-2xl font-semibold tracking-tight md:text-3xl">Thank you — it&rsquo;s with us.</h2>
                  <p className="body-copy mt-4">
                    Your inquiry has been submitted. We read every message and will come back to you at{' '}
                    <span className="text-ink">{form.email}</span> if there is a fit.
                  </p>
                  <button type="button" onClick={resetForm} className="btn btn-ghost-ink mt-8">
                    Send another message
                  </button>
                </div>
              ) : status === 'unconfigured' ? (
                <div className="border border-ink/20 bg-paper p-7 md:p-10">
                  <p className="label flex items-center gap-2 text-ink/60">
                    <span aria-hidden="true" className="h-[6px] w-[6px] bg-sun" />
                    Not sent
                  </p>
                  <h2 className="mt-5 text-2xl font-semibold tracking-tight md:text-3xl">
                    Your details are valid — but nothing has been sent.
                  </h2>
                  <p className="body-copy mt-4">
                    This website does not have a form submission endpoint configured yet, so we cannot receive this
                    message through the form. Your text is still here: use the button below to open it in your email app
                    and send it directly, or write to{' '}
                    <a href={`mailto:${site.email}`} className="text-ink underline decoration-ink/30 underline-offset-4">
                      {site.email}
                    </a>
                    .
                  </p>

                  <div className="mt-6 border-t border-ink/15 pt-5">
                    <p className="label text-ink/60">Your message</p>
                    <dl className="mt-3 space-y-2 text-[13px] font-light text-ink/70">
                      <div className="flex gap-2">
                        <dt className="w-28 shrink-0 text-ink/60">Name</dt>
                        <dd>{form.fullName}</dd>
                      </div>
                      <div className="flex gap-2">
                        <dt className="w-28 shrink-0 text-ink/60">Company</dt>
                        <dd>{form.company}</dd>
                      </div>
                      <div className="flex gap-2">
                        <dt className="w-28 shrink-0 text-ink/60">Service</dt>
                        <dd>{form.service}</dd>
                      </div>
                    </dl>
                  </div>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <a href={mailtoHref()} className="btn btn-solid">
                      Open in email
                      <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                    </a>
                    <a
                      href={site.whatsappHref}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="btn btn-ghost-ink"
                    >
                      WhatsApp instead
                    </a>
                    <button type="button" onClick={() => setStatus('idle')} className="btn btn-ghost-ink">
                      Back to form
                    </button>
                  </div>
                </div>
              ) : status === 'error' ? (
                <div className="border border-ink/20 bg-paper p-7 md:p-10">
                  <p className="label flex items-center gap-2 text-ink/60">
                    <span aria-hidden="true" className="h-[6px] w-[6px] bg-sun" />
                    Submission failed
                  </p>
                  <h2 className="mt-5 text-2xl font-semibold tracking-tight md:text-3xl">
                    That didn&rsquo;t go through.
                  </h2>
                  <p className="body-copy mt-4">
                    The request could not be completed, so your message has not been sent. You can try again, or email
                    us directly at{' '}
                    <a href={`mailto:${site.email}`} className="text-ink underline decoration-ink/30 underline-offset-4">
                      {site.email}
                    </a>
                    .
                  </p>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <button type="button" onClick={() => setStatus('idle')} className="btn btn-ink">
                      Try again
                    </button>
                    <a href={mailtoHref()} className="btn btn-ghost-ink">
                      Email instead
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="border border-ink/15 bg-paper p-6 md:p-9">
                  <div className="flex items-end justify-between gap-4 border-b border-ink/15 pb-5">
                    <div>
                      <Eyebrow surface="light">Project inquiry</Eyebrow>
                      <h2 className="mt-3 text-xl font-semibold tracking-tight md:text-2xl">Tell us what you need</h2>
                    </div>
                    <p className="label hidden text-ink/60 sm:block">* required</p>
                  </div>

                  <div className="mt-6 grid gap-6 sm:grid-cols-2">
                    <div>
                      <FieldLabel htmlFor="fullName" required>
                        Full name
                      </FieldLabel>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        autoComplete="name"
                        required
                        aria-required="true"
                        aria-invalid={Boolean(errors.fullName)}
                        aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                        value={form.fullName}
                        onChange={(event) => update('fullName')(event.target.value)}
                        className="field mt-2"
                        placeholder="Your name"
                      />
                      <FieldError id="fullName-error" message={errors.fullName} />
                    </div>

                    <div>
                      <FieldLabel htmlFor="email" required>
                        Work email
                      </FieldLabel>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        aria-required="true"
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                        value={form.email}
                        onChange={(event) => update('email')(event.target.value)}
                        className="field mt-2"
                        placeholder="name@company.com"
                      />
                      <FieldError id="email-error" message={errors.email} />
                    </div>

                    <div>
                      <FieldLabel htmlFor="company" required>
                        Company / brand
                      </FieldLabel>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        autoComplete="organization"
                        required
                        aria-required="true"
                        aria-invalid={Boolean(errors.company)}
                        aria-describedby={errors.company ? 'company-error' : undefined}
                        value={form.company}
                        onChange={(event) => update('company')(event.target.value)}
                        className="field mt-2"
                        placeholder="Brand name"
                      />
                      <FieldError id="company-error" message={errors.company} />
                    </div>

                    <div>
                      <FieldLabel htmlFor="link">Website or social media</FieldLabel>
                      <input
                        id="link"
                        name="link"
                        type="text"
                        autoComplete="url"
                        value={form.link}
                        onChange={(event) => update('link')(event.target.value)}
                        className="field mt-2"
                        placeholder="brand.com or @brand"
                      />
                    </div>

                    <div>
                      <FieldLabel htmlFor="service" required>
                        Service interested in
                      </FieldLabel>
                      <select
                        id="service"
                        name="service"
                        required
                        aria-required="true"
                        aria-invalid={Boolean(errors.service)}
                        aria-describedby={errors.service ? 'service-error' : undefined}
                        value={form.service}
                        onChange={(event) => update('service')(event.target.value)}
                        className={cn('field mt-2', !form.service && 'text-ink/60')}
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service.key} value={service.name}>
                            {service.name}
                          </option>
                        ))}
                        <option value="Not sure yet">Not sure yet</option>
                      </select>
                      <FieldError id="service-error" message={errors.service} />
                    </div>

                    <div>
                      <FieldLabel htmlFor="budget">Monthly marketing budget</FieldLabel>
                      <select
                        id="budget"
                        name="budget"
                        value={form.budget}
                        onChange={(event) => update('budget')(event.target.value)}
                        className="field mt-2"
                      >
                        {budgets.map((budget) => (
                          <option key={budget} value={budget}>
                            {budget}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="mt-6">
                    <FieldLabel htmlFor="message" required>
                      Tell us about your project
                    </FieldLabel>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      aria-required="true"
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? 'message-error' : 'message-hint'}
                      value={form.message}
                      onChange={(event) => update('message')(event.target.value)}
                      className="field mt-2 resize-y"
                      placeholder="What are you trying to achieve, and what is currently in the way?"
                    />
                    {errors.message ? (
                      <FieldError id="message-error" message={errors.message} />
                    ) : (
                      <p id="message-hint" className="mt-2 text-[12px] font-light text-ink/60">
                        The more specific the constraint, the more useful our first reply will be.
                      </p>
                    )}
                  </div>

                  {Object.keys(errors).length > 0 && (
                    <p role="alert" className="mt-6 border-l-2 border-sun pl-3 text-[12px] font-medium text-ink">
                      Please check the highlighted fields above.
                    </p>
                  )}

                  <div className="mt-7 flex flex-wrap items-center gap-4 border-t border-ink/15 pt-6">
                    <button type="submit" disabled={status === 'submitting'} className="btn btn-ink disabled:opacity-60">
                      {status === 'submitting' ? 'Sending…' : 'Send inquiry'}
                      <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                    </button>
                    <p className="max-w-[26ch] text-[11px] font-light leading-relaxed text-ink/60">
                      {ENDPOINT
                        ? 'Your details are used only to respond to this inquiry.'
                        : 'Submission endpoint not configured — review this form before launch.'}
                    </p>
                  </div>
                </form>
              )}
            </Reveal>

            <aside className="lg:col-span-5">
              <Reveal className="lg:sticky lg:top-28" y={18} delay={0.1}>
                <Eyebrow surface="light">Direct lines</Eyebrow>

                <ul className="mt-6 space-y-px border-t border-ink/15">
                  <li className="border-b border-ink/15">
                    <a href={`mailto:${site.email}`} className="group flex items-center justify-between gap-4 py-5">
                      <span className="flex items-center gap-4">
                        <Mail aria-hidden="true" className="h-4 w-4 text-ink/60" />
                        <span>
                          <span className="label block text-ink/60">Email</span>
                          <span className="mt-1 block text-[15px] font-light text-ink transition-colors group-hover:text-ink/60">
                            {site.email}
                          </span>
                        </span>
                      </span>
                      <ArrowUpRight
                        aria-hidden="true"
                        className="h-4 w-4 text-ink/60 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
                      />
                    </a>
                  </li>
                  <li className="border-b border-ink/15">
                    <a
                      href={site.whatsappHref}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="group flex items-center justify-between gap-4 py-5"
                    >
                      <span className="flex items-center gap-4">
                        <MessageCircle aria-hidden="true" className="h-4 w-4 text-ink/60" />
                        <span>
                          <span className="label block text-ink/60">WhatsApp</span>
                          <span className="mt-1 block text-[15px] font-light text-ink transition-colors group-hover:text-ink/60">
                            {site.whatsapp}
                          </span>
                        </span>
                      </span>
                      <ArrowUpRight
                        aria-hidden="true"
                        className="h-4 w-4 text-ink/60 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
                      />
                    </a>
                  </li>
                  <li className="border-b border-ink/15">
                    <div className="flex items-center gap-4 py-5">
                      <MapPin aria-hidden="true" className="h-4 w-4 text-ink/60" />
                      <span>
                        <span className="label block text-ink/60">Locations</span>
                        <span className="mt-1 block text-[15px] font-light text-ink">{site.cities.join(' · ')}</span>
                      </span>
                    </div>
                  </li>
                </ul>

                <div className="mt-8 border border-ink/15 p-5">
                  <p className="label text-ink/60">What happens next</p>
                  <ul className="mt-3 space-y-2.5">
                    {[
                      'We read the brief and check whether the objective is clear enough to plan against.',
                      'If we are a fit, we come back with a point of view and the questions we still need answered.',
                      'If we are not the right partner, we say so and point you somewhere better.',
                    ].map((item) => (
                      <li key={item} className="relative pl-4 text-[13px] font-light leading-relaxed text-ink/65">
                        <span aria-hidden="true" className="absolute left-0 top-[0.6em] h-[3px] w-[3px] bg-sun" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="mt-6 text-[11px] font-light leading-relaxed text-ink/60">
                  No physical office address is published. Projects are run across {site.cities.join(', ')} and remotely
                  with clients elsewhere.
                </p>
              </Reveal>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
