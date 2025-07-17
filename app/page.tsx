import Platforms from "@/Components/Platforms";
import Skills from "@/Components/Skills";
import Welcome from "@/Components/Welcome";

export default function Home() {
  return (
    <div className="App" id='App'>
      <Welcome />
      <Skills />
      <Platforms />
      <div className='card'>
        <h2 className="text-6xl font-bold">Thanks for checking me out!</h2>
      </div>
    </div>
  );
}
