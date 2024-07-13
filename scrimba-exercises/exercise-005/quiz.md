Quiz!

1. What is a React component?
// It's a bit of reusable code which can be used in a React app to style pages in pieces

2. What's wrong with this code?
```
function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
```
// Components need to be Pascal case, not camel case.

3. What's wrong with this code?
```
function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" />
            </nav>
        </header>
    )
}

ReactDOM.render(Header(), document.getElementById("root"))
```

//When the Header component is rendered, it needs brackets <> or to be nested within a div or another element.
