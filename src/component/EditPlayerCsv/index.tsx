import { useState} from 'react';
import './index.scss';
import Modal from '../layouts/Modal';


export interface CardProps {
  number?: number;
  desc?: string;
  image?: string;
  charts?: any;
}

const EditModal = ({ setShowModal, editPlayer, clubDetail, index, player }: any) => {
  const [singlePlayer, setSinglePlayer] = useState(player);

  const [filePhoto, setFilePhoto] = useState('');

  const handleOnchange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === 'photo') {
      name === 'photo' && setFilePhoto(URL.createObjectURL(e.target.files[0]));
      return setSinglePlayer({ ...singlePlayer, [name]: e.target.files[0] });
    }
    return setSinglePlayer({ ...singlePlayer, [name]: value });
  };

  const editPlayerFunc = (index, singlePlayer) => {
    editPlayer(index, singlePlayer)
    setShowModal(false);
  };

  return (
    <Modal>
      <div className="container">
        <div className="edit-player col-lg-6 mx-auto p-5">
          <>
            <h4 className="text-center">Player details</h4>
            <form className=" col-lg-10 mt-5 mx-auto">
              <div className="form-group col-lg-4 mx-auto">
                <label htmlFor="clubLogo" className="logo">
                  {(filePhoto || singlePlayer.photo) && <img src={filePhoto || URL.createObjectURL(singlePlayer.photo)} alt="logo" />}
                  {(!filePhoto && !singlePlayer.photo) && 'Upload Image'}
                </label>
                <input
                  type="file"
                  name="photo"
                  accept="image/*"
                  id="clubLogo"
                  className="logo-file"
                  onChange={handleOnchange}
                />
              </div>
              <div className="col mt-3">
                <div className="form-group  d-flex justify-content-between gap-2">
                  <div className="col-md-7">
                    <label htmlFor="clubName">Player name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      value={singlePlayer?.name}
                      id="clubName"
                      placeholder="Enter player name"
                      onChange={handleOnchange}
                    />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="Abbrivation">Jersey number</label>
                    <input
                      type="text"
                      name="jersey_no"
                      value={singlePlayer?.jersey_no}
                      className="form-control"
                      id="Abbrivation"
                      placeholder="eg. 9"
                      onChange={handleOnchange}
                    />
                  </div>
                </div>
                <div className="form-group  mt-4 ">
                  <label htmlFor="Location">Position</label>
                  <input
                    type="text"
                    name="position"
                    className="form-control"
                    value={singlePlayer?.position}
                    id="Location"
                    placeholder="Enter position"
                    onChange={handleOnchange}
                  />
                </div>
              </div>
            </form>
          </>
          <div className="d-flex min-cancel justify-content-between mt-5 col-lg-9 mx-auto">
            <button onClick={() => editPlayerFunc(index, singlePlayer)} className="">
              Done
            </button>
            <button className="cancel" onClick={() => setShowModal(false)}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default EditModal;
