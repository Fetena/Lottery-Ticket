import { db } from '../../firebase.js';
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

export async function getCustomerStats(customerId) {
    const docRef = doc(db, "customers", customerId);
    return await getDoc(docRef); //
}
