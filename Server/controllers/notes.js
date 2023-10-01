import { prisma } from '../prisma/index.js';

//shows all the notes
export const showNotes = async (req, res) => {
  const notes = await prisma.notes.findMany();
  res.json(notes);
};

//show only the selected note
export const showNote = async (req, res) => {
  const note = await prisma.notes.findUnique({
    where: {
      id: req.params.id,
    },
  });
  res.json(note);
};

//create a new note
export const createNote = async (req, res) => {
  const { title, description } = req.body;
  const newNote = await prisma.notes.create({
    data: {
      title,
      description,
    },
  });
  res.json(newNote);
};

//update a note
export const updateNote = async (req, res) => {
  const { title, description } = req.body;
  const updatedNote = await prisma.notes.update({
    where: { id: req.params.id },
    data: {
      title,
      description,
    },
  });
  res.json(updatedNote);
};

//delete a note
export const deleteNote = async (req, res) => {
  const deletedNote = await prisma.notes.delete({
    where: { id: req.params.id },
  });
  res.json(deletedNote);
};
