import { betterRandom } from "../../better-random.js";

const userSeed = document.querySelector("fieldset:first-of-type input[type='number']");

document.querySelectorAll("input[type='radio']").forEach(r => {
    r.addEventListener("change", () => {
        if (userSeed.hasAttribute("disabled")) userSeed.removeAttribute("disabled");
        else userSeed.setAttribute("disabled", "disabled");
    });
});

//Random Float
document.querySelector("fieldset:nth-of-type(2) button").addEventListener("click", e => {
    const rand = getRand(),
          fieldset = e.target.closest("fieldset"),
          output = fieldset.querySelector("output"),
          qty = Number(fieldset.querySelector("input").value),
          nums = [];
    for (let i=0; i<qty; i++) nums.push(rand.nextFloat());
    setOutput(output, nums);
});

//Random Integer within Range
document.querySelector("fieldset:nth-of-type(3) button").addEventListener("click", e => {
    const rand = getRand(),
          fieldset = e.target.closest("fieldset"),
          output = fieldset.querySelector("output"),
          [qty, min, max] = Array.from(fieldset.querySelectorAll("input")).map(e => Number(e.value)),
          rangedRand = rand.range(min, max),
          nums = [];
    for (let i=0; i<qty; i++) nums.push(rangedRand.nextInt());
    output.innerHTML = nums.map(n => {
        if (n === 1) n = "&#9856;";
        else if (n === 2) n = "&#9857";
        else if (n === 3) n = "&#9858";
        else if (n === 4) n = "&#9859";
        else if (n === 5) n = "&#9860";
        else if (n === 6) n = "&#9861";
        return `<span class="gameDie">${n}</span>`;
    }).join("");
});

//Random Float within Range
document.querySelector("fieldset:nth-of-type(4) button").addEventListener("click", e => {
    const rand = getRand(),
          fieldset = e.target.closest("fieldset"),
          output = fieldset.querySelector("output"),
          [qty, min, max] = Array.from(fieldset.querySelectorAll("input")).map(e => Number(e.value)),
          rangedRand = rand.range(min, max),
          nums = [];
    for (let i=0; i<qty; i++) nums.push(rangedRand.nextFloat());
    setOutput(output, nums);
});

function getRand() {
    if (userSeed.hasAttribute("disabled")) return betterRandom();
    return betterRandom(Number(userSeed.value));
}

function setOutput(output, nums) {
    output.innerHTML = `<ul>${
        nums.map(n => `<li>${n}</li>`).join("")
    }</ul>`;
}
