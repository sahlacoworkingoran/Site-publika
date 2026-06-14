interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: { text: "text-2xl", dot: "text-2xl" },
  md: { text: "text-3xl", dot: "text-3xl" },
  lg: { text: "text-4xl", dot: "text-4xl" },
};

export default function Logo({ className = "", size = "md" }: LogoProps) {
  const s = sizes[size];

  return (
    <span
      className={`font-extrabold tracking-tight select-none ${s.text} ${className}`}
      style={{ fontFamily: "var(--font-syne)" }}
    >
      <span style={{ color: "#7B2FBE" }}>Publi</span>
      <span
        style={{
          color: "#FF6B6B",
          display: "inline-block",
          transform: "scaleX(-1)",
        }}
      >
        K
      </span>
      <span style={{ color: "#7B2FBE" }}>a</span>
      <span style={{ color: "#FF6B6B" }}>.</span>
    </span>
  );
}
