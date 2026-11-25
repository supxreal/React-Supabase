import { useState } from "react";
import Image from "../components/Image";
import CheckStatus from "../components/CheckStatus";

function Playground() {
  const [count, setCount] = useState(0);
  const incr = () => setCount((prev) => prev + 1);
  const decr = () => setCount((prev) => prev - 1);

  const [showDesc, setDesc] = useState(false);
  const toggleDesc = () => setDesc(!showDesc);

  let todoList = [{
    text: "Download forest image", isDone: count >= 5
  }];

  if (count >= 5) {
    todoList.push({
      text: "Download book image", isDone: count >= 10
    })
  }

  return (
    <>
      <main className="flex w-full flex-1 flex-col items-center px-4 py-6">

        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold">Playground</h1>
          <p className="mt-2 text-sm text-base-content/60">
            Practice React state and conditional rendering
          </p>
        </div>

        {/* Main Card */}
        <div className="card w-full max-w-xl border border-base-300 bg-base-100 shadow-sm">
          <div className="card-body items-center gap-5">

            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                className="btn btn-primary"
                onClick={incr}
              >
                Count is {count}
              </button>

              <button
                className="btn border border-base-300"
                onClick={decr}
              >
                Decrease
              </button>
            </div>

            <div className="divider my-0"></div>

            <button
              onClick={toggleDesc}
              className="btn btn-accent"
              type="button"
            >
              {showDesc ? "HIDE DESCRIPTION" : "SHOW DESCRIPTION"}
            </button>

            {showDesc && (
              <div className="w-full rounded-lg border border-base-300 bg-base-200 p-4 text-sm leading-relaxed">
                Supabase automatically generates a secure RESTful API
                directly from your PostgreSQL database schema.
              </div>
            )}

            <div className="flex w-full flex-col items-center gap-5">
              {count >= 5 && (
                <div className="w-full max-w-md overflow-hidden rounded-xl border border-base-300 bg-base-100 p-3 shadow-sm">
                  <Image
                    imageTitle="Forest"
                    imageURL="https://picsum.photos/id/18/367/267"
                  />
                </div>
              )}

              {count >= 10 && (
                <div className="w-full max-w-md overflow-hidden rounded-xl border border-base-300 bg-base-100 p-3 shadow-sm">
                  <Image
                    imageTitle="Book"
                    imageURL="https://picsum.photos/id/24/367/267"
                  />
                </div>
              )}

              {count < 5 && (
                <div className="flex min-h-32 w-full items-center justify-center rounded-lg border border-dashed border-base-300 bg-base-200/50 p-4">
                  <p className="text-center text-sm text-base-content/50">
                    Reach count 5 to unlock an image
                  </p>
                </div>
              )}
            </div>

          </div>
        </div>

        <div className="mt-auto flex flex-col items-center gap-2 pt-8">
          <div className="divider mb-1 text-xs text-base-content/50">
            TASK STATUS
          </div>

          {todoList.map((element, index) => (
            <CheckStatus
              key={index}
              text={element.text}
              isDone={element.isDone}
            />
          ))}
        </div>

      </main>
    </>
  );
}

export default Playground;
