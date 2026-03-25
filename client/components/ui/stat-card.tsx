import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
	icon: LucideIcon;
	label: string;
	value: string;
	change: string;
	trend: "up" | "down";
	highlight?: boolean;
	iconColor?: string;
}

export function StatCard({
	icon: Icon,
	label,
	value,
	change,
	trend,
	highlight = false,
	iconColor = "text-muted-foreground",
}: StatCardProps) {
	return (
		<div
			className={cn(
				"relative flex flex-col gap-3 rounded-lg border border-white/5 bg-white/[0.02] p-5 transition-colors",
				highlight && "border-sky-500/40 bg-sky-500/[0.03]"
			)}
		>
			{/* Top row — icon + change */}
			<div className="flex items-center justify-between">
				<Icon className={cn("size-5", iconColor)} />
				<span
					className={cn(
						"text-xs font-semibold",
						trend === "up" ? "text-emerald-400" : "text-rose-400"
					)}
				>
					{change}
				</span>
			</div>

			{/* Label */}
			<span className="text-[10px] font-semibold tracking-[0.15em] text-muted-foreground uppercase">
				{label}
			</span>

			{/* Value */}
			<span className="text-3xl font-bold tracking-tight text-white">
				{value}
			</span>
		</div>
	);
}
