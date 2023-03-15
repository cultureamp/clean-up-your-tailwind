import tw from "twin.macro";

const BaseButton = tw.button`
  p-12 m-12 border-solid border-w-default rounded-default
  focus:outline-gray-500 focus:outline-dashed focus:outline-offset-2
`;

const buttonVariants = {
  blue: tw(BaseButton)`bg-blue-100 border-blue-700 hover:bg-blue-200`,
  green: tw(BaseButton)`bg-green-100 border-green-700 hover:bg-green-200`,
  red: tw(BaseButton)`bg-red-100 border-red-700 hover:bg-red-200`,
};

export type ButtonProps = {
  children: React.ReactNode;
  color: keyof typeof buttonVariants;
};

export const Button = ({ color, children }: ButtonProps) => {
  const ButtonVariant = buttonVariants[color];
  return <ButtonVariant>{children}</ButtonVariant>;
};
