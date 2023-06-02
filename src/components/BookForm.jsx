import { useParams } from "react-router-dom";

const BookForm = () => {
  const {name} = useParams();

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Movie Name</span>
                </label>
                <input
                  type="text"
                  defaultValue={name}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Language</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Book</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookForm;
