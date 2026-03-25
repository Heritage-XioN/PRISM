import { Bookmark, Mail, MapPin, DollarSign, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

interface WorkforceMatchCardProps {
	name: string;
	role: string;
	location: string;
	salary: string;
	availability: string;
	availabilityColor?: string;
	fitPercent: number;
	alignment: string;
	initials: string;
}

export function WorkforceMatchCard({
	name,
	role,
	location,
	salary,
	availability,
	availabilityColor = 'text-emerald-400',
	fitPercent,
	alignment,
	initials,
}: WorkforceMatchCardProps) {
	return (
		<div className='rounded-lg border border-white/5 bg-white/[0.02] p-5 transition-colors hover:border-white/10'>
			<div className='flex gap-4'>
				{/* Avatar + Fit Badge */}
				<div className='relative shrink-0'>
					<div className='flex size-16 items-center justify-center rounded-lg bg-surface-container-high'>
						<span className='text-lg font-bold text-muted-foreground'>
							{initials}
						</span>
					</div>
					<div className='absolute -bottom-2 left-1/2 -translate-x-1/2 rounded bg-primary-container px-2 py-0.5 text-[10px] font-bold text-white'>
						{fitPercent}%FIT
					</div>
				</div>

				{/* Details */}
				<div className='flex min-w-0 flex-1 flex-col gap-2'>
					<div className='flex items-start justify-between'>
						<div>
							<h3 className='text-lg font-black tracking-tight text-white uppercase'>
								{name}
							</h3>
							<p className='text-xs font-bold tracking-wider text-primary-container uppercase'>
								{role}
							</p>
						</div>
						{/* Actions */}
						<div className='flex items-center gap-1.5'>
							<button className='flex size-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-white/5 hover:text-white'>
								<Bookmark className='size-4' />
							</button>
							<button className='flex size-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-white/5 hover:text-white'>
								<Mail className='size-4' />
							</button>
						</div>
					</div>

					{/* Meta */}
					<div className='flex flex-wrap items-center gap-3 text-xs text-muted-foreground'>
						<span className='flex items-center gap-1'>
							<MapPin className='size-3' />
							{location}
						</span>
						<span className='flex items-center gap-1'>
							<DollarSign className='size-3' />
							{salary}
						</span>
						<span className={cn('flex items-center gap-1', availabilityColor)}>
							<Clock className='size-3' />
							{availability}
						</span>
					</div>

					{/* Strategic Alignment */}
					<div className='mt-1 rounded-md bg-white/[0.03] px-3 py-2'>
						<p className='text-xs leading-relaxed text-muted-foreground'>
							<span className='font-bold tracking-wide text-white uppercase'>
								Strategic Alignment:{' '}
							</span>
							{alignment}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
