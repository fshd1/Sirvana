const variants = {
  default: "bg-surface border border-border",
  elevated: "bg-surface-elevated border border-border",
  outline: "bg-transparent border border-border",
};

const paddings = {
  none: "p-0",
  sm: "p-3",
  md: "p-4",
  lg: "p-6",
};

export default function Card({
  children,
  variant = "default",
  padding = "md",
  hoverable = false,
  className = "",
  ...props
}) {
  const baseStyles = "rounded-xl transition-colors";

  const variantStyles = variants[variant] ?? variants.default;

  const paddingStyles = paddings[padding] ?? paddings.md;

  const hoverStyles = hoverable ? "hover:border-primary/50" : "";

  return (
    <div
      {...props}
      className={`${baseStyles} ${variantStyles} ${paddingStyles} ${hoverStyles} ${className}`}
    >
      {children}
    </div>
  );
}
