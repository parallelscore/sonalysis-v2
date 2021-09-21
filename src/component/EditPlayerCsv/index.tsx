import React, { useState, useRef } from 'react';
import './index.scss';
import { useDispatch, useSelector } from 'react-redux';
import { postCall, getCall } from '../../api/request';
import endPoint from '../../api/endPoints';
import Modal from '../layouts/Modal';
import FolderIcon from '../../assets/icons/folder.svg';
import { FileDrop } from 'react-file-drop';
import EmptyFile from '../../assets/icons/empty-file.svg';
import { createUploadRequest } from '../../store/upload/actions';
import axios from 'axios';

export interface CardProps {
  number?: number;
  desc?: string;
  image?: string;
  charts?: any;
}

const EditModal = ({ setShowModal, addPlayer, clubDetail, player }: any) => {
  const [singlePlayer, setSinglePlayer] = useState(player);

  const [isOpen, setIsOpen] = useState(false);
  const [videoFile, setVideoFile] = useState<any>('');
  const dispatch = useDispatch();
  const { upload }: any = useSelector((state) => state);
  const [files, setFiles]: any = useState({
    photo: '',
  });
  const [filePhoto, setFilePhoto] = useState('');

  const handleOnchange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log({ name });
    if (name == 'photo') {
      name == 'photo' && setFilePhoto(URL.createObjectURL(e.target.files[0]));
      return setSinglePlayer({ ...singlePlayer, [name]: e.target.files[0] });
    }
    return setSinglePlayer({ ...singlePlayer, [name]: value });
  };

  const addData = (data) => {
    setSinglePlayer([singlePlayer, data]);
    setShowModal(false);
    alert(Object.values(data) + 'Added');
  };
  //This is the bupdated player
  console.log({ singlePlayer });

  return (
    <Modal>
      <div className="container">
        <div className="edit-player col-lg-6 mx-auto p-5">
          <>
            <h4 className="text-center">Player details</h4>
            <form className=" col-lg-10 mt-5 mx-auto">
              <div className="form-group col-lg-4 mx-auto">
                <label htmlFor="clubLogo" className="logo">
                  {filePhoto && <img src={filePhoto} alt="logo" />}
                  {!filePhoto && 'Upload Image'}
                </label>
                <input
                  type="file"
                  name="photo"
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
            <button onClick={() => addData(singlePlayer)} className="">
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
