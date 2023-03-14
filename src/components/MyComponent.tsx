export type MyComponentProps = {
  text: string;
};

export const MyComponent = ({ text }: MyComponentProps) => {
  return (
    <div>
      <p>{text}</p>
    </div>
  );
};
