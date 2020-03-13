- [ ] Why would you use class component over function components (removing hooks from the question)?
Allows you to managea nd hold state, before hooks were created.
- [ ] Name three lifecycle methods and their purposes.
componentDidMount() : invoked after render. Only can be invoked once. Used for async data loading. Can be used to control the time between data requests.
componentDidUpdate(): when certain state/props cahnge, runs code. Takes in 2 arguments, and always contains an IF statement. 
componentWillUnmount(): cleans up anything leftover from componentDidMount. 
- [ ] What is the purpose of a custom hook?
Reusability across apps and projects.
- [ ] Why is it important to test our apps?
Surfaces bugs faster and reduces risk of regressions. Helps build trust with the code.