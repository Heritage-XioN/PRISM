import { SignalItem } from '@/components/ui/signal-item';
import {
	Zap,
	UserPlus,
	AlertOctagon,
	Trophy,
	FileText,
} from 'lucide-react';

const signals = [
	{
		icon: UserPlus,
		iconBg: 'bg-sky-500/20',
		type: 'Onboarding Event',
		description:
			'Sarah Miller [Cloud Lead] integrated successfully into core systems.',
		timestamp: 'T-02M',
	},
	{
		icon: AlertOctagon,
		iconBg: 'bg-rose-500/20',
		type: 'Attrition Alert',
		description:
			'David G. [Dev] submitted notice. Impact: React Native capacity reduction.',
		timestamp: 'T-15M',
	},
	{
		icon: Trophy,
		iconBg: 'bg-emerald-500/20',
		type: 'Milestone Reached',
		description:
			'Marketing Ops achieved Q3 proficiency benchmarks (95%+).',
		timestamp: 'T-01H',
	},
	{
		icon: FileText,
		iconBg: 'bg-slate-500/20',
		type: 'Policy Deployment',
		description:
			'Global Remote v2.4 distributed to entire workforce (1,284 nodes).',
		timestamp: 'T-04H',
	},
];

export function DashboardSignalStream() {
	return (
		<div className='flex flex-col rounded-lg border border-white/5 bg-white/[0.02]'>
			{/* Header */}
			<div className='flex items-center justify-between border-b border-white/5 px-5 py-3.5'>
				<div className='flex items-center gap-2'>
					<Zap className='size-4 text-primary-container' />
					<span className='text-[10px] font-bold tracking-[0.15em] text-white uppercase'>
						Signal Stream
					</span>
				</div>
				<span className='rounded border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold tracking-wider text-emerald-400 uppercase'>
					Live
				</span>
			</div>

			{/* Signal Items */}
			<div className='flex flex-col divide-y divide-white/5 p-2'>
				{signals.map((signal) => (
					<SignalItem key={signal.type} {...signal} />
				))}
			</div>
		</div>
	);
}
