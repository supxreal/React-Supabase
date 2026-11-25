import { useState } from "react";
import { supabase } from "../lib/supabaseClient";

function Create() {
  const [loading, setLoading] = useState(true);
  const [res, setRes] = useState([]);

  // Submit a new user to Supabase.
  const postUser = async (user) => {
    setLoading(true);

    try {
      const { data, error } = await supabase
        .from("users")
        .insert(user)
        .select();

      if (error) {
        console.error(error.message);
        setRes({ error: error.message });
        return;
      }
      setRes(data);

    } finally {
      setLoading(false)
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const username = formData.get("username");
    const email = formData.get("email");

    const user = { username, email };
    await postUser(user);
  };

  return (
    <main className="flex-1 px-4 py-6">
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold">
          Create / POST API endpoint
        </h2>
        <p className="mt-2 text-sm text-base-content/60">
          Create a new user with POST method
        </p>
      </div>

      <div className="card mx-auto w-full max-w-lg border border-base-300 bg-base-100 shadow-sm">
        <div className="card-body gap-0">
          <h3 className="card-title text-lg">Create User</h3>
          <p className="text-base text-base-content/60">
            Enter user information below
          </p>

          <div className="divider my-0 mt-2"></div>

          <form className="flex flex-col gap-0" onSubmit={handleSubmit}>
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-base font-normal">
                Username
              </legend>
              <input
                type="text"
                name="username"
                className="input w-full text-base"
                placeholder="Enter username"
                required
              />
            </fieldset>

            <fieldset className="fieldset mb-2">
              <legend className="fieldset-legend text-base font-normal">
                Email
              </legend>
              <input
                type="email"
                name="email"
                className="input w-full text-base"
                placeholder="Enter email"
                required
              />
            </fieldset>

            <button
              type="submit"
              className="btn btn-primary mt-2 w-full"
            >
              Create User
            </button>
          </form>
        </div>
      </div>

      {/* API response */}
      <div className="card mx-auto my-4 w-full max-w-lg border border-base-300 bg-base-100">
        <div className="flex min-h-30 flex-row items-center justify-center rounded-lg border border-base-300">
          {res.length === 0 && (
            <div className="text-base-content/50">No response</div>
          )}

          {res.length > 0 && (
            <div className="mockup-code m-4 w-full">
              <div className="flex flex-row items-center justify-center">
                Supabase Response
              </div>
              { loading ? (
                <div className="flex items-center justify-center gap-2 p-4">
                  <span className="loading loading-spinner loading-sm"></span>
                  <span>Loading...</span>
                </div>
              ) : (
                <pre>
                  <code>{JSON.stringify(res, null, 3)}</code>
                </pre>
              )}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default Create;
