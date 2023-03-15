export type MyComponentProps = {
  text: string;
};

export const MyComponent = ({ text }: MyComponentProps) => {
  return (
    <div className="flex flex-col justify-center items-center max-w-[1080px] w-100 h-[100vh]">
      <div className="flex flex-col justify-between max-w-max md:flex-row w-100 md:max-w-100">
        <button className="p-12 m-12 bg-blue-100 border-blue-700 border-solid hover:bg-blue-200 border-w-default rounded-default focus:outline-gray-500 focus:outline-dashed focus:outline-offset-2">
          Blue button
        </button>
        <button className="p-12 m-12 bg-green-100 border-green-700 border-solid hover:bg-green-200 border-w-default rounded-default focus:outline-gray-500 focus:outline-dashed focus:outline-offset-2">
          Green button
        </button>
        <button className="p-12 m-12 bg-red-100 border-red-700 border-solid hover:bg-red-200 border-w-default rounded-default focus:outline-gray-500 focus:outline-dashed focus:outline-offset-2">
          Red button
        </button>
      </div>
    </div>
  );
};
