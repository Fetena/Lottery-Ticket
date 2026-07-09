import { db } from '../../firebase.js';
import { doc, updateDoc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

export async function updateSystemSettings(configData) {
    await updateDoc(doc(db, "settings", "system"), configData); //[cite: 3]
}
