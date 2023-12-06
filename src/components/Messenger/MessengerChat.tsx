import { memo } from "react";
import { Id } from "../../../convex/_generated/dataModel";
import MessageForm from "./MessageForm";
import Messages from "./Messages";

type PropsMessengerChat = {
  show: boolean;
  nickname: string | undefined;
  receiverId: Id<"users"> | undefined;
  senderId: Id<"users"> | null;
};
const MessengerChat = memo(
  ({ show, nickname, receiverId, senderId }: PropsMessengerChat) => {
    return (
      <div
        className={`relative ${
          !show ? "hidden" : "flex"
        } md:flex flex-col gap-2 overflow-hidden h-full `}
      >
        <div className=" text-end px-4 bg-slate-50 h-60px md:text-center">
          <h3 className="text-xl font-bold py-2">
            Chat with: <small>{nickname}</small>
          </h3>
        </div>

        <Messages
          receiverId={receiverId as Id<"users">}
          senderId={senderId as Id<"users">}
        />
        <MessageForm
          receiverId={receiverId as Id<"users">}
          senderId={senderId as Id<"users">}
        />
      </div>
    );
  }
);

export default MessengerChat;
