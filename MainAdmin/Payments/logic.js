// /MainAdmin/Payments/logic.js
import { db } from '../../firebase.js';
import { doc, updateDoc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

export async function saveMainPaymentSettings(telebirr, cbe) {
    await updateDoc(doc(db, "settings", "main_payment"), { telebirr, cbe }); //
}
