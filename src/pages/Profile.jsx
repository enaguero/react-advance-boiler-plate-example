import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Profile = () => {

  const {store, dispatch} =useGlobalReducer()

    return (
        <div className="text-center mt-5">
            <h1>Hello Rigo!!</h1>
            <h1>Este es el perfil del usuario Erwin</h1>
            <p>
                <img src={rigoImageUrl} />
            </p>
        </div>
    );
}; 