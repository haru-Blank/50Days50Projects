# Progress Step

## HTML / CSS

### Problem

- To develop a progress step with four step
- two buttons, prev and next which can be used to move step back and forth
- highlight the current step
- and progress indicator which is drawn to current step

### Plan

- create a progress bar container and center it horizontally and vertically

- inside it create 4 div, each for one step

- on current step, give border color to step to highlight it 

- use before pseudo-element to create grey line from 1st to last step aligning it vertically center

- use after pseudo-element to create element on top of before element and increase it's width and give it background color 

  #### CSS

  - let's make the width of progress bar 500px
  - and each step have width of 50px
  - use flexbox to align them properly

