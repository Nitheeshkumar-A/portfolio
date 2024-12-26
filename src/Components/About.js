import aboutimageg from '../asserts/aboutimg.png';

export default function About() {
    const config = {
        line1: 'Hi, I’m Nitheesh Kumar A, a full-stack developer. I build beautiful websites with React.js and Tailwind CSS.',
        line2: 'I’m proficient in MERN stack skills like HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB, and many more.',
    };

    return (
        <section className="flex flex-col md:flex-row bg-primary p-3" id="About">
            {/* Image Section */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-start">
                <img
                    className="py-5 h-[300px] w-[250px] md:h-[450px] md:w-[350px] object-cover"
                    src={aboutimageg}
                    alt="About Me"
                />
            </div>

            {/* Text Section */}
            <div className="w-full md:w-1/2 flex justify-center items-center p-3">
                <div className="flex flex-col justify-center text-white">
                    <h1 className="text-3xl md:text-4xl font-bold pb-4 text-center md:text-left">About Me</h1>
                    <p className="pb-4 text-center md:text-left">{config.line1}</p>
                    <p className="pb-4 text-center md:text-left">{config.line2}</p>
                </div>
            </div>
        </section>
    );
}