export interface CustomTabProps {
  active: boolean;
  title: string;
  secondTitle: string;
  handleClick: () => void;
}

export interface ButtonProps {
  title: string;
  press: () => void;
}

export interface ChartDataProps {
  x: number;
  y: number;
}
