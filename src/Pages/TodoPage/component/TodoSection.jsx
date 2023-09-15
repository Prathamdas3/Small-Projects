import { useContext } from 'react';
import TodoContext from '../../../context/todoApi/todoApiContext';
const InputSection = () => {
  const todoData = useContext(TodoContext).allData;
  return (
    <>
      <tbody>
        {todoData &&
          todoData.map((todo) => (
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div>
                    <div className="font-bold">{todo.title}</div>
                  </div>
                </div>
              </td>
              <td>{todo.description}</td>
              <td>{todo.tags}</td>
              <th>
                <button
                  className="btn btn-success btn-xs mr-2"
                  onClick={() =>
                    document.getElementById('my_modal_2').showModal()
                  }
                >
                  Details
                </button>
                <button className="btn btn-error btn-xs">Delete</button>
              </th>
              <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                  <h3 className="font-bold text-lg">{todo.title}</h3>
                  <p className="py-4">{todo.description}</p>
                </div>
                <form method="dialog" className="modal-backdrop">
                  <button>close</button>
                </form>
              </dialog>
            </tr>
          ))}
      </tbody>
    </>
  );
};

export default InputSection;
