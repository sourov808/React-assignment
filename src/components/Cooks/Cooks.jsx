
import PropTypes from 'prop-types';
import Cook from '../Cook/Cook';

const Cooks = ({cooks,handlePrepare,totaltime}) => {
    return (
        <div>
          <h1 className='text-center font-bold'>Want to cook: {cooks.length}</h1>
          {
            cooks.map((cook,idx) => <Cook 
                key={idx}
                totaltime={totaltime}
                handlePrepare={handlePrepare}
                cook={cook}></Cook>)
          }
        </div>
    );
};

Cooks.propTypes = {
    cooks: PropTypes.array,
    handlePrepare: PropTypes.func,
    totaltime: PropTypes.func
};

export default Cooks;