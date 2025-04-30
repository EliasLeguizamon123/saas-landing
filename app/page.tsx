"use client"

import { motion } from "framer-motion"
import {
    Check,
    ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import React from "react"
import Header from "@/components/Header"
import { Card, CardContent } from "@/components/ui/card"
import features from "@/lib/feat"
import Link from "next/link"
import Chat from "@/components/Chat"

export default function LandingPage() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }
    
    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    }
    return (
        <div className="flex min-h-[100dvh] flex-col">
            <Header />
            <main className="flex-1">
                <section className="w-full  overflow-hidden">
                    <div className="container px-4 md:px-6 relative">
                        <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-center max-w-3xl mx-auto mb-12 py-4"
                        >
                            <Badge className="mb-4 rounded-full px-4 py-1.5 my-4 t-4 text-sm font-medium" variant="secondary">
                                Launching Soon
                            </Badge>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                                Automate your customer support with AI
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                                Powerful Chat AI that helps you to automate your customer support and increase your sales.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button size="lg" className="rounded-full h-12 px-8 text-base">
                                    Pre-order now
                                    <ArrowRight className="ml-2 size-4" />
                                </Button>
                            </div>
                            <div className="flex items-center justify-center gap-4 mt-6 text-sm text-muted-foreground">
                                <div className="flex items-center gap-1">
                                    <Check className="size-4 text-primary" />
                                    <span>14-day trial</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Check className="size-4 text-primary" />
                                    <span>Cancel anytime</span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="relative mx-auto max-w-5xl"
                        >
                            <div className="rounded-xl overflow-hidden mb-8 shadow-2xl border border-border/40 bg-gradient-to-b from-background to-muted/20">
                                <Chat />
                            </div>
                            <div className="absolute -bottom-6 -right-6 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-3xl opacity-70"></div>
                            <div className="absolute -top-6 -left-6 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-secondary/30 to-primary/30 blur-3xl opacity-70"></div>
                        </motion.div>
                    </div>
                </section>
                <section id="features" className="container w-full py-20 mt-12 md:py-32">
                    <div className="mt-12 px-4 md:px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="flex flex-col mt-6 items-center justify-center space-y-4 text-center mb-12"
                        >
                            <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                                Features
                            </Badge>
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Everything You Need to Succeed</h2>
                            <p className="max-w-[800px] text-muted-foreground md:text-lg">
                                Our AI-powered chat solution is designed to help you automate your customer support, increase sales, and improve customer satisfaction. With our easy-to-use platform, you can create personalized chat experiences that drive results.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={container}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="w-full grid grid-cols-2 gap-4 sm:grid-cols-1 lg:grid-cols-2"
                        >
                            {features.map((feature, i) => (
                                <motion.div key={i} variants={item} className=''>
                                    <Card className="h-full overflow-hidden cursor-default border-border/40 backdrop-blur transition-all hover:shadow-md">
                                        <CardContent className="p-6 flex flex-col h-full">
                                            <div className="size-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary mb-4">
                                                {feature.icon}
                                            </div>
                                            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                            <p className="text-muted-foreground">{feature.description}</p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>
            </main>
            <footer className="w-full border-t bg-background/95 backdrop-blur-sm">
                <div className="container flex flex-col gap-8 px-4 py-10 md:px-6 lg:py-16">
                    <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 font-bold">
                                <div className="size-8 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground">
                                    K
                                </div>
                                <span>K-S</span>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                K2 your workflow with our all-in-one SaaS platform. Boost productivity and scale your business.
                            </p>
                            <div className="flex gap-4">
                                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="size-5"
                                    >
                                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                    </svg>
                                    <span className="sr-only">Facebook</span>
                                </Link>
                                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="size-5"
                                    >
                                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                                    </svg>
                                    <span className="sr-only">Twitter</span>
                                </Link>
                                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="size-5"
                                    >
                                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                        <rect width="4" height="12" x="2" y="9"></rect>
                                        <circle cx="4" cy="4" r="2"></circle>
                                    </svg>
                                    <span className="sr-only">LinkedIn</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 sm:flex-row justify-between items-center border-t border-border/40 pt-8">
                        <p className="text-xs text-muted-foreground">
                            &copy; {new Date().getFullYear()} K2 All rights reserved.
                        </p>
                        {/* <div className="flex gap-4">
              <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Cookie Policy
              </Link>
            </div> */}
                    </div>
                </div>
            </footer>
        </div>
    )
}
