import Image from "next/image";
export default function Footer() {
  return (
    <footer className="bg-sewell-dark py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <a href="https://sewelllabs.com" target="_blank" rel="noopener noreferrer">
          <Image src="/logo-wh-or.png" alt="Sewell Labs" width={240} height={96} className="h-20 w-auto" />
        </a>
        <p className="text-sm font-body text-gray-500">© 2026 Sewell Labs. All rights reserved.</p>
      </div>
    </footer>
  );
}
