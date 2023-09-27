import Clock from './Clock';
import BackgroundImage from '../../../Assets/Images/background.jpg';

const sideDisplay = () => {
  return (
    <div
      className="card w-40 bg-base-100 shadow-xl image-full"
      onClick={() => document.getElementById('my_modal_2').showModal()}
    >
      <figure>
        <img src={BackgroundImage} alt="image" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-white ">
          <Clock />
        </h2>
        {/* <p></p> */}
        {/* <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div> */}
      </div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-white">
            <Clock />
          </h3>
          <p className="py-4"></p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default sideDisplay;
