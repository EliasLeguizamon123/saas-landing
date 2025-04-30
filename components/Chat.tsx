import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { SendHorizontal } from 'lucide-react';

export interface Message {
    id: number;
    text: string;
    sender: 'user' | 'assistant';
    timestamp: Date;
}

export default function Chat() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [messageText, setMessageText] = useState<string>(''); // Solo el texto del mensaje

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (messageText.trim() === '') return; // Evitar mensajes vacíos

        const newMessage: Message = {
            id: messages.length + 1,
            text: messageText,
            sender: 'user',
            timestamp: new Date(),
        };

        setMessages((prevMessages) => [...prevMessages, newMessage]);
        setMessageText(''); // Limpiar el input después de enviar
    };

    useEffect(() => {
        setMessages([
            {
                id: 1,
                text: 'Hi! My name is K2, I\'m your new IA assistant. How can I help you today?',
                sender: 'assistant',
                timestamp: new Date(),
            },
            {
                id: 2,
                text: 'Hello! I need help with my project.',
                sender: 'user',
                timestamp: new Date(),
            },
        ]);
    }, []);

    return (
        <div className="flex h-[calc(100vh-70px)]">
            {/* Contexto del chat */}
            <div className="w-1/3 p-4 ">
                <h2 className="text-lg font-bold mb-4">Contexto del Chat</h2>
                <p>Aquí se mostrará el contexto del chat para llamar a una IA.</p>
            </div>

            {/* Chat */}
            <div className="w-2/3 flex flex-col ">
                {/* Mensajes */}
                <div
                    className="flex-1 p-4 overflow-y-auto bg-cover bg-center"
                    style={{
                        backgroundImage: "url('https://wallpapercave.com/wp/wp6988787.png')",
                    }}
                >
                    {messages.map((msg) => (
                        <div
                            className={`mb-2 flex ${
                                msg.sender === 'user' ? 'justify-end' : 'justify-start'
                            }`}
                            key={msg.id}
                        >
                            <motion.div
                                className={`relative text-sm p-3 pb-4 rounded-lg max-w-xs ${
                                    msg.sender === 'user'
                                        ? 'bg-[#054640] text-white rounded-br-none'
                                        : 'bg-[#212e36] text-white rounded-bl-none'
                                }`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1 }}
                            >
                                {msg.text}
                                <span className="text-xs text-gray-400 absolute bottom-0 right-2">
                                    {new Date(msg.timestamp).toLocaleTimeString([], {
                                        hour: '2-digit',
                                        minute: '2-digit',
                                    })}
                                </span>
                                <div
                                    className={`absolute w-3 h-3 ${
                                        msg.sender === 'user'
                                            ? 'bg-[#054640] -right-1 top-2 rotate-45'
                                            : 'bg-[#212e36] -left-1 top-2 rotate-45'
                                    }`}
                                ></div>
                            </motion.div>
                        </div>
                    ))}
                </div>

                {/* Formulario */}
                <div className=" p-4 border-t">
                    <form onSubmit={handleSubmit} className="flex items-center">
                        <input
                            type="text"
                            value={messageText}
                            onChange={(e) => setMessageText(e.target.value)}
                            placeholder="Message"
                            className="flex-1 p-2 bg-[#212e36] border rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        <button
                            type="submit"
                            className="ml-2 p-2 bg-green-500 text-white rounded-full hover:bg-green-600"
                        >
                            <SendHorizontal />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}