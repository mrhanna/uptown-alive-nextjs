import Image from 'next/image';

const Header = () => {
    return(
        <header className="relative bg-white w-full z-40 drop-shadow-lg">
            <Image
                src="/logo.png"
                alt="Uptown Alive logo"
                width={140}
                height={140}
                priority
            />
        </header>
    )
}

export default Header;