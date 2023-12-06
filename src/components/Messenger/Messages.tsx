import { usePaginatedQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { Id } from "../../../convex/_generated/dataModel";

const Messages = ({
  receiverId,
  senderId,
}: {
  receiverId: Id<"users">;
  senderId: Id<"users">;
}) => {
  const { results /* status, loadMore  */ } = usePaginatedQuery(
    api.messages.getMessages,
    { receiverId, senderId },
    { initialNumItems: 20 }
  );
  return (
    <div>
      {results?.map((message) => {
        return <p key={message._id}>{message.content}</p>;
      })}
    </div>
  );
};

export default Messages;
