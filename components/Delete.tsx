import Button from "./Button";

interface Props {
  id: string;
  title: string;
  handleDelete: (id: string) => void;
  setIsDeleting: (isDeleting: boolean) => void;
}

export default function Delete({
  handleDelete,
  id,
  setIsDeleting,
  title,
}: Props) {
  return (
    <article className="max-w-[330px]">
      <h2 className="text-[18px] font-bold tracking-[1.44px]">Delete Note</h2>
      <hr className="w-full max-w-[131px] border-primary pb-[15px]" />
      <p className="font-medium text-[13px] tracking-[1.04px] max-w-[257px]">
        Are you sure you want to delete{" "}
        <span className="italic">"{title}"</span>?
      </p>
      <div className="mt-[28px] flex flex-col gap-[9px]">
        <Button text="Confirm" handleClick={() => handleDelete(id)} />
        <Button
          text="Cancel"
          handleClick={() => setIsDeleting(false)}
          color="border-red border-[2px] hover:bg-white/5"
        />
      </div>
    </article>
  );
}
