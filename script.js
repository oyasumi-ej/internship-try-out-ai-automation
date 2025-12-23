document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();

        if (!name || !email || !message) {
            alert("Please fill in all fields.");
            return;
        }

        const data = {
            name: name,
            email: email,
            message: message,
        };

        try {
            const response = await fetch(
                "https://ejtotoo.app.n8n.cloud/webhook/0536c5bf-6147-46a9-850d-bf54eef167dc",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                }
            );

            if (response.ok) {
                alert("Message sent! We will contact you soon.");
                form.reset();
            } else {
                alert("Something went wrong. Try again.");
            }
        } catch (err) {
            console.error("Network error:", err);
            alert("Network error. Please check your connection and try again.");
        }
    });
});
