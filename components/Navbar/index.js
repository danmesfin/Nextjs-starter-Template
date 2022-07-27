import React from 'react';
import Link from 'next/link';

function Navbar() {
  return (
    <div className="container flex justify-center shadow-sm text-xl bg-sky-100">
      <div className=" hover:bg-slate-100 text-center m-2 px-2 rounded-md">
        <Link href="/">Home</Link>
      </div>
      <div className=" hover:bg-slate-100 text-center m-2 px-2 rounded-md">
        <Link href="http://github.com/danmesfin/Nextjs-starter">github</Link>
      </div>
    </div>
  );
}

export default Navbar;
