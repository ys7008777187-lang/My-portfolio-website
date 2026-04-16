"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Loader2, Bot, User } from "lucide-react";
import styles from "./AIChatbot.module.css";

const SYSTEM_PROMPT = `You are Yash's AI assistant on his portfolio website. You help visitors learn about Yash Srivastava, a UI/UX Designer based in Bangalore, India.

About Yash:
- 2+ years of experience in UI/UX design
- 5+ happy clients
- 10+ projects completed
- Skills: Figma, Adobe XD, UI Design, UX Research, Prototyping, Mobile App Design, Web Design, Branding

Projects:
- ADT Solution: Global EOR, Payroll & HR Solutions web platform
- Myrik: Ride booking & grocery delivery mobile app
- Bhaiyaa Super App: Hyperlocal delivery app for India
- WORQ: Social Freelance Network - Discover, Connect, Hire, Get Paid (Android & iOS)
- Futuristic Guitar: Product design for smart guitar interface
- Wearables Tech: Smart pet wearable technology
- Dehradun Zoo: UI/UX design for zoo website

Services:
- UI/UX Design
- Mobile App Design
- Web Design
- Brand Identity
- Product Design
- User Research

Contact: Yashsrivastava7008@gmail.com
Location: Bangalore, India

Be friendly, helpful, and concise. Guide visitors to explore Yash's work or contact him for projects. Keep responses brief (2-3 sentences max).`;

// Gemini API key (public-facing portfolio chatbot with limited context)
const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const API_BASE = "https://generativelanguage.googleapis.com/v1beta/models";
const MODELS = ["gemini-2.0-flash-lite", "gemini-2.0-flash"];

async function callGemini(userMessage, chatHistory) {
    // Build conversation history for Gemini
    const contents = [];
    
    // Add conversation history
    for (const msg of chatHistory) {
        if (msg.role === "assistant") {
            contents.push({ role: "model", parts: [{ text: msg.content }] });
        } else if (msg.role === "user") {
            contents.push({ role: "user", parts: [{ text: msg.content }] });
        }
    }
    
    // Add current user message
    contents.push({ role: "user", parts: [{ text: userMessage }] });

    const requestBody = JSON.stringify({
        system_instruction: {
            parts: [{ text: SYSTEM_PROMPT }]
        },
        contents,
        generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 256,
            topP: 0.9,
        },
        safetySettings: [
            { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_ONLY_HIGH" },
            { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_ONLY_HIGH" },
            { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_ONLY_HIGH" },
            { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_ONLY_HIGH" },
        ]
    });

    // Try each model with retry logic
    for (const model of MODELS) {
        for (let attempt = 0; attempt < 2; attempt++) {
            try {
                const response = await fetch(`${API_BASE}/${model}:generateContent?key=${API_KEY}`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: requestBody,
                });

                if (response.status === 429) {
                    // Rate limited — wait and retry or try next model
                    await new Promise(r => setTimeout(r, (attempt + 1) * 1500));
                    continue;
                }

                if (!response.ok) {
                    throw new Error(`Gemini API error: ${response.status}`);
                }

                const data = await response.json();
                const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
                
                if (!text) {
                    throw new Error("No response from Gemini");
                }
                
                return text;
            } catch (error) {
                if (attempt === 1) continue; // Try next model
                await new Promise(r => setTimeout(r, 1000));
            }
        }
    }

    throw new Error("All models failed");
}

export default function AIChatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: "assistant", content: "Hi! 👋 I'm Yash's AI assistant. Ask me about his work, skills, or services!" }
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage = input.trim();
        setInput("");
        setMessages(prev => [...prev, { role: "user", content: userMessage }]);
        setIsLoading(true);

        try {
            const responseText = await callGemini(userMessage, messages);
            setMessages(prev => [...prev, {
                role: "assistant",
                content: responseText
            }]);
        } catch (error) {
            console.error("Chatbot error:", error);
            const isRateLimit = error.message?.includes("429") || error.message?.includes("All models failed");
            setMessages(prev => [...prev, {
                role: "assistant",
                content: isRateLimit
                    ? "I'm getting too many requests right now. Please try again in a minute, or feel free to reach out directly at Yashsrivastava7008@gmail.com! 📧"
                    : "Oops! Something went wrong. Please try again or contact Yash at Yashsrivastava7008@gmail.com."
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {/* Floating Button */}
            <motion.button
                className={styles.floatingBtn}
                onClick={() => setIsOpen(true)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: isOpen ? 0 : 1, scale: isOpen ? 0 : 1 }}
            >
                <Bot size={24} />
                <span className={styles.badge}>AI</span>
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className={styles.chatWindow}
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                    >
                        {/* Header */}
                        <div className={styles.header}>
                            <div className={styles.headerInfo}>
                                <Bot size={20} />
                                <div>
                                    <h4>Yash&apos;s AI Assistant</h4>
                                    <span>Powered by Gemini</span>
                                </div>
                            </div>
                            <button
                                className={styles.closeBtn}
                                onClick={() => setIsOpen(false)}
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className={styles.messages}>
                            {messages.map((msg, i) => (
                                <div
                                    key={i}
                                    className={`${styles.message} ${styles[msg.role]}`}
                                >
                                    <div className={styles.messageIcon}>
                                        {msg.role === "assistant" ? <Bot size={16} /> : <User size={16} />}
                                    </div>
                                    <p>{msg.content}</p>
                                </div>
                            ))}
                            {isLoading && (
                                <div className={`${styles.message} ${styles.assistant}`}>
                                    <div className={styles.messageIcon}>
                                        <Bot size={16} />
                                    </div>
                                    <div className={styles.typing}>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <form className={styles.inputArea} onSubmit={handleSubmit}>
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Ask about Yash's work..."
                                disabled={isLoading}
                            />
                            <button type="submit" disabled={isLoading || !input.trim()}>
                                {isLoading ? <Loader2 size={18} className={styles.spinner} /> : <Send size={18} />}
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
