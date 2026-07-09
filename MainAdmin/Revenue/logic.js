import { db } from '../../firebase.js';
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

export async function getTotalRevenue() {
    const querySnapshot = await getDocs(collection(db, "payments")); //[cite: 3]
    return querySnapshot.docs.reduce((sum, doc) => sum + doc.data().amount, 0); //[cite: 3]
}
