palettes = {
  "SWEETIE-16": {
    colors: [
      "1a1c2c",
      "5d275d",
      "b13e53",
      "ef7d57",
      "ffcd75",
      "a7f070",
      "38b764",
      "257179",
      "29366f",
      "3b5dc9",
      "41a6f6",
      "73eff7",
      "f4f4f4",
      "94b0c2",
      "566c86",
      "333c57",
    ],
  },
  "PICO-8": {
    colors: [
      "000000",
      "1D2B53",
      "7E2553",
      "008751",
      "AB5236",
      "5F574F",
      "C2C3C7",
      "FFF1E8",
      "FF004D",
      "FFA300",
      "FFEC27",
      "00E436",
      "29ADFF",
      "83769C",
      "FF77A8",
      "FFCCAA",
    ],
  },
  "Commodore 64": {
    colors: [
      "000000",
      "626262",
      "898989",
      "adadad",
      "ffffff",
      "9f4e44",
      "cb7e75",
      "6d5412",
      "a1683c",
      "c9d487",
      "9ae29b",
      "5cab5e",
      "6abfc6",
      "887ecb",
      "50459b",
      "a057a3",
    ],
  },
  "Gameboy Color": {
    colors: ["2e463d", "385d49", "577b46", "7e8416"],
  },
};

//populate palettes list in new pixel menu
(() => {
  const palettesMenu = document.getElementById("palette-menu");
  const splashPalettes = document.getElementById("palette-menu-splash");
  const noPaletteButton = document.getElementById("no-palette-button");
  const newPixelElement = document.getElementById("new-pixel");
  const paletteButton = document.getElementById("palette-button");
  const paletteButtonSplash = document.getElementById("palette-button-splash");
  const loadPaletteButton = document.getElementById("load-palette-button");
  const loadPaletteButtonSplash = document.getElementById("load-palette-button-splash");

  splashPalettes.refresh = function () {
    Object.keys(palettes).forEach((paletteName) => {
      const button = document.createElement("button");
      button.appendChild(document.createTextNode(paletteName));

      //if the palette was specified by the user, change the dropdown to it
      if (palettes[paletteName].specified) {
        Util.setText("palette-button", paletteName);
        Util.setText("palette-button-splash", paletteName);
        //Show empty palette option
        noPaletteButton.style.display = "block";
      }

      const buttonEvent = () => {
        //hide the dropdown menu
        Util.deselect("palette-menu");
        Util.deselect("palette-button");
        Util.deselect("palette-menu-splash");
        Util.deselect("palette-button-splash");

        //show empty palette option
        noPaletteButton.style.display = "block";

        //set the text of the dropdown to the newly selected preset
        Util.setText("palette-button", paletteName);
        Util.setText("palette-button-splash", paletteName);
      };

      // Making a copy for the splash page too
      const copyButton = button.cloneNode(true);
      copyButton.addEventListener("click", buttonEvent);
      button.addEventListener("click", buttonEvent);

      // Appending it to the splash palette menu
      splashPalettes.appendChild(copyButton);
      palettesMenu.appendChild(button);
    });
  };

  splashPalettes.refresh();

  const loadPaletteButtonEvent = () => {
    document.getElementById("load-palette-browse-holder").click();
  };
  const clickPaletteButtonEvent = (e) => {
    Util.toggle("palette-button");
    Util.toggle("palette-menu");

    // Splash version
    Util.toggle("palette-button-splash");
    Util.toggle("palette-menu-splash");

    e.stopPropagation();
  };
  // Load Palettes
  loadPaletteButton.addEventListener("click", loadPaletteButtonEvent);
  loadPaletteButtonSplash.addEventListener("click", loadPaletteButtonEvent);

  // Palette menu click
  paletteButtonSplash.addEventListener("click", clickPaletteButtonEvent);
  paletteButton.addEventListener("click", clickPaletteButtonEvent);

  noPaletteButton.addEventListener("click", () => {
    noPaletteButton.style.display = "none";
    Util.setText("palette-button", "SWEETIE-16");
  });

  newPixelElement.addEventListener("click", () => {
    Util.deselect("palette-button");
    Util.deselect("palette-menu");

    // Splash version
    Util.deselect("palette-button-splash");
    Util.deselect("palette-menu-splash");
  });
})();
