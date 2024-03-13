import profile from '../../../public/assets/images/profile.png'

const Header = () => {
    return (
        <header className="max-w-screen-xl mx-auto mb-10">
            <nav className="flex pt-12 pb-8 justify-between items-center border-b-2">
                <h1 className=" text-4xl font-bold text-[#111]">Knowledge Cafe</h1>
                <div>
                    <img  src={profile} alt=""/>
                </div>
            </nav>
        </header>
    );
};

export default Header;