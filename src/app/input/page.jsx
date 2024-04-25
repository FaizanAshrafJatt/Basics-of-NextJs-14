//changing the theme of the page without using the usestate property
'use client'
import React from 'react';

const Page = () => {
  function touchme() {
    const currentColor = getComputedStyle(document.body).backgroundColor;
    let newColor;

    if (currentColor === 'red' || currentColor === 'rgb(255, 0, 0)') // we have use 2 conditions because some browsers returns red as string but when we use both rgb and color it will works properly
     {
      newColor = 'white';
    } else {
      newColor = 'red';
    }

    document.body.style.backgroundColor = newColor;
  }

  return (
    <div className={'body'}>
      This is a test page

      <button
        onClick={touchme}
        className={'flex p-5 ml-28 mt-52 font-bold  border-2 border-solid border-pink-400'}>
        Click me
      </button>
    </div>
  );
};

export default Page;
