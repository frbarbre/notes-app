export default function Modal({
  children,
  setIsActive,
  isDelete,
}: {
  children: React.ReactNode;
  setIsActive: (isActive: boolean) => void;
  isDelete?: boolean;
}) {
  return (
    <div className="fixed inset-0 bg-black/50 z-40">
      <div className="w-full h-full flex items-center justify-center px-[24px]">
        <article
          className={`max-w-[620px] bg-gray mx-auto relative z-50 rounded-[13px] border-gray-light border-[2px] ${
            isDelete ? "p-[24px]" : "w-full p-[24px] md:p-[44px]"
          }`}
        >
          {children}
        </article>
      </div>
      <div className="absolute inset-0 " onClick={() => setIsActive(false)} />
    </div>
  );
}
