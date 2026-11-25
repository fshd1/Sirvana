const sizes = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-7xl",
  xl: "max-w-[1440px]",
  full: "max-w-full",
};

export default function Container({
  children,
  size = "xl",
  className = "",
  ...props
}) {
  const sizeStyles = sizes[size] ?? sizes.xl;

  return (
    <div
      {...props}
      className={`mx-auto w-full px-4 sm:px-6 lg:px-8 ${sizeStyles} ${className}`}
    >
      {children}
    </div>
  );
}
