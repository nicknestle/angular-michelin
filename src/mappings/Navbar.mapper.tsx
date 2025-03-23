import { figmaMapping, html, type BaseFigmaProps } from "@builder.io/dev-tools/figma";

/*
// Example Figma component structure

<mic-navbar>
  <mic-logo ariaLabel="Homepage - Michelin - Application Name"></mic-logo>
  <mic-navbar-spacer></mic-navbar-spacer>
  <mic-navbar-links>
    <mic-navbar-link link="." icon="directions_car" label="Automobil">
      <mic-navbar-link label="Truck"></mic-navbar-link>
      <mic-navbar-link label="Subway"></mic-navbar-link>
      <mic-navbar-link label="Agricultural"></mic-navbar-link>
    </mic-navbar-link>
    <mic-navbar-link icon="motorcycle" label="Motorcycle"></mic-navbar-link>
  </mic-navbar-links>
</mic-navbar>
*/

// ❖ Navbar
interface FigmaNavbarProps extends BaseFigmaProps {
  "Visible APP NAME"?: boolean;
  "Visible Search"?: boolean;
  "App Name"?: string;
  Nom?: string;
  "Visible Logo"?: boolean;
  Prnom?: string;
  COLOR?: "🔵 Blue" | "⚪White" | "⚫ Dark";
  Size?: "1920" | "1440" | "1280" | "768" | "360";
  Loged?: "true" | "false";
}

// Read more at https://www.builder.io/c/docs/mapping-functions
figmaMapping({
  componentKey: "f53038ecbfb17229a2ca99793e1ec443d8d78fbe",
  mapper(figma: FigmaNavbarProps) {
    // Normalize color by removing emoji and converting to lowercase
    const normalizeColor = (color?: string) => {
      if (!color) return undefined;
      return color
        .replace(/[^\w\s]/g, "")
        .trim()
        .toLowerCase();
    };

    // Normalize size by converting to standard format
    const normalizeSize = (size?: string) => {
      if (!size) return undefined;
      return size;
    };

    // Convert string 'true'/'false' to boolean
    const isLogged = figma.Loged === "true";

    // Build the inner content conditionally
    const logoContent = figma["Visible Logo"] 
      ? `<div><!-- Logo content would go here --></div>` 
      : '';

    const appNameContent = figma["Visible APP NAME"] 
      ? `<div>${figma["App Name"]}</div>` 
      : '';

    const searchContent = figma["Visible Search"] 
      ? `<div><!-- Search content would go here --></div>` 
      : '';

    const userContent = isLogged 
      ? `<div>${figma.Nom} ${figma.Prnom}</div>` 
      : '';

    // Combine all content using the html template literal tag
    return html`<mic-navbar>
        ${logoContent}
        ${appNameContent}
        ${searchContent}
        ${userContent}
      </mic-navbar>`;
  },
});
