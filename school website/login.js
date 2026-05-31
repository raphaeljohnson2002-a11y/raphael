// ======================================
// LOGIN FORM HANDLER
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    const loginForm =
        document.getElementById("loginForm");

    const username =
        document.getElementById("username");

    const password =
        document.getElementById("password");

    const message =
        document.getElementById("message");

    loginForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            // Remove old messages
            message.textContent = "";

            // Validation

            if (
                username.value.trim() === "" ||
                password.value.trim() === ""
            ) {

                message.textContent =
                    "Please enter both username and password.";

                message.style.color = "#ff4d4d";

                return;
            }

            // Example login credentials
            // Change these later when you connect MySQL

            const validUsername = "admin";
            const validPassword = "12345";

            if (
                username.value === validUsername &&
                password.value === validPassword
            ) {

                message.textContent =
                    "Login successful. Redirecting...";

                message.style.color = "#00ff99";

                setTimeout(() => {

                    window.location.href =
                        "portal.html";

                }, 1500);

            } else {

                message.textContent =
                    "Invalid username or password.";

                message.style.color = "#ff4d4d";
            }
        }
    );

});


// ======================================
// SHOW / HIDE PASSWORD
// ======================================

const togglePassword =
    document.getElementById("togglePassword");

const passwordField =
    document.getElementById("password");

if (togglePassword) {

    togglePassword.addEventListener(
        "click",
        () => {

            if (
                passwordField.type === "password"
            ) {

                passwordField.type = "text";

                togglePassword.textContent = "🙈";

            } else {

                passwordField.type = "password";

                togglePassword.textContent = "👁";

            }
        }
    );
}