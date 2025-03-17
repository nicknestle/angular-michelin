Component mappings in Angular involve creating `.mapper.ts` files that connect Figma components to your Angular code components. These mappings define how Figma component properties translate to Angular component properties.

A component mapping file links a specific Figma component to an Angular component in your codebase. To identify the Figma component, you can use either:

- `componentKey`: A unique identifier for the Figma component
- `url`: The Figma URL that points to the component (more human-readable)

Both methods achieve the same result, but the URL approach is often more convenient for manual creation.

These mapping files are just normal files in your repository that can be created manually. However, for convenience, we also provide a CLI command to generate them more easily with AI assistance.

Once this files exist in your project, we use `npx builder.io@latest figma publish` to [publish them](/component-mapping/publishing) to your Builder Space.

## Understanding HTML Template Literals in Angular Mappings

When working with Angular component mappings, you'll notice that we use HTML template literals (`` html`...` ``) instead of Angular's standard template syntax. This section explains this approach and how to use it effectively.

### Why HTML Template Literals?

Builder.io uses HTML template literals for component mappings because:

1. **Framework Agnostic**: This syntax provides a universal way to describe templating across HTML-based frameworks like Angular, Vue, or Web Components
2. **Lightweight**: It doesn't require large external dependencies that would bloat your application
3. **Well-tested API**: The syntax is battle-tested and widely used in libraries like lit-element

It's important to understand that the template in a mapper function is **not a real Angular component**. These mappers are declarative definitions that run outside the Angular runtime, serving as a bridge between Figma components and your Angular components.

### Syntax Comparison: Angular Templates vs HTML Template Literals

Here's how the HTML template literal syntax compares to standard Angular template syntax:

| Feature                    | Standard Angular Template   | HTML Template Literal                         |
| -------------------------- | --------------------------- | --------------------------------------------- |
| Binding properties         | `[property]="value"`        | `.property=${value}`                          |
| Binding boolean attributes | `[disabled]="isDisabled"`   | `?disabled=${isDisabled}`                     |
| String attributes          | `attribute="value"`         | `attribute="value"`                           |
| Event binding              | `(click)="handleClick()"`   | `@click=${handleClick}`                       |
| Class binding              | `[class.active]="isActive"` | `class="active ${isActive ? 'enabled' : ''}"` |
| Style binding              | `[style.color]="color"`     | `style="color: ${color};"`                    |
| Interpolation              | `{{ value }}`               | `${value}`                                    |
| Template reference         | `#templateRef`              | `id="some-id"` (and reference by DOM ID)      |
| Component selector         | `<app-component>`           | `<app-component>` (same)                      |

### Examples of HTML Template Literal Usage

Here are a few examples to help you understand how to use HTML template literals in your component mappings:

#### Basic Property Binding

```ts
// Standard Angular template
// <button-component [variant]="primary" [size]="large"></button-component>

// HTML template literal in mapper
figmaMapping({
  componentKey: "button-component-key",
  mapper(figma) {
    return html`
      <button-component .variant=${figma.Variant} .size=${figma.Size}>
        ${figma.Label}
      </button-component>
    `;
  },
});
```

#### Conditional Rendering

```ts
// Standard Angular template
// <div *ngIf="showElement">Content</div>

// HTML template literal in mapper
figmaMapping({
  componentKey: "conditional-component-key",
  mapper(figma) {
    return html` ${figma.ShowElement ? html`<div>Content</div>` : ""} `;
  },
});
```

#### Handling Events

```ts
// Standard Angular template
// <button (click)="handleClick()">Click me</button>

// HTML template literal in mapper - Note: event handlers are rarely used in mappers
// as they're typically defined in your actual components
figmaMapping({
  componentKey: "button-component-key",
  mapper(figma) {
    return html`
      <button-component @click=${() => console.log("clicked")}>
        Click me
      </button-component>
    `;
  },
});
```

#### List Rendering

