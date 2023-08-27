import Button from './Button';

export default function Navbar({
  setIsCreating,
}: {
  setIsCreating: (isActive: boolean) => void;
}) {
  return (
    <nav className="flex justify-between items-center py-[31px] border-b-gray-light border-b mb-[51px] gap-6 flex-wrap">
      <h1 className="font-bold text-[42px] tracking-[3.4px]">
        Noted<span className="text-primary">.</span>
      </h1>
      <Button
        handleClick={() => setIsCreating(true)}
        text="New Note"
        icon="/plus.svg"
        width="max-w-[152px] w-full"
        height="h-[51px]"
      />
    </nav>
  );
}
