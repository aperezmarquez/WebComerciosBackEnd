import './Searcher.css'
import Image from 'next/image';
import search_image from '../imgs/search-icon.png';

const Searcher = ({ setCommerceName }) => {
    const handleChange = (event) => {
        setCommerceName(event.target.value);
    }

    return (
        <div className='searcher pr-9 absolute'>
            <Image src={search_image} className='search-icon w-5 absolute'/>
            <input type='text' className='searcher-text ml-3' placeholder='Search a commerce...' onChange={handleChange}></input>
        </div>
    );
}

export default Searcher;