export default function Home() {
const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
        <h1 className="text-xl color-black">ProgresBar</h1>
        <progress id="file" max="100" value="70">70%</progress>
            <div className="flex">
                <label>Input Percentage:</label>
                <input type="number" className="bg-border-black" />
            </div>
    </div>
  );
}