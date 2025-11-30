export const Barco = ({
  width,
  height,
  className,
  ...props
}: {
  width?: string | number;
  height?: string | number;
  className?: string;
  props?: React.SVGProps<SVGSVGElement>;
}) => (
  <div className={`display-block ${className}`}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 1728 389"
      {...props}
    >
      <path
        d="m20 209.81l-2 28 42 8c0 0 114 182.19 720 178 390.31-2.69 611.7-8.21 735-60 100-42 108-146.81 108-146.81-0.03 0.01-20-73.19-124-127.19-132.44-52.97-357.56-79.25-698-78-680.14 2.5-741 194-741 194z"
        style={{
          fill: 'currentcolor',
        }}
      />
    </svg>
  </div>
);
