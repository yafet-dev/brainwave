import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from "./components/Button";
function App() {
  return (
    <>
      <div className="text-5xl text-center ">working</div>
      <ButtonGradient />
      <div className="pt-[4.75rem] overflow-hidden lg:pt-[5.25rem]">
        <Button className="mt-10" href="#login">
          Login
        </Button>
      </div>
    </>
  );
}

export default App;
