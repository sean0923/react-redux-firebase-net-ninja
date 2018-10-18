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
```js
class Dashboard extends Component {
  render() {
    return (
      <div>
        <div className="dashboard container">
          <div className="row">
            <div className="col s12 m6">
              <ProjectList />
            </div>
            <div className="col s12 m5 offset-m1">
              <Notifications />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
```
---
6. 