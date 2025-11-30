export const XMap = ({
  width = 100,
  height = 100,
  className,
  ...props
}: {
  width?: string | number;
  height?: string | number;
  className?: string;
  props?: React.SVGProps<SVGSVGElement>;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 1080 1080"
    className={className}
    {...props}
  >
    <path
      d="m276 86.72l-198 165.28 288 269.72-327 258c0 0 129 132 231 264 63-102 237-300 240-306 3-6 237 291 237 291 150-90 261-290.72 261-290.72l-321-198 321-288.28-258-192-210 294z"
      style={{
        fill: 'currentcolor',
      }}
    />
  </svg>
);
