import { auth, db } from "./firebase-config.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/13.4.0/firebase-auth.js";
import { doc, setDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-firestore.js";

const message = document.getElementById("message");
const signupForm = document.getElementById("signup-form");
const loginForm = document.getElementById("login-form");

if (signupForm) {
  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    message.textContent = "Creating account...";
    try {
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const role = document.getElementById("role").value;

      const cred = await createUserWithEmailAndPassword(auth, email, password);

      await setDoc(doc(db, "users", cred.user.uid), {
        fullName: document.getElementById("fullName").value,
        email,
        role,
        discipline: document.getElementById("discipline").value,
        ageRange: document.getElementById("ageRange").value,
        location: document.getElementById("location").value,
        verified: role === "youth",
        createdAt: serverTimestamp()
      });

      window.location.href = "dashboard.html";
    } catch (err) {
      message.textContent = err.message;
    }
  });
}

if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    message.textContent = "Logging in...";
    try {
      await signInWithEmailAndPassword(
        auth,
        document.getElementById("email").value,
        document.getElementById("password").value
      );
      window.location.href = "dashboard.html";
    } catch (err) {
      message.textContent = "Login failed: " + err.message;
    }
  });
}