import { db } from '../../firebase.js';
import { doc, updateDoc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

export async function verifyPayment(paymentId, status) {
    await updateDoc(doc(db, "payments", paymentId), { status: status }); //[cite: 3]
}
