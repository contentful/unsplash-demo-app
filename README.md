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
$ git checkout checkpoint-1
```

Here at checkpoint one, you'll notice that we have a few files in our `src` directory. Let's take a look at `index.tsx`.

Here we have a simple Hello, Unsplash app. 