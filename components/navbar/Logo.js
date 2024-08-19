import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
     <Image src={'/img/yogesh.png'}width={50} height={50} alt="logo"/>
     
    </Link>
  );
}
