onAuthStateChanged(auth, async (user) => {
  if (!user) {
    window.location.href = "login.html";
    return;
  }
  try {
    const snap = await getDoc(doc(db, "users", user.uid));
    if (snap.exists()) {
      const data = snap.data();
      userInfo.textContent = `${data.fullName} (${data.role})`;
    } else {
      userInfo.textContent = user.email + " (no profile saved)";
    }
  } catch (err) {
    userInfo.textContent = "Error: " + err.message;
  }
});