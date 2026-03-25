import { Check, User, TrendingUp, Lock, Download } from 'lucide-react';
import { cn } from '@/lib/utils';

export function GrowthCareerRoadmap() {
	return (
		<div className='flex flex-col gap-6'>
			{/* Header */}
			<div className='flex flex-wrap items-center justify-between gap-4'>
				<div>
					<h2 className='text-base font-black tracking-wide text-white uppercase'>
						Strategic Career Roadmap
					</h2>
					<p className='text-xs text-muted-foreground'>
						Next Phase: Technical Leadership Certification (Q4 2024)
					</p>
				</div>
				<button className='flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-bold tracking-wider text-white uppercase transition-colors hover:bg-white/10'>
					<Download className='size-3' />
					Export Strategy
				</button>
			</div>

			{/* Timeline Component */}
			<div className='relative rounded-lg border border-white/5 bg-white/[0.02] p-8 md:p-12'>
				{/* Horizontal Line background */}
				<div className='absolute top-1/2 left-12 right-12 h-px -translate-y-[calc(50%+16px)] bg-white/5 md:left-24 md:right-24' />

				<div className='relative flex items-center justify-between'>
					{/* Node 1: Junior Tier */}
					<div className='flex flex-col items-center gap-4 text-center'>
						<div className='flex size-10 items-center justify-center bg-surface-dim'>
							<div className='flex size-8 items-center justify-center rounded bg-white/5 text-muted-foreground'>
								<Check className='size-4' />
							</div>
						</div>
						<div>
							<h4 className='text-[10px] font-bold tracking-wider text-muted-foreground uppercase'>
								Junior Tier
							</h4>
							<p className='mt-1 text-[8px] tracking-wider text-muted-foreground/50 uppercase'>
								Completed Q1 '22
							</p>
						</div>
					</div>

					{/* Node 2: Senior Tier (Active) */}
					<div className='flex flex-col items-center gap-4 text-center'>
						{/* Progress line leading up to this point */}
						<div className='absolute top-[19px] left-0 -z-10 h-px w-1/3 bg-white/20' />

						<div className='flex size-10 items-center justify-center bg-surface-dim'>
							<div className='flex size-8 items-center justify-center rounded bg-white text-surface-dim'>
								<User className='size-4' />
							</div>
						</div>
						<div>
							<h4 className='text-[10px] font-bold tracking-wider text-white uppercase'>
								Senior Tier
							</h4>
							<p className='mt-1 text-[8px] font-bold tracking-wider text-primary-container uppercase'>
								Active Assignment
							</p>
						</div>
					</div>

					{/* Node 3: Tech Lead */}
					<div className='flex flex-col items-center gap-4 text-center'>
						<div className='flex size-10 items-center justify-center bg-surface-dim'>
							<div className='flex size-8 items-center justify-center rounded bg-white/5 text-muted-foreground'>
								<TrendingUp className='size-4' />
							</div>
						</div>
						<div>
							<h4 className='text-[10px] font-bold tracking-wider text-muted-foreground uppercase'>
								Tech Lead
							</h4>
							<p className='mt-1 text-[8px] tracking-wider text-muted-foreground/50 uppercase'>
								Target Q4 '24
							</p>
						</div>
					</div>

					{/* Node 4: Engineering Manager */}
					<div className='flex flex-col items-center gap-4 text-center'>
						<div className='flex size-10 items-center justify-center bg-surface-dim'>
							<div className='flex size-8 items-center justify-center rounded bg-white/5 text-muted-foreground/30'>
								<Lock className='size-4' />
							</div>
						</div>
						<div>
							<h4 className='text-[10px] font-bold tracking-wider text-muted-foreground/50 uppercase'>
								Engineering Manager
							</h4>
							<p className='mt-1 text-[8px] tracking-wider text-muted-foreground/50 uppercase'>
								Future Track
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
