export function EmptyState({ message }: { message: string }) {
  return (
    <div className="flex min-h-[40vh] items-center justify-center text-center">
      <p className="text-foreground/60">{message}</p>
    </div>
  );
}
