import { useNavigate } from "react-router";
import Bookmark from "../components/Bookmark.jsx";

function Home() {
  const navigate = useNavigate();
  const goRead = () => {
    navigate("/read", { replace: true });
  };

  return (
    <>
      <main className="flex-1 flex flex-col justify-center">
        <div className="hero bg-base-100 min-h-[40vh] md:mt-[3vh]">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-4xl font-bold">Personal API</h1>
              <p className="py-6">
                A lightweight platform for exploring backend APIs and database
                integration with Supabase. Practice fetching, creating,
                updating, and managing data through real-world API
                interactions.
              </p>
              <button onClick={goRead} className="btn btn-primary">
                Get Started
              </button>
            </div>
          </div>
        </div>

        <div className="mockup-window bg-base-200 border border-base-300 w-[90vw] md:w-[60vw] mx-auto mb-4">
          <div className="grid place-content-start justify-center h-10">
            API testing with Postman
          </div>
          <div className="mockup-code w-full">
            <pre data-prefix="1">
              <code>CREATE TABLE snippets (</code>
            </pre>
            <pre data-prefix="2">
              <code> id INTEGER PRIMARY KEY,</code>
            </pre>
            <pre data-prefix="3">
              <code> title TEXT NOT NULL</code>
            </pre>
            <pre data-prefix="4">
              <code>);</code>
            </pre>
            <pre data-prefix="5">
              <code></code>
            </pre>
            <pre data-prefix="6">
              <code>SELECT * FROM snippets;</code>
            </pre>
          </div>
        </div>

        <div className="grid grid-cols-2 h-14 w-[90vw] md:w-[60vw] mx-auto gap-3 mb-[8vh]">
          <div className="flex flex-row justify-center items-center bg-base-200 border rounded-md border-base-300 gap-1 ">
            <Bookmark />
            Supabase BaaS
          </div>
          <div className="flex flew-row justify-center items-center bg-base-200 border rounded-md border-base-300 gap-1 ">
            <Bookmark />
            DatabaseSQL
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
