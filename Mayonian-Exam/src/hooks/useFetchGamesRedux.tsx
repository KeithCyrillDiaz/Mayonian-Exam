import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store"; // Adjust the import according to your store file location
import { setGames, setStatus} from "../redux/gameSlice"; // Adjust based on your slice
import { MockGameList } from "../API/fetchData"; // Adjust based on where your API function is defined

export const useFetchGamesRedux = () => {
    const dispatch = useDispatch();
    const games = useSelector((state: RootState) => state.game.filteredGames);
    const status = useSelector((state: RootState) => state.game.status);

    const fetchData = async () => {
        try {
            dispatch(setStatus("loading"));
            const result = await MockGameList(true);
            if (result.data) dispatch(setGames(result.data));
        } catch (error) {
            console.error("Failed to fetch games:", error);
        } finally {
            dispatch(setStatus("idle"));
        }
    };

    useEffect(() => {
        fetchData();
    }, []); // Include dispatch in the dependency array

    return { games, status, dispatch }; // Return the relevant data
};
