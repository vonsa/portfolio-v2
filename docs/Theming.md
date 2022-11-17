## Theming

### Page colors theme

To set a theme for your page, include the ThemedPage wrapper component and specify the theme.

<ThemedPage theme="dark">
    ...content
</ThemedPage>

### Page navigation bar theme

To prevent lazy loading and rerendering the navbar for every page, you can pass a configuration object to the route configuration. This allows you to set some properties like the position and background color of the navbar.

#### Refer to interfaces

- RouteConfig
- NavbarConfig
