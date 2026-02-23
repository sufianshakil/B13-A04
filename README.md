1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans : 
A. getElementById() >> Selects one element , Uses id.
B. getElementsByClassName() >> Selects multiple elements , Uses class name.
C. querySelector() >> Selects the first matching element , Uses CSS selectors.
D. querySelectorAll() >> Selects all matching elements , Uses CSS selectors.

2. How do you create and insert a new element into the DOM?
Ans :
A. Create an element >
   Use document.createElement()

B. Insert into the DOM >
   Select a parent element and use appendChild() or append()

3. Event Bubbling is a process where an event starts from the target element and then propagates (bubbles up) to its      parent elements in the DOM tree.

# How It Works

    When you click a child element: The event triggers on the child then it moves to the parent then to the grandparent continues up to document.

4. What is Event Delegation in JavaScript? Why is it useful?
Ans :
Event Delegation is a technique in JavaScript where you attach a single event listener to a parent element instead of adding event listeners to multiple child elements.

# Why is it Useful?
Better Performance ,Works for Dynamic Elements ,Cleaner Code.

5. What is the difference between preventDefault() and stopPropagation() methods?
Ans :
The difference between preventDefault() and stopPropagation() methods are
A. preventDefault()
   > Stops the default browser behavior
   > Does NOT stop event bubbling

B. stopPropagation()
  > Stops the event from bubbling up (or capturing down)
  > Does NOT stop default browser behavior


















