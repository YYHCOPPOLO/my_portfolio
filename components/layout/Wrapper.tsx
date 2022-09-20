function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className=" w-max-[820px] flex flex-col items-center justify-center my-0 mt-5 py-0 px-8">
      {children}
    </div>
  );
}

export default Wrapper;
