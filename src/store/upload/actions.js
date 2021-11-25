import * as actions from './actionsTypes';
import endPoints from '../../api/endPoints';
import { getCall, postCall, deleteCall } from '../../api/request';
import axios from 'axios';

const postUploadRequest = () => {
    return {
        type: actions.POST_UPLOAD_REQUEST,
    };
};
const postUploadequest = (data) => {
    return {
        type: actions.POST_UPLOAD_SUCCESS,
        data: data,
    };
};
const postUploadProgress = (data) => {
    return {
        type: actions.POST_UPLOAD_PROGRESS_SUCCESS,
        data: data,
    };
};
const postUploadError = (message) => {
    return {
        type: actions.POST_UPLOAD_ERROR,
        data: message,
    };
};

export const createUploadRequest = (
    file,
    handleChangeTab,
    setOpenDragNdropModal,
    videoUploadType,
    handleFetchUploadData
) => {
    return async (dispatch) => {
        dispatch(postUploadRequest());

        const config = {
            onUploadProgress: function (progressEvent) {
                var percentCompleted = Math.round(
                    (progressEvent.loaded * 100) / progressEvent.total
                );
                dispatch(
                    postUploadProgress({
                        percentCompleted,
                        total: progressEvent.total,
                        progressEvent: progressEvent.loaded,
                    })
                );
            },
        };

        const responseFetch = await axios.post(
            endPoints.cloudinaryPost,
            file,
            config
        );

        if (responseFetch.status === 200) {
            const { secure_url, original_filename } = responseFetch.data;
            const postDatadata = {
                filename: secure_url,
                originalFilename: original_filename,
            };

            postCall(endPoints.postUpload, postDatadata)
                .then((response) => {
                    if (response.status === 200) {
                        dispatch(postUploadequest(response.data.data));
                        handleFetchUploadData();
                        handleChangeTab(1, 'all');
                        setOpenDragNdropModal(false);
                    }
                    if (response.status === 404 || response.status === 403) {
                        dispatch(
                            postUploadError({
                                type: 'danger',
                                message: 'Oops! Request is invalid',
                            })
                        );
                    }
                })
                .catch(() => {
                    dispatch(
                        postUploadError({
                            type: 'confused',
                            message:
                                'Oops! something went wrong please try again.',
                        })
                    );
                });
        }
    };
};

const getUploadRequest = () => {
    return {
        type: actions.GET_UPLOAD_REQUEST,
    };
};
const getUploadequest = (data) => {
    return {
        type: actions.GET_UPLOAD_SUCCESS,
        data: data,
    };
};
const getUploadError = (message) => {
    return {
        type: actions.GET_UPLOAD_ERROR,
        data: message,
    };
};

export const fetchUploadRequest = (userId, page, analyzed) => {
    // alert("here")
    return (dispatch) => {
        dispatch(getUploadRequest());
        getCall(endPoints.getUploadsByUserId(userId, page, analyzed))
            .then((response) => {
                if (response.status === 200) {
                    dispatch(getUploadequest(response.data.data));
                }
                if (response.status === 404 || response.status === 403) {
                    dispatch(
                        getUploadError({
                            type: 'danger',
                            message: 'Oops! Request is invalid',
                        })
                    );
                }
            })
            .catch(() => {
                dispatch(
                    getUploadError({
                        type: 'confused',
                        message: 'Oops! something went wrong please try again.',
                    })
                );
            });
    };
};

const deleteUploadRequest = () => {
    return {
        type: actions.DELETE_UPLOAD_REQUEST,
    };
};
const deleteUploadequest = (data) => {
    return {
        type: actions.DELETE_UPLOAD_SUCCESS,
        data: data,
    };
};
const deleteUploadError = (message) => {
    return {
        type: actions.DELETE_UPLOAD_ERROR,
        data: message,
    };
};

export const deleteRequest = (videoId) => {
    // alert("here")
    return async (dispatch) => {
        dispatch(deleteUploadRequest());
        await deleteCall(endPoints.deleteVideo(videoId))
            .then((response) => {
                if (response.status === 200) {
                    dispatch(deleteUploadequest(response.data.data));
                }
                if (response.status === 404 || response.status === 403) {
                    dispatch(
                        deleteUploadError({
                            type: 'danger',
                            message: 'Oops! Request is invalid',
                        })
                    );
                }
            })
            .catch(() => {
                dispatch(
                    deleteUploadError({
                        type: 'confused',
                        message: 'Oops! something went wrong please try again.',
                    })
                );
            });
    };
};

export const updateUpload = (update) => ({
    type: actions.UPDATE_UPLOAD,
    data: update,
});
