// /MainAdmin/Notifications/logic.js
import { db } from '../../firebase.js';
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

export async function sendNotification(message, target) {
    await addDoc(collection(db, "notifications"), { message, target, timestamp: new Date() }); //
}
