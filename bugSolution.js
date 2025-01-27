```javascript
// In a React 19 functional component
function MyComponent() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(prevCount => {
      //Always return a new value using prevCount
      return prevCount + 1; 
    });
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
```