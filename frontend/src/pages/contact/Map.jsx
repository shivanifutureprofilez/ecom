function Map() {
    return (
        <div className='container mx-auto lg:max-w-[1440px] mt-8 px-8'>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d241479.9279604212!2d72.8402895!3d18.9701359!3m2!1i1024!2i768!4f13.1!2m1!1smannat%20mumbai!5e0!3m2!1sen!2sin!4v1756115721947!5m2!1sen!2sin"
                className="w-full h-[400px] border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            >
            </iframe>
        </div>
    )
}

export default Map;