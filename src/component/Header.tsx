export type HeaderProps = {
  addTodo: (title: string) => void;
};

export default function Header({ addTodo }: HeaderProps) {
  return (
    <>
      <header className="header">
        <h1>todos</h1>
        <input
          type="text"
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Enter" || e.keyCode === 13) {
              addTodo((e.target as HTMLInputElement).value);
            }
          }}
        />
      </header>
    </>
  );
}
