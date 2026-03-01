import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDocs, addDoc, updateDoc, deleteDoc } from "firebase/firestore/lite"
import { Todo } from "../types";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_WEB_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
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
