- [ ] Why would you use class component over function components (removing hooks from the question)?

    There are many difference between class and functional components. The most obvious difference is the syntax. A class component requires you to extend from React.Component and create a render function which returns a React element. Functions accepts props as an argument and returns a React element. Class components are sometimes called “smart” or “stateful” components as they tend to implement logic and state. React lifecycle methods can be used inside class components, for example componentDidMount. You can pass props down to class components and access them with this.props. 

- [ ] Name three lifecycle methods and their purposes.

    The Birth/Mounting phase is the phase when the component is being built out from the ground up. Whatever initial data you want access to will be defined on the constructor of this phase. Your render method is invoked and you will call on componentDidMount. 
    The next phase in the lifecycle method is the Growth/Updating phase. In this phase, you will be updating the component data. setState can be used to change the components state data, forcing a call to render. In addition, shouldComponentUpdate is a method one could use here to stop component from calling the render if necessary. 
    Finally, the Death/Un-mounting phase will unmount and remove the component from the screen. Using componentWIllUnmount is called and can be used for any clean up you may need to do. 
- [ ] What is the purpose of a custom hook?

    Custom Hooks, are so-called because you are building the hook yourself (customizing it), to apply non-visual behavior and stateful logic throughout your components. This way, you can reuse the same hook over and over again. Custom hooks follow the same patterns of naming that you’ve already learned (i.e. prefacing the function name with use, as in useState). You can build a reusable custom hook for anything from handling controlled inputs, to managing event listeners, or watching for key presses.

- [ ] Why is it important to test our apps?

    Automated testing minimizes the risk of bugs finding their way into production code. Some of the benefits of testing include catching bugs in a program faster, reducing the risk of regressions, it allows us to trust the code, it makes us think about the edge cases, it acts as a safety net when making changes or refactoring, it acts as documentation for the code, and it encourages us to write more testable code. It is very important to test code. It can save you plenty of time and effort. 