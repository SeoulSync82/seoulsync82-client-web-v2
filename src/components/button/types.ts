export type ButtonProps = {
  size?: ButtonSize;
  bgColor?: ButtonColor;
  textColor?: ButtonColor;
  borderPosition?: ButtonBorderPosition;
  borderSize?: ButtonBorderSize;
  borderColor?: ButtonColor;
  borderRadius?: number;
  isActive?: boolean;
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
};

export type ButtonSize = 'small' | 'medium' | 'large';

export type ButtonBorderPosition = 'top' | 'left' | 'right' | 'bottom' | 'x' | 'y';
export type ButtonBorderSize = 'thin' | 'medium' | 'bold';
export type ButtonBorder =
  | 'top-thin'
  | 'top-medium'
  | 'top-bold'
  | 'x-thin'
  | 'x-medium'
  | 'x-bold';

export type ButtonColor =
  | 'primary'
  | 'naverGreen'
  | 'kakaoYellow'
  | 'googleGray'
  | 'white'
  | 'gray900'
  | 'gray100'
  | 'gray200'
  | 'gray400';
