import { ragChat } from "@/app/lib/rag-chat";
import { aiUseChatAdapter } from "@upstash/rag-chat/nextjs";
import { NextRequest } from "next/server";

export const POST = async(req: NextRequest) => {
    const {messages, sessionId} = await req.json()

    const lastMessage = messages[messages.length-1].content

    const response = await ragChat.chat(lastMessage, { streaming: true, sessionId})

    console.log(response);

    return aiUseChatAdapter(response) // returns to front-end, takes the readable stream(o/p) and streams it to front-end

}