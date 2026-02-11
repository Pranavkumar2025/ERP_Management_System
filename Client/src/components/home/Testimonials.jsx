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
        <div className="bg-slate-900 py-24" id="testimonials">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-amber-500 font-semibold tracking-wide uppercase text-sm">Testimonials</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Trusted by industry leaders
                    </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-slate-800 rounded-sm p-8 border border-slate-700 hover:border-slate-600 transition-colors">
                            <div className="flex items-center gap-4 mb-6">
                                <img className="h-12 w-12 rounded-full border-2 border-slate-700" src={testimonial.image} alt={testimonial.author} />
                                <div>
                                    <p className="text-base font-bold text-white">
                                        {testimonial.author}
                                    </p>
                                    <p className="text-xs font-medium text-amber-500 uppercase tracking-wide">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>
                            <p className="text-slate-300 italic leading-relaxed">
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
