import { useState } from "react";
import { supabase } from "../lib/supabaseClient";
import axios from "axios";

function Read() {
  // MockAPI data
  const [isMock, setMock] = useState(false);
  const [users, setUsers] = useState([]);
  const [loadingMock, setLoadingMock] = useState(false);
  const [errorMock, setErrorMock] = useState("");

  const getUsers = async () => {
    setLoadingMock(true);
    setErrorMock("");

    try {
      const response = await axios.get(
        "https://6b01aabc1c637a569e5344fa.mockapi.io/api/v1/users"
      );

      setUsers(response.data);
    } catch (error) {
      console.error(error);
      setErrorMock(error.message);
    } finally {
      setLoadingMock(false);
    }
  };

  const toggleMock = () => {
    const nextState = !isMock;
    setMock(nextState);

    if (nextState) {
      getUsers();
    }
  };

  // Supabase data
  const [isSupa, setSupa] = useState(false);
  const [accounts, setAccounts] = useState([]);
  const [loadingSupa, setLoadingSupa] = useState(false);
  const [errorSupa, setErrorSupa] = useState("");

  const getAccounts = async () => {
    setLoadingSupa(true);
    setErrorSupa("");

    try {
      const { data, error } = await supabase
        .from("users")
        .select("*");

      if (error) throw error;

      setAccounts(data);
    } catch (error) {
      console.error(error);
      setErrorSupa(error.message);
    } finally {
      setLoadingSupa(false);
    }
  };

  const toggleSupa = () => {
    const nextState = !isSupa;
    setSupa(nextState);

    if (nextState) {
      getAccounts();
    }
  };

  return (
    <main className="flex-1 py-6 px-4">
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold">
          Read / GET API endpoint
        </h2>
        <p className="mt-2 text-sm text-base-content/60">
          Choose your way for fetch data
        </p>
      </div>

      <div className="card mx-auto w-full max-w-3xl border border-base-300 bg-base-100 shadow-sm">
        <div className="card-body flex flex-row flex-wrap items-center justify-center gap-3">
          <button
            onClick={toggleMock}
            className="btn btn-primary"
            type="button"
          >
            {isMock ? "Hide MockAPI" : "GET MockAPI"}
          </button>

          <button
            onClick={toggleSupa}
            className="btn btn-primary"
            type="button"
          >
            {isSupa ? "Hide SupabaseAPI" : "GET SupabaseAPI"}
          </button>
        </div>

        <div className="divider my-0 mx-4"></div>

        {!isMock && !isSupa && (
          <div className="flex flex-row min-h-30 border border-base-300 p-8 m-4 justify-center items-center rounded-lg">
            <div className="text-base-content/50">
              Choose API
            </div>
          </div>
        )}

        {/* MockAPI */}
        {isMock && (
          <div className="mockup-code m-4">
            <div className="flex justify-center items-center">
              MockAPI
            </div>

            {loadingMock ? (
              <div className="flex items-center justify-center gap-2 p-4">
                <span className="loading loading-spinner loading-sm"></span>
                <span>Loading...</span>
              </div>
            ) : errorMock ? (
              <div className="p-4 text-error">
                Error: {errorMock}
              </div>
            ) : (
              <pre>
                <code>{JSON.stringify(users, null, 3)}</code>
              </pre>
            )}
          </div>
        )}

        {/* SupabaseAPI */}
        {isSupa && (
          <div className="mockup-code m-4">
            <div className="flex justify-center items-center">
              SupabaseAPI
            </div>

            {loadingSupa ? (
              <div className="flex items-center justify-center gap-2 p-4">
                <span className="loading loading-spinner loading-sm"></span>
                <span>Loading...</span>
              </div>
            ) : errorSupa ? (
              <div className="p-4 text-error">
                Error: {errorSupa}
              </div>
            ) : (
              <pre>
                <code>{JSON.stringify(accounts, null, 3)}</code>
              </pre>
            )}
          </div>
        )}
      </div>
    </main>
  );
}

export default Read;
