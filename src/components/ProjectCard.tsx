import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '../data/projects'
import { CampaignFrame } from './CampaignFrame'
import { cn } from '../lib/cn'

export function ProjectCard({
  project,
  className,
  aspect = '4 / 5',
  priority = false,
}: {
  project: Project
  className?: string
  aspect?: string
  priority?: boolean
}) {
  return (
    <Link
      to={`/work/${project.slug}`}
      className={cn('group block focus-visible:outline-offset-4', className)}
      aria-label={`${project.client} — ${project.discipline} case study`}
    >
      <div className="relative overflow-hidden">
        <CampaignFrame
          seed={project.slug}
          label={project.client}
          category={project.discipline}
          tone="ink"
          aspect={aspect}
          image={project.gallery[0]?.image}
          priority={priority}
          className="transition-transform duration-[700ms] ease-editorial will-change-transform group-hover:scale-[1.04]"
        />

        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent opacity-0 transition-opacity duration-500 ease-editorial group-hover:opacity-100"
        />
        <span
          aria-hidden="true"
          className="label pointer-events-none absolute right-4 top-4 inline-flex translate-y-1.5 items-center gap-2 border border-white/40 bg-ink/70 px-2.5 py-1.5 text-white opacity-0 backdrop-blur-sm transition-all duration-500 ease-editorial group-hover:translate-y-0 group-hover:opacity-100 md:right-5 md:top-5"
        >
          View case study
          <ArrowUpRight className="h-3 w-3 text-sun" />
        </span>
      </div>

      <div className="mt-4 flex items-start justify-between gap-5 border-t border-white/15 pt-3">
        <div>
          <h3 className="text-lg font-semibold leading-tight tracking-tight text-white transition-[color,transform] duration-500 ease-editorial group-hover:-translate-y-0.5 group-hover:text-sun md:text-xl">
            {project.client}
          </h3>
          <p className="label mt-2 text-white/60 transition-colors duration-500 group-hover:text-white/80">
            {project.discipline}
          </p>
        </div>
        <div className="flex items-start gap-3">
          {project.metricLabel && (
            <span className="label whitespace-nowrap pt-1 text-sun">{project.metricLabel}</span>
          )}
          <ArrowUpRight
            aria-hidden="true"
            className="mt-0.5 h-4 w-4 shrink-0 text-white/60 transition-all duration-300 ease-editorial group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-sun"
          />
        </div>
      </div>
    </Link>
  )
}

export function ProjectRow({ project, index }: { project: Project; index: number }) {
  const metric = project.results[0]

  return (
    <Link
      to={`/work/${project.slug}`}
      className="group grid grid-cols-12 items-center gap-4 border-b border-white/12 py-5 transition-colors duration-300 ease-editorial hover:bg-white/[0.04] md:gap-6 md:py-6"
      aria-label={`${project.client} — ${project.discipline} case study`}
    >
      <span className="label col-span-2 text-white/60 transition-colors duration-300 group-hover:text-sun md:col-span-1">
        {String(index + 1).padStart(2, '0')}
      </span>

      <div className="col-span-10 min-w-0 md:col-span-4">
        <h3 className="text-[1.35rem] font-semibold leading-[1.05] tracking-tightest text-white transition-[color,transform] duration-500 ease-editorial group-hover:-translate-y-0.5 group-hover:text-sun md:text-[1.75rem]">
          {project.client}
        </h3>
      </div>

      <div className="col-span-8 col-start-1 md:col-span-3 md:col-start-auto">
        <p className="label text-white/60 transition-colors duration-300 group-hover:text-white/80">{project.discipline}</p>
      </div>

      <div className="col-span-3 md:col-span-2">
        {metric ? (
          <span className="text-sm font-light text-white/75">
            <span className="font-medium text-white">{metric.value}</span>{' '}
            <span className="text-white/60">{metric.label.toLowerCase()}</span>
          </span>
        ) : (
          <span className="label text-white/60">Figures on request</span>
        )}
      </div>

      <div className="col-span-1 hidden md:block">
        <CampaignFrame
          seed={`${project.slug}-thumb`}
          label={project.client}
          tone="ink"
          aspect="1 / 1"
          compact
          className="w-14 opacity-70 transition-[opacity,transform] duration-500 ease-editorial group-hover:-translate-y-1 group-hover:opacity-100"
        />
      </div>

      <div className="col-span-1 flex justify-end md:col-span-1">
        <ArrowUpRight
          aria-hidden="true"
          className="h-5 w-5 text-white/60 transition-all duration-300 ease-editorial group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-sun"
        />
      </div>
    </Link>
  )
}
