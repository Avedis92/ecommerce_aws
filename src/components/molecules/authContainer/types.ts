import { ReactElement } from "react";

export interface IAuthContainerProps {
  title: string;
  subButtonContent: string;
  alternativeAuth: string;
  children: ReactElement;
  onClick: () => void;
}
