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
      <p className="text-white">
        Thank you for filling out the form. Please{" "}
        <span className="font-bold">
          check your email for confirmation, if you do not recieve an email
          within 15 minutes of submitting your application, please contact us at
          rosehackucr@gmail.com
        </span>
      </p>
      {judge && (
        <p className="text-white">
          Please also send us an email at rosehackucr@gmail.com, with your name,
          photo, and other relevant information. Thank you!
        </p>
      )}
    </>
  );
};

export default Confirmation;
