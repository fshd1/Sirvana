import { FiLoader } from "react-icons/fi";

const variants = {
  primary: "bg-primary text-primary-foreground hover:bg-primary-hover",

  secondary:
    "bg-surface-elevated text-foreground border border-border hover:bg-surface",

  outline: "border border-primary text-primary hover:bg-primary/10",

  ghost: "text-foreground hover:bg-surface-elevated",

  danger: "bg-danger text-white hover:bg-danger/90",
};

const sizes = {
  sm: "h-8 px-3 text-xs",
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-6 text-base",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  isLoading = false,
  loadingText,
  type = "button",
  className = "",
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed";

  const variantStyles = variants[variant] ?? variants.primary;
  const sizeStyles = sizes[size] ?? sizes.md;

  return (
    <button
      {...props}
      type={type}
      disabled={disabled || isLoading}
      aria-busy={isLoading}
      className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`}
    >
      {isLoading && (
        <FiLoader className="animate-spin shrink-0" aria-hidden="true" />
      )}

      {isLoading ? (loadingText ?? children) : children}
    </button>
  );
}
