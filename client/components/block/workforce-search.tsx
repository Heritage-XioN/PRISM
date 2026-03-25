import { Sparkles, X, ChevronDown, SlidersHorizontal } from 'lucide-react';

export function WorkforceSearch() {
	return (
		<div className='flex flex-col gap-5'>
			{/* Title */}
			<div>
				<h2 className='text-3xl font-black italic tracking-tight text-white uppercase md:text-4xl'>
					Talent Intelligence
				</h2>
				<div className='mt-2 h-0.5 w-24 bg-primary-container' />
			</div>

			{/* AI Search Input */}
			<div className='flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3'>
				<Sparkles className='size-5 shrink-0 text-primary-container' />
				<input
					type='text'
					placeholder='Define critical parameters (e.g. Principal UI Ar...'
					className='flex-1 bg-transparent text-sm text-white placeholder:text-muted-foreground focus:outline-none'
				/>
				<button className='rounded-md border border-white/20 bg-transparent px-5 py-2 text-xs font-bold tracking-wider text-white uppercase transition-colors hover:bg-white/10'>
					Execute
				</button>
			</div>

			{/* Filter Chips */}
			<div className='flex flex-wrap items-center gap-2'>
				<button className='flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold tracking-wide text-muted-foreground uppercase transition-colors hover:bg-white/10'>
					Remote
					<ChevronDown className='size-3' />
				</button>
				<button className='flex items-center gap-1.5 rounded-md border border-primary-container/40 bg-primary-container/10 px-3 py-1.5 text-xs font-semibold tracking-wide text-primary-container uppercase'>
					Experience 5+
					<X className='size-3' />
				</button>
				<button className='flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold tracking-wide text-muted-foreground uppercase transition-colors hover:bg-white/10'>
					<SlidersHorizontal className='size-3' />
					More Filters
				</button>
			</div>
		</div>
	);
}
