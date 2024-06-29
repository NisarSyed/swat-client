const Contact = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center">Contact</h1>
      <p className="text-center mt-2">
        You can contact us at{" "}
        <a
          href="mailto:ngo@example.com"
          className="text-blue-500"
          target="_blank"
          rel="noreferrer"
        >
          ngo@example.com
        </a>
      </p>
    </div>
  );
};

export default Contact;
