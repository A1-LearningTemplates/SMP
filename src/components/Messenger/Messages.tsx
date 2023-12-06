import { usePaginatedQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { Id } from "../../../convex/_generated/dataModel";
import { UserContext } from "../../context";
import { useContext, useEffect, useRef } from "react";

const Messages = ({
  receiverId,
  senderId,
}: {
  receiverId: Id<"users">;
  senderId: Id<"users">;
}) => {
  const { userId } = useContext(UserContext);
  const { results, status, loadMore } = usePaginatedQuery(
    api.messages.getMessages,
    { receiverId, senderId },
    { initialNumItems: 1000 }
  );
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [results]);

  const scrollRef = useRef<HTMLDivElement>(null);
  return (
    // <div className="flex flex-col space-y-4 p-3 mb-20 bg-slate-50 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">

    <div className="flex flex-col space-y-4 p-3 mb-6 bg-slate-50 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
      {results?.map((message) => {
        return (
          <div className="chat-message" key={message._id}>
            <div
              className={`flex items-end ${
                userId === message.senderId ? "justify-end" : null
              }`}
            >
              <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                <div>
                  <span
                    className={`px-4 py-2 rounded-lg inline-block rounded-bl-none ${
                      userId === message.senderId
                        ? "bg-gray-300 text-gray-600"
                        : "bg-blue-600 text-white"
                    }`}
                  >
                    {message.content}
                  </span>
                </div>
              </div>
              <img
                src={message.sender?.picture}
                alt="My profile"
                className="w-6 h-6 rounded-full order-1"
              />
            </div>
          </div>
        );
      })}
      <span ref={scrollRef}></span>
    </div>
    // </div>
  );
};
{
  /* 



      <div className="chat-message">
        <div className="flex items-end justify-end">
          <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
            <div>
              <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">
                Your error message says permission denied, npm global installs
                must be given root privileges.
              </span>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
            alt="My profile"
            className="w-6 h-6 rounded-full order-2"
          />
        </div>
      </div>
      <div className="chat-message">
        <div className="flex items-end">
          <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
            <div>
              <span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                Command was run with root privileges. I'm sure about that.
              </span>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
            alt="My profile"
            className="w-6 h-6 rounded-full order-1"
          />
        </div>
      </div>
*/
}

export default Messages;
