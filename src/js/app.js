import "../scss/style.scss";
import burger from "./files/burger.js";
import headerScroll from "./files/headerScroll.js";
import inputmask from "./files/inputmask.js";
import mediaAdaptive from "./files/mediaAdaptive.js";
import mediaScroll from "./files/mediaScroll.js";
import sliders from "./files/sliders.js";
import spoller from "./files/spoller.js";

spoller();
burger();
inputmask();
mediaAdaptive();
sliders();
headerScroll();
mediaScroll();

Fancybox.bind("[data-fancybox]", {});

// Fancybox.show([{ src: "#modal-connect", type: "inline" }]);
