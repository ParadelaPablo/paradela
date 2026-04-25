"use client";

import React, { useRef } from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {
const form = useRef();

const sendEmail = (e) => {
e.preventDefault();

emailjs
    .sendForm(
    "service_afvy5t2", 
    "template_e8ev6ct", 
    form.current,
    "dCtggv43Ez0sNphQG" 
    )
    .then(
    (result) => {
        alert("Message sent successfully!");
        form.current.reset();
    },
    (error) => {
        alert("Failed to send the message. Please try again.");
    }
    );
};

return (
<form
    ref={form}
    onSubmit={sendEmail}
    className="flex w-full max-w-xl flex-col gap-6"
>
    <div>
    <label htmlFor="name" className="block text-sm font-medium mb-2">
        Name
    </label>
    <input
        type="text"
        id="name"
        name="name"
        placeholder="Your Name"
        required
        className="w-full rounded-md border border-input bg-background px-4 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    />
    </div>
    <div>
    <label htmlFor="email" className="block text-sm font-medium mb-2">
        Email
    </label>
    <input
        type="email"
        id="email"
        name="email"
        placeholder="Your Email"
        required
        className="w-full rounded-md border border-input bg-background px-4 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    />
    </div>
    <div>
    <label htmlFor="message" className="block text-sm font-medium mb-2">
        Message
    </label>
    <textarea
        id="message"
        name="message"
        placeholder="Your Message"
        rows="4"
        required
        className="w-full rounded-md border border-input bg-background px-4 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    />
    </div>
    <button
    type="submit"
    className="inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
    Send Message
    </button>
</form>
);
}
