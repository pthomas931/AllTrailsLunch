## AllTrails Lunch

Welcome to the lunch locating application.

### Chosen Libraries

- NextJS - React Application bootstrap, initial lint configuration, and image optimization.
- react-google-maps - Google map wrapper, while using React with mapping libraries the lifecycle methods are often out of sync. This library is a wrapper to simplify mapping interactions.
- react-rating-stars-component - Simple rating star display, mitigated the need to create a familiar UI.
- material-ui - Utilized for the Filter popover (to select sort direction). Was intending to avoid this library as it contains a majority of the Components for this project out of the box.

### What could be improved

- Develop / Adopt a design system - All applications should have formalized design systems to help with consistency throughout.
  - With this size project, I took the challenge to avoid a UI framework for all but the Filter Popover.
- Testing - Unit testing is not complete and End to End testing would be more valuable once a backend was integrated.
- Continuous Integration - Setting up a CI pipeline for future code health, most importantly setting up automated Linting and Testing.
- Continuous Deployment Debugging - This project utilizes Vercel and has CD, but there seems to be an issue with displaying images from another domain.

### Attempt to avoid UI Framework

This project was developed in attempt to avoid using a major UI Framework (Material UI, Chakra). Though this was an interesting exercise, allowing for more extensive use of Flexbox displays and vanilla CSS, having a UI Framework would provide better building blocks for future development as well as more consistent feel throughout the application.

### Avoiding state container (Redux / RTK)

With the size of this application, a state container was avoided in favor of the page component being the major state management.

## Things I would have done differently

- Select a UI framework
  - Providing that increased consistency and not "reinventing the wheel" are things I often harp on. This project was a good refresher on why. Allowing for easier spin up and getting less in the weeds of CSS would have allowed for more emphasis on other vital portions of development such as testing, accessibility, and maintainability.
- Add a service layer
  - Currently the google APIs are integrated in the page component. Though this makes this HOC extremely simple to pass data to the sub components, it would be drastically better for testing if there was a service layer and allow components to be display only.
