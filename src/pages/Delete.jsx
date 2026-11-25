import { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseClient";
import Bin from "../components/Bin";

function Delete() {
  const [loading, setLoading] = useState(true);

  // Refresh the user list.
  const [reload, setReload] = useState(0);
  const toggleReload = () => {
    setReload((prev) => prev + 1);
    console.log(reload);
  };

  const [accounts, setAccounts] = useState([]);
  const getAccounts = async () => {
    setLoading(true);

    try {
      const { data, error } = await supabase.from("users").select("*");

      if (error) {
        console.error(error.message);
        return;
      }
      setAccounts(data);
      
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("fetch");
    getAccounts();
  }, [reload]);

  const deleteAccount = async (id) => {
    const { error } = await supabase.from("users").delete().eq("user_id", id);
    if (error) {
      console.error(error.message);
      return;
    }
    await getAccounts();
  };

  return (
    <>
      <main className="flex-1 py-6 px-4">
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold">DELETE API endpoint</h2>
          <p className="mt-2 text-sm text-base-content/60">
            DELETE Method with supabase API
          </p>
        </div>
        <div className="card mx-auto w-full max-w-3xl border border-base-300 bg-base-100 shadow-sm">
          <div className="card-body flex flex-col flex-wrap items-center justify-center gap-3">
            <div className="flex flex-row text-base justify-center items-center">
              Data from SupabaseAPI /users
            </div>

            <button
              className="btn btn-primary"
              type="button"
              onClick={toggleReload}
            >
              Reload
            </button>
          </div>
          <div className="divider my-0 mx-4"></div>

          <div className="flex flex-col min-h-30 border border-base-300 p-4 m-4 justify-center rounded-lg">
            {loading ? (
              <div className="flex items-center justify-center gap-2">
                <span className="loading loading-spinner loading-sm"></span>
                <span>Loading...</span>
              </div>
            ) : (
              accounts.map((element, index) => (
                <div key={element.user_id}>
                  <div className="flex flex-row h-15">
                    <div
                      className="flex flex-row justify-start items-center text-sm"
                      style={{ fontFamily: "Jetbrains Mono" }}
                    >
                      ID:{element.user_id} {element.username} {element.email}
                    </div>

                    <div className="flex flex-row ml-auto items-center">
                      <button
                        className="btn border border-base-300"
                        type="button"
                        onClick={() => deleteAccount(element.user_id)}
                      >
                        <Bin />
                      </button>
                    </div>
                  </div>

                  {index < accounts.length - 1 && (
                    <div className="divider my-0 mx-0"></div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </main>
    </>
  );
}

export default Delete;
