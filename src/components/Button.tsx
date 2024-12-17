interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger" | "success";
  onClickButton?: () => void;
}

const Button = ({ children, onClickButton, color = "primary" }: Props) => {
  return (
    <button
      type="button"
      className={`btn btn-${color}`}
      onClick={() => onClickButton && onClickButton()}
    >
      {children}
    </button>
  );
};

export default Button;
