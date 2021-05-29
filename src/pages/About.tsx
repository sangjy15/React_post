/*
화면명 : About.tsx
설명 : 
*/
import { useLocation, useHistory, useParams, useRouteMatch } from 'react-router-dom';
import { AboutPrams } from '../types/About';
type Props = {

};

export const About = (props: Props) => {
    
    // hook
    const location = useLocation()
    const history = useHistory()
    const params = useParams<AboutPrams>()
    const match = useRouteMatch()
    
    console.log({location, history, params, match})
    return (
        <div>
            {params.id}
            <button onClick={() => history.goBack()}>
                뒤로가기
            </button>
        </div>
    );
};