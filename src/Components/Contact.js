export default function Contact() {
    const config = {
        Email: 'nitheeshkumara01@gmail.com',
        Phone: '(+91)8870244134',
    };

    return (
        <section className="flex flex-col bg-secondary py-16 px-4 md:py-32 md:px-8" id="Contact">
            {/* Contact Section */}
            <div className="flex flex-col items-center text-center">
                <h1 className="text-3xl md:text-5xl font-bold p-4">Contact</h1>
                <p className="pb-2 text-base md:text-lg">
                    If you want to discuss more in detail, please contact me.
                </p>
                <p className="py-2 text-sm md:text-base">
                    <span className="font-bold">Email:</span> {config.Email}
                </p>
                <p className="py-2 text-sm md:text-base">
                    <span className="font-bold">Phone:</span> {config.Phone}
                </p>
            </div>
        </section>
    );
}