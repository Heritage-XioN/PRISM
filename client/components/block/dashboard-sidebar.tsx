'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
	Sidebar,
	SidebarHeader,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarMenu,
	SidebarMenuItem,
	SidebarMenuButton,
	SidebarSeparator,
} from '@/components/ui/sidebar';
import {
	LayoutGrid,
	Users,
	Sparkles,
	TrendingUp,
	Kanban,
	ShieldCheck,
	LogOut,
} from 'lucide-react';

const mainNavItems = [
	{ label: 'Command Center', icon: LayoutGrid, href: '/dashboard' },
	{ label: 'Workforce', icon: Users, href: '/workforce' },
	{ label: 'Intelligence', icon: Sparkles, href: '/intelligence' },
	{ label: 'Growth Hub', icon: TrendingUp, href: '/growth-hub' },
	{ label: 'Project Board', icon: Kanban, href: '/project-board' },
];

const footerNavItems = [
	{ label: 'Security Log', icon: ShieldCheck, href: '#' },
	{ label: 'Logout', icon: LogOut, href: '#' },
];

export function DashboardSidebar() {
	const pathname = usePathname();

	return (
		<Sidebar className='border-r border-white/5 bg-surface-dim'>
			{/* Logo */}
			<SidebarHeader className='px-5 pt-6 pb-2'>
				<div className='flex flex-col'>
					<span className='text-xl font-black italic tracking-tight text-white'>
						PRISM
					</span>
					<span className='text-[9px] font-semibold tracking-[0.2em] text-muted-foreground uppercase'>
						Executive Suite
					</span>
				</div>
			</SidebarHeader>

			{/* Main Navigation */}
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupContent>
						<SidebarMenu>
							{mainNavItems.map((item) => {
								const isActive = pathname === item.href;
								return (
									<SidebarMenuItem key={item.label}>
										<SidebarMenuButton
											asChild
											isActive={isActive}
											tooltip={item.label}
											className={
												isActive
													? 'bg-primary-container/20 text-primary-container font-semibold border-l-2 border-primary-container rounded-none'
													: 'text-muted-foreground hover:text-white hover:bg-white/5 rounded-none'
											}
										>
											<Link href={item.href}>
												<item.icon className='size-4' />
												<span className='text-xs font-semibold tracking-wider uppercase'>
													{item.label}
												</span>
											</Link>
										</SidebarMenuButton>
									</SidebarMenuItem>
								);
							})}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>

			{/* Footer */}
			<SidebarFooter className='mt-auto pb-4'>
				<SidebarGroup>
					<SidebarGroupContent>
						<SidebarMenu>
							{footerNavItems.map((item) => (
								<SidebarMenuItem key={item.label}>
									<SidebarMenuButton
										tooltip={item.label}
										className='text-muted-foreground hover:text-white hover:bg-white/5 rounded-none'
									>
										<item.icon className='size-4' />
										<span className='text-xs font-semibold tracking-wider uppercase'>
											{item.label}
										</span>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>

				<SidebarSeparator className='bg-white/5' />

				{/* User Profile */}
				<div className='flex items-center gap-3 px-3 pt-2'>
					<div className='flex size-9 items-center justify-center rounded-full bg-surface-container-high'>
						<span className='text-xs font-bold text-white'>MC</span>
					</div>
					<div className='flex flex-col'>
						<span className='text-xs font-bold tracking-wide text-white uppercase'>
							M. Chen
						</span>
						<span className='text-[10px] tracking-wider text-muted-foreground uppercase'>
							Director
						</span>
					</div>
				</div>
			</SidebarFooter>
		</Sidebar>
	);
}
