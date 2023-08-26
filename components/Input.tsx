export default function Input({
  value,
  handleChange,
  name,
  isTextArea,
}: {
  value: string;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  name: string;
  isTextArea?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="capitalize">
        {name}
      </label>
      {isTextArea ? (
        <textarea
          name={name}
          value={value}
          onChange={handleChange}
          placeholder="Write a text"
        />
      ) : (
        <input
          type="text"
          name={name}
          value={value}
          onChange={handleChange}
          placeholder="Write a text"
        />
      )}
    </div>
  );
}
