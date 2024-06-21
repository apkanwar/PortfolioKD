// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    const data = [
        {
            paragraph: "Whether you are purchasing a first home or your next home, choosing the right mortgage is an important undertaking. I am committed to helping you find the right financing to suit your needs and to make your mortgage experience as uncomplicated as possible. Let's set an appointment for a time and place that is convenient and get started.",
        },
        {
            paragraph: "With access to competitive borrowing solutions, I can help you understand your options and find the right solution to suit your unique needs.",

        }
    ]
    res.status(200).json({ data })
}