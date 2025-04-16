import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import features from '@/lib/feat'
import React from 'react'

export default function Features() {
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
        <section id="features" className="w-full py-20 mt-12 md:py-32">
            <div className="container mt-12 px-4 md:px-6">
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
                    className="w-full grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-3"
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
    )
}