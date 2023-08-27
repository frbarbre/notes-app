import Button from "./Button";

interface Props {
  title: string;
  text: string;
  id: string;
  setIsDeleting: (isDeleting: boolean) => void;
  setIsEditing: (isEditing: boolean) => void;
  setIsViewing: (isViewing: boolean) => void;
}

export default function View({
  title,
  text,
  id,
  setIsDeleting,
  setIsEditing,
  setIsViewing,
}: Props) {
  function handleEdit() {
    setIsEditing(true);
    setIsViewing(false);
  }

  function handleDelete() {
    setIsDeleting(true);
    setIsViewing(false);
  }
  return (
    <article>
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div className="w-full">
          <h2 className="text-[36px] font-bold tracking-[2.88px] md:truncate">
            {title}
          </h2>
          <hr className="w-full max-w-[188px] border-primary mt-[8px]" />
        </div>
        <div className="flex gap-[9px] pb-4">
          <Button
            isActionBtn
            icon="/edit.svg"
            width="w-[40px]"
            height="h-[40px]"
            rounded="rounded-[8.25px]"
            handleClick={handleEdit}
          />
          <Button
            isActionBtn
            icon="/delete.svg"
            width="w-[40px]"
            height="h-[40px]"
            rounded="rounded-[8.25px]"
            handleClick={handleDelete}
          />
        </div>
      </div>
      <p className="max-h-[413px] overflow-y-scroll pr-2">{text}</p>
    </article>
  );
}
