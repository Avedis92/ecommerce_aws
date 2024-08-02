import { IAuthContainerProps } from "./types";

const AuthContainer = ({
  title,
  children,
  subButtonContent,
  alternativeAuth,
  onClick,
}: IAuthContainerProps) => {
  return (
    <div className="bg-white rounded-xl my-12 mx-auto py-8 px-6 max-w-lg">
      <h2 className="text-2xl text-center my-5 mx-0">{title}</h2>
      {children}
      <p className="mt-6">
        {subButtonContent}
        <span
          className="text-red-500 font-bold cursor-pointer ml-1"
          onClick={() => onClick()}
        >
          {alternativeAuth}
        </span>
      </p>
    </div>
  );
};

export default AuthContainer;
