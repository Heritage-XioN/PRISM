import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface SignalItemProps {
	icon: LucideIcon;
	iconBg: string;
	type: string;
	description: string;
	timestamp: string;
}

export function SignalItem({
	icon: Icon,
	iconBg,
	type,
	description,
	timestamp,
}: SignalItemProps) {
	return (
		<div className="flex gap-3 rounded-md p-3 transition-colors hover:bg-white/[0.02]">
			<div
				className={cn(
					"flex size-10 shrink-0 items-center justify-center rounded-lg",
					iconBg
				)}
			>
				<Icon className="size-4 text-white" />
			</div>
			<div className="flex min-w-0 flex-col gap-0.5">
				<span className="text-[10px] font-bold tracking-[0.15em] text-white uppercase">
					{type}
				</span>
				<p className="text-xs leading-relaxed text-muted-foreground">
					{description}
				</p>
				<span className="mt-1 text-[10px] text-muted-foreground/60">
					{timestamp}
				</span>
			</div>
		</div>
	);
}
