type Props = {
  children: string;
  size?: "small" | "medium" | "large";
  secondary?: boolean;
};
export function Button({
  children,
  size = "medium",
  secondary,
  ...props
}: Props) {
  let style: any = { padding: "1rem", margin: "0.25rem" };
  if (size === "large") {
    style.padding = "1.5rem";
  }
  if (size === "small") {
    style.padding = "0.5rem";
  }
  if (secondary) {
    style.backgroundColor = "white";
    style.color = "#008cba";
    style.border = "1px solid #008cba";
  }
  return (
    <button className="button" style={style} {...props}>
      {children}
    </button>
  );
}
