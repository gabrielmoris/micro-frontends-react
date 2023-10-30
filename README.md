# PROJECT FROM [Build a micro-frontend application with React](https://blog.logrocket.com/build-micro-frontend-application-react/?ref=dailydev)

## The main basic idea

In each webpack.config file there is a `ModuleFederationPlugin` that will allow the components to woork in different applications.

- In the `/home` project I expose the components:

```
 exposes: {
        "./Header": "./src/Header.jsx",
        "./Footer": "./src/Footer.jsx",
      },
```

- In the `/about` project I import the components:

```
       remotes: {
        home: "home@http://localhost:3000/remoteEntry.js",
      },
```
