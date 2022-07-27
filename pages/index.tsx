import React from 'react';
import type { NextPage } from 'next';

const Home: NextPage = () => (
  <div className="flex flex-col m-4 justify-center bg-slate-50 text-xl rounded-sm px-8">
    <div className="flex">This starter template is made with ...</div>
    <li className="border-spacing-1 shadow-md rounded-sm p-2">NextJs 12+</li>
    <li className="border-spacing-1 shadow-md rounded-sm p-2">
      TypeScript: difine types, minimizing chance of error
    </li>
    <li className="border-spacing-1 shadow-md rounded-sm p-2">
      Prettier: format your code on save
    </li>
    <li className="border-spacing-1 shadow-md rounded-sm p-2">
      Eslint: write your code to the standard -&gt; default NextJS, NextJS Core,
      Tailwind CSS and Airbnb configuration
    </li>
    <li className="border-spacing-1 shadow-md rounded-sm p-2">
      Husky: run all tests on git commit
    </li>
  </div>
);

export default Home;
