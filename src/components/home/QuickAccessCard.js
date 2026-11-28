import Link from "next/link";

const variants = {
  green: {
    background: "bg-green-500/5",
    border: "border-green-500/30",
    icon: "text-green-500",
    iconBg: "bg-green-500/10",
    hover: "hover:border-green-500/60",
    shadow: "shadow-[inset_0_0_35px_rgba(34,197,94,0.08)]",
  },
  blue: {
    background: "bg-blue-500/5",
    border: "border-blue-500/30",
    icon: "text-blue-500",
    iconBg: "bg-blue-500/10",
    hover: "hover:border-blue-500/60",
    shadow: "shadow-[inset_0_0_35px_rgba(59,130,246,0.08)]",
  },
  gold: {
    background: "bg-amber-500/5",
    border: "border-amber-500/30",
    icon: "text-amber-500",
    iconBg: "bg-amber-500/10",
    hover: "hover:border-amber-500/60",
    shadow: "shadow-[inset_0_0_35px_rgba(245,158,11,0.08)]",
  },
  purple: {
    background: "bg-purple-500/5",
    border: "border-purple-500/30",
    icon: "text-purple-500",
    iconBg: "bg-purple-500/10",
    hover: "hover:border-purple-500/60",
    shadow: "shadow-[inset_0_0_35px_rgba(168,85,247,0.08)]",
  },
};

function QuickAccessCard({ item }) {
  const { title, description, href, icon: Icon, variant } = item;

  const styles = variants[variant] ?? variants.green;

  return (
    <Link
      href={href}
      className={`flex items-center gap-2 rounded-xl border p-3 md:gap-3 lg:p-4 transition-colors duration-300 ${styles.background} ${styles.border} ${styles.hover} ${styles.shadow}`}
    >
      <div className="flex items-center justify-center size-10 lg:size-14 shrink-0 rounded-xl">
        <Icon className={`size-10 lg:size-14 ${styles.icon}`} />
      </div>
      <div>
        <h2 className="text-sm lg:text-lg font-bold text-foreground">
          {title}
        </h2>
        <p className="text-xs lg:text-sm text-muted leading-relaxed">
          {description}
        </p>
      </div>
    </Link>
  );
}

export default QuickAccessCard;
