import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface RedirectComponentProps {
  to: string;
}

export default function RedirectComponent({props} : {props: RedirectComponentProps}) {
    const navigate = useNavigate();
  
    useEffect(() => {
      navigate(props.to);
    }, [navigate, props.to]);
  
    return null;
}