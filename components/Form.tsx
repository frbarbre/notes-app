import Button from './Button';
import Input from './Input';

export default function Form({
  handleSubmit,
  handleChange,
  form,
  type,
  setIsActive
}: {
  handleSubmit: (e: React.FormEvent) => void;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  form: { title: string; text: string };
  type: 'create' | 'edit';
  setIsActive: (isActive: boolean) => void;
}) {
  return (
    <form onSubmit={handleSubmit} className="flex flex-col text-black ">
      <h2 className="capitalize">{type} note</h2>
      <Input handleChange={handleChange} name="title" value={form.title} />
      <Input
        isTextArea={true}
        handleChange={handleChange}
        name="text"
        value={form.text}
      />
      <div>
        <Button type="submit" handleClick={handleSubmit} text="Confirm" />
        <Button handleClick={() => setIsActive(false)} text="Cancel" />
      </div>
    </form>
  );
}
