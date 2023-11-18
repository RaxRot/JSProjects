const btnEl = document.querySelector(".btn");
const appEl = document.querySelector(".app");

function addNote() {
  const noteObj = {
    id: Math.floor(Math.random() * 100000),
    content: "",
  };

  const noteEl = createNoteEl(noteObj.id, noteObj.content);
  appEl.appendChild(noteEl);
}

function createNoteEl(id, content) {
  const element = document.createElement("textarea");
  element.classList.add("note");
  element.setAttribute("data-id", id); // Set data-id attribute
  element.placeholder = "Empty note";
  element.value = content;

  element.addEventListener("dblclick", () => startDeletingNote(id, element));
  element.addEventListener("input", () => updateNote(id, element.value));

  return element;
}

function startDeletingNote(id, element) {
  const warning = confirm("Do you want to delete this note?");
  if (warning) {
    deleteNote(id, element);
  }
}

function updateNote(id, value) {
  // Реализация обновления заметки по идентификатору
  const noteEl = document.querySelector(`textarea[data-id="${id}"]`);
  noteEl.value = value;
}

function deleteNote(id, element) {
  // Реализация удаления заметки по идентификатору
  const noteEl = document.querySelector(`textarea[data-id="${id}"]`);
  noteEl.remove();
}

btnEl.addEventListener("click", addNote);
