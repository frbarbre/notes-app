import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { useState } from 'react';
import Modal from './Modal';
import Form from './Form';

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
    if (editForm.title !== '' && editForm.text !== '') {
      updateNote({
        id: id,
        title: editForm.title,
        text: editForm.text,
      });
      setIsEditing(false);
    }
  };

  return (
    <div style={style} className="relative w-[300px]">
      <div
        ref={setNodeRef}
        {...attributes}
        {...listeners}
        className="p-4 bg-white rounded-[4px] h-[150px] relative truncate"
      >
        <p className="text-black h-full">{text}</p>
      </div>
      <p
        className="absolute top-0 right-0 text-red"
        onClick={() => deleteNote(id)}
      >
        Delete
      </p>
      <h2
        onClick={() => setIsEditing(true)}
        className="text-black hover:text-green-400 bg-red absolute top-0"
      >
        {title}
      </h2>
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
    </div>
  );
}
