const PresetModule = (() => {
  const presets = {
    "Gameboy Color": { width: 240, height: 203, palette: "Gameboy Color" },
    "PICO-8": { width: 128, height: 128, palette: "PICO-8" },
    "Commodore 64": { width: 40, height: 80, palette: "Commodore 64" },
  };

  function instrumentPresetMenu() {}

  function propertiesOf(presetId) {
    return presets[presetId];
  }

  return {
    propertiesOf,
    instrumentPresetMenu,
  };
})();
