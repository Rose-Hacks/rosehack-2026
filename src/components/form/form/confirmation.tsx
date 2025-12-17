import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

interface ConfirmationProps {
  judge?: boolean;
}

const Confirmation = ({ judge }: ConfirmationProps) => {
  const { width, height } = useWindowSize();
  return (
    <>
      <Confetti height={height} width={width} />
      <p>
        Thank you for filling out the interest form. Please watch your email for
        an update soon.
      </p>
      {judge && (
        <p>
          Please also send us an email at rosehackucr@gmail.com, with your name,
          photo, and other relevant information. Thank you!
        </p>
      )}
    </>
  );
};

export default Confirmation;
