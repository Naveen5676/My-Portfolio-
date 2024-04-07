import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d299.8213408368688!2d75.01599179252742!3d15.445382016070964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8d27da31136db%3A0x1731f28efc81518f!2s63A%2C%20Laxmi%20Nagar%201st%20Cross%20Rd%2C%20Saraswatpur%2C%20Dharwad%2C%20Karnataka%20580004%2C%20India!5e1!3m2!1sen!2sus!4v1711131342059!5m2!1sen!2sus"
          />
        </div>
        <div className="bg-gray-900 relative flex flex-wrap py-1 rounded shadow-md">
          <div className="lg:w-1/2 px-6">
            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
              ADDRESS
            </h2>
            <p className="mt-1">
              Laxminagar , vidyagiri
              <br />
              Dharwad , Karnataka
              <br />
              580004.
            </p>
          </div>
          <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
              EMAIL
            </h2>
            <a className="text-indigo-400 leading-relaxed">
              naveenwali34@gmail.com
            </a>
            <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
              PHONE
            </h2>
            <p className="leading-relaxed">+91-9110885676</p>
          </div>
        </div>
      </div>
    </section>
  );
}
