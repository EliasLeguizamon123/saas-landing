"use client"

import * as Dialog from "@radix-ui/react-dialog"
import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import clsx from "clsx"

export function Modal({
  open,
  onOpenChange,
  title,
  description,
  children,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
  title: string
  description?: string
  children: React.ReactNode
}) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.div
                className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            </Dialog.Overlay>

            <Dialog.Content asChild>
            <motion.div
  initial={{ opacity: 0, scale: 0.95, y: -20 }}
  animate={{ opacity: 1, scale: 1, y: 0 }}
  exit={{ opacity: 0, scale: 0.95, y: -20 }}
  transition={{ duration: 0.2 }}
  className={clsx(
    "fixed inset-0 z-50 grid place-items-center",
    "p-4 sm:p-8"
  )}
>
  <div className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white rounded-xl shadow-lg p-6 w-full max-w-md">
    <div className="flex justify-between items-center mb-2">
      <Dialog.Title className="text-lg font-semibold">{title}</Dialog.Title>
      <Dialog.Close asChild>
        <button className="hover:opacity-70">
          <X className="w-5 h-5" />
        </button>
      </Dialog.Close>
    </div>
    {description && (
      <Dialog.Description className="mb-4 text-sm text-zinc-500 dark:text-zinc-400">
        {description}
      </Dialog.Description>
    )}
    <div>{children}</div>
  </div>
</motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  )
}
