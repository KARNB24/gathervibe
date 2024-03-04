import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href='/'>
          <Image 
            src="/assets/images/Logo.png"
            alt="logo"
            width={150}
            height={60}
          />
        </Link>

        <p>&copy; 2024 GatherVibe All Rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer