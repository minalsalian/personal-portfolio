# Personal Portfolio

This is a personal portfolio webpage built with Angular and styled using Bootstrap. The project showcases various sections including Home, About, Projects, and Contact.

## Project Structure

The project is organized as follows:

```
personal-portfolio
├── src
│   ├── app
│   │   ├── app.component.ts        # Root component of the application
│   │   ├── app.component.html       # Main application view template
│   │   ├── app.component.scss       # Styles for the AppComponent
│   │   ├── app.module.ts            # Root module of the application
│   │   ├── app-routing.module.ts     # Routing configuration
│   │   ├── core
│   │   │   ├── header
│   │   │   │   ├── header.component.ts  # Header component
│   │   │   │   ├── header.component.html # Header template
│   │   │   │   └── header.component.scss # Header styles
│   │   │   └── footer
│   │   │       ├── footer.component.ts  # Footer component
│   │   │       ├── footer.component.html # Footer template
│   │   │       └── footer.component.scss # Footer styles
│   │   ├── pages
│   │   │   ├── home
│   │   │   │   ├── home.component.ts      # Home page component
│   │   │   │   └── home.component.html     # Home page template
│   │   │   ├── about
│   │   │   │   ├── about.component.ts      # About page component
│   │   │   │   └── about.component.html     # About page template
│   │   │   ├── projects
│   │   │   │   ├── projects.component.ts    # Projects page component
│   │   │   │   └── projects.component.html   # Projects page template
│   │   │   └── contact
│   │   │       ├── contact.component.ts      # Contact page component
│   │   │       └── contact.component.html     # Contact page template
│   │   ├── services
│   │   │   └── project.service.ts            # Service for managing project data
│   │   └── models
│   │       └── project.model.ts              # Project data model
│   ├── assets
│   │   └── styles
│   │       └── _variables.scss               # SCSS variables for styling
│   ├── environments
│   │   ├── environment.ts                     # Development environment settings
│   │   └── environment.prod.ts                # Production environment settings
│   ├── index.html                             # Main HTML file
│   ├── main.ts                                # Main entry point for the application
│   ├── polyfills.ts                           # Polyfills for browser compatibility
│   └── styles.scss                            # Global styles
├── angular.json                               # Angular CLI configuration
├── package.json                               # npm configuration
├── tsconfig.json                              # TypeScript configuration
├── tsconfig.app.json                         # TypeScript configuration for Angular
├── .eslintrc.json                             # ESLint configuration
└── README.md                                  # Project documentation
```

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd personal-portfolio
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Run the application:
   ```
   ng serve
   ```

5. Open your browser and navigate to `http://localhost:4200` to view the portfolio.

## Technologies Used

- Angular
- Bootstrap
- SCSS

## License

This project is licensed under the MIT License.