```ts
// Standard Angular template
// <ul><li *ngFor="let item of items">{{item}}</li></ul>

// HTML template literal in mapper
figmaMapping({
  componentKey: "list-component-key",
  mapper(figma) {
    const items = figma.Items || [];
    return html`
      <ul>
        ${items.map((item) => html`<li>${item}</li>`)}
      </ul>
    `;
  },
});
```

### Common Gotchas and Best Practices

1. **Property vs. Attribute Binding**: Use `.propName=${value}` for property binding (Angular's `[propName]`) and `propName="value"` for attribute binding.

2. **Boolean Attributes**: Use `?disabled=${condition}` syntax for boolean attributes that should be present or absent based on a condition.

3. **Expression Interpolation**: Use `${expression}` anywhere inside the template to insert dynamic values.

4. **Conditional Rendering**: There's no direct equivalent to `*ngIf` - use ternary expressions: `${condition ? html`<element></element>` : ''}`.

5. **List Rendering**: There's no direct equivalent to `*ngFor` - use JavaScript's `map()` to transform arrays into templates.

6. **Template Structure**: The template must have a single root element or fragment. If you need multiple root-level elements, wrap them in a container.

7. **Component Selector Names**: Angular components typically use kebab-case selectors in templates, so continue using that convention in your HTML template literals.

Remember that these mappers are not creating actual Angular components - they're just defining how Figma components map to your existing Angular components. The HTML template literal syntax is a way to express this mapping in a framework-agnostic way.

## Using the CLI to Generate Mappings

The CLI provides a more convenient approach with AI assistance to help you bootstraps mappings more quickly.
Notice that both approaches (manual and CLI) lead to the same result, creating `[componentName].mapper.ts` files in your project.

### The CLI Generate Process in Detail

The CLI-based workflow leverages AI to automatically generate appropriate mappings between your Figma designs and code components. It analyzes the Figma component, your code components, and any additional documentation to figure out the best mapper function.

1. **Use the Builder Figma Plugin**: Open the Builder Figma Plugin and navigate to the Design System tab. The plugin scans your selection and identifies unmapped components.

2. **Select Components in Figma**: Select the components you want to map to your code components.

3. **Generate the CLI Command**: In the Design System tab of the plugin, you'll see a list of unmapped components along with a CLI command. This command includes the Figma IDs for all unmapped components. Copy this command by clicking the copy icon.

   ```bash
   # Example command
   npx builder.io@latest figma generate --token [TOKEN]
   ```

   The long string in the command is the Figma component ID, which uniquely identifies the component in Figma. This ID is automatically extracted by the plugin and inserted into the command.

4. **Run the Command**: Open your terminal in your project directory and paste the command. When you run it, the CLI will:

   - Look up the Figma components based on their IDs
   - Scan your codebase for potential matching components

5. **Select Local Components**: The CLI will display a list of code components found in your project and prompt you to select which ones should be mapped to your Figma components. Use the arrow keys to navigate and press Enter to select a component.

   ```
   Select a code component to map ❖ PrimaryButton
   ❯ ★ Button from '@/components/ui/button'
     Card from '@/components/ui/card'
     ⏭️  Skip (Ctrl+C)
     🏗️  Scaffold Mapper (Generate interface only)
     📦 External npm package
   ```

   > **Pro Tip**: The CLI suggests the best matches first (marked with ★), based on name similarity. If your component is in an external package, select that option to choose from installed packages.

6. **Add Documentation (Optional)**: The CLI will ask if you want to provide a documentation URL for your component. For optimal results, provide a URL to documentation that includes actual code examples showing how to use the component:

   ```
   Providing a docs URL for Button can drastically improve results: (Ctrl+C to skip)
   > https://material.angular.io/components/button/overview
   ```

   > **Pro Tip**: Adding a documentation URL significantly improves the quality of generated mappings, as the AI can learn from the component's official API documentation. For best results, provide URLs to pages that contain actual code examples of how to use the Angular component, showing properties, event handlers, and common patterns. Documentation with practical code samples is much more valuable than pages with only theoretical explanations or API references without examples.

7. **Review AI-Generated Mappings**: The CLI uses AI to suggest appropriate mappings between your Figma and code components. It will show you the suggested mapping code:

   ```ts
   import { figmaMapping, html } from "@builder.io/dev-tools/figma";
   import { Button } from "@/components/ui/button";

   figmaMapping({
     componentKey: "9ca66d3a1f5b2c4e7d8a0b9f",
     mapper(figma) {
       return html`
         <button-component
           .variant=${figma.Variant?.toLowerCase()}
           .size=${figma.Size?.toLowerCase()}
           ?disabled=${figma.State === "Disabled"}
         >
           ${figma.$textContent || figma.Text || "Button"}
         </button-component>
       `;
     },
   });
   ```

8. **Refine the Mapping**: If needed, you can provide natural language feedback to improve the mapping:

   ```
   How does the mapping look? Reply "good", or provide feedback (Ctrl+C to exit)
   > The button should use figma.Label for the text content instead of $textContent
   ```

   The AI will update the mapping based on your feedback and show you the revised code. You can continue this feedback loop until you're satisfied with the mapping.

   > **Tip**: You can give specific instructions like "Map the 'Color' property to the 'color' attribute" or "Use the first child as the icon."

9. **Save the Mapping**: Once you're satisfied with the mapping, the CLI will ask where to save it:

   ```
   Where do you want to save the new mapping? (Ctrl+C to exit)
   > src/mappings/Button.mapper.ts
   ```

   The default location is usually `src/mappings/[ComponentName].mapper.ts`, but you can specify any valid path within your project.

10. **Publish the Mapping**: After creating one or more mappings, publish them to your Builder Space:

    ```bash
    npx builder.io figma publish
    ```

    This will display:

    ```
    Searching for mapping files...
    Found 3 mapping files

    Validating mappings...

    You are about to publish 3 mapping files to your Builder.io space.
    Do you want to continue? (Y/n)
    > Y

    Publishing mappings to Builder.io...
    ✓ Published 3 mapping files successfully

    Your mappings are now available in the Builder Figma plugin
    ```

### Troubleshooting the CLI Process

If you encounter issues during the mapping process:

1. **Component Not Found**: If the CLI can't find your component, it will offer to scaffold a basic mapping

   ```
   No matching components found for 'CustomButton'.
   Do you want to scaffold a basic mapping? (Y/n)
   > Y
   ```

2. **Authentication Problems**: Refresh your authentication with

   ```bash
   npx builder.io figma auth --force
   ```

3. **Mappings Not Working in Figma**: Verify that the CLI and Figma plugin are using the same Builder.io space, and try republishing with the verbose flag:

   ```bash
   npx builder.io figma publish --verbose
   ```

4. **TypeScript Errors During Publishing**: If the publish command fails with TypeScript errors or validation issues, you can bypass these checks using the `--force` flag:

   ```bash
   npx builder.io figma publish --force
   ```

   You'll see a warning, but the CLI will proceed with publishing:

   ```
   TypeScript errors in src/mappings/Button.mapper.ts:
    • Cannot find name 'ButtonProps'
    • Property 'variant' does not exist on type '{}'

   Local mappings contain some errors, but --force flag was used, skipping.
   ```

   This is particularly useful when:

   - You're dealing with complex TypeScript types the CLI doesn't understand
   - The errors are in parts of the code that won't affect the mapping functionality
   - You need to publish quickly and plan to fix the issues later

   > **Caution**: While `--force` allows you to publish despite errors, it's best practice to fix the underlying issues when possible, as they might cause problems when using the Figma plugin.

## Creating Mappings Manually

Let's start by understanding how to create mappings manually, which gives you complete control over how Figma designs are translated to code.

### Manual Mapping Process in Detail

1. **Create a Mapper File**: Create a file with the naming convention `[componentName].mapper.ts` in your project. Many developers use a dedicated `mappings` directory to organize these files, for example: `src/mappings/Button.mapper.ts`.

2. **Import Required Dependencies**:

   ```ts
   import { figmaMapping, html } from "@builder.io/dev-tools/figma";
   import { ButtonComponent } from "@/path/to/your/component";
   ```

3. **Define Your Mapping Function**:

   This is where you'll write the logic that transforms Figma properties into Angular component properties. You need to identify your Figma component using the `url` parameter:

   ```ts
   // Using the URL approach (more human-readable)
   figmaMapping({
     url: "https://www.figma.com/file/abc123/Design-System?node-id=456:789",
     mapper(figma) {
       return html`
         <button-component
           .property1=${figma.Property1}
           .property2=${figma.Property2}
         >
           ${figma.$children}
         </button-component>
       `;
     },
   });
   ```

   The URL approach is often preferred for manual mapping because it's more human-readable, easier to obtain directly from Figma, and provides a direct link back to the visual component.

4. **Test Your Mapping**: Run your local development server with Devtools enabled to test your mapping.

5. **Publish Your Mapping**: Use the CLI command to publish your manually created mapping:

   ```bash
   npx builder.io figma publish
   ```

### How to Obtain the URL in Figma

1. Open your Figma design file
2. Select the component you want to map
3. Right-click on the selection
4. Choose "Copy Link To Selection" from the context menu
5. Paste the URL into your mapping file

![Figma Copy Link to Selection](https://example.com/figma-copy-link.png)

### Why Use URL Instead of ComponentKey

While both `componentKey` and `url` methods work for identifying Figma components, the URL approach has several advantages when manually creating mappings:

1. **Ease of Access**: You can easily obtain the URL directly from Figma's UI by right-clicking a component and selecting "Copy Link To Selection"
2. **Human Readability**: URLs contain readable information about the Figma file name and design context, making them more maintainable
3. **Direct Reference**: The URL provides a clickable link back to the exact component in Figma, making it easier to check the design when updating mappings
4. **Contextual Information**: The URL contains information about the file structure and location of the component, which aids in documentation

The `componentKey` approach, while less human-readable, is more concise and is what the CLI uses internally when generating mappings.

## Understanding the Interfaces and APIs

The mapping function has access to a rich set of properties and methods through the `figma` parameter:

### Core Properties and Methods

#### `figma.$children`

Returns an array of all direct child nodes of the current Figma design.

```ts
figmaMapping({
  componentKey: "button-component-key",
  mapper(figma) {
    return html`<button-component>${figma.$children}</button-component>`;
  },
});
```

#### `figma.$textContent`

Retrieves the text content from the current Figma design node or its text children.

```ts
figmaMapping({
  componentKey: "button-component-key",
  mapper(figma) {
    return html`<button-component
      >${figma.$children[1].$textContent}</button-component
    >`;
  },
});
```

#### `figma.$findOneByName(name)`

Maps a specific child node of the current Figma component by its layer name.

```ts
figmaMapping({
  componentKey: "dialog-component-key",
  mapper(figma) {
    return html`<div>${figma.$findOneByName("dialog")}</div>`;
  },
});
```

#### `figma.$findOne(callback)`

Finds the first node that meets specified criteria through a callback function.

```ts
figmaMapping({
  componentKey: "page-component-key",
  mapper(figma) {
    return html`<div>
      ${figma.$findOne((node) => node.name === "Heading")}
    </div>`;
  },
});
```

#### `figma.$visit(callback)`

Traverses all child nodes and applies a function to each one.

```ts
figmaMapping({
  componentKey: "content-component-key",
  mapper(figma) {
    return figma.$visit((node) => {
      if (node.name === "Header") {
        return html`<h1>${node.$textContent}</h1>`;
      } else if (node.name === "Content") {
        return node.$textContent;
      }
    });
  },
});
```

## Advanced Mapping Examples

### Basic Button Mapping

```ts
figmaMapping({
  componentKey: "button-component-key",
  mapper(figma) {
    return html`
      <button-component
        .color=${figma.Color?.toLowerCase()}
        .size=${figma.Size?.toLowerCase()}
        .type=${figma.Variant?.toLowerCase()}
      >
        ${figma.$children}
      </button-component>
    `;
  },
});
```

### Hero Section with Multiple Content Areas

```ts
figmaMapping({
  componentKey: "hero-component-key",
  mapper(figma) {
    const heading = figma.Heading;
    const supportingText = figma.$findOneByName("Supporting Text").$textContent;
    const navigation = figma.$findOneByName("Navigation");

    return html`
      <hero-component
        .heading=${heading}
        .supportingText=${supportingText}
        .navigation=${navigation}
      ></hero-component>
    `;
  },
});
```

### Getting Content from Specific Child Layers

```ts
figmaMapping({
  componentKey: "button-component-key",
  mapper(figma) {
    // Use the text from the 2nd child ($children is zero indexed)
    const text = figma.$children[1].$textContent;

    return html`<button-component>${text}</button-component>`;
  },
});
```

Another option is to retrieve children by their layer name:

```ts
figmaMapping({
  componentKey: "button-component-key",
  mapper(figma) {
    const text = figma.$findOneByName("Label").$textContent;

    return html`<button-component>${text}</button-component>`;
  },
});
```

### Using Your Own CSS Classes

```ts
figmaMapping({
  componentKey: "button-component-key",
  mapper(figma) {
    // Make an array to hold the CSS class names
    const classes = ["button"];

    // If figma.variant is 'primary', add the 'button-primary' class
    if (figma.variant === "primary") {
      classes.push("button-primary");
    }

    // Return a button with className applied
    return html`<button class="${classes.join(" ")}">${figma.Text}</button>`;
  },
});
```

### Generic Mapping Function

For complex layouts or special case handling, you can create a generic mapper:

```ts
figmaMapping({
  genericMapper(figma) {
    if (figma.$name === "Grid row") {
      return html`<grid-component>${figma.$children}</grid-component>`;
    } else if (figma.$name === "Section") {
      return html`<section>${figma.$children}</section>`;
    }
    return undefined;
  },
});
```

## Advanced Table Example

Here's a more complex example mapping a table component:

```ts
figmaMapping({
  componentKey: "29938639a346fd304f89cbbdd9377064ac6426c1",
  mapper(figma) {
    // Extract columns data
    const columns =
      figma.$children?.map((column) => {
        const header = column.$findOneByName("Header")?.$textContent ?? "";
        return { name: header, uid: header.toLowerCase() };
      }) ?? [];

    // Extract rows data
    const firstColumn = figma.$children?.[0];
    const rowsFrame = firstColumn?.$findOneByName("Rows");
    const rowCount = rowsFrame?.$children?.length ?? 0;

    // Create rows data structure
    const rows = Array.from({ length: rowCount }, (_, rowIndex) => {
      const rowData = {};
      figma.$children?.forEach((column) => {
        const rowItem = column.$findOneByName("Rows")?.$children?.[rowIndex];
        const cellContent =
          rowItem?.$findOneByName("Row item")?.$textContent ?? "";
        const columnId =
          column.$findOneByName("Header")?.$textContent?.toLowerCase() ?? "";
        rowData[columnId] = cellContent;
      });
      return { id: rowIndex, ...rowData };
    });

    return html`
      <table-view
        aria-label="Table"
        .isQuiet=${figma.Style === "Quiet"}
        .selectionMode=${figma["Selection Column"] === "True"
          ? "multiple"
          : "none"}
        .columns=${columns}
        .rows=${rows}
      ></table-view>
    `;
  },
});
```

For more information on the available parameters and options for the `figmaMapping` function, refer to the [API Reference](/component-mapping/api-reference).

If you're working with React instead of Angular, check out the [Creating React Mappings](/component-mapping/create-react) guide.

For a complete overview of the component mapping workflow, check the [Component Mapping Overview](/component-mapping/overview).
