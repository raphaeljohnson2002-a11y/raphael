emailjs.init("-q_QNNn8af7xXMkvJ");

document
.getElementById("contactForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    emailjs.send(
        "service_0yqsnkp",
        "template_z4k81vm",
        {
            from_name:
                document.getElementById("name").value,

            from_email:
                document.getElementById("email").value,

            subject:
                document.getElementById("subject").value,

            message:
                document.getElementById("message").value
        }
    )

    .then(function() {

        document
        .getElementById("status")
        .textContent =
        "Message sent successfully!";

    })

    .catch(function(error) {

        document
        .getElementById("status")
        .textContent =
        "Failed to send message.";

        console.error(error);

    });

});


