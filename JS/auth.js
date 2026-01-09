(function () {
  // SHA-256 of: 1fGgjxdrBT5f4N5T
  const STORED_HASH =
    "66ad664e8e4b80d208a7ad4b853ee24a3da9e21c2bd5d4c3ffee8902acc95ea2";

  // Already authenticated this session
  if (sessionStorage.getItem("authenticated") === "true") return;

  // Ask for password
  const input = prompt("Enter password:");
  const inputHash = CryptoJS.SHA256(input || "").toString();

  // If correct, allow
  if (input && inputHash === STORED_HASH) {
    sessionStorage.setItem("authenticated", "true");
    return;
  }

  // If wrong, blank screen and STOP
  try { window.stop(); } catch (e) {}

  document.open();
  document.write(""); // blank white screen
  document.close();

  throw new Error("Access denied");
})();
