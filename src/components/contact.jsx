import { IoCall } from "react-icons/io5";

const Contact = () => {
  return (
    <section className="py-10 md:py-16 lg:py-20" id="contact-us">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row overflow-hidden">
        <div className="bg-[#0c3b32] text-white flex flex-col items-center justify-center px-10 py-16  md:w-1/3 text-center">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/10 mb-4">
            <IoCall size={28} />
          </div>
          <h3 className="text-xl font-semibold mb-1">Call us now</h3>
          <p className="text-2xl font-bold tracking-wide">
            0000 - 123 - 456789
          </p>
        </div>

        <div className="bg-[#f6f6f2] md:w-2/3 px-10 py-16 ">
          <form className="flex flex-wrap gap-4 mb-5">
            <input
              type="text"
              placeholder="Name"
              className="flex-1 min-w-[200px] p-3 rounded-full border border-[#0c3b32] bg-[#e1ead2] text-[#0c3b32] placeholder-[#0c3b32] focus:outline-none"
            />
            <input
              type="text"
              placeholder="Phone"
              className="flex-1 min-w-[200px] p-3 rounded-full border border-[#0c3b32] bg-[#e1ead2] text-[#0c3b32] placeholder-[#0c3b32] focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="flex-1 min-w-[200px] p-3 rounded-full border border-[#0c3b32] bg-[#e1ead2] text-[#0c3b32] placeholder-[#0c3b32] focus:outline-none"
            />
            <input
              type="text"
              placeholder="Services Type"
              className="flex-1 min-w-[200px] p-3 rounded-full border border-[#0c3b32] bg-[#e1ead2] text-[#0c3b32] placeholder-[#0c3b32] focus:outline-none"
            />
            <input
              type="date"
              className="flex-1 min-w-[200px] p-3 rounded-full border border-[#0c3b32] bg-[#e1ead2] text-[#0c3b32] focus:outline-none"
            />
            <button
              type="submit"
              className="px-8 py-3 rounded-full bg-[#0c3b32] text-white font-semibold hover:bg-[#145c4c] transition"
            >
              Get A Free Quotes
            </button>
          </form>

          <hr className="border-[#0c3b32]/30 mb-3" />
          <p className="text-[#0c3b32] text-sm">
            Gordon services built specifically for your lawn care. Get a Free
            Quote
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
