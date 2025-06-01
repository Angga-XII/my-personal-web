import { Heading1 } from "./textWrapper";

const NotYetImplemented = (props:any) => {
  return (
    <div className="flex-col h-screen justify-center items-center flex text-6xl font-bold text-red-400 font-mono">
      <h1 className="mb-2">{props.name} is not yet implemented</h1>
      <h2 className="">Sorry!</h2>
    </div>
  );
};

export default NotYetImplemented;
