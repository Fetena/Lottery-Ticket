import { db } from '../../firebase.js';
import { doc, updateDoc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

export async function generateWinner(drawId, winnerNumber) {
    await updateDoc(doc(db, "draws", drawId), { winner: winnerNumber, status: "completed" }); //[cite: 3]
}
