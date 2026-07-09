import { db } from '../../firebase.js';
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

export async function bookAppointment(appointmentData) {
    return await addDoc(collection(db, "appointments"), appointmentData); //
}
