import fs from "fs-extra";
import getTheme from "./theme";

console.log("begin");

fs.mkdir("./themes", { recursive: true }).then(() =>
  Promise.all([
    fs.writeJSON(
      "./themes/idle-light-color-theme.json",
      getTheme({
        color: "light",
        name: "Idle Light",
      }),
      { spaces: 2 }
    ),
    fs.writeJSON(
      "./themes/idle-dark-color-theme.json",
      getTheme({
        color: "dark",
        name: "Idle Dark",
      }),
      { spaces: 2 }
    ),
  ])
);

console.log("end");
