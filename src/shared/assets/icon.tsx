import React, { SVGProps } from "react";
import { cn } from "@/shared/lib";

export const ChatIcon = ({ className, ...props }: SVGProps<SVGPathElement>) => {
  return (
    <svg
      width="35"
      height="31"
      viewBox="0 0 35 31"
      stroke="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={cn({
          "fill-primary": className?.includes("stroke-primary"),
          "fill-gray-400": className?.includes("stroke-gray-400"),
        })}
        d="M0.451268 18.8889C0.451268 21.1897 1.33635 23.4461 3.01772 25.3044C3.15048 25.4814 3.23899 25.7027 3.15048 25.8797L2.22149 29.9062L8.23912 28.9773C8.37189 28.9773 8.4604 28.9773 8.59316 29.0215C10.4515 29.7296 12.4426 30.0833 14.478 30.0833C18.9028 30.0833 22.9731 28.4462 25.628 25.6585C24.522 26.0568 23.3714 26.3666 22.2211 26.5436C21.0708 26.7649 19.876 26.8534 18.6371 26.8534C9.87643 26.8534 2.66387 21.4996 1.55818 14.5977C0.805169 15.9692 0.451172 17.4292 0.451172 18.8893L0.451268 18.8889Z"
        {...props}
      />
      <path
        className={cn({
          "fill-primary": className?.includes("stroke-primary"),
          "fill-gray-400": className?.includes("stroke-gray-400"),
        })}
        d="M34.5205 12.8261C34.5205 5.79106 27.3969 0.0830078 18.592 0.0830078C9.83134 0.0830078 2.66357 5.7908 2.66357 12.8261C2.66357 19.817 9.78716 25.5693 18.592 25.5693C20.9372 25.5693 23.1935 25.171 25.2731 24.3747C25.3616 24.3304 25.4058 24.3304 25.4944 24.3304C25.5386 24.3304 32.5294 25.3922 32.5294 25.3922L31.4234 20.7465C31.3791 20.5253 31.4234 20.304 31.5561 20.1712C33.503 18.0031 34.5205 15.4367 34.5205 12.8263L34.5205 12.8261ZM18.946 18.711C18.8575 18.7995 18.7247 18.7995 18.5919 18.7995C18.4592 18.7995 18.3707 18.7552 18.2379 18.711C17.5298 18.2684 11.247 14.3305 11.247 10.7465C11.247 8.84388 12.4416 7.25104 14.2114 6.85276C15.8485 6.45446 17.4413 7.25105 18.6362 9.02093C19.7865 7.29539 21.3792 6.49874 23.061 6.85276C24.7865 7.25105 26.0253 8.84388 26.0253 10.7465C25.9811 14.3305 19.6536 18.3126 18.946 18.711Z"
        {...props}
      />
    </svg>
  );
};

type HeartIconProps = SVGProps<SVGSVGElement> & {
  offset: number;
};

export const HeartIcon = ({ offset = 0.5, ...props }: HeartIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-heart"
      {...props}
    >
      <defs>
        <linearGradient
          id="half-red-white"
          x1="0%"
          y1="100%"
          x2="0%"
          y2="0%"
          className="transition-all"
        >
          <stop offset={offset} stopColor="#EB7777" />
          <stop offset={offset} stopColor="white" />
        </linearGradient>
      </defs>

      <path
        className="transition-all duration-1000"
        d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
        fill="url(#half-red-white)"
      />
    </svg>
  );
};
