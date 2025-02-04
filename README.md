# Incorrect State Update in React's useEffect Hook
This repository demonstrates a common error in React: attempting to update state directly within a useEffect hook without using the setter function.  The `bug.js` file contains the erroneous code, while `bugSolution.js` provides the corrected version.  This often leads to silent failures where the UI doesn't reflect the intended state changes.

## How to Reproduce
1. Clone this repository.
2. Open `bug.js` and observe the incorrect state update attempt inside the useEffect hook.
3. Run the app (using your preferred React development environment).  Notice that the count value will not update.
4. Open `bugSolution.js` and observe the corrected code which uses `setCount` appropriately.
5. Run the app with the corrected code. Now, you'll see the count correctly updating every second.