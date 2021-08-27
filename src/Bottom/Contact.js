import React from "react";

export default function Contact(){
    return(
        <div>
            <div className="flex">
                <iframe src="https://tally.so/embed/wzqr03?hideTitle=1&alignLeft=1" width="100%" height="500" frameborder="0" marginheight="0" marginwidth="100px" title="Contact Us"></iframe>
                <img src="images/contact_us.png" alt="Contact Us" className="w-1/2 h-auto md:block hidden" />
            </div>
            <form action="https://submit-form.com/CDWXmeNh">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Name" required="" />
                <label for="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Email" required="" />
                <label for="message">Message</label>
                <textarea
                    id="message"
                    name="message"
                    placeholder="Message"
                    required=""
                ></textarea>
                <button type="submit">Send</button>
            </form>

        </div>
        
       
    )
};