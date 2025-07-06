function Footer(params) {
    return (
        <div>
            {/* Card Footer */}
            <div className="flex justify-between items-center pt-1 mt-2 border-t border-blue-500 border-opacity-30 text-blue-200 text-s">
                <div className="flex items-center hover:text-white">
                    <button>FORGOT PIN?</button>
                </div>                
                <div className="flex items-center hover:text-white">
                    <button>SIGN UP</button>
                </div>
            </div>
        </div>
        
    );
}

export default Footer;



