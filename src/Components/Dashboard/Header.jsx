import icon from '../../assets/nik-781AooDi4H0-unsplash.jpg';

const Header = () => {
    return (
        <header className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">Dashboard</h1>
                <nav className="flex items-center">
                    <ul className="flex space-x-4">
                        <li><a href="/home" className="hover:text-gray-400">Home</a></li>
                        <li><a href="/profile" className="hover:text-gray-400">Profile</a></li>
                        <li><a href="/settings" className="hover:text-gray-400">Settings</a></li>
                    </ul>
                    <div className="ml-4">
                        <img 
                            src={icon} 
                            alt="Profile" 
                            className="w-10 h-10 rounded-full"
                        />
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;