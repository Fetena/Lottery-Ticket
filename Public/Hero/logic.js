// /Public/Hero/logic.js
import { db } from '../../firebase.js';
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

export async function getHeroContent() {
    return await getDoc(doc(db, "public_content", "hero")); //
}
