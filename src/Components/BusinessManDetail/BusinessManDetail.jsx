import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const BusinessManDetail = () => {
    let data = useLoaderData();
    console.log(data);
    let {name,username, phone,email, website, company, address} = data;
    return (
      <div className="mt-20 ">
        <h1 className="text-3xl">Details Here...</h1>
        <div className="bg-slate-200 shadow-lg shadow-blue-500 mt-10 border py-20 border-black rounded-2xl">
          <p className=" text-xl font-semibold">
            <span className="text-green-600 text-2xl ">Name</span> : {name}
          </p>
          <p className="mt-10 text-xl font-semibold">
            <span className="text-green-600 text-2xl ">Nickname</span> :{" "}
            {username}
          </p>
          <p className="mt-10 text-xl font-semibold">
            <span className="text-green-600 text-2xl ">Email</span> : {email}
          </p>
          <p className="mt-10 text-xl font-semibold">
            <span className="text-green-600 text-2xl ">Phone</span> : {phone}
          </p>
          <p className="mt-10 text-xl font-semibold">
            <span className="text-green-600 text-2xl ">Company</span> :{" "}
            {company.name}
          </p>
          <p className="mt-10 text-xl font-semibold">
            <span className="text-green-600 text-2xl ">Address</span> :{" "}
            {address.city}
          </p>
          <p className="mt-10 text-xl font-semibold">
            <span className="text-green-600 text-2xl ">Address zip-code</span> :{" "}
            {address.zipcode}
          </p>
          <section className="mt-10 border py-4 border-black rounded-xl hover:bg-slate-300 text-xl">
            <Link>{website}</Link>
          </section>
        </div>
      </div>
    );
};

export default BusinessManDetail;