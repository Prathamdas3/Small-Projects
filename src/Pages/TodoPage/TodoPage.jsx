import Todos from './component/TodoSection';

const TodoPage = () => {
  return (
    <div className="overflow-x-auto mt-10 mx-auto container">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <button
                  className="btn btn-success"
                  onClick={() =>
                    document.getElementById('my_modal_1').showModal()
                  }
                >
                  Add
                </button>
              </label>
            </th>

            <th>Title</th>
            <th>Description</th>
            <th>Tags</th>
            <th></th>
          </tr>
        </thead>
        <Todos />
      </table>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-2">Title</h3>
          <input
            type="text"
            placeholder="Title here"
            className="input input-bordered w-full max-w-[28rem]"
          />
          <p className="py-3">Title is required</p>
          <h3 className="font-bold text-lg mb-2">Description</h3>
          <textarea
            className="textarea textarea-bordered min-w-[28rem]"
            placeholder="Description here"
          ></textarea>
          <p className="py-3">Description is required</p>
          <h3 className="font-bold text-lg mb-2">Tags</h3>
          <input
            type="text"
            placeholder="Title here"
            className="input input-bordered w-full max-w-[28rem]"
          />
          {/* button section */}
          <div className="modal-action ">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn mr-2">Close</button>
              <button className="btn btn-success">Save</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default TodoPage;
