'use client';

import { SidebarTrigger } from '@/components/ui/sidebar';
import { Search, Bell, Settings } from 'lucide-react';

interface DashboardTopbarProps {
	breadcrumb?: { label: string; href?: string }[];
	title?: string;
	userName?: string;
	userRole?: string;
	showNewReport?: boolean;
}

export function DashboardTopbar({
	breadcrumb,
	title = 'Command Center',
	userName,
	userRole,
	showNewReport = false,
}: DashboardTopbarProps) {
	return (
		<header className='flex h-14 items-center justify-between border-b border-white/5 bg-surface-dim px-4 lg:px-6'>
			{/* Left — Mobile trigger + Title/Breadcrumb */}
			<div className='flex items-center gap-3'>
				<SidebarTrigger className='text-muted-foreground md:hidden' />
				{breadcrumb ? (
					<nav className='flex items-center gap-1.5 text-xs'>
						{breadcrumb.map((item, i) => (
							<span key={i} className='flex items-center gap-1.5'>
								{i > 0 && (
									<span className='text-muted-foreground/40'>
										&gt;
									</span>
								)}
								<span
									className={
										i === breadcrumb.length - 1
											? 'font-bold tracking-wide text-white uppercase'
											: 'font-semibold tracking-wide text-muted-foreground uppercase'
									}
								>
									{item.label}
								</span>
							</span>
						))}
					</nav>
				) : (
					<h1 className='text-sm font-semibold tracking-wide text-white'>
						{title}
					</h1>
				)}
			</div>

			{/* Right — Search + Actions */}
			<div className='flex items-center gap-3'>
				{/* Search (only on non-breadcrumb pages) */}
				{!breadcrumb && (
					<div className='relative hidden sm:block'>
						<Search className='pointer-events-none absolute left-3 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground' />
						<input
							type='text'
							placeholder='Global Search...'
							className='h-8 w-48 rounded-md border border-white/10 bg-white/5 pl-8 pr-3 text-xs text-white placeholder:text-muted-foreground focus:border-primary-container/40 focus:outline-none lg:w-56'
						/>
					</div>
				)}

				{/* Icons */}
				<button className='flex size-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-white/5 hover:text-white'>
					<Bell className='size-4' />
				</button>
				<button className='flex size-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-white/5 hover:text-white'>
					<Settings className='size-4' />
				</button>

				{/* New Report Button */}
				{showNewReport && (
					<button className='hidden h-8 rounded-md border border-white/20 bg-transparent px-4 text-xs font-semibold tracking-wide text-white uppercase transition-colors hover:bg-white/10 sm:block'>
						New Report
					</button>
				)}

				{/* User Info */}
				{userName && (
					<div className='hidden items-center gap-2 sm:flex'>
						<div className='flex flex-col items-end'>
							<span className='text-xs font-bold tracking-wide text-white uppercase'>
								{userName}
							</span>
							{userRole && (
								<span className='text-[10px] tracking-wider text-primary-container uppercase'>
									{userRole}
								</span>
							)}
						</div>
						<div className='flex size-8 items-center justify-center rounded-full bg-surface-container-high'>
							<span className='text-[10px] font-bold text-white'>
								{userName
									.split(' ')
									.map((n) => n[0])
									.join('')}
							</span>
						</div>
					</div>
				)}
			</div>
		</header>
	);
}
