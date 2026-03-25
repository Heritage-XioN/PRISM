import { WorkforceMatchCard } from '@/components/block/workforce-match-card';

const matches = [
	{
		name: 'Marcus Chen',
		role: 'Senior Frontend Architect',
		location: 'San Francisco',
		salary: '$160K - $190K',
		availability: 'Available Now',
		availabilityColor: 'text-emerald-400',
		fitPercent: 98,
		alignment:
			'Expert leverage of React/FinTech architecture via Stripe. High performance UI capability confirmed through artifact analysis.',
		initials: 'MC',
	},
	{
		name: 'Elena Rodriguez',
		role: 'Principal UI Engineer',
		location: 'Austin, TX',
		salary: '$175K - $210K',
		availability: 'Immediate',
		availabilityColor: 'text-emerald-400',
		fitPercent: 92,
		alignment:
			'Master-level TypeScript systems. Specialized in global-scale design governance.',
		initials: 'ER',
	},
];

export function WorkforceMatches() {
	return (
		<div className='flex flex-col gap-4'>
			{/* Header */}
			<div className='flex items-center justify-between'>
				<span className='text-[10px] font-bold tracking-[0.15em] text-white uppercase'>
					High-Fidelity Matches
				</span>
				<span className='text-[10px] font-semibold tracking-wider text-muted-foreground uppercase'>
					Count: 124 Results
				</span>
			</div>

			{/* Cards */}
			<div className='flex flex-col gap-4'>
				{matches.map((match) => (
					<WorkforceMatchCard key={match.name} {...match} />
				))}
			</div>

			{/* Expand Button */}
			<button className='mx-auto mt-2 w-full max-w-md rounded-lg border border-white/10 bg-white/[0.03] px-8 py-3 text-xs font-bold tracking-[0.15em] text-white uppercase transition-colors hover:bg-white/[0.06]'>
				Expand Intelligence
			</button>
		</div>
	);
}
