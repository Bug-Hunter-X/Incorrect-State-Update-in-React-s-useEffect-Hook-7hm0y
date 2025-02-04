```javascript
// In a React component:

const MyComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect usage: attempting to update count outside of a React function
    setTimeout(() => {
      count = count + 1; // This does NOT update the state
    }, 1000);
  }, []);

  return <div>Count: {count}</div>;
};
```