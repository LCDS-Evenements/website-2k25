import Image from "next/image";

export default function Home() {
  return (
    <section className="h-dvh">
      <Image 
        src="/cover.svg" 
        alt="Illustration qui représente la direction artistique du site et du festival Les CuicuiteDays 2k25" 
        fetchPriority="high" 
        loading="eager" 
        width={100} 
        height={100} 
        className="w-full h-auto"
      />
    </section>
  );
}
