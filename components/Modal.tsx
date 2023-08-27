export default function Modal({
  children,
  setIsActive,
}: {
  children: React.ReactNode;
  setIsActive: (isActive: boolean) => void;
}) {
  return (
    <div className="fixed inset-0 bg-black/50 z-40">
      <div className="w-full h-full flex items-center justify-center px-[24px]">
        <article className="max-w-[620px] bg-gray w-full mx-auto relative z-50 p-[44px] rounded-[13px] border-gray-light border-[2px]">
          {children}
        </article>
      </div>
      <div className="absolute inset-0 " onClick={() => setIsActive(false)} />
    </div>
  );
}
