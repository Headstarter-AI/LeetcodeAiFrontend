import { useState } from "react";
import { BackgroundBeams } from "./background-beams";
import toast, { Toaster } from 'react-hot-toast';

export function BackgroundBeamsDemo() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://leetcodeai.onrender.com/api/v1/users/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        toast.success("You have been added to the waitlist!");
        setEmail(""); // Clear the input field
      } else {
        toast.error("There was an error. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("There was an error. Please try again.");
    }
  };

  return (
    <div className="h-screen w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-20 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
          Join the waitlist
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-20">
          Get hints, algorithms, and code right away in our LeetCode editor.
        </p>
        <form onSubmit={handleSubmit} className="w-full flex flex-col items-center relative z-20">
          <input
            type="email"
            placeholder="hi@manuarora.in"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full mt-4 text-white bg-neutral-950 placeholder:text-neutral-700"
            required
          />
          <button
            type="submit"
            className="mt-4 p-2 bg-neutral-800 text-white rounded-lg hover:bg-teal-600 transition duration-300"
          >
            Join Waitlist
          </button>
        </form>
      </div>
      <BackgroundBeams />
    </div>
  );
}
