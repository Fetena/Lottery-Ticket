import { db } from '../../firebase.js'; 
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

export async function submitTicket(ticketData) {
    // Logic for capturing user input and sending to Firestore
    return await addDoc(collection(db, "tickets"), ticketData);
}
