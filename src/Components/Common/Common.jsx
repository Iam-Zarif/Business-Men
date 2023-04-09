import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Common = () => {
    return (
      <div>
        <nav className="container flex flex-col gap-5 lg:flex-row justify-around mt-5 bg-slate-400 py-4 text-2xl rounded-2xl">
          <Link
            to="/"
            className="hover:text-green-400 border rounded-xl py-2 lg:border-none"
          >
            Home
          </Link>
          <Link
            to="/businessmen"
            className="hover:text-green-400 border rounded-xl py-2 lg:border-none"
          >
            View Business Men
          </Link>
          <Link
            to="/blogs"
            className="hover:text-green-400 border rounded-xl py-2 lg:border-none"
          >
            Blogs
          </Link>
          <Link
            to="feedback"
            className="hover:text-green-400 border rounded-xl py-2 lg:border-none"
          >
            Feedback
          </Link>
          <Link
            to="donate"
            className="hover:text-green-400 border rounded-xl py-2 lg:border-none"
          >
            Donations
          </Link>
        </nav>
        <Outlet></Outlet>
      </div>
    );
};

export default Common;