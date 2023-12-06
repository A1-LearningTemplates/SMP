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
        className={`${
          !show ? "hidden" : "grid"
        }  grid-rows-[40px,1fr,60px] md:grid`}
      >
        <div className="text-center bg-slate-50 my-auto ">
          <h3 className="text-xl font-bold py-2">
            Chat with <small>{nickname}</small>
          </h3>
        </div>

        <Messages
          receiverId={receiverId as Id<"users">}
          senderId={senderId as Id<"users">}
        />
        <MessageForm
          receiverId={senderId as Id<"users">}
          senderId={senderId as Id<"users">}
        />
      </div>
    );
  }
);

export default MessengerChat;
