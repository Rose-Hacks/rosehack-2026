type props = {
  children: string;
};

const Title = ({ children }: props) => {
  return (
    <div className="z-20 font-rosehack-main text-3xl font-bold text-white md:text-5xl">
      {children}
    </div>
  );
};

export default Title;
