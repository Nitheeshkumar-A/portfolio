import aboutimageg from '../asserts/aboutimg.png';

export default function Resume() {
    const config = {
        link: 'https://nitheeshkumar-resume-pdf.tiiny.site',
    };

    return (
        <section className="flex flex-col md:flex-row bg-primary p-5" id="Resume">
            {/* Image Section */}
            <div className="py-5 w-full md:w-1/3 flex justify-center md:justify-end">
                <img
                    className="h-[300px] w-[300px] md:h-[500px] md:w-[500px] object-cover"
                    src={aboutimageg}
                    alt="Resume Preview"
                />
            </div>

            {/* Text Section */}
            <div className="w-full md:w-1/2 flex justify-center items-center">
                <div className="flex flex-col justify-center text-white text-center md:text-left">
                    <h1 className="text-3xl md:text-5xl font-bold p-5">Resume</h1>
                    <p className="pb-5">
                        You can view my resume{' '}
                        <a
                            className="btn bg-secondary text-white px-4 py-2 rounded hover:bg-secondary-dark transition"
                            href={config.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Download
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
}