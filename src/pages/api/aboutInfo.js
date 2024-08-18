// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    const data = [
        {
            paragraph: "Whether you're purchasing your first home or your next, choosing the right mortgage is a crucial decision. I am dedicated to helping you find the financing that best fits your needs and making your mortgage experience as simple as possible. Let's set up an appointment at a time and place that's convenient for you, and get started.",
        },
        {
            paragraph: "With access to competitive borrowing solutions, I can help you understand your options and find the right solution tailored to your unique needs.",

        }
    ]
    res.status(200).json({ data })
}