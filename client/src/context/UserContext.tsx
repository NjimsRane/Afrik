import {createContext, useState, useEffect, ReactNode} from "react";

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

	const login = () => {
		console.log("soule");
	};

	return (
		<UserContext.Provider value={{login, currentUser}}>
			{children}
		</UserContext.Provider>
	);
};

export default UserContextProvider;
