import { Button } from "./Button";

export type MyComponentProps = {
  text: string;
};

export const MyComponent = ({ text }: MyComponentProps) => {
  return (
    <div className="flex flex-col justify-center items-center max-w-[1080px] w-100 h-[100vh]">
      <div className="flex flex-col justify-between max-w-max md:flex-row w-100 md:max-w-100">
        <Button label="Blue button" color="blue" />
        <Button label="Green button" color="green" />
        <Button label="Red button" color="red" />
      </div>
    </div>
  );
};
