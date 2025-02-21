import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Quiz from './components/Quiz';

const QuizPage = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <section className="h-full common-padding bg-zinc relative overflow-hidden">
        <div className="screen-max-width flex flex-col justify-center items-center">
          <Quiz />
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default QuizPage;
