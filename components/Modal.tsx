export default function Modal({
  children,
  setIsActive,
}: {
  children: React.ReactNode;
  setIsActive: (isActive: boolean) => void;
}) {
  return (
    <div className="fixed inset-0 bg-black/50 z-40">
      <div className="w-full h-full flex items-center justify-center">
        <article className="max-w-[450px] bg-white relative z-50">
          {children}
        </article>
      </div>
      <div className="absolute inset-0 " onClick={() => setIsActive(false)} />
    </div>
  );
}
