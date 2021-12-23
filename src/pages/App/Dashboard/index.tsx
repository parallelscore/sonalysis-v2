import './index.scss';
import Video from '../../../assets/images/dashboard-video.svg';
import ComingSoonPage from 'component/ComingSoonPage';
const data = {};

const Dashbaord = () => {
    return (
        <ComingSoonPage showBtn={false}/>
        // <div className='dashboard'>
        //     <div className='d-flex justify-content-between align-items-center mt-5'>
        //         <div className='text-center '>Analytics Overview </div>
        //         <select name='date' id='date'>
        //             <option>02 Feburary 2021</option>
        //         </select>
        //     </div>
        //     <div className='first-section mt-5'>
        //         <div className='first-section-card p-4'>
        //             <div className='first-section-card_title'>
        //                 Videos Analyzed
        //             </div>
        //             <div className='first-section-card-video-section mt-2'>
        //                 <img src={Video} alt='video' className='mr-5' />{' '}
        //                 <span>10k</span>
        //             </div>
        //             <div className='d-flex mt-2 align-items-center justify-content-between'>
        //                 <div className='total d-flex align-items-center'>
        //                     <div className='blue-dot mr-5'></div>
        //                     <div className='ml-5 pl-5'>Total 100gb</div>
        //                 </div>
        //                 <div className='total d-flex align-items-center '>
        //                     <div className='red-dot mr-5 pr-5'></div>
        //                     <div className='ml-5'>Used 18gb</div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
};

export default Dashbaord;
