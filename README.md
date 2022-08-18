# App to learn how to lift up state in React

This is a simple app for me to learn how to lift up state in React.

This app has a header (Header.jsx) and a body (Body.jsx). Clicking on the header button displays four buttons (Box.jsx) in the body using data in a data file (BoxData.json). The objective is to be able to toggle each of these buttons and retain their on/off status in state. This is what I am having trouble achieving.

### Desired outcome

- App.js loads Header.jsx
- Clicking on button in Header.jsx maps the data in BoxData.json onto a template in Box.jsx.
- In Body.jsx, a box with a clickable button is displayed for each box in BoxData.json.
- Clicking on a button in the body should do two things:
1) Update a state indicating that the button in question is CHECKED or NOT CHECKED.
2) Update a state containing a list of checked boxes, by either adding or removing the ID of the box in question from the list.

### Current issue

The current issue is that the two states mentioned above are not updating correctly.