```javascript
// Correct implementation:
const MyComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1); // Correct: using setCount
    }, 1000);
    return () => clearInterval(interval); // Cleanup function
  }, []);

  return <div>Count: {count}</div>;
};
```