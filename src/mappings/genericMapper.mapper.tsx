import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";

figmaMapping({
  genericMapper(figma: BaseFigmaProps) {
    console.log(figma);
    return undefined;
  },
});