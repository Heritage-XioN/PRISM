import { ArrowRight } from 'lucide-react';

const opportunities = [
	{
		id: 1,
		badge: 'Expires in 14 Days',
		xp: '+15 XP',
		title: 'Global Infrastructure Core',
		description:
			'Lead the multi-region migration project for the Kubernetes edge-layer overhaul. High technical impact.',
		tags: ['L5', 'K8'],
	},
	{
		id: 2,
		badge: 'New Entry',
		badgeDark: true,
		xp: '+10 XP',
		title: 'Design System Mentorship',
		description:
			'Strategic guidance for cross-functional teams adopting the Obsidian 2.0 interface guidelines.',
		tags: ['M3'],
	},
];

export function GrowthExecutiveOpportunities() {
	return (
		<div className='flex flex-col gap-6'>
			{/* Header */}
			<div className='flex flex-wrap items-center justify-between gap-4'>
				<div className='flex items-center gap-3'>
					<h2 className='text-base font-black tracking-wide text-white uppercase'>
						Executive Opportunities
					</h2>
					<span className='rounded border border-primary-container px-2 py-0.5 text-[9px] font-black tracking-wider text-primary-container uppercase'>
						High Match
					</span>
				</div>
				<button className='group flex items-center gap-1.5 text-[10px] font-bold tracking-wider text-muted-foreground uppercase hover:text-white'>
					Explore Global Board
					<ArrowRight className='size-3 transition-transform group-hover:translate-x-1' />
				</button>
			</div>

			{/* Cards */}
			<div className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
				{opportunities.map((opp) => (
					<div
						key={opp.id}
						className='flex flex-col justify-between rounded-lg border border-white/5 bg-white/[0.02] p-6 transition-colors hover:border-white/10'
					>
						<div>
							<div className='flex items-center justify-between'>
								<span
									className={`rounded px-2 py-1 text-[9px] font-black tracking-wider uppercase ${
										opp.badgeDark
											? 'bg-white/10 text-white'
											: 'bg-primary-container/20 text-primary-container'
									}`}
								>
									{opp.badge}
								</span>
								<span className='text-[10px] font-black text-white'>
									{opp.xp}
								</span>
							</div>
							<h3 className='mt-6 text-lg font-bold tracking-tight text-white'>
								{opp.title}
							</h3>
							<p className='mt-2 text-[11px] leading-relaxed text-muted-foreground'>
								{opp.description}
							</p>
						</div>

						<div className='mt-8 flex items-center justify-between'>
							<div className='flex gap-1.5'>
								{opp.tags.map((tag) => (
									<span
										key={tag}
										className='flex size-6 items-center justify-center rounded bg-white/5 text-[8px] font-bold text-muted-foreground'
									>
										{tag}
									</span>
								))}
							</div>
							<button className='rounded text-[9px] font-black tracking-wider text-white uppercase transition-colors hover:bg-white/10 border border-white/10 px-4 py-2'>
								Submit Intent
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
