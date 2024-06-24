import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100">
        <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center">Contact Me</h2>
            <form className="mt-8 max-w-lg mx-auto">
                <div className="mb-4">
                    <label className="block text-gray-700">Your Name</label>
                    <input type="text" className="w-full px-4 py-2 border rounded-md" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Email</label>
                    <input type="email" className="w-full px-4 py-2 border rounded-md" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Message</label>
                    <textarea className="w-full px-4 py-2 border rounded-md" rows="4" ></textarea>
                    </div>
                    <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">Send</button>
            </form>
        </div>
    </section>
  )
}

export default Contact