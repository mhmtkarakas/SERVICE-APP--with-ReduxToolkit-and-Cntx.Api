import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";


export default function useSwal(){
    //const MwSwal = withReactContent(Swal)
    // return MySwal
    return withReactContent(Swal);
}