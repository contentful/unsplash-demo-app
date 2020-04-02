# The Unsplash Demo App

Hello and welcome to the Unsplash Demo App. The purpose of this repo is to help you, the developer, understand how
Contentful apps are built by using a step-by-step process help visualize all elements of a fully-built app. Below, we will build an app which allows a user of the Contentful Web app pick images from Unsplash and use them inside of Contentful entries.

## Before we begin

Before we begin, there are some things that you should have some knowledge of. This demo assumes you already have some
experience using Contentful, the SDK and the APIs. If you are brand new to Contentful, please see our getting started guide.

### Tools we are using to bootstrap this demo

This demo was not built from scratch. Much of the code we are going to use was generated for us by tools that are already
provided by Contentful's development team.

Here is how we got to our first checkpoint:
1. To create the React app we used: create-contentful-extension
2. To quickly add UI elements into our app we used: Forma-36

### Checkpoints

This demo has four checkpoints in the form of git branches. Each checkpoint adds additional functionality which helps further illustrate how the app is built.

### Contentful demo space
In order to fully follow this demo, you will need access to a Contentful organization in which you are an
admin or have the developer role.


## Checkpoint 1

To get started, let's pull down this repo and open it in your favorite editor. The `master` branch contains
the finalized app code. Let's checkout our first checkpoint to reduce the amount of code and start to understand
where to begin.

```
$ npm install
$ git checkout checkpoint-1
$ npm run start
```

Here at checkpoint one, you'll notice that we have a few files in our `src` directory. Let's take a look at `index.tsx`.
The `index.tsx` file will be our entry point point for the app. We use the `init` function provided by the Contentful SDK to ensure
that when we render the app inside of Contentful, we have all the available data loaded.

Right now, you'll notice we only have a "Hello, world!" style app. Let's move on to creating an app definition that will help us
configure and render our application inside of Contentful.

## Checkpoint 2

Before we `git checkout` the next checkpoint, let's create an App Definition. You can read more about App Definitions here. For now, all we need to know is they help us define the core characteristics of how our app will behave inside of the Contentful web app.

Navigate to your organization's settings page and in the main navigation at the top, click on "Apps". Create a new app:

1. Give the app a name
2. Use the Source URL of http://localhost:1234 (our dev environment)
3. The locations the app will show up in the Contentful web app. We will use:
    - App Config
    - Entry Field using a JSON object
    - Dialog

Click save. We now have our App Definition. This definition lives in your organization. This means that any space/environment
will have the ability to install this app.

Navigate to your development space/environment and in the top menu click "Apps". You will see the public marketplace apps. Scrolling to the bottom of your list will reveal the private app we just created. Click it.

We are now in the app's App Config location. You should see our "Hello, Unsplash App message". If not, please refer to checkpoint 1.

```
$ git checkout checkpoint-2
```

You should now see a more complete configuration screen. If not, refresh the page.