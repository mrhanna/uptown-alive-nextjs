import Image from 'next/image';

export default function Header() {
    return(
        <header className="sticky top-0 bg-offwhite w-full text-center py-2 z-40 drop-shadow-lg">
            <div className="inline-block mb-[-50px] relative bg-offwhite p-6 pt-0 rounded-b-[50%]">
                <Image
                    src="/logo.png"
                    alt="Uptown Alive logo"
                    width={100}
                    height={100}
                    priority
                />
            </div>
        </header>
    )
}
