export function DashboardOverviewHeader() {
	return (
		<div className='flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between'>
			{/* Left — Title + Subtitle */}
			<div>
				<h2 className='text-3xl font-black tracking-tight text-white uppercase md:text-4xl'>
					Intelligence Overview
				</h2>
				<p className='mt-1 text-sm text-muted-foreground'>
					Real-time workforce mapping &amp; predictive analytics
				</p>
			</div>

			{/* Right — Sync Status */}
			<div className='flex flex-col items-end'>
				<span className='text-[10px] font-semibold tracking-[0.15em] text-muted-foreground uppercase'>
					Sync Status
				</span>
				<span className='text-xs font-mono text-primary-container'>
					2024.10.24_14:32:00
				</span>
			</div>
		</div>
	);
}
