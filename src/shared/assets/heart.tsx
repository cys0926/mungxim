import { SVGProps } from "react";

type Props = {
  offset: string;
} & SVGProps<SVGSVGElement>;

export const HeartIcon = ({ offset = "50%", ...props }: Props) => {

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

/*
* 
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart"><path /></svg>
* */
