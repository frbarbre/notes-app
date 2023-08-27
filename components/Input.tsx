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
    <div className="flex flex-col gap-[8px]">
      <label
        htmlFor={name}
        className="capitalize text-white text-[18px] tracking-[1.44px]"
      >
        {name}
      </label>
      {isTextArea ? (
        <textarea
          name={name}
          value={value}
          onChange={handleChange}
          placeholder="Write a title..."
          className="min-h-[250px] text-white bg-dark-gray rounded-[3px] placeholder:text-gray-light py-[10px] px-[13px] border-gray-light border-[2px] tracking-[1.28px] font-medium outline-none focus:border-primary"
        />
      ) : (
        <input
          type="text"
          name={name}
          value={value}
          onChange={handleChange}
          placeholder="Write something..."
          className="text-white bg-dark-gray rounded-[3px] placeholder:text-gray-light py-[10px] px-[13px] border-gray-light border-[2px] tracking-[1.28px] font-medium outline-none focus:border-primary"
        />
      )}
    </div>
  );
}
