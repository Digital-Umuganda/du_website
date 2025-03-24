import {
  doc,
  addDoc,
  getDoc,
  getDocs,
  collection,
  DocumentData,
  WithFieldValue,
} from "firebase/firestore";

// Utils
import { db } from "./config";

export const useGetDocuments = () => {
  const getDoc = async (path: string) => {
    const collectionRef = collection(db, path);
    const querySnapshot = await getDocs(collectionRef);
    const data = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return data;
  };

  return { getDoc };
};

export const useGetDocument = <T>() => {
  const getDocument = async (path: string, id: string): Promise<T | null> => {
    const docRef = doc(db, path, id);
    const docSnapshot = await getDoc(docRef);

    if (docSnapshot.exists()) {
      return { ...docSnapshot.data(), id: docSnapshot.id } as T;
    } else {
      return null;
    }
  };

  return { getDocument };
};

export const usePostDocument = <T extends WithFieldValue<DocumentData>>() => {
  const postDoc = async (path: string, data: T) => {
    const collectionRef = collection(db, path);
    const docRef = await addDoc(collectionRef, data);
    return docRef;
  };

  return { postDoc };
};
