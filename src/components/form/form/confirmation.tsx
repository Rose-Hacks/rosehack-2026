import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

const Confirmation = () => {
  const { width, height } = useWindowSize();
  return (
    <>
      <Confetti height={height} width={width} />
      <p>
        Thank you for filling out the interest form. Please watch your email for
        an update soon.
      </p>
    </>
  );
};

export default Confirmation;
