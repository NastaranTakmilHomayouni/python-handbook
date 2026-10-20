document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("pre").forEach(function (pre) {
        if (pre.closest(".code-wrapper")) return;

        const wrapper = document.createElement("div");
        wrapper.className = "code-wrapper";

        pre.parentNode.insertBefore(wrapper, pre);
        wrapper.appendChild(pre);

        const button = document.createElement("button");
        button.className = "copy-code-button";
        button.textContent = "Copy";
        button.type = "button";

        button.addEventListener("click", async function () {
            const code = pre.querySelector("code");
            if (!code) return;

            try {
                await navigator.clipboard.writeText(
                    code.textContent
                );

                button.textContent = "Copied!";

                setTimeout(function () {
                    button.textContent = "Copy";
                }, 2000);
            } catch (error) {
                button.textContent = "Copy failed";
            }
        });

        wrapper.appendChild(button);
    });
});
