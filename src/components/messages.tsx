import { trpc } from "../utils/trpc";

export const Messages = () => {
  const { data: messages, isLoading } = trpc.guestbook.getAll.useQuery();

  if (isLoading === true) {
    return (
      <>
        <article className="prose">
          <h2 className="text-center text-5xl font-extrabold uppercase text-white">
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Guest Logs
            </span>
          </h2>
        </article>
        <div className="mt-10 text-center font-mono text-xl font-semibold tracking-wider text-white subpixel-antialiased">
          Fetching Messages...
        </div>
      </>
    );
  }

  return (
    <div className="flex flex-col gap-5">
      <article className="prose">
        <h2 className="text-center text-5xl font-extrabold uppercase text-white">
          <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
            Guest Logs
          </span>
        </h2>
      </article>
      {messages?.map((msg, index) => {
        return (
          <div
            key={index}
            className="card mt-5 w-96 bg-gradient-to-r from-indigo-900 to-cyan-900 text-white"
          >
            <div className="card-body text-left font-mono tracking-wider subpixel-antialiased">
              <h2 className="card-title">{msg.message}</h2>
              <p>— {msg.name}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
