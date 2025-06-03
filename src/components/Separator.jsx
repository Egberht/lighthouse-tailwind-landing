const Separator = ({ fill = "#191919", direction = "normal" }) => {
  const points =
    direction === "reverse" ? "0,0 100,100 0,100" : "0,100 100,0 100,100";

  return (
    <div className="relative h-16 overflow-hidden">
      <svg
        className="absolute top-0 left-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <polygon fill={fill} points={points} />
      </svg>

      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.09)_0%,_transparent_80%)]" />
    </div>
  );
};

export default Separator;