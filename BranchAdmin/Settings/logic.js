import { db } from '../../firebase.js';
import { doc, updateDoc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

export async function updateBranchSettings(branchId, settingsData) {
    await updateDoc(doc(db, "branches", branchId), settingsData); //[cite: 3]
}
