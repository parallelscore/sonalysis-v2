export type DropdownProps = {
  title: string;
  category?: string;
  size?: string;
  items?: (string | number) [];
  select?: ((events) => void)
};

export type ImageCardProps = {
  player: string;
  position: string;
  number: number;
};
