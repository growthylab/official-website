import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export const Logo = ({
  width = 102,
  height = 25,
  className = "",
}: LogoProps) => {
  return (
    <Link href="/" className={`inline-block ${className}`}>
      <Image
        src="/title.svg"
        alt="MIDAS"
        width={width}
        height={height}
        className="transition-opacity hover:opacity-80"
      />
    </Link>
  );
};
