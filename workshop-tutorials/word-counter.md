# Rivet add-on: Word counter
Create an add-on that displays the number of words typed or remaining in a `textarea`.

## How it should work
The word counter add-on should do the following:

- Allow a developer to specify the word limit
- Display the number of words typed, the number of words remaining, or both
- Show an error message using [Rivet's form validation styles](https://rivet.iu.edu/components/forms/text-input/#inline-validation-states) if the number of words exceeds the limit

## Example
- [Basic example](https://codepen.io/geoffmuskett/pen/uldmJ)

## Additional resources
- [Deque University](https://dequeuniversity.com/library/aria/counters/sf-characters-remaining): Deque University provides information on how to build accessible `textarea` word counters

## Challenges
- Try creating a variant of this add-on that can be configured to count characters instead of words

## Things to consider
Keep the following in mind when building the word counter add-on:

- How would your add-on work for someone using assistive technology like a screen reader? How would the word limit and validation errors be announced?
- How would your add-on display on smaller screens?
- How might a developer's validation script detect if there's too many words in the `textarea`?