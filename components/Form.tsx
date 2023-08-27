import Button from "./Button";
import Input from "./Input";

export default function Form({
  handleSubmit,
  handleChange,
  form,
  type,
  setIsActive,
}: {
  handleSubmit: (e: React.FormEvent) => void;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  form: { title: string; text: string };
  type: "create" | "edit";
  setIsActive: (isActive: boolean) => void;
}) {
  return (
    <form onSubmit={handleSubmit} className="flex flex-col text-black">
      <h2 className="capitalize text-[36px] font-bold text-white tracking-[2.88px]">
        {type} note
      </h2>
      <hr className="w-full max-w-[188px] border-primary mt-[8px] pb-[29px]" />
      <div className="flex flex-col gap-[22px] mb-[21px]">
        <Input handleChange={handleChange} name="title" value={form.title} />
        <Input
          isTextArea={true}
          handleChange={handleChange}
          name="text"
          value={form.text}
        />
      </div>
      <div className="flex gap-[20px] flex-col md:flex-row">
        <Button type="submit" handleClick={handleSubmit} text="Confirm" />
        <Button handleClick={() => setIsActive(false)} text="Cancel" color="border-red border-[2px] hover:bg-white/5" />
      </div>
    </form>
  );
}
