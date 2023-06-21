import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div>
        <h1>This is Ayush Thakur</h1>
        <Image src="/profile.jpg" width={500} height={500} alt="profile" />
      </div>
    </main>
  );
}
