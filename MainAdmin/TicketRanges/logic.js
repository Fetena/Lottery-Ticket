// /MainAdmin/TicketRanges/logic.js
import { db } from '../../firebase.js';
import { doc, updateDoc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

export async function updateRange(adminEmail, start, end) {
    await updateDoc(doc(db, "admins", adminEmail), { start, end }); //[cite: 3]
}
