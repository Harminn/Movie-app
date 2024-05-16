import "./App.css";

function App() {
  return (
    <>
      <h1 className="text-4xl flex justify-center font-bold text-red-600 p-5 opacity-60 my-8 underline uppercase">
        Hello world!
      </h1>
      <div class="flex flex-column justify-between">
        <div class="basis-1/4 sm:basis-1/3">01</div>
        <div class="basis-1/4 md:basis-1/3">02</div>
        <div class="basis-1/4 xl:basis-1/3">03</div>
      </div>
    </>
  );
}

export default App;
