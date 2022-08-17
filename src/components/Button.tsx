type Props = {
  children: string;
  size: string;
};
export function Button({ children, size, ...props }: Props) {
  return (
    <button className="button" {...props}>
      {children}
    </button>
  );
}
