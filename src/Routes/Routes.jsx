import React, { Component } from 'react';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from '../Pages/Root/Root';
import Errorpage from '../Pages/ErrorPage/Errorpage';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Bookdetails from '../Pages/BookDetails/Bookdetails';


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        index: true,
        loader: ()=>fetch('book.json'),
        path: "/",
        Component: Home
      },
      {
        path:'/about',
        Component: About
      },
      {
        path: '/Bookdetails/:id',
        loader: ()=>fetch('./book.json'),
        Component: Bookdetails
      },

    ]
  },
]);