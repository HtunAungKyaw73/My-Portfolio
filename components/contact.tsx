"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"
import {sendMessage} from "@/app/action";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [status, setStatus] = useState({ success: false, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    setStatus({ success: false, message: 'Sending...' });
    console.log("Form submitted:", formData)

    const response = await sendMessage(formData);
    setStatus(response);

    // Reset form
    if (response.success) {
       setFormData({ name: "", email: "", message: "" })
    }
    // To make success message disappear after 3 sec
    setTimeout(()=>{
        document.querySelector(".message")?.classList.add("hide");
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-sky-500">{"Let's work together"}</h3>
              <p className="text-muted-foreground mb-6">
                I'm always interested in new opportunities and exciting projects. Whether you have a question or just
                want to say hi, feel free to reach out!
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-sky-500" />
                  <span>htunaungkyaw730@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-sky-500" />
                  <span>+66 623 648 810</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-3 text-sky-500" />
                  <span>Chiang Mai, Thailand</span>
                </div>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full hover:bg-sky-600">
                    Send Message
                  </Button>
                    {status.message && (
                        <p className={status.success ? "message text-sky-500" : "message text-red-500"}>
                            {status.message}
                        </p>
                    )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
