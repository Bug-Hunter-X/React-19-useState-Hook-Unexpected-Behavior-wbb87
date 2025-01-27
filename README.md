# React 19 useState Hook Unexpected Behavior

This repository demonstrates an uncommon bug encountered in React 19 related to the `useState` hook.  The bug manifests in a functional component when attempting to update state using a functional update with `prevCount => prevCount + 1`. Under certain conditions this can lead to unexpected or incorrect state updates. 

The `bug.js` file showcases the problematic code.  The `bugSolution.js` file provides a solution illustrating a corrected approach to handle state updates using the functional update pattern.

This issue is particularly relevant to developers working with React 19 and complex state management scenarios. The solution highlights the importance of correctly using the functional update pattern to avoid race conditions and ensure consistent state updates.