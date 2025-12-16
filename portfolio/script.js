const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let current = "";

buttons.forEach(btn => {
    btn.addEventListener("click", () => {

        let value = btn.textContent;

        if (value === "C") {
            current = "";
            display.textContent = "0";
            return;
        }

        if (value === "=") {
            try {
                current = eval(current).toString();
                display.textContent = current;
            } catch {
                display.textContent = "Error";
                current = "";
            }
            return;
        }
        current += value;
        display.textContent = current;
    });
});
