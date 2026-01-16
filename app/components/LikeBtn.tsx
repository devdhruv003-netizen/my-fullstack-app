"use client"; // 👈 Ye line sabse upar honi chahiye, bina iske error aayegi

import { memo, useState } from 'react';

const LikeBtn = memo(function LikeButton({onLike, likes } :{onLike: () => void, likes:number }) {
 
  console.log("rendering");

  return (
    <div className="bg-green-500 hover:bg-green-600 text-black px-4 py-2 rounded-md font-medium transition">
        <button 
          type="button" 
          onClick={(e) => {
            e.stopPropagation();
            onLike()
          }}
        >
          Like {likes}
        </button>
    </div>
  );
});

export default LikeBtn;