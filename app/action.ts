'use server'; // This directive marks all functions in this file as Server Actions

const nodemailer = require('nodemailer');

export async function sendMessage(formData: { name: string; email: string; message: string }) {
    const name = formData.name;
    const email = formData.email;
    const message = formData.message;

    if (!name || !email || !message) {
        return { success: false, message: 'Please fill out all fields.' };
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: `"${name}" <${email}>`,
        to: 'htunaungkyaw730@gmail.com',
        subject: `New message from ${name} via portfolio`,
        text: `You have a new message.\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        return { success: true, message: 'Message sent successfully! 🎉' };
    } catch (error) {
        console.error('Email sending error:', error);
        return { success: false, message: 'Failed to send the message.' };
    }
}