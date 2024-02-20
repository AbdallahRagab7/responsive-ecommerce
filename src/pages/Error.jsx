import Navbar from "../Components/UI/Navbar";
function ErrorPage() {
  return (
    <>
    <Navbar></Navbar>
      <main className="text-center">
        <h1>An error occurred!</h1>
        <p>404 Could not find this page!</p>
      </main>
    </>
  );
}

export default ErrorPage;
