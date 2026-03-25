export function GrowthCompetencyVectors() {
	return (
		<div className='grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16'>
			{/* Left Column — Text & Bars */}
			<div className='flex flex-col justify-center gap-8'>
				<div>
					<h2 className='text-base font-black tracking-wide text-white uppercase'>
						Competency Vectors
					</h2>
					<p className='mt-2 text-xs leading-relaxed text-muted-foreground'>
						Comprehensive analysis against Tech Lead benchmarks. Priority
						focus areas:{' '}
						<span className='font-bold italic text-primary-container'>
							System Architecture
						</span>{' '}
						and{' '}
						<span className='font-bold italic text-primary-container'>
							Strategic Product Ops
						</span>
						.
					</p>
				</div>

				<div className='flex flex-col gap-6'>
					{/* React Core Vector */}
					<div className='flex flex-col gap-2'>
						<div className='flex items-center justify-between text-[10px] font-bold tracking-wider uppercase'>
							<span className='text-white'>React Core / Architecture</span>
							<span className='text-primary-container'>Advanced</span>
						</div>
						<div className='h-0.5 w-full bg-white/10'>
							<div className='h-full w-4/5 bg-primary-container' />
						</div>
					</div>

					{/* System Design Vector */}
					<div className='flex flex-col gap-2'>
						<div className='flex items-center justify-between text-[10px] font-bold tracking-wider uppercase'>
							<span className='text-white'>System Design</span>
							<span className='text-muted-foreground'>Developing</span>
						</div>
						<div className='h-0.5 w-full bg-white/10'>
							<div className='h-full w-1/3 bg-white/40' />
						</div>
					</div>
				</div>
			</div>

			{/* Right Column — Radar Chart (SVG visual representation) */}
			<div className='flex items-center justify-center p-4'>
				<div className='relative flex size-64 items-center justify-center'>
					{/* SVG Radar implementation */}
					<svg
						viewBox='0 0 200 200'
						className='absolute inset-0 size-full overflow-visible'
					>
						{/* Background Rings */}
						<circle
							cx='100'
							cy='100'
							r='80'
							fill='none'
							stroke='currentColor'
							className='text-white/5'
							strokeWidth='1'
						/>
						<circle
							cx='100'
							cy='100'
							r='60'
							fill='none'
							stroke='currentColor'
							className='text-white/5'
							strokeWidth='1'
						/>
						<circle
							cx='100'
							cy='100'
							r='40'
							fill='none'
							stroke='currentColor'
							className='text-white/10'
							strokeWidth='1'
						/>

						{/* Axes */}
						<line
							x1='100'
							y1='100'
							x2='100'
							y2='20'
							stroke='currentColor'
							className='text-white/10'
						/>
						<line
							x1='100'
							y1='100'
							x2='176'
							y2='75'
							stroke='currentColor'
							className='text-white/10'
						/>
						<line
							x1='100'
							y1='100'
							x2='147'
							y2='164'
							stroke='currentColor'
							className='text-white/10'
						/>
						<line
							x1='100'
							y1='100'
							x2='53'
							y2='164'
							stroke='currentColor'
							className='text-white/10'
						/>
						<line
							x1='100'
							y1='100'
							x2='24'
							y2='75'
							stroke='currentColor'
							className='text-white/10'
						/>

						{/* Radar Polygon (Data Area) */}
						{/* Points mapping roughly: Top(80%), TopRight(70%), BottomRight(50%), BottomLeft(60%), TopLeft(85%) */}
						<polygon
							points='100,36 153,82 123,132 64,138 35,66'
							fill='currentColor'
							stroke='currentColor'
							strokeWidth='1'
							className='fill-primary-container/[0.04] text-primary-container'
						/>

						{/* Data Points */}
						<circle cx='100' cy='36' r='3' fill='white' />
						<circle cx='153' cy='82' r='3' fill='white' />
						<circle cx='123' cy='132' r='3' fill='white' />
						<circle cx='64' cy='138' r='3' fill='white' />
						<circle cx='35' cy='66' r='3' fill='white' />
					</svg>

					{/* Labels (absolutely positioned around SVG) */}
					<span className='absolute -top-6 text-[8px] font-bold tracking-[0.2em] text-muted-foreground uppercase'>
						Tech
					</span>
					<span className='absolute -bottom-6 text-[8px] font-bold tracking-[0.2em] text-muted-foreground uppercase'>
						Lead
					</span>
				</div>
			</div>
		</div>
	);
}
