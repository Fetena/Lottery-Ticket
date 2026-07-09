// /Public/LoginModal/logic.js
import { auth } from '../../firebase.js';
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

export async function loginUser(email, password) {
    return await signInWithEmailAndPassword(auth, email, password); //
}
