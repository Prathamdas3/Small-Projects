import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { apiContext } from '../../context/apiContext';
import SideDisplay from './components/sideDisplay';
import Card from './components/cards';
const landingPage = () => {
  const cardNames = useContext(apiContext);
  console.log(cardNames);
  return (
    <>
      <div className="container mx-auto flex justify-between my-5">
        <h1 className="font-bold text-white text-4xl">All Projects</h1>
        <SideDisplay />
      </div>
      <div className="container mx-20">
        <div className="grid lg:grid-cols-6 gap-10">
          {cardNames &&
            cardNames.map((cards) => (
              <Link to={cards.title} key={cards.id}>
                <Card title={cards.title} key={cards.id} />
              </Link>
            ))}
        </div>
      </div>
    </>
  );
};

export default landingPage;
