import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Create email content
    const emailContent = `
New contact form submission from your portfolio:

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

---
This message was sent from your portfolio contact form.
    `

    // For now, we'll use a simple email service approach
    // In production, you would integrate with services like Resend, SendGrid, or Nodemailer

    // Simulate email sending (replace with actual email service)
    console.log("Email would be sent to: bader.echchalh1@gmail.com")
    console.log("Email content:", emailContent)

    // You can integrate with email services here:
    // Example with Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'portfolio@yourdomain.com',
    //   to: 'bader.echchalh1@gmail.com',
    //   subject: `Portfolio Contact: ${subject}`,
    //   text: emailContent,
    //   replyTo: email
    // })

    return NextResponse.json({ message: "Message sent successfully!" }, { status: 200 })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 500 })
  }
}
