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
const Component: FC = () => {
  return (
    <header className="flex items-center justify-between h-16 px-4 md:px-6 border-b backdrop-blur-md bg-white/80 dark:bg-gray-950/80 w-[850px] mx-auto rounded-lg">
      <Link className="flex items-center gap-2" href="#">
        <MountainIcon className="w-6 h-6" />
        <span className="text-lg font-semibold">Acme SaaS</span>
      </Link>
      <nav className="hidden md:flex items-center gap-6">
        <Link className="text-sm font-medium hover:underline" href="#">
          Dashboard
        </Link>
        <Link className="text-sm font-medium hover:underline" href="#">
          Features
        </Link>
        <Link className="text-sm font-medium hover:underline" href="#">
          Pricing
        </Link>
      </nav>
    </header>
  );
};

export default Component;
