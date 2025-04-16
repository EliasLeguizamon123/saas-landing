import React from "react";
import {
    Expand,
    SunMoon,
    FileHeart,
    Bot,
  } from "lucide-react"

const features = [
    {
      title: "Automated Assistant",
      description: "Streamline your workflow with our AI-powered assistant that learns and adapts to your needs.",
      icon: <Bot className="size-5" />,
    },
    {
      title: "Centralize Your Data",
      description: "Access all your chats in one phone number, making it easy to manage and respond to customer inquiries.",
      icon: <Expand className="size-5" />,
    },
    {
      title: "24/7 Availability",
      description: "Respond to your clients 24/7, even when you're not available.",
      icon: <SunMoon className="size-5" />,
    },
    {
      title: "File Management",
      description: "Share files and documents with ease, keeping everything organized and accessible.",
      icon: <FileHeart className="size-5" />,
    },
  ]

export default features;