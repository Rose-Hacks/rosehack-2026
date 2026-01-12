interface props {
  text: string;
  list: string[];
}

const BulletList = ({ text, list }: props) => {
  return (
    <div className="w-full rounded-xl bg-rosehack-yellow p-4 font-rosehack-alt text-rosehack-brown">
      <div className="flex items-center justify-between text-xl font-bold">
        {text}
      </div>
      <ul className="mt-2 flex flex-col items-center justify-center">
        {list.map((item, index) => (
          <li key={index} className="w-10/12 list-disc">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BulletList;
