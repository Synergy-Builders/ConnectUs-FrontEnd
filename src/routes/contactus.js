import "./contactus.css";

export default function PageContactUs() {
  return (
    <div className="contact-body">
      <h1>Contact Us</h1>
      <p>
        We're here to help you with any questions you have about ConnectUs.
        Reach out to us and we'll respond as soon as we can.
      </p>
      {/** Since we dont have a backend yet, this will use the default mail feature */}
      <form className="contact-form" action="mailto:someaddress@us.com">
        <input type="text" id="name" name="name" placeholder="Name" required/>
        <input type="email" id="email" name="email" placeholder="Email" required/>
        <textarea placeholder="Message" id="message" name="message" required/>
        <button className="submit">Send</button>
      </form>
    </div>
  );
}
