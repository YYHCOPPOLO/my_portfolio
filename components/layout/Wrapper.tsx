function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className=" w-max-[820px] mx-auto my-0 mt-5 py-0 px-8">{children}</div>
  );
}

export default Wrapper;
