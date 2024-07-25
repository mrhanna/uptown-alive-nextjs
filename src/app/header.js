import Image from 'next/image';

export default function Header() {
    return(
        <header className="sticky top-0 bg-white w-full text-center z-40 drop-shadow-lg">
            <div className="inline-block mb-[-70px] relative bg-offwhite drop-shadow-lg p-10 pt-4 rounded-b-[50%]">
                <Image
                    src="/logo.png"
                    alt="Uptown Alive logo"
                    width={140}
                    height={140}
                    priority
                />
            </div>
        </header>
    )
}
