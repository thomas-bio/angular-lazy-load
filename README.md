# LazyLoad

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

# Aims

1. The aim of this repo was to discover whether or not server calls are made when a lazily loaded module is loaded.
  * YES, a call is made to `[server]/lazy.module.chunk.js`
2. To discover if default exports for the module classes work and if they mean the component name can be omitted
  * YES, but only if the module's class has a default export and the route does NOT contain the module class name. If only one of these conditions are met it will not work.

