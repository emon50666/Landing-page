const Footer = () => {
    return (
      <footer className="bg-[#12141D] text-white py-12 px-6 md:px-16">
        <div className="grid grid-cols-2 text-start sm:grid-cols-2 md:grid-cols-4 gap-8  md:text-left">
          <div>
            <h3 className="text-lg font-semibold mb-3">Company</h3>
            <ul className="text-gray-400 space-y-2">
              <li><a href="#">About</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">Works</a></li>
              <li><a href="#">Career</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3">Help</h3>
            <ul className="text-gray-400 space-y-2">
              <li><a href="#">Customer Support</a></li>
              <li><a href="#">Delivery Details</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
  
          <div>
            <h3 className="text-lg font-semibold mb-3">Resources</h3>
            <ul className="text-gray-400 space-y-2">
              <li><a href="#">Free eBooks</a></li>
              <li><a href="#">Development Tutorial</a></li>
              <li><a href="#">How-to Blog</a></li>
              <li><a href="#">YouTube Playlist</a></li>
            </ul>
          </div>
  
          <div>
            <h3 className="text-lg font-semibold mb-3">Links</h3>
            <ul className="text-gray-400 space-y-2">
              <li><a href="#">Free eBooks</a></li>
              <li><a href="#">Development Tutorial</a></li>
              <li><a href="#">How-to Blog</a></li>
              <li><a href="#">YouTube Playlist</a></li>
            </ul>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  