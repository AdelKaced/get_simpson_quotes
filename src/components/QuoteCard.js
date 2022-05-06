import './card.css';

const QuoteCard = ({ users }) => {
  console.log(users);
  return (
    <div>
      <h1>{users.character}</h1>
      <div className="card">
        <img src={users.image} alt="simpson" />
        <p className='quotes'>{users.quote}</p>
      </div>
    </div>
  );
};

export default QuoteCard;
