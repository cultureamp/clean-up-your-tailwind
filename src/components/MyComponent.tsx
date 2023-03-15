export type MyComponentProps = {
  text: string;
};

export const MyComponent = ({ text }: MyComponentProps) => {
  return (
    <div className="flex flex-col justify-center items-center max-w-[1080px] w-100 h-[100vh]">
      <div className="justify-between w-100 flex flex-col md:flex-row max-w-max md:max-w-100">
        <button className="border-blue-700 border-solid m-12 border-w-default rounded-default p-12 bg-blue-100 hover:bg-blue-200 focus:outline-gray-500 focus:outline-dashed focus:outline-offset-2">
          Blue button
        </button>
        <button className=" border-solid focus:outline-gray-500 border-w-default  border-green-700 p-12  m-12 bg-green-100 hover:bg-green-200 rounded-default  focus:outline-dashed focus:outline-offset-2">
          Green button
        </button>
        <button className="p-12 bg-red-100 hover:bg-red-200 focus:outline-gray-500 border-red-700 m-12 border-solid border-w-default rounded-default focus:outline-dashed focus:outline-offset-2">
          Red button
        </button>
      </div>
    </div>
  );
};
