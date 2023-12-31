import {createContext, useState, useEffect, ReactNode} from "react";
import axios from "axios";

export const UserContext = createContext({});
type UserContextProviderProps = {
	children: ReactNode;
};

const UserContextProvider = ({children}: UserContextProviderProps) => {
	const [currentUser, setCurrentUser] = useState(
		JSON.parse(`${localStorage.getItem("user")}`) || null
	);

	useEffect(() => {
		localStorage.setItem("user", JSON.stringify(currentUser));
	}, [currentUser]);

	const login = async (values) => {
		const res = await axios.post(
			"http://localhost:8080/api/auths/login",
			values,
			{
				withCredentials: true,
			}
		);

		setCurrentUser(res.data);
	};

	return (
		<UserContext.Provider value={{login, currentUser}}>
			{children}
		</UserContext.Provider>
	);
};

export default UserContextProvider;
