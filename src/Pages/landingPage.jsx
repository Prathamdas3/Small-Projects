import SideDisplay from './components/sideDisplay';
const landingPage = () => {
  return (
    <>
      <div className="container mx-auto flex justify-between my-5">
        <h1 className="font-bold text-white text-4xl">All Projects</h1>
        <SideDisplay />
      </div>
    </>
  );
};

export default landingPage;
