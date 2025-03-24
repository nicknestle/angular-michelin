# Notes

To get the theming working we need to import the theme module.

The Angular SDK currently doesn't work nicely with modules very well. The builder content nodes don't automatically have Angular modules run inside them.

As a work around for the demo we created

## Bugs

Using attribute with no value sets:

```json
{
  "component": {
    "options": {
      "mat-icon-button": true
    }
  }
}
```

But this doesn't seem to make it into the Angular content.

html`<button mat-icon-button />`
