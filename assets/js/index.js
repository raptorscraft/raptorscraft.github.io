import { toAbout } from "./modules/about.js";
import { toHowtoplay } from "./modules/howtoplay.js";
import { toRaptorscraft } from "./modules/raptorscraft.js";
import { toRules } from "./modules/rules.js";

const allButtons = document.querySelectorAll(".nav_item");
const forLogo = document.querySelector(".for_logo");
const forInfo = document.querySelector(".for_info");

allButtons.forEach((button, index) => button.addEventListener("click", () => {
    switch (index) {
        case 0:
            toRaptorscraft(forLogo, forInfo);
            break;
        case 1:
            toAbout(forLogo, forInfo);
            
            break;
        case 2:
            toRules(forLogo, forInfo);
            break;
        case 3:
            toHowtoplay(forLogo, forInfo);
            break;
    }
}))

