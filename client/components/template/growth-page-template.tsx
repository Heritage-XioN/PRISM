import { GrowthTopbar } from '@/components/block/growth-topbar';
import { GrowthProfileHeader } from '@/components/block/growth-profile-header';
import { GrowthCareerRoadmap } from '@/components/block/growth-career-roadmap';
import { GrowthSpecializedDomains } from '@/components/block/growth-specialized-domains';
import { GrowthExecutiveOpportunities } from '@/components/block/growth-executive-opportunities';
import { GrowthCompetencyVectors } from '@/components/block/growth-competency-vectors';

export default function GrowthPageTemplate() {
	return (
		<>
			<GrowthTopbar />
			<div className='flex flex-col gap-10 p-6 lg:p-12 xl:px-24'>
				{/* Profile Header */}
				<GrowthProfileHeader />

				{/* Divider */}
				<div className='h-px w-full bg-white/5' />

				{/* Career Roadmap */}
				<GrowthCareerRoadmap />

				{/* Specialized Domains */}
				<GrowthSpecializedDomains />

				{/* Divider */}
				<div className='h-px w-full bg-white/5' />

				{/* Executive Opportunities & Competency Vectors */}
				<div className='flex flex-col gap-10 lg:gap-16'>
					<GrowthExecutiveOpportunities />
					<GrowthCompetencyVectors />
				</div>
			</div>

			{/* Footer */}
			<footer className='mt-8 flex items-center justify-between border-t border-white/5 bg-surface-dim px-6 py-8 text-[10px] font-bold tracking-wider text-muted-foreground uppercase lg:px-12'>
				<div className='flex items-center gap-2'>
					<div className='size-3 rounded-full border border-muted-foreground/30 border-dashed' />
					<span>© 2024 PRISM // Obsidian Growth</span>
				</div>
				<div className='flex items-center gap-6'>
					<button className='transition-colors hover:text-white'>Security</button>
					<button className='transition-colors hover:text-white'>Guidelines</button>
					<button className='transition-colors hover:text-white'>Support</button>
				</div>
			</footer>
		</>
	);
}
