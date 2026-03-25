import { Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

const domains = [
	{ label: 'Cloud Architecture', active: true },
	{ label: 'AI & Machine Learning', active: false },
	{ label: 'Backend Scaling', active: false, highlight: true },
	{ label: 'Leadership', active: false },
	{ label: 'Cybersecurity', active: false },
];

export function GrowthSpecializedDomains() {
	return (
		<div className='flex flex-col gap-4'>
			<h2 className='text-base font-black tracking-wide text-white uppercase'>
				Specialized Domains
			</h2>
			<div className='flex flex-wrap items-center gap-2'>
				{domains.map((domain) => (
					<div
						key={domain.label}
						className={cn(
							'flex h-10 items-center justify-center rounded-sm border px-6 text-[10px] font-black tracking-[0.1em] uppercase transition-colors',
							domain.active
								? 'border-white bg-white text-surface-dim'
								: 'border-white/10 bg-white/5 hover:bg-white/10',
							domain.highlight && !domain.active
								? 'text-primary-container'
								: !domain.active
								? 'text-muted-foreground'
								: ''
						)}
					>
						{domain.label}
					</div>
				))}

				{/* Add Domain Button */}
				<button className='flex h-10 w-10 items-center justify-center rounded-sm border border-white/5 bg-transparent text-muted-foreground transition-colors hover:bg-white/5 hover:text-white'>
					<Plus className='size-4' />
				</button>
			</div>
		</div>
	);
}
