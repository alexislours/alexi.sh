import { defineConfig, presetTypography, presetUno } from "unocss";

export default defineConfig({
  presets: [
    presetUno(),
    presetTypography({
      cssExtend: {
        "code:after": {
          content: "''",
        },
        "code:before": {
          content: "''",
        },
      },
    }),
  ],
});
