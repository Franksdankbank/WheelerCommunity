import Link from 'next/link';

interface ButtonProps {
  text: string;
  link: string;
}

const Button: React.FC<ButtonProps> = ({ text, link }) => {
  return (
    <Link href={link}>
      <div>
        <button>{text}</button>
      </div>
    </Link>
  );
};

export default Button;