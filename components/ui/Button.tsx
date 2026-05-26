import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

type BaseProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  className?: string;
};

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantClasses = {
  primary:
    "bg-coralWarm text-white shadow-lg shadow-coralWarm/25 hover:bg-[#f45e51]",
  secondary:
    "bg-tealDeep text-white shadow-lg shadow-tealDeep/20 hover:bg-[#053f3c]",
  outline:
    "border border-tealDeep/20 bg-white text-tealDeep hover:border-coralWarm hover:text-coralWarm",
  ghost: "bg-transparent text-tealDeep hover:bg-mintSoft/70",
};

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const classes = `inline-flex cursor-pointer items-center justify-center rounded-full px-5 py-3 text-sm font-extrabold transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-skyAccent/25 ${variantClasses[variant]} ${className}`;

  if ("href" in props && props.href) {
    const { href, ...linkProps } = props;

    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}