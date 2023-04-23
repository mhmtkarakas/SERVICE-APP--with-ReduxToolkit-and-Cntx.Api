import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Badge, FormLabel } from "react-bootstrap";
import { useContext } from "react";
import { AuthTokenContext } from "./../../context/auth-token-context-provider/index";
import { removeUserData } from "../../redux/userSlice";
import useSwal from "../../hooks/useSwal";

export default function Header() {
  const userState = useSelector((state) => state.userState);
  const authTokenContextValue = useContext(AuthTokenContext);
  const dispatch = useDispatch();
  const swal = useSwal();

  const logoutUser = () => {
    localStorage.removeItem("token");
    authTokenContextValue.setToken(null);
    dispatch(removeUserData());
  };
  // cikis yapmak istedigimizde iki yontemle cikis yapabiliriz. Birinci yontem token ve user state'ini
  // silmek yani hizli cikis. Ikinci yontem ise soru sorarak cikmak yani kullaniciya 'cikmak istediginize emin misisniz'
  // seklinde soru sorariz  ve "evet" butonuna tiklanirsa cikis yapariz.
  const onLogoutBtnClick = () => {
    //logoutUser();

    // ikinci yontem: soru sorduktan sonra cikis yapalim
    // bu yontem de kendi icerisinde ikiye ayrili. Birincisi javascriptin 'confirm' yontemi
    // Digeri de "sweatalert" kutuphanesi kullanmak
    //2-1 confirm( yontemi)
    // const result = confirm("cikis yapmak istediginize emin misisniz?");
    // console.log(">>confirm result", result);
    // if (result === true) {
    //  logoutUser();
    // }

    // 2.2: swaet alert yontemi
    // sweatalert islemi asenkron bir islemdir. Bu nedenle then ve catch kullanilir/
    // title a jsx elemanlari yazilabilir
    swal
      .fire({
        title: (
          <p>
            <h2>Emin misiniz?</h2>
            <div className="alert alert-danger" role="alert">
              Cikis Yapmak Istiyor musunuz???
            </div>
          </p>
        ),
        showCancelButton: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          logoutUser();
        } else {
          // Burada bir sey yapmaya gerek yok
        }
      });
  };

  return (
    <header>
      <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
        <Link
          to="/"
          className="d-flex align-items-center text-dark text-decoration-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="32"
            className="me-2"
            viewBox="0 0 118 94"
            role="img"
          >
            <title>Bootstrap</title>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z"
              fill="currentColor"
            ></path>
          </svg>
          <span className="fs-4">Find Service</span>
        </Link>

        <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
          <Link
            to="category/test"
            className="me-3 py-2 btn btn-primary text-decoration-none"
          >
            <i className="fa-solid fa-circle-info me-2"></i>
            Kategory Detay
          </Link>
          <Link
            to="blogs"
            className="me-3 py-2 btn btn-primary text-decoration-none"
          >
            <i className="fa-solid fa-blog me-2"></i>
            Blogs
          </Link>

          {userState.userData === null ? (
            <>
              <Link
                
                to="auth/login"
                className="me-3 py-2 btn btn-primary  text-decoration-none"
              >
                <i class="fa-solid fa-right-to-bracket me-2"></i>
                Giris Yap
              </Link>
              <Link
                to="auth/register"
                className="py-2 btn btn-primary text-decoration-none"
              >
                <i class="fa-solid fa-registered me-2"></i>
                Kayit Ol
              </Link>
            </>
          ) : (
            <>
              <Badge className="p-3 bg-danger me-3">
                <i className="fa-solid fa-user me-2"></i>

                {userState.userData.fullname}
              </Badge>
              <Button onClick={onLogoutBtnClick} variant="success ">
                <i className="fa-solid fa-right-from-bracket me-2"></i>
                Cikis Yap
              </Button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
