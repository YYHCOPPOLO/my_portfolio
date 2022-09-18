function Wrapper({ children }: { children: JSX.Element[] }) {
  return (
    <div className=" w-max-[820px] mx-auto my-0 mt-5 py-0 px-8">{children}</div>
  );
}

export default Wrapper;
