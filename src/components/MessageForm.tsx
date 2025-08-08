import React, { useState } from 'react'
import { Textarea } from './ui/textarea'
import { Input } from './ui/input'
import { Button } from './ui/button'



const MessageForm = () => {

    const handleSend = () => {

        setIsSending(true);

        const id = setTimeout(()=> {
            setSentMessage(message);
            }
        )
    }

    const [message, setMessage] = useState<string>("");
    const [delay, setDelay] = useState<number>(10);
    const [isSending, setIsSending] = useState<boolean>(false);
    const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);
    const [sentMessage, setSentMessage] = useState<string>("")

    return (
        <div className='max-w-md mx-auto mt-20 p-6 border rounded-lg bg-white space-y-4'>
            <h2 className='text-2xl font-bold'>Dm Delay Button </h2>

            <Textarea
                placeholder='Enter your text here...'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />

            <Input type='number'
                placeholder='Delay in seocends'
                value={delay}
                onChange={(e) => setDelay(Number(e.target.value))}
            />

            <Button className='w-full' onClick={handleSend}>
                Delay Button
            </Button>


        </div>
    )
}

export default MessageForm
