'use client'
import Image from 'next/image';
import bgDark from "@/assets/bgDark.png"
import bgLight from "@/assets/bgLight.png"
import { usePicker } from 'overwatch-ts';

const BgImage = ({theme}) => {
    return (<>
        <Image
            src={theme == "dark" ? bgDark : bgLight}
            alt="Bg"
            style={{ width: "100%", height: "100%", opacity: 0.3, position: "absolute" }}
            priority
            className="h-10 w-auto"
        />
    </>)
}

export default BgImage