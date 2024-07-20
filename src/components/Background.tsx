export default function Background() {
  return (
    <div className="background">
      <img src={`${import.meta.env.VITE_BG_URI}`} alt="Background pattern" />
    </div>
  );
}
