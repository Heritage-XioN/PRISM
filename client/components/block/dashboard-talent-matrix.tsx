import { Settings, ChevronDown, Maximize2 } from 'lucide-react';

const hexPositions = [
	{ top: '10%', left: '40%', hasAvatar: false },
	{ top: '28%', left: '32%', hasAvatar: false },
	{ top: '28%', left: '48%', hasAvatar: false },
	{ top: '46%', left: '24%', hasAvatar: false },
	{ top: '46%', left: '40%', hasAvatar: true },
	{ top: '46%', left: '56%', hasAvatar: false },
	{ top: '64%', left: '32%', hasAvatar: false },
	{ top: '64%', left: '48%', hasAvatar: false },
	{ top: '82%', left: '40%', hasAvatar: false },
];

export function DashboardTalentMatrix() {
	return (
		<div className='flex flex-col rounded-lg border border-white/5 bg-white/[0.02]'>
			{/* Header */}
			<div className='flex items-center justify-between border-b border-white/5 px-5 py-3.5'>
				<div className='flex items-center gap-2'>
					<Settings className='size-4 text-primary-container' />
					<span className='text-[10px] font-bold tracking-[0.15em] text-white uppercase'>
						Visual Talent Matrix
					</span>
				</div>
				<div className='flex items-center gap-2'>
					<button className='flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:bg-white/10'>
						Engineering
						<ChevronDown className='size-3' />
					</button>
					<button className='flex size-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-white/5 hover:text-white'>
						<Maximize2 className='size-3.5' />
					</button>
				</div>
			</div>

			{/* Hex Grid */}
			<div className='relative min-h-[400px] w-full overflow-hidden p-6 lg:min-h-[480px]'>
				{/* Connection Lines — decorative SVG */}
				<svg
					className='pointer-events-none absolute inset-0 size-full'
					xmlns='http://www.w3.org/2000/svg'
				>
					<line
						x1='50%'
						y1='18%'
						x2='42%'
						y2='32%'
						stroke='rgba(13,166,242,0.15)'
						strokeWidth='1'
					/>
					<line
						x1='50%'
						y1='18%'
						x2='58%'
						y2='32%'
						stroke='rgba(13,166,242,0.15)'
						strokeWidth='1'
					/>
					<line
						x1='42%'
						y1='36%'
						x2='34%'
						y2='50%'
						stroke='rgba(13,166,242,0.15)'
						strokeWidth='1'
					/>
					<line
						x1='42%'
						y1='36%'
						x2='50%'
						y2='50%'
						stroke='rgba(13,166,242,0.15)'
						strokeWidth='1'
					/>
					<line
						x1='58%'
						y1='36%'
						x2='50%'
						y2='50%'
						stroke='rgba(13,166,242,0.15)'
						strokeWidth='1'
					/>
					<line
						x1='58%'
						y1='36%'
						x2='66%'
						y2='50%'
						stroke='rgba(13,166,242,0.15)'
						strokeWidth='1'
					/>
					<line
						x1='34%'
						y1='54%'
						x2='42%'
						y2='68%'
						stroke='rgba(13,166,242,0.15)'
						strokeWidth='1'
					/>
					<line
						x1='50%'
						y1='54%'
						x2='42%'
						y2='68%'
						stroke='rgba(13,166,242,0.15)'
						strokeWidth='1'
					/>
					<line
						x1='50%'
						y1='54%'
						x2='58%'
						y2='68%'
						stroke='rgba(13,166,242,0.15)'
						strokeWidth='1'
					/>
					<line
						x1='42%'
						y1='72%'
						x2='50%'
						y2='86%'
						stroke='rgba(13,166,242,0.15)'
						strokeWidth='1'
					/>
					<line
						x1='58%'
						y1='72%'
						x2='50%'
						y2='86%'
						stroke='rgba(13,166,242,0.15)'
						strokeWidth='1'
					/>
				</svg>

				{/* Hex Nodes */}
				{hexPositions.map((pos, i) => (
					<div
						key={i}
						className='absolute -translate-x-1/2 -translate-y-1/2'
						style={{ top: pos.top, left: pos.left }}
					>
						<div
							className={`flex size-14 items-center justify-center rounded-xl border transition-colors lg:size-16 ${
								pos.hasAvatar
									? 'border-primary-container/40 bg-primary-container/10'
									: 'border-white/10 bg-white/[0.03] hover:border-white/20'
							}`}
							style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
						>
							<div
								className={`size-8 rounded-full lg:size-9 ${
									pos.hasAvatar
										? 'bg-primary-container/30'
										: 'bg-white/10'
								}`}
							/>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
