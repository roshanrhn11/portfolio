
"use client";

import { FormEvent, useState } from "react";
import { Mail, Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
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
          data.message || "Failed to send your message.",
        );
      }

      setSuccessMessage(
        "Your message has been sent successfully. Thank you!",
      );

      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Contact form error:", error);

      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="
        py-24
        px-6
        bg-background
      "
    >
      <SlideUp>
        <div
          className="
            max-w-5xl
            mx-auto
            text-center
          "
        >
          {/* Section Heading */}
          <p
            className="
              text-sm
              uppercase
              tracking-[4px]
              text-muted-foreground
            "
          >
            Contact
          </p>

          <h2
            className="
              mt-4
              text-4xl
              md:text-5xl
              font-bold
              text-foreground
            "
          >
            Let&apos;s Work Together
          </h2>

          <p
            className="
              mt-6
              max-w-2xl
              mx-auto
              text-muted-foreground
            "
          >
            I am open to internship opportunities, freelance projects, and
            collaborations. Feel free to contact me.
          </p>

          {/* Contact Links */}
          <div
            className="
              mt-12
              grid
              md:grid-cols-3
              gap-6
            "
          >
            {/* Email */}
            <a
              href="mailto:roshanrhn11@gmail.com"
              className="
                border
                border-border
                rounded-xl
                p-6
                hover:bg-accent
                transition
                duration-300
                hover:-translate-y-1
              "
            >
              <Mail
                className="mx-auto mb-4"
                aria-hidden="true"
              />

              <p className="text-foreground">
                Email
              </p>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/roshanrhn11"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Roshan's GitHub profile"
              className="
                border
                border-border
                rounded-xl
                p-6
                hover:bg-accent
                transition
                duration-300
                hover:-translate-y-1
              "
            >
              <FaGithub
                size={24}
                className="mx-auto mb-4"
                aria-hidden="true"
              />

              <p className="text-foreground">
                GitHub
              </p>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/niroshan-pathmanathan-2057123bb"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Roshan's LinkedIn profile"
              className="
                border
                border-border
                rounded-xl
                p-6
                hover:bg-accent
                transition
                duration-300
                hover:-translate-y-1
              "
            >
              <FaLinkedin
                size={24}
                className="mx-auto mb-4"
                aria-hidden="true"
              />

              <p className="text-foreground">
                LinkedIn
              </p>
            </a>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="
              mt-12
              max-w-xl
              mx-auto
              space-y-4
            "
          >
            {/* Name */}
            <input
              type="text"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Your Name"
              autoComplete="name"
              disabled={isSubmitting}
              required
              className="
                w-full
                border
                border-border
                rounded-lg
                px-4
                py-3
                bg-background
                text-foreground
                outline-none
                focus:ring-2
                focus:ring-primary/30
                disabled:opacity-60
              "
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Your Email"
              autoComplete="email"
              disabled={isSubmitting}
              required
              className="
                w-full
                border
                border-border
                rounded-lg
                px-4
                py-3
                bg-background
                text-foreground
                outline-none
                focus:ring-2
                focus:ring-primary/30
                disabled:opacity-60
              "
            />

            {/* Message */}
            <textarea
              name="message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Your Message"
              rows={5}
              disabled={isSubmitting}
              required
              className="
                w-full
                border
                border-border
                rounded-lg
                px-4
                py-3
                bg-background
                text-foreground
                outline-none
                focus:ring-2
                focus:ring-primary/30
                resize-none
                disabled:opacity-60
              "
            />

            {/* Success Message */}
            {successMessage && (
              <div
                className="
                  flex
                  items-center
                  gap-2
                  justify-center
                  text-sm
                  text-green-600
                  dark:text-green-400
                  py-2
                "
                role="status"
              >
                <CheckCircle size={18} />
                {successMessage}
              </div>
            )}

            {/* Error Message */}
            {errorMessage && (
              <div
                className="
                  flex
                  items-center
                  gap-2
                  justify-center
                  text-sm
                  text-red-600
                  dark:text-red-400
                  py-2
                "
                role="alert"
              >
                <AlertCircle size={18} />
                {errorMessage}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="
                w-full
                bg-primary
                text-primary-foreground
                py-3
                rounded-lg
                hover:scale-[1.02]
                transition
                duration-300
                font-medium
                flex
                items-center
                justify-center
                gap-2
                disabled:opacity-60
                disabled:cursor-not-allowed
                disabled:hover:scale-100
              "
            >
              {isSubmitting ? (
                <>
                  <Loader2
                    size={18}
                    className="animate-spin"
                  />
                  Sending...
                </>
              ) : (
                <>
                  <Send
                    size={18}
                    aria-hidden="true"
                  />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </SlideUp>
    </section>
  );
}

