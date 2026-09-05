
"use client";

import { FormEvent, useState } from "react";
import {
  Mail,
  Send,
  Loader2,
  CheckCircle,
  AlertCircle,
  Terminal,
  Radio,
  ShieldCheck,
  Activity,
  Signal,
  LockKeyhole,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import SlideUp from "@/components/animations/SlideUp";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSuccessMessage("");
    setErrorMessage("");

    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.message || "Failed to send your message."
        );
      }

      setSuccessMessage(
        "Transmission successful. Message received."
      );

      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Contact form error:", error);

      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-background px-6 py-28"
    >
      {/* Ambient holographic glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/5 blur-[120px]" />

        <motion.div
          animate={{ opacity: [0.15, 0.4, 0.15] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-0 top-1/2 h-px w-full bg-cyan-400/30"
        />
      </div>

      <SlideUp>
        <div className="relative mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-14 text-center">
            <div className="mb-5 flex items-center justify-center gap-3 font-mono text-[10px] tracking-[4px] text-cyan-400">
              <Radio className="h-4 w-4 animate-pulse" />
              COMMUNICATION_TERMINAL
            </div>

            <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-6xl">
              Establish Connection
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-muted-foreground">
              I am open to internship opportunities, freelance projects,
              collaborations, and interesting software engineering
              challenges.
            </p>
          </div>

          {/* Terminal */}
          <div className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-cyan-950/[0.08] shadow-[0_0_80px_rgba(34,211,238,0.06)] backdrop-blur-xl">
            {/* Scan line */}
            <motion.div
              animate={{ y: ["0%", "1000%"] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
              }}
              className="pointer-events-none absolute left-0 top-0 z-20 h-px w-full bg-cyan-300/30 shadow-[0_0_15px_rgba(34,211,238,0.8)]"
            />

            {/* Corner markers */}
            <div className="absolute left-4 top-4 h-5 w-5 border-l border-t border-cyan-400/60" />
            <div className="absolute right-4 top-4 h-5 w-5 border-r border-t border-cyan-400/60" />
            <div className="absolute bottom-4 left-4 h-5 w-5 border-b border-l border-cyan-400/60" />
            <div className="absolute bottom-4 right-4 h-5 w-5 border-b border-r border-cyan-400/60" />

            {/* Terminal Header */}
            <div className="flex items-center justify-between border-b border-cyan-400/10 px-6 py-4">
              <div className="flex items-center gap-3">
                <Terminal className="h-4 w-4 text-cyan-400" />

                <span className="font-mono text-xs tracking-[2px] text-cyan-300">
                  SECURE_CHANNEL
                </span>
              </div>

              <div className="flex items-center gap-2 font-mono text-[10px] text-cyan-400/70">
                <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                ONLINE
              </div>
            </div>

            <div className="grid gap-10 p-6 md:p-10 lg:grid-cols-[0.8fr_1.2fr]">
              {/* Left System Panel */}
              <div className="space-y-5">
                <div className="rounded-2xl border border-cyan-400/10 bg-black/10 p-6 backdrop-blur-md">
                  <div className="mb-6 flex items-center gap-3">
                    <ShieldCheck className="h-5 w-5 text-cyan-400" />

                    <div>
                      <p className="font-mono text-xs tracking-[2px] text-cyan-300">
                        CHANNEL_STATUS
                      </p>

                      <p className="mt-1 text-xs text-muted-foreground">
                        Encrypted communication interface
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 font-mono text-xs">
                    <div className="flex items-center justify-between border-b border-cyan-400/10 pb-3">
                      <span className="text-muted-foreground">
                        CONNECTION
                      </span>

                      <span className="text-cyan-400">
                        STABLE
                      </span>
                    </div>

                    <div className="flex items-center justify-between border-b border-cyan-400/10 pb-3">
                      <span className="text-muted-foreground">
                        ENCRYPTION
                      </span>

                      <span className="text-cyan-400">
                        AES-256
                      </span>
                    </div>

                    <div className="flex items-center justify-between border-b border-cyan-400/10 pb-3">
                      <span className="text-muted-foreground">
                        RESPONSE
                      </span>

                      <span className="text-cyan-400">
                        ACTIVE
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">
                        AVAILABILITY
                      </span>

                      <span className="text-cyan-400">
                        OPEN
                      </span>
                    </div>
                  </div>
                </div>

                {/* Contact nodes */}
                <div className="grid gap-3">
                  <a
                    href="mailto:roshanrhn11@gmail.com"
                    className="group flex items-center gap-4 rounded-xl border border-cyan-400/10 bg-black/10 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/5"
                  >
                    <div className="rounded-lg border border-cyan-400/20 p-3 text-cyan-400 transition group-hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]">
                      <Mail className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="font-mono text-[10px] tracking-[2px] text-cyan-400/70">
                        EMAIL_NODE
                      </p>

                      <p className="mt-1 text-sm text-foreground">
                        roshanrhn11@gmail.com
                      </p>
                    </div>
                  </a>

                  <a
                    href="https://github.com/roshanrhn11"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-xl border border-cyan-400/10 bg-black/10 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/5"
                  >
                    <div className="rounded-lg border border-cyan-400/20 p-3 text-cyan-400">
                      <FaGithub size={20} />
                    </div>

                    <div>
                      <p className="font-mono text-[10px] tracking-[2px] text-cyan-400/70">
                        SOURCE_NODE
                      </p>

                      <p className="mt-1 text-sm text-foreground">
                        GitHub
                      </p>
                    </div>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/niroshan-pathmanathan-2057123bb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-xl border border-cyan-400/10 bg-black/10 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/5"
                  >
                    <div className="rounded-lg border border-cyan-400/20 p-3 text-cyan-400">
                      <FaLinkedin size={20} />
                    </div>

                    <div>
                      <p className="font-mono text-[10px] tracking-[2px] text-cyan-400/70">
                        NETWORK_NODE
                      </p>

                      <p className="mt-1 text-sm text-foreground">
                        LinkedIn
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Message Interface */}
              <div className="rounded-2xl border border-cyan-400/10 bg-black/10 p-6 backdrop-blur-md md:p-8">
                <div className="mb-7 flex items-center justify-between">
                  <div>
                    <p className="font-mono text-xs tracking-[2px] text-cyan-300">
                      TRANSMISSION_PROTOCOL
                    </p>

                    <p className="mt-2 text-sm text-muted-foreground">
                      Send a secure message
                    </p>
                  </div>

                  <LockKeyhole className="h-5 w-5 text-cyan-400/60" />
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-2 block font-mono text-[10px] tracking-[2px] text-cyan-400/70"
                    >
                      IDENTIFIER
                    </label>

                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={name}
                      onChange={(event) =>
                        setName(event.target.value)
                      }
                      placeholder="Enter your name..."
                      autoComplete="name"
                      disabled={isSubmitting}
                      required
                      className="w-full rounded-xl border border-cyan-400/10 bg-background/40 px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/50 focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30 disabled:opacity-60"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-2 block font-mono text-[10px] tracking-[2px] text-cyan-400/70"
                    >
                      RETURN_ADDRESS
                    </label>

                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={email}
                      onChange={(event) =>
                        setEmail(event.target.value)
                      }
                      placeholder="Enter your email..."
                      autoComplete="email"
                      disabled={isSubmitting}
                      required
                      className="w-full rounded-xl border border-cyan-400/10 bg-background/40 px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/50 focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30 disabled:opacity-60"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="mb-2 block font-mono text-[10px] tracking-[2px] text-cyan-400/70"
                    >
                      MESSAGE_PAYLOAD
                    </label>

                    <textarea
                      id="contact-message"
                      name="message"
                      value={message}
                      onChange={(event) =>
                        setMessage(event.target.value)
                      }
                      placeholder="Enter transmission payload..."
                      rows={7}
                      disabled={isSubmitting}
                      required
                      className="w-full resize-none rounded-xl border border-cyan-400/10 bg-background/40 px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/50 focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30 disabled:opacity-60"
                    />
                  </div>

                  {/* Status */}
                  {successMessage && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 rounded-lg border border-green-400/20 bg-green-400/5 px-4 py-3 font-mono text-xs text-green-400"
                      role="status"
                    >
                      <CheckCircle className="h-4 w-4" />
                      {successMessage}
                    </motion.div>
                  )}

                  {errorMessage && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 rounded-lg border border-red-400/20 bg-red-400/5 px-4 py-3 font-mono text-xs text-red-400"
                      role="alert"
                    >
                      <AlertCircle className="h-4 w-4" />
                      {errorMessage}
                    </motion.div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-xl border border-cyan-400/40 bg-cyan-400/10 py-4 font-mono text-xs tracking-[2px] text-cyan-300 transition-all duration-300 hover:border-cyan-300 hover:bg-cyan-400/20 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        TRANSMITTING...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        TRANSMIT MESSAGE
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Terminal Footer */}
            <div className="flex flex-col gap-3 border-t border-cyan-400/10 px-6 py-4 font-mono text-[9px] tracking-[2px] text-cyan-400/50 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2">
                <Activity className="h-3 w-3" />
                SYSTEM_READY
              </div>

              <div className="flex items-center gap-2">
                <Signal className="h-3 w-3" />
                COMMUNICATION_LINK_ESTABLISHED
              </div>
            </div>
          </div>
        </div>
      </SlideUp>
    </section>
  );
}

