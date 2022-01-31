import React, { useState } from 'react';
import {AddCategory} from './AddCategory';
import { GifGrid } from './GifGrid';

export const GifExpertApp = () => {

  const [categories, setCategory] = useState(['Pokemon']);

  return (
    <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories = {setCategory}/>
        <hr/>

      <ol>
        {
          categories.map(category =>
            <GifGrid 
              key={category}
              category={category}
            />
          )
        }
      </ol>
    </>
    );
};

