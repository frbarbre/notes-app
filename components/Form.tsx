import Input from './Input';

export default function Form({
  handleSubmit,
  handleChange,
  form,
}: {
  handleSubmit: (e: React.FormEvent) => void;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  form: { title: string; text: string };
}) {
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center text-black "
    >
      <Input handleChange={handleChange} name="title" value={form.title} />
      <Input
        isTextArea={true}
        handleChange={handleChange}
        name="text"
        value={form.text}
      />
      <button type="submit">Create Note</button>
    </form>
  );
}
