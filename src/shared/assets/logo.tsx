import Image, { ImageProps } from "next/image";
import  MainLogoImage from "$/images/logos/main-logo.png";

export const MainLogo = ({ ...props }: Omit<ImageProps, "src" | "alt">) => {
  return <Image src={MainLogoImage} alt="main logo" {...props} />;
};
