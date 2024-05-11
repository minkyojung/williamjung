/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Q6ELLAlxzS3
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { FC, SVGProps } from 'react';

// MountainIcon 컴포넌트에 대한 타입 정의
const MountainIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
};

// 메인 컴포넌트의 정의 및 타입 안정성 추가
const Navbar: FC = () => {
  return (
    <header className="flex items-center justify-between h-10 px-4 md:px-6 border bg-gradient-to-r from-[#121212] to-[#0D0D0D] w-[500px] mx-auto rounded-xl">
      <Link className="flex items-center gap-2" href="#">
        <span className="text-sm font-medium">William Jung</span>
      </Link>
      <nav className="hidden md:flex items-center gap-6">
        <Link className="text-sm font-light text-zinc-400 hover:text-white transition-colors duration-300" href="#">
          Ehtos
        </Link>
        <Link className="text-sm font-light text-zinc-400 hover:text-white transition-colors duration-300" href="#">
          Thoughts
        </Link>
        <Link className="text-sm font-light text-zinc-400 hover:text-white transition-colors duration-300" href="#">
          Photos
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
