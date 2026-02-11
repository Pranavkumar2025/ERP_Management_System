import React from 'react';

const Testimonials = () => {
    const testimonials = [
        {
            content: "This platform has revolutionized how we manage our subcontractors. The compliance tracking alone has saved us countless hours.",
            author: "Priya Sharma",
            role: "Project Manager, BuildTech India",
            image: "https://randomuser.me/api/portraits/women/65.jpg"
        },
        {
            content: "Real-time material tracking is a game-changer. We know exactly what we have on site at all times, reducing waste and delays.",
            author: "Rajesh Kumar",
            role: "Site Supervisor, Metro Constructions",
            image: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        {
            content: "The payment processing is seamless. Our contractors get paid faster, and we have a clear audit trail for every transaction.",
            author: "Anjali Desai",
            role: "Finance Director, SkyHigh Developers",
            image: "https://randomuser.me/api/portraits/women/68.jpg"
        },
    ];

    return (
        <div className="bg-slate-900 py-24 border-t border-slate-800" id="testimonials">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-amber-500 font-bold tracking-widest uppercase text-xs mb-3">Testimonials</h2>
                    <h2 className="text-3xl lg:text-4xl font-bold tracking-tighter text-white leading-tight">
                        Trusted by Construction Leaders
                    </h2>
                </div>

                <div className="grid gap-8 lg:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-slate-900 p-8 border border-slate-800 hover:border-slate-700 transition-colors duration-300 relative group">
                            {/* Quote Icon Background */}
                            <div className="absolute top-6 right-6 text-slate-800 opacity-50 group-hover:text-slate-700 transition-colors">
                                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.0547 15.592 14.4796 17.5373 14.4796H19.9997L19.9998 7H14.0171V4H21V16C21 18.7614 18.7614 21 15.9998 21H14.017ZM8.01667 21L8.01667 18C8.01667 16.0547 9.59167 14.4796 11.5373 14.4796H13.9997L13.9998 7H8.01713V4H15V16C15 18.7614 12.7614 21 10.0001 21H8.01667Z"></path></svg>
                            </div>

                            <div className="flex items-center gap-4 mb-6 relative z-10">
                                <img className="h-12 w-12 grayscale group-hover:grayscale-0 transition-all border border-slate-700" src={testimonial.image} alt={testimonial.author} />
                                <div>
                                    <p className="text-base font-bold text-white tracking-tight">
                                        {testimonial.author}
                                    </p>
                                    <p className="text-xs font-medium text-amber-500 uppercase tracking-wider">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>
                            <p className="text-slate-400 leading-relaxed font-light relative z-10">
                                "{testimonial.content}"
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
