import React, { useState } from "react";

export default function SignUpForm() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();

    await fetch(`http://localhost:5000/user/sign-up`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
  }

  return (
    <div className="flex flex-col h-screen ml-[4.48rem] items-center justify-center px-6 py-8">
      <div className="w-full bg-primary rounded-lg shadow md:mt-0 sm:max-w-lg xl:p-0">
        <h1 className="text-xl text-center font-bold p-2 text-secondary md:text-2xl">
          Register
        </h1>

        <form className="m-2 p-2 flex flex-col" onSubmit={handleSubmit}>
          <label className="form-label-style" htmlFor="firstName">
            First Name
          </label>
          <input
            required
            value={user.firstName}
            onChange={(e) => setUser({ ...user, firstName: e.target.value })}
            className="form-input-style"
            id="firstName"
            name="firstName"
          />

          <label className="form-label-style" htmlFor="lastName">
            Last Name
          </label>
          <input
            required
            value={user.lastName}
            onChange={(e) => setUser({ ...user, lastName: e.target.value })}
            className="form-input-style"
            id="lastName"
            name="lastName"
          />

          <label className="form-label-style" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            required
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className="form-input-style"
            id="email"
            name="email"
          />

          <label className="form-label-style" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            required
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            className="form-input-style"
            id="password"
            name="password"
          />

          <input className="btn-primary" type="submit" value="Sign Up" />
        </form>
      </div>
    </div>
  );
}
