type Props = {
  question: string;
  name: string;
  options: string[];
};

export function CheckboxGroup({ question, name, options }: Props) {
  return (
    <>
      <h1 className="question">{question}</h1>
      {options.map((option) => (
        <label>
          <input type="checkbox" name={name} value={option.toLowerCase()} />
          {option}
        </label>
      ))}

      {/* <label>
        <input type="checkbox" name="food" value="chocolate" />
        Fruits
      </label>
      <label>
        <input type="checkbox" name="food" value="chocolate" />
        Vegetables
      </label> */}
    </>
  );
}
