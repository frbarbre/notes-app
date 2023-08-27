import Image from 'next/image';

interface Props {
  handleClick?: (e: React.FormEvent) => void | (() => void);
  height?: string;
  width?: string;
  color?: string;
  text?: string;
  icon?: string;
  rounded?: string;
  isActionBtn?: boolean;
  iconSize?: [number, number];
  type?: 'button' | 'submit' | 'reset';
  fontSize?: string;
}

export default function Button({
  handleClick,
  height,
  width,
  color,
  text,
  icon,
  rounded,
  isActionBtn,
  iconSize,
  type,
  fontSize
}: Props) {
  return (
    <button
      type={type || 'button'}
      onClick={handleClick}
      className={`flex items-center text-white justify-center font-bold gap-[18px] transition-colors ${fontSize} ${
        width || 'w-full'
      } ${height || 'h-[47px]'} ${rounded || 'rounded-[10px]'} ${
        color || 'bg-primary border-[2px] border-primary hover:bg-white/5'
      }`}
    >
      {icon && (
        <Image
          src={icon}
          alt="plus"
          width={iconSize ? iconSize[0] : 14}
          height={iconSize ? iconSize[1] : 14}
        />
      )}
      {!isActionBtn && <p>{text}</p>}
    </button>
  );
}
