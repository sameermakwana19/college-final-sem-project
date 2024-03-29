const Newsletter = () => {
  return (
    <div className="newsletter">
      <h2 className="newsletter-heading">Get Exclusive Offers On Your Email</h2>
      <p className="newsletter-subheading">
        Subscribe to our newsletter and stay updated.
      </p>
      <form
        action="#"
        className="newsletter-form"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="input-container">
          <input type="email" required placeholder="Your Email Id" />
          <button className="form-btn">Subscribe</button>
        </div>
      </form>
    </div>
  );
};

export default Newsletter;
