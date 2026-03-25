import { Sparkles } from 'lucide-react';

const competencies = ['Next.js 14', 'Rust', 'LLM Ops', 'Web3.js'];

export function WorkforceMarketSnapshot() {
	return (
		<div className='flex flex-col gap-5'>
			{/* Market Snapshot Header */}
			<span className='text-[10px] font-bold tracking-[0.15em] text-muted-foreground uppercase'>
				Market Snapshot
			</span>

			{/* Avg. Valuation */}
			<div className='rounded-lg border border-white/5 bg-white/[0.02] p-4'>
				<span className='text-[10px] font-semibold tracking-[0.15em] text-muted-foreground uppercase'>
					Avg. Valuation
				</span>
				<div className='mt-1 text-2xl font-black tracking-tight text-white'>
					$172,500
				</div>
				<span className='text-xs font-semibold text-emerald-400'>
					+4.2% YOY
				</span>
			</div>

			{/* Talent Density */}
			<div className='rounded-lg border border-white/5 bg-white/[0.02] p-4'>
				<div className='flex items-center justify-between'>
					<span className='text-[10px] font-semibold tracking-[0.15em] text-muted-foreground uppercase'>
						Talent Density
					</span>
					<span className='text-[10px] font-bold tracking-wider text-primary-container uppercase'>
						Optimal
					</span>
				</div>
				<div className='mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/10'>
					<div className='h-full w-4/5 rounded-full bg-primary-container' />
				</div>
			</div>

			{/* Critical Competencies */}
			<div>
				<span className='text-[10px] font-bold tracking-[0.15em] text-muted-foreground uppercase'>
					Critical Competencies
				</span>
				<div className='mt-3 flex flex-wrap gap-2'>
					{competencies.map((comp) => (
						<span
							key={comp}
							className='rounded-md border border-primary-container/30 bg-primary-container/10 px-2.5 py-1 text-[10px] font-bold tracking-wider text-primary-container uppercase'
						>
							{comp}
						</span>
					))}
				</div>
			</div>

			{/* Automate Outreach CTA */}
			<div className='rounded-lg bg-gradient-to-br from-primary-container to-primary-container/80 p-5'>
				<div className='flex flex-col items-center gap-3 text-center'>
					<Sparkles className='size-8 text-white' />
					<h4 className='text-sm font-black tracking-wide text-white uppercase'>
						Automate Outreach
					</h4>
					<p className='text-[10px] font-semibold tracking-wider text-white/80 uppercase'>
						Autonomous AI engagement for top-tier matches.
					</p>
					<button className='mt-1 w-full rounded-md bg-surface-dim/40 px-4 py-2.5 text-xs font-bold tracking-[0.15em] text-white uppercase backdrop-blur transition-colors hover:bg-surface-dim/60'>
						Launch Sequence
					</button>
				</div>
			</div>
		</div>
	);
}
