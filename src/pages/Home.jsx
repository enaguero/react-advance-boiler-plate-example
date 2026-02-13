import rigoImageUrl from "../assets/img/rigo-baby.jpg";

import useGlobalReducer from "../hooks/useGlobalReducer"

export const Home = () => {

	const { store , dispatch } = useGlobalReducer()

	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!!</h1>
			<input 
				value={ store.message }
				onChange={(e)=>{

					dispatch(
						{
							type: "changeMessage",
							payload: {
								newMessage: e.target.value
							}
						}
					)

				}}
			></input>
			<h1> El mensaje es : { store.message } </h1>
			<p>
				<img src={rigoImageUrl} />
			</p>
		</div>
	);
}; 