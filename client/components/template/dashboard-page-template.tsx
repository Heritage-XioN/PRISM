import { DashboardTopbar } from '@/components/block/dashboard-topbar';
import { DashboardOverviewHeader } from '@/components/block/dashboard-overview-header';
import { DashboardStats } from '@/components/block/dashboard-stats';
import { DashboardTalentMatrix } from '@/components/block/dashboard-talent-matrix';
import { DashboardSignalStream } from '@/components/block/dashboard-signal-stream';

export default function DashboardPageTemplate() {
	return (
		<>
			<DashboardTopbar showNewReport />
			<div className='flex flex-col gap-6 p-6 lg:p-8'>
				{/* Overview Header */}
				<DashboardOverviewHeader />

				{/* Stats Row */}
				<DashboardStats />

				{/* Talent Matrix + Signal Stream */}
				<div className='grid grid-cols-1 gap-4 xl:grid-cols-[1fr_320px]'>
					<DashboardTalentMatrix />
					<DashboardSignalStream />
				</div>
			</div>
		</>
	);
}
