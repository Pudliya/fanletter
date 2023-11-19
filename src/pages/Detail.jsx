import { useNavigate } from 'react-router-dom';

function Detail() {

    const navigate = useNavigate();
  return (
    <div>Detail<br/>
    <button onClick={() => {
        navigate("/");
    }}>홈페이지이동</button>
    </div>
  )
}

export default Detail;