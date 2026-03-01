import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDocs, addDoc, updateDoc, deleteDoc } from "firebase/firestore/lite"
import { Todo } from "../types";

const firebaseConfig = {
  apiKey: "AIzaSyCa6eKoCuvrmDYuiN9b_qI-k-7nwccL8zw",
  authDomain: "todosapp-a7e16.firebaseapp.com",
  projectId: "todosapp-a7e16",
  storageBucket: "todosapp-a7e16.firebasestorage.app",
  messagingSenderId: "306696809491",
  appId: "1:306696809491:web:e34a0ca0c78ea756efa3e6",
  measurementId: "G-Z0Y7DTNNWB"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const todosCollection = collection(db, 'todos')

export const get = async () => {
  const snapshot = await getDocs(todosCollection);

  return snapshot.docs.map(doc => Object.assign({ id: doc.id }, doc.data())) as Todo[];
}

export const add = async (task: string) => {
  const newTodo: Todo = { completed: false, task: task }

  try {
    await addDoc(todosCollection, newTodo);
  } catch (e) {
    console.log("Error adding new todo", e);
  }
}

export const update = async (id: string) => {
  try {
    await updateDoc(doc(db, "todos", id), { completed: true });
  } catch (e) {
    console.log("Error updating todo", e);
  }
}

export const remove = async (id: string) => {
  try {
    await deleteDoc(doc(db, "todos", id));
  } catch (e) {
    console.log("Error deleting todo", e);
  }
}
