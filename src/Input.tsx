type Props = {
  question: string;
  type: string;
  name: string;
};

export function Input({ question, name, type }: Props) {
  return (
    <label className="text-label">
      <h1 className="question">{question}</h1>
      <input className="input" type={type} name={name} />
    </label>
  );
}
