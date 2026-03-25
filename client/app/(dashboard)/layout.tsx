import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import { DashboardSidebar } from '@/components/block/dashboard-sidebar';

export default function DashboardLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<SidebarProvider>
			<DashboardSidebar />
			<SidebarInset>{children}</SidebarInset>
		</SidebarProvider>
	);
}
