import Platforms from "@/components/Platforms";
import Skills from "@/components/Skills";
import Welcome from "@/components/Welcome";

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
