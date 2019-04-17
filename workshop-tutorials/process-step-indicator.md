# Rivet add-on: Process step indicator
Create an add-on that shows a user what step of a process they're on.

## How it should work
The process step indicator add-on should do the following:

- Display each step's order in the process (number) and title
- Show the user where they are in the process
- Allow the user to click the step indicators to jump to that part of the process
- Provide the developer with both horizontal and vertical variants

## Example
- [US Patent and Trademark Office](https://uspto.github.io/designpatterns/1.x/docs/components/stepIndicators.html): The USPTO style guide features examples of both vertical and horizontal process step indicators

## Additional resources
- [W3C documentation](https://www.w3.org/WAI/tutorials/forms/multi-page/#using-step-by-step-indicator): The W3C provides information on how to build accessible process step indicators

## Things to consider
Keep the following in mind when building the process step indicator add-on:

- How would your add-on work for someone using assistive technology like a screen reader? How would the current step be announced?
- How would your add-on display on smaller screens?
- How might a single-page application update the current step in an accessible way?
