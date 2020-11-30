# Fashionable East <!-- omit in toc -->

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_**Fashionable East** This site is for those that are interested in Eastern fashion, in particular Korean and Japanese fashion! This site is a fullstack site using React to create the frontend and Ruby On Rails to handle the back end._


<br>

## MVP

_The **Fashionable East** MVP will have fully functional CRUD, a user account, user posts, comments. The site will be fully styled, and the user should be able to sign in and out._

<br>

### Goals

- Full Crud._
- _User Account._
- _User Posts._
- _User is able to Comment._
- _Site is styled._
- _User is able to sign in and out._
- _etc._

<br>

### Libraries and Dependencies


|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Lorem ipsum dolor sit amet, consectetur._ |
|   React Router   | _Lorem ipsum dolor sit amet, consectetur._ |
|       Ruby       | _Lorem ipsum dolor sit amet, consectetur._ |
|   Ruby on Rails  | _Lorem ipsum dolor sit amet, consectetur._ |
|     Express      | _Lorem ipsum dolor sit amet, consectetur._ |
|      Cors        | _Lorem ipsum dolor sit amet, consectetur._ |

<br>

### Client (Front End)

#### Wireframes


![Desktop Landing](https://i.imgur.com/vO5iVd7.png)

- Desktop Landing

![Desktop Home](https://i.imgur.com/impygIb.png)

- Desktop Home

![Desktop Home](https://i.imgur.com/TxQUJoO.png)

- c

![Post Details](https://i.imgur.com/EvVLfQZ.png)

- Post Details

![Post Creation](https://i.imgur.com/MeInEq8.png)

- Post Creation

![Mobile](https://i.imgur.com/iSF2Sdz.png)

- Mobile Resource Index

#### Component Tree 

#### Component Hierarchy
 

``` structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ Screens/
            |__ Landing.jsx
            |__ Home.jsx
            |__ PostDetail.jsx
            |__ PostCreate.jsx
            |__ FilteredPosts.jsx
            |__ SignUp.jsx
            |__ SignIn.jsx
            |__ CustomerSupport.jsx
      |__ Layout/
            |__ Header.jsx
            |__ Footer.jsx
|__ services/

```

#### Component Tree


[Component tree](https://i.imgur.com/zNJphYR.png)

#### Time Estimates


| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Models              |    H     |     3 hrs      |     2 hrs     |    3 hrs    |
| Routes              |    H     |     1 hrs      |     2 hrs     |    3 hrs    |
| Controllers         |    H     |     3 hrs      |     2 hrs     |    3 hrs    |
| HomePage            |    H     |     1 hrs      |     2 hrs     |    3 hrs    |
| Post Detail         |    H     |     1 hrs      |     2 hrs     |    3 hrs    |
| Post Create         |    H     |     3 hrs      |     2 hrs     |    3 hrs    |
| Likes               |    H     |     2 hrs      |     2 hrs     |    3 hrs    |
| Authentication      |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Bookmarks           |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Animations          |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Add Contact Form    |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL               |          |     29 hrs      |     3 hrs     |     TBD     |


<br>

### Server (Back End)

#### ERD Model

![ERD](https://i.imgur.com/PZSaPQk.png)

<br>

***

## Post-MVP

- Add Authentication._
- Animations._
- Bookmarks._

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
