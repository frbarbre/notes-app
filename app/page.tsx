'use client';

import Form from '@/components/Form';
import Modal from '@/components/Modal';
import Navbar from '@/components/Navbar';
import Note from '@/components/Note';
import { NoteProps } from '@/types';
import { DndContext, closestCenter, DragEndEvent } from '@dnd-kit/core';
import { arrayMove, SortableContext } from '@dnd-kit/sortable';
import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';

export default function Home() {
  const [notes, setNotes] = useState<NoteProps[] | []>([]);
  const [isCreating, setIsCreating] = useState(false);
  const [form, setForm] = useState({
    title: '',
    text: '',
  });

  let noteArray: string | null = null;

  if (typeof window !== 'undefined') {
    // Perform localStorage action
    noteArray = localStorage.getItem('notes');
  }

  useEffect(() => {
    if (noteArray) {
      setNotes(JSON.parse(noteArray));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (form.title !== '' && form.text !== '') {
      createNote(form.title, form.text);
      setForm({
        title: '',
        text: '',
      });
      setIsCreating(false);
    }
  }

  function createNote(title: string, text: string) {
    setNotes((prev) => [
      {
        title: title,
        text: text,
        id: nanoid(),
      },
      ...prev,
    ]);
  }

  function deleteNote(id: string) {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  }

  function updateNote({
    id: id,
    title: title,
    text: text,
  }: {
    id: string;
    title: string;
    text: string;
  }) {
    deleteNote(id);

    setNotes((prev) => [
      {
        title: title,
        text: text,
        id: id,
      },
      ...prev,
    ]);
    localStorage.setItem('notes', JSON.stringify(notes));
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (active.id !== over!.id) {
      setNotes((items) => {
        const activeIndex = items.map((e) => e.id).indexOf(active.id as string);
        const overIndex = items.map((e) => e.id).indexOf(over!.id as string);
        localStorage.setItem('notes', JSON.stringify(notes));
        return arrayMove(items, activeIndex, overIndex);
      });
    }
  }

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <Navbar setIsCreating={setIsCreating} />
      <main className="flex gap-[35px] flex-wrap">
        {notes.length !== 0 ? (
          <SortableContext items={notes}>
            {notes.map((note) => (
              <Note
                title={note.title}
                text={note.text}
                key={note.id}
                id={note.id}
                deleteNote={deleteNote}
                updateNote={updateNote}
              />
            ))}
          </SortableContext>
        ) : (
          <p className="text-center text-2xl text-gray-400 w-full">
            No notes yet. Click the plus button to create one.
          </p>
        )}
      </main>
      {isCreating && (
        <Modal setIsActive={setIsCreating}>
          <Form
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            form={form}
            type="create"
            setIsActive={setIsCreating}
          />
        </Modal>
      )}
    </DndContext>
  );
}
