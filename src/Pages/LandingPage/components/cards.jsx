import Todo from '../../../Assets/Images/todo.png';
const cards = () => {
  return (
    <div className="card card-side bg-base-100 shadow-xl w-40">
      <figure>
        <img src={Todo} alt="image of todo list" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Todo</h2>
      </div>
    </div>
  );
};

export default cards;
