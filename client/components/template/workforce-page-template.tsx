import { DashboardTopbar } from '@/components/block/dashboard-topbar';
import { WorkforceSearch } from '@/components/block/workforce-search';
import { WorkforceMatches } from '@/components/block/workforce-matches';
import { WorkforceMarketSnapshot } from '@/components/block/workforce-market-snapshot';

export default function WorkforcePageTemplate() {
	return (
		<>
			<DashboardTopbar
				breadcrumb={[
					{ label: 'Talent Marketplace' },
					{ label: 'Search' },
				]}
				userName='Sarah Jenkins'
				userRole='Talent Lead'
			/>
			<div className='flex flex-col gap-6 p-6 lg:p-8'>
				<div className='grid grid-cols-1 gap-6 xl:grid-cols-[1fr_280px]'>
					{/* Main Content */}
					<div className='flex flex-col gap-6'>
						<WorkforceSearch />
						<WorkforceMatches />
					</div>

					{/* Right Sidebar */}
					<WorkforceMarketSnapshot />
				</div>
			</div>
		</>
	);
}
