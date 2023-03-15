const buttonStyles = {
  blue: "bg-blue-100 border-blue-700 hover:bg-blue-200",
  green: "bg-green-100 border-green-700 hover:bg-green-200",
  red: "bg-red-100 border-red-700 hover:bg-red-200",
};

export type ButtonProps = {
  label: string;
  color: keyof typeof buttonStyles;
};

export const Button = ({ label, color }: ButtonProps) => (
  <button
    className={
      "p-12 m-12 border-solid border-w-default rounded-default focus:outline-gray-500 focus:outline-dashed focus:outline-offset-2 " +
      buttonStyles[color]
    }
  >
    {label}
  </button>
);
