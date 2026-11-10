import { ArrowRight } from 'lucide-react'

// TODO: Update this URL if the main site booking route changes.
const PHASE_0_BOOKING_URL = 'https://exergyheat.com/book-call'

export default function Phase0Cta() {
  return (
    <section className="bg-white dark:bg-surface-800 rounded-xl p-5 sm:p-6 shadow-lg border border-surface-200 dark:border-surface-700">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-surface-900 dark:text-surface-100">
            Next step
          </h2>
          <p className="text-sm text-surface-600 dark:text-surface-400 mt-1 max-w-xl">
            Walk through these results with Exergy on a free Phase 0 Feasibility Check.
          </p>
        </div>
        <a
          href={PHASE_0_BOOKING_URL}
          className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-3 rounded-lg bg-primary-500 text-white font-semibold hover:bg-primary-600 transition-colors"
        >
          Book a free Phase 0 Feasibility Check
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  )
}
