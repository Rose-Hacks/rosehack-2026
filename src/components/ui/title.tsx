type props = {
  children: string;
};

const Title = ({ children }: props) => {
  return (
    <div className="font-rosehack-main text-2xl font-bold text-white md:text-5xl">
      {children}
    </div>
  );
};

export default Title;
