import { StatCard } from '@/components/ui/stat-card';
import { Users, UserCheck, Briefcase, AlertTriangle } from 'lucide-react';

const stats = [
	{
		icon: Users,
		label: 'Headcount',
		value: '1,284',
		change: '+2.4%',
		trend: 'up' as const,
		iconColor: 'text-sky-400',
	},
	{
		icon: UserCheck,
		label: 'Skill Density',
		value: '82%',
		change: '+5.1%',
		trend: 'up' as const,
		iconColor: 'text-sky-400',
	},
	{
		icon: Briefcase,
		label: 'Open Roles',
		value: '14',
		change: '-3%',
		trend: 'down' as const,
		highlight: true,
		iconColor: 'text-sky-400',
	},
	{
		icon: AlertTriangle,
		label: 'Flight Risk',
		value: '12',
		change: '-12%',
		trend: 'down' as const,
		iconColor: 'text-rose-400',
	},
];

export function DashboardStats() {
	return (
		<div className='grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4'>
			{stats.map((stat) => (
				<StatCard key={stat.label} {...stat} />
			))}
		</div>
	);
}
