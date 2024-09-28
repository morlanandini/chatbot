import React from 'react'
import { ragChat } from '../lib/rag-chat';
import { redis } from '../lib/redis'
import { ChatWrapper } from '../components/ChatWrapper';

interface PageProps {
    params : {
        url : string | string[] | undefined
    }
}

function reconstruct({ url }: {url: string[]})
{
    const reconstructed_url = url.map((component) => decodeURIComponent(component))
    return reconstructed_url.join("/")
}

const page = async ({ params } : PageProps) => {
    const reconstructedUrl = reconstruct({ url: params.url as string[]})

    const AlreadyIndexed = await redis.sismember("indexed-urls",reconstructedUrl)
    console.log(params);

    const sessionId ="mock-session"

    if(!AlreadyIndexed)
    {
        await ragChat.context.add({
            type: "html",
            source: reconstructedUrl,
            config : {chunkOverlap: 50, chunkSize: 200},
    
        })

        await redis.sadd("indexed-urls",reconstructedUrl)
    }


    return <ChatWrapper sessionId={sessionId}/>
  
}

export default page