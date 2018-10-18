# React Redux Firebase 
### taught by Net Ninja

---
- Start with create react app
- Get materialize UI
```html
<title>Ninja's React Redux Firebase</title>
<!--Import Google Icon Font-->
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<!-- Compiled and minified CSS -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
```

---
4. Navbar
```js
const Navbar = () => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link className="brand-logo" to="/">
          MarioPlan
        </Link>

        <SignedInLinks />
        <SignedOutLinks />
      </div>
    </nav>
  );
};
```
---
5. Dashboard
