// /Customer/Library/logic.js
import { db } from '../../firebase.js';
import { collection, getDocs, query, orderBy } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

/**
 * Retrieves educational content or guides from the 'library' collection
 */
export async function getLibraryContent() {
    const q = query(collection(db, "library"), orderBy("title", "asc")); //
    return await getDocs(q); //
}
