import "firebase/compat/firestore";
import {firestoreDatabase} from "./firestore";

export async function getCollectionFromDb(collection) {
    if (!firestoreDatabase) return [];

    const result = await firestoreDatabase.collection(collection).get();
    if (result.empty) return [];

    return result.docs.map(doc => ({...doc.data(), id: doc.id}));
}