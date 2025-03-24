import {
  figmaMapping,
  html,
  type BaseFigmaProps,
} from "@builder.io/dev-tools/figma";
import { MatCardAvatar } from "@angular/material/card";

// ❖ Avatar
interface FigmaAvatarProps extends BaseFigmaProps {
  Size?: "Large (Profile)" | "Medium (Menu)" | "Small (List)";
}

// // Read more at https://www.builder.io/c/docs/mapping-functions
// figmaMapping({
//   componentKey: "31980984fd9c1c5cc1a0126013ce85e92134330a",
//   mapper(figma: FigmaAvatarProps) {
//     const widthMap = {
//       "Large (Profile)": "140px",
//       "Medium (Menu)": "140px",
//       "Small (List)": "65px",
//     };

//     return html`<img
//       mat-card-avatar
//       src=${figma.$imageUrl}
//       width=${widthMap[figma.Size!] || "140px"}
//     />`;
//   },
// });
