import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useState } from "react";
import Modal from "./Modal";
import Form from "./Form";
import Button from "./Button";
import Delete from "./Delete";
import View from "./View";

export default function Note({
  title,
  id,
  text,
  deleteNote,
  updateNote,
}: {
  title: string;
  id: string;
  text: string;
  deleteNote: (id: string) => void;
  updateNote: ({
    id,
    text,
    title,
  }: {
    id: string;
    text: string;
    title: string;
  }) => void;
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isViewing, setIsViewing] = useState(false);
  const [editForm, setEditForm] = useState({
    title: title,
    text: text,
  });

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setEditForm({
      ...editForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editForm.title !== "" && editForm.text !== "") {
      updateNote({
        id: id,
        title: editForm.title,
        text: editForm.text,
      });
      setIsEditing(false);
    }
  };

  return (
    <div style={style} className="relative group">
      <div
        ref={setNodeRef}
        {...attributes}
        {...listeners}
        className="p-[24px] border-gray-light border-[2px] bg-gray rounded-[13px] h-[380px] relative overflow-hidden text-white w-full md:w-[280px]"
      >
        <div className="mb-[24px] h-full">
          <h2 className="font-bold text-[22px] md:truncate tracking-[1.76px]">
            {title}
          </h2>
          <hr className="w-full border-primary mt-[8px] pb-[10px]" />
          <p className="mb-[24px] leading-[23.2px] h-[276px] overflow-hidden">
            {text}
          </p>
        </div>
      </div>
      <article className="md:hidden group-hover:block absolute bottom-0 left-0 right-0 h-[77px] bg-gradient bg-no-repeat bg-cover rounded-b-[13px] overflow-hidden border-[2px] border-gray-light border-t-0">
        <div className="w-full h-full bg-white/5 backdrop-blur-[40.7px] flex items-center justify-center gap-[10.7px]">
          <Button
            text="Show More"
            height="h-[40px]"
            width="max-w-[119px] w-full"
            rounded="rounded-[8.25px]"
            fontSize="text-[12px]"
            handleClick={() => setIsViewing(true)}
          />
          <Button
            isActionBtn
            icon="/edit.svg"
            width="w-[40px]"
            height="h-[40px]"
            rounded="rounded-[8.25px]"
            handleClick={() => setIsEditing(true)}
          />
          <Button
            isActionBtn
            icon="/delete.svg"
            width="w-[40px]"
            height="h-[40px]"
            rounded="rounded-[8.25px]"
            handleClick={() => setIsDeleting(true)}
          />
        </div>
      </article>

      {isEditing && (
        <Modal setIsActive={setIsEditing}>
          <Form
            form={editForm}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            type="edit"
            setIsActive={setIsEditing}
          />
        </Modal>
      )}

      {isDeleting && (
        <Modal setIsActive={setIsDeleting} isDelete>
          <Delete
            handleDelete={deleteNote}
            id={id}
            setIsDeleting={setIsDeleting}
            title={title}
          />
        </Modal>
      )}

      {isViewing && (
        <Modal setIsActive={setIsViewing}>
          <View
            id={id}
            setIsDeleting={setIsDeleting}
            setIsEditing={setIsEditing}
            setIsViewing={setIsViewing}
            text={text}
            title={title}
          />
        </Modal>
      )}
    </div>
  );
}
