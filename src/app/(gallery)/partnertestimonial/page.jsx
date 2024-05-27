import Container from '@/component/Shared/Container';
import React from 'react';

// Testimonials data
const testimonials = [
  {
    id: 1,
    quote: "Finally, I've found a template that covers all bases for a bootstrapped startup. We were able to launch in days, not months.",
    author: 'Raj',
    role: 'Bakery shop Owner',
    avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 2,
    quote: "Legal257's services have been instrumental in streamlining our financial processes. Their attention to detail and expertise in tax matters are commendable.",
    author: 'Arjun Mehta',
    role: 'CEO, Mehta Industries',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    id: 3,
    quote: "We have been a client of Legal257 for years, and their consistent professionalism and reliability have made them our go-to partner for financial and tax services.",
    author: 'Priya Singh',
    role: 'Business Owner',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    id: 4,
    quote: "Exceptional service! Legal257 helped us navigate complex tax regulations effortlessly. Highly recommended for businesses looking for top-notch financial solutions.",
    author: 'Vikram Patel',
    role: 'Finance Manager, Patel & Co.',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
  {
    id: 5,
    quote: "The team at Legal257 is not just knowledgeable but also proactive in addressing our financial concerns. Their personalized approach sets them apart.",
    author: 'Aditi Sharma',
    role: 'Marketing Director, Sharma Group',
    avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    id: 6,
    quote: "Efficient and reliable! Legal257's services have significantly contributed to our business growth by ensuring compliance and strategic financial planning.",
    author: 'Rohan Verma',
    role: 'Operations Manager, Verma Enterprises',
    avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    id: 7,
    quote: "As a startup, Legal257's support has been invaluable. From tax filings to financial advice, they have been our trusted partner every step of the way.",
    author: 'Sana Kapoor',
    role: 'Founder & CEO, Kapoor Innovations',
    avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
  {
    id: 8,
    quote: "Professionalism at its best! Legal257's expertise in tax matters has saved us time and money, allowing us to focus on our core business.",
    author: 'Anil Gupta',
    role: 'Business Consultant',
    avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
  },
  {
    id: 9,
    quote: "Highly recommended! Legal257's team is not only knowledgeable but also proactive in finding solutions that align with our business goals.",
    author: 'Ritu Desai',
    role: 'Financial Analyst, Desai FinCorp',
    avatar: 'https://randomuser.me/api/portraits/women/8.jpg',
  },
  {
    id: 10,
    quote: "Legal257 has been a game-changer for us. Their expertise in tax planning has helped optimize our financial strategies and improve our bottom line.",
    author: 'Rajesh Iyer',
    role: 'CFO, Iyer Tech',
    avatar: 'https://randomuser.me/api/portraits/men/9.jpg',
  },
  {
    id: 11,
    quote: "Working with Legal257 has been a pleasure. Their deep understanding of tax laws and proactive approach to problem-solving has greatly benefited our company.",
    author: 'Neha Joshi',
    role: 'HR Manager, Joshi Solutions',
    avatar: 'https://randomuser.me/api/portraits/women/9.jpg',
  },
  {
    id: 12,
    quote: "Legal257's loan options were exactly what we needed to expand our operations. Their team is professional, efficient, and always ready to help.",
    author: 'Rakesh Kulkarni',
    role: 'Operations Head, Kulkarni Logistics',
    avatar: 'https://randomuser.me/api/portraits/men/10.jpg',
  },
  {
    id: 13,
    quote: "I highly recommend Legal257 for their excellent GST and ITR filing services. They made the entire process smooth and hassle-free.",
    author: 'Kavita Rao',
    role: 'Freelance Consultant',
    avatar: 'https://randomuser.me/api/portraits/women/10.jpg',
  },
  {
    id: 14,
    quote: "Legal257's personalized approach and attention to detail have been invaluable. Their expertise in tax and financial services is top-notch.",
    author: 'Amit Bansal',
    role: 'Managing Director, Bansal Textiles',
    avatar: 'https://randomuser.me/api/portraits/men/11.jpg',
  },
  {
    id: 15,
    quote: "The team at Legal257 goes above and beyond to ensure compliance and provide strategic financial advice. Their services are highly reliable.",
    author: 'Sunita Nair',
    role: 'CFO, Nair Enterprises',
    avatar: 'https://randomuser.me/api/portraits/women/11.jpg',
  },
];

export default function Testimonial() {
  return (
    <Container >

    
    <div className="mx-auto  rounded-md bg-black p-5 my-[3rem]">
      {testimonials.map((testimonial) => (
        <div key={testimonial.id} className="flex flex-col md:flex-row  rounded-md bg-white mb-4">
          <div className="flex flex-1 flex-col justify-between p-8">
            {/* Rating stars */}
            <div className="mb-4 flex space-x-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-6 w-6 text-yellow-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              ))}
            </div>
            {/* Testimonial quote */}
            <div className="flex-1 pt-2">
              <blockquote>
                <p className="text-lg text-gray-800">{testimonial.quote}</p>
              </blockquote>
            </div>
            {/* Author details */}
            <div className="mt-8 border-t border-gray-300 pt-4 dark:border-gray-800">
              <div className="flex items-center">
                <img
                  className="h-10 w-10 flex-shrink-0 rounded-full object-cover"
                  src={testimonial.avatar}
                  alt=""
                />
                <div className="ml-3 min-w-0">
                  <p className="truncate text-base font-semibold text-gray-800">{testimonial.author}</p>
                  <p className="truncate text-base text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </Container>
  );
}
