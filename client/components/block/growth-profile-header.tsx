export function GrowthProfileHeader() {
	return (
		<div className='flex items-center gap-6'>
			{/* Avatar */}
			<div className='relative shrink-0'>
				<div className='flex size-24 items-center justify-center rounded-2xl bg-surface-container-high md:size-32'>
					<span className='text-4xl font-bold text-muted-foreground'>
						AC
					</span>
				</div>
				{/* Status Dot */}
				<div className='absolute -right-1 -bottom-1 size-4 rounded-full border-2 border-surface-dim bg-primary-container' />
			</div>

			{/* Info */}
			<div className='flex min-w-0 flex-1 flex-col justify-center'>
				<h1 className='text-3xl font-black tracking-tight text-white uppercase md:text-4xl'>
					Alex Chen
				</h1>
				<p className='mt-1 text-xs font-bold tracking-[0.15em] text-muted-foreground uppercase lg:text-sm'>
					Senior Software Engineer • Obsidian Group
				</p>

				{/* Actions */}
				<div className='mt-4 flex flex-wrap items-center gap-3'>
					<button className='rounded text-[10px] font-black tracking-[0.15em] text-surface-dim uppercase transition-colors hover:bg-white/90 bg-white px-4 py-2'>
						Modify Profile
					</button>
					<div className='flex items-center gap-2 rounded border border-white/10 bg-white/5 px-4 py-2'>
						<span className='text-[10px] font-semibold tracking-wider text-muted-foreground uppercase'>
							Growth Score
						</span>
						<span className='text-[10px] font-black tracking-wider text-primary-container'>
							84/100
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}
