import { db } from '../../firebase.js';
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

export async function getDrawResults() {
    return await getDocs(collection(db, "draws")); //[cite: 3]
}
