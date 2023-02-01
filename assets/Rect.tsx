interface RectProps {
  size: number
}

export default function Rect({ size }: RectProps) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-[${size}px] h-[${size}px]`}
    >
      <rect
        x="2"
        y="2"
        width="28"
        height="28"
        rx="4"
        stroke="#C4C4C4"
        strokeWidth="4"
      />
    </svg>
  )
}
