// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    const data = [
        {
            "AuthorName": "Francis Johnson",
            "ProfileImage": "https://lh3.googleusercontent.com/a/ACg8ocKxsCvITOmLL2IxYkamL4JXudn54nwXoq4B3qLZrGzZdpYl7w=s120-c-rp-mo-br100",
            "ReviewCount": 5,
            "ReviewContent": "Kanwardeep was a joy to work with on my recent transaction. He was very patient, taking his time to explain every phase of the transaction and he made sure the deal went through without any hitches. KD is a super guy, highly recommend!!",
            "Rating": 5,
            "Time": "10/19/2023 18:22:22"
        },
        {
            "AuthorName": "Sunil Kumar",
            "ProfileImage": "/profile_placeholder.jpg",
            "ReviewCount": 7,
            "ReviewContent": "Mr. KD is highly professional in his work. He is quite responsive and provides valuable inputs on the situation. He explains in detailed, works hard, honest and ethical. He responds to our questions immediately. He is very dependable and would go with him each time I look for mortgage here in Canada. I wish you all the success. I would strongly recommend him to anyone seeking good mortgage deals. The best thing about KD is he listens and has a lot of patience.",
            "Rating": 5,
            "Time": "10/05/2023 17:28:07"
        },
        {
            "AuthorName": "Shivender Bedi",
            "ProfileImage": "https://lh3.googleusercontent.com/a-/ALV-UjXWgdnrnw0HtAGxBD-_7FckNyb-HS_YqmpYakX1PnJaTaRtF2jy=s120-c-rp-mo-br100",
            "ReviewCount": 9,
            "ReviewContent": "A very knowledgeable professional with customer first approach.",
            "Rating": 5,
            "Time": "09/21/2023 00:19:52"
        },
        {
            "AuthorName": "Prakash Patel",
            "ProfileImage": "https://lh3.googleusercontent.com/a/ACg8ocLpG9Myvby8pSe_w191whLcXYwJjezKXeoaZ7G10PJKbjF9NIk=s120-c-rp-mo-br100",
            "ReviewCount": 2,
            "ReviewContent": "Had a fantastic experience with KD, our mortgage specialist. Extremely professional, knowledgeable about the market, and highly responsive. Highly recommend. We are very grateful and happy with his service",
            "Rating": 5,
            "Time": "08/30/2023 18:14:39"
        },
        {
            "AuthorName": "Arshdeep Singh",
            "ProfileImage": "https://lh3.googleusercontent.com/a/ACg8ocLozpmarN-K_hBbNloXGPU6ayns52rm2Bw9rNrJxnpBIWpLGw=s120-c-rp-mo-ba3-br100",
            "ReviewCount": 35,
            "ReviewContent": "Kanwardeep is very talented mortgage specialist and provide clients with clarity to great extent. He is good listener, answers all queries and guide clients through his experience. He is calm and professional. I would recommend him to anyone.",
            "Rating": 5,
            "Time": "08/03/2023 16:19:26"
        },
        {
            "AuthorName": "Thejasree Gutha",
            "ProfileImage": "https://lh3.googleusercontent.com/a/ACg8ocLzKe-UcxPJaaR0_SIF3KtOc0S0iJR12HeGrJrWaBdG-rFPd9s=s120-c-rp-mo-br100",
            "ReviewCount": 5,
            "ReviewContent": "We recently had the pleasure of working with Kanwardeep as our BMO Mortgage Specialist, and I can confidently say that he exceeded all our expectations. One aspect that truly impressed us was Kanwardeep's attention to detail. He meticulously reviewed all the necessary paperwork, leaving no room for errors or oversights. This level of thoroughness gave us confidence in the accuracy and completeness of our mortgage application. Kanwardeep's expertise and diligence were instrumental in securing the best possible mortgage terms for us.",
            "Rating": 5,
            "Time": "06/15/2023 02:32:58"
        },
        {
            "AuthorName": "Ranjith Goolla",
            "ProfileImage": "https://lh3.googleusercontent.com/a-/ALV-UjVLQLLi9UKzgnDAp0vs_pC3gVPDf46tdLIhh329mZGnEVtVd1yiHg=s120-c-rp-mo-br100",
            "ReviewCount": 3,
            "ReviewContent": "Working with Kanwardeep as my Mortgage Specialist was an exceptional experience from start to finish. His expertise and dedication made the entire mortgage process smooth and hassle-free. From our initial consultation to the final closing, Kanwardeep demonstrated professionalism, patience, and a genuine commitment to helping me find the best mortgage solution.\nKanwardeep's knowledge of the mortgage industry and his ability to explain complex concepts in a simple and clear manner impressed me greatly.  Throughout the process, he remained readily available to address any questions or concerns I had, promptly responding to my emails and calls.\nWhat sets Kanwardeep apart is his unwavering commitment to his clients' satisfaction. He went above and beyond to ensure that I secured a mortgage that aligned with my needs . He diligently explored various options, explaining the pros and cons of each, and provided personalized recommendations tailored to my situation. I would highly recommend Kanwardeep Kanwar to anyone in need of a knowledgeable and trustworthy Mortgage Specialist.",
            "Rating": 5,
            "Time": "06/15/2023 02:24:59"
        },
        {
            "AuthorName": "Shivam Chandel",
            "ProfileImage": "https://lh3.googleusercontent.com/a-/ALV-UjVMH8bll5R_gs9W7pvfLOBZ_5UfwNmPRJTZD6u-4wt---G_hvO5=s120-c-rp-mo-br100",
            "ReviewCount": 10,
            "ReviewContent": "Recently got the mortgage approved at Bmo by Kanwar ji , he guided and supported through the whole process and gave genuine advice . Thank you for assisting in our first home mortgage!!",
            "Rating": 5,
            "Time": "05/27/2023 02:54:40"
        },
        {
            "AuthorName": "Ashok Kolla",
            "ProfileImage": "https://lh3.googleusercontent.com/a/ACg8ocLH-RdloeVkWimDX7nuipnRQbhx_JT2xjsUCfWO6Sn-FWBd1Q=s120-c-rp-mo-br100",
            "ReviewCount": 8,
            "ReviewContent": "Mr Kanwar helped me right throughout the mortgage process step by step. He has very good knowledge and understanding of my mortgage needs. His approach to problem solving and advice during my mortgage process are commendable. He has excellent interpersonal skills and is very approachable. I recommend his services 100%.",
            "Rating": 5,
            "Time": "05/25/2023 12:28:39"
        },
        {
            "AuthorName": "Patrick Onyia",
            "ProfileImage": "https://lh3.googleusercontent.com/a/ACg8ocK6DpTcn6wNwQ5-dvSQFN12ruyMm2qX8-Vo1XH2BFezdTn6EA=s120-c-rp-mo-br100",
            "ReviewCount": 3,
            "ReviewContent": "My experience dealing with Kanwardeep has been exceptional. He was patient, resourceful and very professional in providing advise that helped me make informed decision when purchasing my house. He goes the extra mile to ensure customer satisfaction. I will definitely do business with him again and I will refer my friends and family too.",
            "Rating": 5,
            "Time": "05/19/2023 21:36:07"
        },
        {
            "AuthorName": "Reiki Grandmaster",
            "ProfileImage": "https://lh3.googleusercontent.com/a/ACg8ocLs6ltqrA0QM1TGOhGxjNQIjB3oYF9qO3atDkzzNmuYnnmCyQ=s120-c-rp-mo-br100",
            "ReviewCount": 3,
            "ReviewContent": "Excellent service.",
            "Rating": 5,
            "Time": "05/18/2023 13:07:33"
        },
        {
            "AuthorName": "Ram Eerpina",
            "ProfileImage": "https://lh3.googleusercontent.com/a-/ALV-UjVKbjVST8WVCGJri0NGdGWqP6s5jNJ722lZy2GiuOHpeeQsR7M=s120-c-rp-mo-br100",
            "ReviewCount": 5,
            "ReviewContent": "I had a great pleasure to work with KD to apply for a mortgage. Unlike many others he didn’t make us to run around to get various documents. He was very meticulous and detail oriented and willing to listen to his clients. After I submitted my documents he was able to secure the mortgage in less than week which rarely happens in the mortgage application process. Even after closing he followed up to check if the closing went smoothly and if we need any more help. Following through even after the work is completed is something most people won’t do. If I have to go with KD I won’t hesitate for a second.",
            "Rating": 5,
            "Time": "04/27/2023 19:37:30"
        },
        {
            "AuthorName": "Kalyan Krothapalli",
            "ProfileImage": "https://lh3.googleusercontent.com/a-/ALV-UjUOepFne-mr9_S9ScW2nRfycTRfVFXoRDRdB2oWI2JTCata5WqB=s120-c-rp-mo-ba2-br100",
            "ReviewCount": 14,
            "ReviewContent": "I recently had the pleasure of working with Mr. KD to secure a mortgage for my new home, who gave exceptional attention to detail, which was especially important during the mortgage approval process. He was able to anticipate any potential issues and took proactive steps to ensure that my mortgage was approved smoothly and efficiently. Overall, I would highly recommend Mr. KD to anyone in need of a mortgage. Thank you, Mr. KD, for making the mortgage process so smooth and stress-free!",
            "Rating": 5,
            "Time": "04/09/2023 03:23:07"
        },
        {
            "AuthorName": "Saketh Kumar",
            "ProfileImage": "https://lh3.googleusercontent.com/a-/ALV-UjUGLkLGQpLT9Gw1eP2N3pxZ0GIz73BMBNayF8z7g3fCFCJNj8mw=s120-c-rp-mo-br100",
            "ReviewCount": 8,
            "ReviewContent": "KD helped me with my mortgage and he was a pleasure to work with. He made the entire process simple and easy to understand by explaining everything clearly. I highly recommend him for anyone looking for a mortgage",
            "Rating": 5,
            "Time": "04/07/2023 18:39:10"
        },
        {
            "AuthorName": "Manik Sharma",
            "ProfileImage": "https://lh3.googleusercontent.com/a-/ALV-UjWJLz2iz5NY68rbGU8tfOOVNPjQOW_hbpF5vDCmC7ZAl_wyQLM=s120-c-rp-mo-ba2-br100",
            "ReviewCount": 19,
            "ReviewContent": "Great experience with Mr. KD. Softly spoken, immense knowledge and experience, guides through every part of mortgage. Anyone looking for any type of mortgage must consult with Mr. KD.",
            "Rating": 5,
            "Time": "03/31/2023 22:21:56"
        },
        {
            "AuthorName": "Mantek Bhogal",
            "ProfileImage": "https://lh3.googleusercontent.com/a-/ALV-UjXfeJXRoiq3NWeZoPpAOkOCTwMZkqmKASzvnzLKTgphTCX93DI=s120-c-rp-mo-ba2-br100",
            "ReviewCount": 10,
            "ReviewContent": "Very professional and genuine personal who explains everything with full transparency. Highly recommended for all mortgage needs.",
            "Rating": 5,
            "Time": "03/28/2023 12:36:24"
        },
        {
            "AuthorName": "Nicholas Fernandes",
            "ProfileImage": "https://lh3.googleusercontent.com/a-/ALV-UjWDC4Jsyu4n3pSnt2-HNrvq_7vRECh9ghggGk7QB4ku66hdLROl=s120-c-rp-mo-br100",
            "ReviewCount": 16,
            "ReviewContent": "Kanwardeep is very professional and efficient in his work. Our mortgage was approved without any hassles. Highly recommended.",
            "Rating": 5,
            "Time": "11/13/2021 19:49:08"
        },
        {
            "AuthorName": "Krushna Patra",
            "ProfileImage": "https://lh3.googleusercontent.com/a-/ALV-UjW88CzcYjjcGVcYpy41vlm04uxFs4xEbsxX-J7i2NcM8eQBaq8uDw=s120-c-rp-mo-ba2-br100",
            "ReviewCount": 21,
            "ReviewContent": "Mr. KD has great understanding of the Mortgage products.\n\nI like the fact that, he understands your need and then he explains you what is best for your need.\n\nHe is been able to give great service to his clients.\n\nI highly recommend to get in touch with him if you need any help in mortgage.",
            "Rating": 5,
            "Time": "10/04/2021 02:14:01"
        },
        {
            "AuthorName": "Sagar Jani",
            "ProfileImage": "https://lh3.googleusercontent.com/a-/ALV-UjX5EJHITkmA45Qw_DY7aFOgAQnyNnRwDWhSkgEhESYaG82uH5z-UQ=s120-c-rp-mo-ba3-br100",
            "ReviewCount": 24,
            "ReviewContent": "The Go To person for your next mortgage advice.\n\nWe were based in Calgary and KD has been helpful in understanding our situation and making us understanding the process and it's steps.\n\nStraight forward, honest opinions. 100% Service satisfaction\n\nJust give me a call anytime and he would be up to help you.",
            "Rating": 5,
            "Time": "09/01/2021 19:10:11"
        }
    ]
    res.status(200).json({ data })
}