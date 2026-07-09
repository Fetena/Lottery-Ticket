import { db } from '../../firebase.js';
import { doc, updateDoc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

export async function updateCustomerProfile(customerId, data) {
    await updateDoc(doc(db, "customers", customerId), data); //[cite: 3]
}
